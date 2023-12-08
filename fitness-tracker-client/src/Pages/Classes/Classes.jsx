import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
const Classes = () => {
    const classes = useLoaderData();
    console.log(classes);
    return (
        <div>
            <Helmet>
                <title>FitNezz | Classes</title>
            </Helmet>
            <div>
                {/* <Overview></Overview> */}
            </div>
<h1 className='text-3xl text-green-300 font-semibold mt-5 pl-60'>Classes</h1>
            <div className='mt-7 grid grid-cols-1 gap-4 w-10/12 mx-auto'>
                {
                    classes.map(trainer => (
                        <div key={trainer._id} className="w-full flex">
                            <figure><img className='w-[500px] h-[200px]' src={trainer.imageURL} alt="image" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{trainer.title}</h2>
                                <p>{trainer.description}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/classes/${trainer._id}`}>
                                    <button className="btn bg-[#78c234]">Join Class</button>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    ))
                }



            </div>


        </div>
    );
};

export default Classes;