import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import BeTrainer from "./BeTrainer";
import { Helmet } from "react-helmet-async";

const Trainer = () => {

    const trainers = useLoaderData();
    return (
        <>
        <Helmet>
                <title>FitNezz | Trainer</title>
            </Helmet>
        <div className="my-20">
            {/* <!-- component --> */}
            <div className="w-full bg-[#5edb53]">
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                    <div className="text-center pb-12">
                        <h2 className="text-base font-bold text-indigo-600">
                            Elevate Your Fitness Journey with Top-Notch Trainers
                        </h2>
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                            Meet Our Dedicated Team of Expert Trainers
                        </h1>

                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {trainers.map((trainer, index) => (<div key={index} className="w-full bg-[#50b947] rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                            <div className="w-full md:w-2/5 h-80">
                                <img className="object-center object-cover w-full h-full" src={trainer.imageURL} alt="photo" />
                            </div>
                            <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                                <p className="text-xl text-white font-bold">{trainer.name}</p>
                                <p className="text-xl  text-gray-600">{trainer.experience}</p>
                                <p className="text-base text-gray-600 font-normal">Slot: {trainer.daySlot}</p>
                                <p className="text-base leading-relaxed text-gray-500 font-normal">{trainer.description}</p>
                                <div className="flex justify-start space-x-4 text-3xl">
                                   <FaInstagram/>
                                   <FaTwitter/>
                                   <FaFacebook/>
                                   <Link className="btn text-md border-none bg-gradient-to-r from-[#71fc65] to-green-600 hover:from-green-400 hover:to-[#5ddd52]" to={`/trainers/${trainer._id}`}>Know More</Link>
                                
                                </div>
                            </div>
                        </div>))}
                        
                        
                    </div>
                </section>
            </div>
        </div>
        <BeTrainer>
            
        </BeTrainer>
        </>
    );
};

export default Trainer;