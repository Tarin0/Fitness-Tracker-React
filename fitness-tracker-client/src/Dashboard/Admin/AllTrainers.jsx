import { Link, useLoaderData, useNavigate } from "react-router-dom";
import '../../Dashboard/Admin/AppliedTrainer.css'
import { useEffect, useState } from "react";
import { TbFileDescription } from "react-icons/tb";
import { FaPaypal } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
const AllTrainers = () => {

    const allTrainers = useLoaderData();
    const [updatedTrainer, setUpdatedTrainer] = useState(allTrainers);
    const [remainingTrainers, setRemainingTrainer] = useState([]);

    const navigate = useNavigate();
   
    const handlePaymentClick = (trainer) => {
        navigate(`/dashboard/payment?trainerId=${trainer._id}`);
        const id = trainer._id;
        fetch('https://fitness-tracker-server-tan.vercel.app/payments')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const remainingTrainer = data.filter(trainer => trainer.trainerIds === id);
                setRemainingTrainer(remainingTrainer);
            })
    };

    return (
        <div>
            <Helmet>
                <title>Dashboard | Trainer</title>
            </Helmet>
            <div className="">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div >
                                <h2>All <b>Trainers</b></h2>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th className='text-xl'>Name</th>
                                <th className='text-xl'>Email</th>
                                <th className='text-xl'>Payment</th>
                                <th className='text-xl'>Details</th>
                                <th className='text-xl'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                updatedTrainer.map(trainer => (
                                    <tr key={trainer._id}>
                                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                            <img
                                                className="w-10 h-10 rounded-full"
                                                src={trainer.imageURL}
                                                alt="Jese image" />

                                            <div className="ps-3">
                                                <div className="text-base font-semibold">{trainer.name}</div>
                                            </div>
                                        </th>
                                        <td>{trainer.email}</td>
                                        <td>{trainer.payment}</td>
                                        <td>
                                            <button className="btn" 
                                            onClick={() => document.getElementById(`my_modal_${trainer._id}`).showModal()}
                                            
                                            ><TbFileDescription /></button>
                                            <dialog id={`my_modal_${trainer._id}`} className="modal modal-bottom sm:modal-middle">
                                                <div className="modal-box">
                                                    <form method="dialog">
                                                        <button className="btn text-black text-xl font-bold btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <h3 className="font-bold text-green-800 text-xl text-center py-5">
                                                        {trainer.name} ( Age: {trainer.age} )</h3>
                                                    <img src={trainer.imageURL} alt="" />
                                                    <p className="py-4 text-md font-medium text-green-600" >{trainer.description}</p>
                                                    <p className="text-lg text-gray-700 font-medium">{trainer.experience} years of experience</p>
                                                    <p className="text-md text-gray-700">Day Slot: {trainer.daySlot}</p>
                                                    <p className="text-md text-gray-700">Weekly SLot: {trainer.weekSlot}</p>
                                                    <p className="text-md text-gray-700">Skills</p>
                                                    {trainer?.strengthTraining ? <li className='font-bold'>Strength Training</li> : ''}
                                                    {trainer?.cardioWorkouts ? <li className='font-bold'>Cardio Workouts</li> : ''}
                                                    {trainer?.flexibilityTraining ? <li className='font-bold'>Flexibility Training</li> : ''}


                                                </div>
                                            </dialog>


                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handlePaymentClick(trainer)} 
                                                className="btn flex text-green-400"
                                                disabled={trainer?.payment === 'paid'}><FaPaypal />Pay
                                            </button>


                                        </td>
                                    </tr>
                                ))
                            }



                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default AllTrainers;