import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pricing from "./Pricing";


const TrainerDetails = () => {
    const trainerInfo = useLoaderData();
    const [classInfo, setClassInfo] = useState(null);

    useEffect(() => {
        fetch('https://fitness-tracker-server-tan.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const updatedClass = data.filter(t =>
                    t.email === trainerInfo?.email);
                setClassInfo(updatedClass);
            });
    }, [trainerInfo]);

console.log(classInfo?.length);
console.log(trainerInfo?.email);
    return (
        <div>
            <div className="my-10 w-full bg-white  rounded-lg shadow ">
                <img className="pt-6 mx-auto" src={trainerInfo.imageURL} alt="" />
                <div className="p-5">
                    <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Trainer Name: {trainerInfo.name}</h5>
                    <p className="mb-3 text-center font-normal text-gray-700">{trainerInfo.description}</p>
                    <div className="border border-gray-500 w-6/12 mx-auto my-5">

                        <p className="text-center text-xl text-gray-600">{trainerInfo.experience} years of experience</p>
                        <p className="text-center text-xl text-gray-600">Available Slot: {trainerInfo.daySlot}</p>
                        {trainerInfo?.strengthTraining && <p className="text-center text-xl text-gray-600"> SKills: Strength Training</p>}
                        {trainerInfo?.cardioWorkouts && <p className="text-center text-xl text-gray-600">
                            Skills: Cardio Workouts
                        </p>}
                        {
                            trainerInfo?.flexibilityTraining && <p className="text-center text-xl text-gray-600"> Skills: Flexibility Training </p>
                        }
                    </div>
                   
                </div>
                <div>
                    
                    <Pricing></Pricing>
                </div>
                <div>
                    <h1 className='text-3xl text-green-300 font-semibold mt-5 mx-auto text-center'>Available Classes</h1>
                    <div className='mt-7 grid grid-cols-1 gap-4 w-10/12 mx-auto'>
                        {
                            classInfo?.length? (
                                classInfo.map((trainer) => (
                                    <div key={trainer._id} className="w-full flex">
                                        <figure>
                                            <img
                                                className="w-[500px] h-[200px]"
                                                src={trainer.imageURL}
                                                alt="image"
                                            />
                                        </figure>
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
                            ) : (
                                <p className="text-center text-xl text-gray-600">
                                    No available classes right now.
                                </p>
                            )

                        }



                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerDetails;