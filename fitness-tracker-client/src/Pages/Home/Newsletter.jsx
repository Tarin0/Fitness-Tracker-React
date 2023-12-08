import '../Home/Newsletter.css'
import toast from 'react-hot-toast';
const Newsletter = () => {

    const handleSubscribers =(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const data = { name,email}
        fetch('https://fitness-tracker-server-tan.vercel.app/subscribers', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                toast.success('You are subscribed');
                                form.reset();
                            }
                        })

    }
    return (
        <div className='mb-24'>
            <section className="newsletter">
                <div className="newsText">
                    <h1 className='md:text-5xl text-2xl font-semibold text-green-300'>Join our newsletter!</h1>
                    <p className='text-xl font-medium '>Subscribe to our weekly newsletter and stay tunned.
                    </p>
                    <img src="https://images2.imgbox.com/22/73/1f6acDGg_o.png"/>
                </div>
                <div className="newsSign">
                    <form onSubmit={handleSubscribers}>

                        <div className="input-field">
                            <label >Name</label> <br/>
                                <input type="text" name="name"/>
                                </div>

                                <div className="input-field">
                                    <label >E-mail</label><br/>
                                        <input type="email" name="email"/>
                                        </div>

                                        <button type='submit' className="btn text-xl text-white bg-gradient-to-r from-[#71fc65] to-green-600 hover:from-green-400 hover:to-[#5ddd52]">Subscribe</button>
                               
                                    </form>
                                </div>
                            </section>
                        </div>
                        );
};

                        export default Newsletter;