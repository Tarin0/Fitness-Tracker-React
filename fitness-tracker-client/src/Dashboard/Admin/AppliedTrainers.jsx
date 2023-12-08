import { FaRegEye } from 'react-icons/fa';
import '../../Dashboard/Admin/AppliedTrainer.css'
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
const AppliedTrainers = () => {
    const appliedTrainers = useLoaderData();
    const [isRejected, setIsRejected] = useState(false);

    const [updatedTrainer, setUpdatedTrainer] = useState(appliedTrainers);
   
    const handleConfirm = async (trainer) => {
        try {
            const currentDate = new Date();
            const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    
            const { email, name, age, weekSlot, experience, daySlot, imageURL, contact, strengthTraining, cardioWorkouts, flexibilityTraining, description } = trainer;
            const confirmationDate = formattedDate;
            const newTrainer = { email, name, age, weekSlot, experience, daySlot, imageURL, contact, strengthTraining, cardioWorkouts, flexibilityTraining, description, payment: 'pending', confirmationDate };
    
            // Post new trainer
            const postResponse = await fetch('https://fitness-tracker-server-tan.vercel.app/trainers', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newTrainer)
            });
    
            if (!postResponse.ok) {
                throw new Error(`Failed to post trainer: ${postResponse.statusText}`);
            }
    
            const postData = await postResponse.json();
            console.log("Trainer Post Response:", postData);
    
            if (postData.insertedId) {
                toast.success('Trainer added');
                // window.location.href = '/dashboard/trainers';
            }
    
            // Delete applied trainer
            const id = trainer._id;
            const deleteResponse = await fetch(`https://fitness-tracker-server-tan.vercel.app/applied-trainer/${id}`, {
                method: 'DELETE',
                credentials: 'include'
            });
    
            if (!deleteResponse.ok) {
                throw new Error(`Failed to delete applied trainer: ${deleteResponse.statusText}`);
            }
    
            const deleteData = await deleteResponse.json();
            console.log("Delete Applied Trainer Response:", deleteData);
    
            if (deleteData.deletedCount > 0) {
                const remainingTrainer = updatedTrainer.filter(trainer => trainer._id !== id);
                setUpdatedTrainer(remainingTrainer);
            }
    
            // Update user role
            const updatedUser = {
                email: trainer?.email,
                role: 'trainer',
                status: 'Verified'
            };
    
            const updateResponse = await fetch(`https://fitness-tracker-server-tan.vercel.app/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedUser)
            });
    
            if (!updateResponse.ok) {
                throw new Error(`Failed to update user role: ${updateResponse.statusText}`);
            }
    
            const updateData = await updateResponse.json();
            console.log("Update User Role Response:", updateData);
    
            if (updateData.modifiedCount > 0) {
                console.log("User role updated successfully");
            } else {
                console.log("User role not updated");
            }
        } catch (error) {
            console.error("Error in handleConfirm:", error);
            // Handle the error, show a toast, or perform other actions as needed
        }
    };
    

    // const handleConfirm = (trainer) => {
    //     const currentDate = new Date();
    //     const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

    //     const { email, name, age, weekSlot, experience, daySlot, imageURL, contact, strengthTraining, cardioWorkouts, flexibilityTraining, description } = trainer;
    //     const confirmationDate = formattedDate;
    //     const newTrainer = { email, name, age, weekSlot, experience, daySlot, imageURL, contact, strengthTraining, cardioWorkouts, flexibilityTraining, description, payment: 'pending', confirmationDate };

    //     fetch('https://fitness-tracker-server-tan.vercel.app/trainers', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(newTrainer)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log("Trainer Post Response:", data);
    //         if (data.insertedId) {
    //             toast.success('Trainer added');
    //             // window.location.href = '/dashboard/trainers';
    //         }
    //     })
    //     .catch(error => {
    //         console.error("Error posting trainer:", error);
    //     });

    //     const id = trainer._id;
    //     fetch(`https://fitness-tracker-server-tan.vercel.app/applied-trainer/${id}`, {
    //         method: 'DELETE',
    //         credentials: 'include'
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log("Delete Applied Trainer Response:", data);
    //         if (data.deletedCount > 0) {
    //             const remainingTrainer = updatedTrainer.filter(trainer => trainer._id !== id);
    //             setUpdatedTrainer(remainingTrainer);
    //         }
    //     });

    //     // Update user role
    //     const updatedUser={
    //         email: trainer?.email,
    //         role:'trainer',
    //         status:'Verified'
    //     }
    //     fetch(`https://fitness-tracker-server-tan.vercel.app/user/${email}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updatedUser)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log("Update User Role Response:", data);
    //         if (data.modifiedCount > 0) {
    //             console.log("User role updated successfully");
    //         } else {
    //             console.log("User role not updated");
    //         }
    //     })
    //     .catch(error => {
    //         console.error("Error updating trainer:", error);
    //     });
    // };

    
    




    const handleReject = (trainer) => {
        const id = trainer._id;


        // Disable the modal buttons
        setIsRejected(true);


        const updateStatus = { status: 'rejected' };
        fetch(`https://fitness-tracker-server-tan.vercel.app/applied-trainer/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStatus)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const updatedTrainers = updatedTrainer.map(t =>
                        t._id === trainer._id ? { ...t, status: 'rejected' } : t
                    );
                    setUpdatedTrainer(updatedTrainers);
                }
            })
    };



    return (
        <div>
            <Helmet>
                <title>Dashboard | Applied Trainer</title>
            </Helmet>
            <div className="">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div >
                                <h2>Applied <b>Trainers</b></h2>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th className='text-xl'>Name</th>
                                <th className='text-xl'>Email</th>
                                <th className='text-xl'>Status</th>
                                <th className='text-xl'>Actions</th>
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
                                        <td className={trainer.status === "in progress" ? "text-blue-500" : trainer.status === "rejected" ? "text-red-500" : ""}
                                        >
                                            {trainer.status}
                                        </td>

                                        <td>
                                            <button className="btn" onClick={() => document.getElementById(`my_modal_${trainer._id}`).showModal()}><FaRegEye /></button>
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
                                                    <div className='flex justify-evenly mt-5'>
                                                        <button
                                                            disabled={isRejected || trainer?.status === 'rejected'}
                                                            onClick={() => handleConfirm(trainer)}
                                                            className="btn btn-outline btn-success"
                                                        >
                                                            Confirm
                                                        </button>

                                                        <button
                                                            onClick={() => {
                                                                handleReject(trainer);
                                                                setIsRejected(true);
                                                            }}
                                                            className="btn btn-outline btn-error"
                                                            disabled={isRejected || trainer?.status === 'rejected'}
                                                        >
                                                            Reject
                                                        </button>


                                                    </div>

                                                </div>
                                            </dialog>


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

export default AppliedTrainers;




