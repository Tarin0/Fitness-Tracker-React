const express = require('express')
const app = express()
require('dotenv').config()
const stripe = require('stripe')(process.env.PAYMENT_SECRET_KEY)
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
const jwt = require('jsonwebtoken')
const morgan = require('morgan')
const port = process.env.PORT || 5000

// middleware
const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5174', 'https://sweet-frangollo-88cffc.netlify.app'],
  credentials: true,
  optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))


const verifyToken = async (req, res, next) => {
  const token = req.cookies?.token
  console.log(token)
  if (!token) {
    return res.status(401).send({ message: 'unauthorized access' })
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(err)
      return res.status(401).send({ message: 'unauthorized access' })
    }
    req.user = decoded
    next()
  })
}


// const uri = "mongodb+srv://<username>:<password>@cluster0.pjjm5f6.mongodb.net/?retryWrites=true&w=majority";
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pjjm5f6.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const userCollection = client.db("fitnessDb").collection("users");
    const appliedTrainerCollection = client.db("fitnessDb").collection("appliedTrainer");
    const subscribersCollection = client.db("fitnessDb").collection("subscribers");
    const trainersCollection = client.db("fitnessDb").collection("trainers");
    const paymentsCollection = client.db("fitnessDb").collection("payments");
    const trainerBookingCollection = client.db("fitnessDb").collection("trainerBooking");
    const classesCollection = client.db("fitnessDb").collection("classes");
    const classBookingCollection = client.db("fitnessDb").collection("classBooking");
    const forumCollection = client.db("fitnessDb").collection("forum");
    const likeCollection = client.db("fitnessDb").collection("like");
    const dislikeCollection = client.db("fitnessDb").collection("dislike");
    const packageCollection = client.db("fitnessDb").collection("package");

    // auth related api
    app.post('/jwt', async (req, res) => {
      const user = req.body
      console.log('I need a new jwt', user)
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '365d',
      })
      res
        .cookie('token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })
        .send({ success: true })
    })


    app.post('/create-payment-intent', async (req, res) => {
      const { price } = req.body;
      const amount = parseInt(price * 100);


      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'usd',
        payment_method_types: ['card']
      });


      res.send({
        clientSecret: paymentIntent.client_secret
      })
    })

    app.post('/payments', async (req, res) => {
      const payment = req.body;
      // console.log(user);
      const result = await paymentsCollection.insertOne(payment);
      res.send(result);
    })
    // Logout
    app.get('/logout', async (req, res) => {
      try {
        res
          .clearCookie('token', {
            maxAge: 0,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
          })
          .send({ success: true })
        console.log('Logout successful')
      } catch (err) {
        res.status(500).send(err)
      }
    })

    


    app.put('/user/:email', async (req, res) => {
      const email = req.params.email
      const updatedUser = req.body
      const filter = { email: email }
      const options = { upsert: true }
      const isExist = await userCollection.findOne(filter)

      if (isExist) {
        const trainer = {
          $set: {
            role: updatedUser.role
          }
        }
        const result = await userCollection.updateOne(filter, trainer, options);
        return res.send(result);
      }

      // If isExist is truthy, the response has already been sent,
      // so we don't execute the following code
      const result = await userCollection.updateOne(
        filter,
        {
          $set: { ...updatedUser, timestamp: Date.now() },
        },
        options
      )
      res.send(result)
    })





    app.get('/user/:email', async (req, res) => {
      const email = req.params.email;
      // const query = { _id: new ObjectId(id) }
      const result = await userCollection.findOne({ email });
      res.send(result);
    })


    app.post('/applied-trainer', async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await appliedTrainerCollection.insertOne(user);
      res.send(result);
    })
    app.post('/trainer-slot', async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await trainerBookingCollection.insertOne(user);
      res.send(result);
    })

    app.get('/trainer-slot', async (req, res) => {
      const cursor = trainerBookingCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })


    app.get('/applied-trainer', async (req, res) => {
      const cursor = appliedTrainerCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })
    app.get('/payments', async (req, res) => {
      const cursor = paymentsCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.put('/applied-trainer/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const options = { upsert: true };
      const updatedTrainer = req.body;
      const trainer = {
        $set: {
          status: updatedTrainer.status
        }
      }

      const result = await appliedTrainerCollection.updateOne(filter, trainer, options);
      res.send(result);
    })

    app.put('/trainers/:id', async (req, res) => {
      const id = req.params.id;
      const updatedPayment = req.body.payment;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const update = { $set: { payment: updatedPayment } };
      const result = await trainersCollection.updateOne(filter, update, options);
      res.send(result);
    });
    app.get('/applied-trainer/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await appliedTrainerCollection.findOne(query);
      res.send(result);
    })

    app.delete('/applied-trainer/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await appliedTrainerCollection.deleteOne(query);
      res.send(result);
    })

    app.get('/user', async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })




    app.post('/subscribers', async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await subscribersCollection.insertOne(user);
      res.send(result);
    })

    app.get('/subscribers', async (req, res) => {
      const cursor = subscribersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })
    app.post('/trainers', async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await trainersCollection.insertOne(user);
      res.send(result);
    })

    app.get('/trainers', async (req, res) => {
      const cursor = trainersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })
    app.get('/trainers/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await trainersCollection.findOne(query);
      res.send(result);
    })
    app.post('/classes', async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await classesCollection.insertOne(user);
      res.send(result);
    })

    app.get('/classes', async (req, res) => {
      const cursor = classesCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/classes/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await classesCollection.findOne(query);
      res.send(result);
    })
    app.post('/class-booking', async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await classBookingCollection.insertOne(user);
      res.send(result);
    })

    app.get('/class-booking', async (req, res) => {
      const cursor = classBookingCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })
    app.post('/forum', async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await forumCollection.insertOne(user);
      res.send(result);
    })

    app.get('/forum', async (req, res) => {
      const cursor = forumCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })


    app.post('/like', async (req, res) => {
      const { forumId, userEmail } = req.body;
      const alreadyLiked = await likeCollection.findOne({ forumId, userEmail });
      await dislikeCollection.deleteOne({ forumId, userEmail });
      if (alreadyLiked) {
        return res.status(409).json({ message: "Already liked" }); // Conflict status
      }

      // Proceed to add the like
      const result = await likeCollection.insertOne({ forumId, userEmail });
      res.json(result);
    });


    app.post('/dislike', async (req, res) => {
      const { forumId, userEmail } = req.body;
      const alreadyDisliked = await dislikeCollection.findOne({ forumId, userEmail });
      await likeCollection.deleteOne({ forumId, userEmail });
      if (alreadyDisliked) {
        return res.status(409).json({ message: "Already Disliked" }); // Conflict status
      }

      const result = await dislikeCollection.insertOne({ forumId, userEmail });
      res.json(result);
    });
    app.get('/like', async (req, res) => {
      const cursor = likeCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/dislike', async (req, res) => {
      const cursor = dislikeCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

   




    const articles = [
      {
        slug: "article-1",
        author: {
          image: "https://i.ibb.co/4wbyh9w/2.jpg",
        }
      },
      {
        slug: "article-2",
        author: {
          image: "https://i.ibb.co/ZzLHxZP/4.jpg",
        }
      },
      {
        slug: "article-3",
        author: {
          image: "https://i.ibb.co/4MMH09V/blog-1.jpg",
        }
      },
      {
        slug: "article-4",
        author: {
          image: "https://i.ibb.co/VYpYtNS/5.jpg",
        }
      },
      {
        slug: "article-5",
        author: {
          image: "https://i.ibb.co/ZzLHxZP/4.jpg",
        }
      },
      {
        slug: "article-6",
        author: {
          image: "https://i.ibb.co/VvhHwbS/blog-2.jpg",
        }
      },
      {
        slug: "article-7",
        author: {
          image: "https://i.ibb.co/KsV498v/blog-3.jpg",
        }
      },
      {
        slug: "article-8",
        author: {
          image: "https://i.ibb.co/DDgfcfW/c1.jpg",
        }
      },
      {
        slug: "article-9",
        author: {
          image: "https://i.ibb.co/HKg2G9h/c2.jpg",
        }
      },
      {
        slug: "article-10",
        author: {
          image: "https://i.ibb.co/dpyznwT/c3.jpg",
        }
      },
      {
        slug: "article-11",
        author: {
          image: "https://i.ibb.co/09XJ9gQ/cardio.jpg",
        }
      },
      {
        slug: "article-12",
        author: {
          image: "https://i.ibb.co/KxLKtJx/class-1.jpg",
        }
      },
      {
        slug: "article-13",
        author: {
          image: "https://i.ibb.co/nwz6gqk/class-2.jpg",
        }
      },
      {
        slug: "article-14",
        author: {
          image: "https://i.ibb.co/SKRsbx9/class-3.jpg",
        }
      },
      {
        slug: "article-15",
        author: {
          image: "https://i.ibb.co/ysTfKbg/class-4.jpg",
        }
      },
      {
        slug: "article-16",
        author: {
          image: "https://i.ibb.co/sCF8f8W/hero-banner.png",
        }
      },
      {
        slug: "article-17",
        author: {
          image: "https://i.ibb.co/rsCPjH2/people-doing-indoor-cycling.jpg",
        }
      },
      {
        slug: "article-18",
        author: {
          image: "https://i.ibb.co/9wtBv0D/rode-gym.jpg",
        }
      },
      {
        slug: "article-19",
        author: {
          image: "https://i.ibb.co/svtPpCX/yoga.jpg",
        }
      },
      {
        slug: "article-20",
        author: {
          image: "https://i.ibb.co/vYB9x3J/young-happy-athletic-man-having-weight-training-health-club.jpg",
        }
      },
      {
        slug: "article-21",
        author: {
          image: "https://i.ibb.co/BZMGgKr/trainer7.jpg",
        }
      },
    ];



    // Define a route to get the articles
    app.get('/api/articles', (req, res) => {
      res.json({
        articles,
        articlesCount: articles.length
      });
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send("server is running...");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`)
})
