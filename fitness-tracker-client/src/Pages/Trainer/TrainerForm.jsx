import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { imageUpload } from '../../api/utlis';
import useAuth from '../../hooks/useAuth';

const TrainerForm = () => {

    const { user } = useAuth();
    const { email } = user;
    
    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const age = form.age.value;
        const experience = form.experience.value;
        const weekSlot = form.weekSlot.value;
        const daySlot = form.daySlot.value;
        const description = form.description.value;
        const contact = form.contact.value;
        const image = form.image.files[0];
        const strengthTraining = form.querySelector('[name="strength-training-checkbox"]').checked;
        const cardioWorkouts = form.querySelector('[name="cardio-workouts-checkbox"]').checked;
        const flexibilityTraining = form.querySelector('[name="flexibility-training-checkbox"]').checked;
        
        try{
            const imageData = await imageUpload(image);
            const imageURL =imageData?.data?.display_url;
        const trainer = { email, name,age ,weekSlot,experience,daySlot,imageURL,contact,strengthTraining,cardioWorkouts,flexibilityTraining,description,status: 'pending'};
                fetch('https://fitness-tracker-server-tan.vercel.app/applied-trainer', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(trainer)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            toast.success('Your application added');
                            form.reset();
                            
                        }
                    })
        }
        catch(err){
            toast.error(err);
        }

    };

    return (
        <div className="mb-20">
            <section className="max-w-4xl p-6 mx-auto bg-green-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 className="text-xl font-bold text-white capitalize text-center">Apply For Trainer</h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white">Username</label>
                            <input
                                name="name"
                                type="text"

                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-green-300 rounded-md focus:border-green-500 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label className="text-white">Email Address</label>
                            <input
                                name="email"
                                type="email"
                                readOnly
                                defaultValue={email}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-w rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label className="text-white">Age</label>
                            <input
                                name="age"
                                type="text"


                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-green-300 rounded-md focus:border-green-500 focus:outline-none focus:ring"
                            />
                        </div>





                        <div>
                            <label className="text-white">Available Time in a week</label>
                            <input
                                name="weekSlot"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-green-300 rounded-md focus:border-green-500 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label className="text-white">Available Time in a day</label>
                            <input
                                name="daySlot"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-green-300 rounded-md focus:border-green-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Years Of Experience</label>
                            <input
                                name="experience"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-green-300 rounded-md focus:border-green-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Contact No</label>
                            <input
                                name="contact"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-green-300 rounded-md focus:border-green-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Image</label>
                            <input
                                required
                                name="image"
                                type="file"
                                id='image'
                                accept='image/*'

                                className="block file-input file-input-bordered file-input-success w-full max-w-xs px-4 py-2 mt-2 text-gray-700 bg-white border border-green-300 rounded-md focus:border-green-500 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label className="text-white">Fitness Skills</label>
                            <ul className="mt-3 items-center w-full text-sm font-medium text-gray-900 sm:flex">
                                <li className="w-full ">
                                    <div className="flex items-center ps-3">
                                        <input
                                            name="strength-training-checkbox"
                                            type="checkbox"
                                            
                                            className="w-4 h-4 text-blue-600  rounded focus:ring-blue-500 focus:ring-2"
                                        />
                                        <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Strength Training</label>
                                    </div>
                                </li>
                                <li className="w-full ">
                                    <div className="flex items-center ps-3">
                                        <input
                                            name="cardio-workouts-checkbox"
                                            type="checkbox"

                                            className="w-4 h-4 text-blue-600  rounded focus:ring-blue-500   focus:ring-2 "
                                        />
                                        <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">Cardio Workouts</label>
                                    </div>
                                </li>
                                <li className="w-full  ">
                                    <div className="flex items-center ps-3">
                                        <input
                                            name="flexibility-training-checkbox"
                                            type="checkbox"

                                            className="w-4 h-4 text-blue-600  rounded focus:ring-blue-500 focus:ring-2 "
                                        />
                                        <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">Flexibility Training</label>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <label className="text-white">Description</label>
                            <textarea placeholder="Describe yourself" name='description' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-green-300 rounded-md focus:border-green-500 focus:outline-none focus:ring textarea textarea-bordered textarea-md  " ></textarea>

                        </div>

                    </div>

                    <div className="flex justify-center mt-6">
                        <button type='submit' className="btn text-xl border-none bg-gradient-to-r from-[#71fc65] to-green-500 hover:from-green-400 hover:to-[#5ddd52]">Submit</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default TrainerForm;
