import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { imageUpload } from '../../api/utlis';
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const AddClass = () => {
    const trainerSlot = useLoaderData();
    const { user } = useAuth();
    const {displayName, email } = user;
    const mySlot = trainerSlot.filter(trainer => trainer.email === email);
    console.log(mySlot);
    const [selectedSlot, setSelectedSlot] = useState(''); // Initialize state for selected slot

    const handleSlotChange = (e) => {
        setSelectedSlot(e.target.value);
    };
    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const title = form.title.value;
        const payment = form.payment.value;
        const description = form.description.value;
        const image = form.image.files[0];
        console.log(selectedSlot);
        try {
            const imageData = await imageUpload(image);
            const imageURL = imageData?.data?.display_url;
            const trainer = { email, name,title, imageURL,  payment,slot: selectedSlot,description};
            fetch('https://fitness-tracker-server-tan.vercel.app/classes', {
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
                        toast.success('Your class added');
                        form.reset();

                    }
                })
        }
        catch (err) {
            toast.error(err);
        }

    };

    return (
        <div className="mb-20">
            <Helmet>
                <title>FitNezz | Add Class</title>
            </Helmet>
            <section className="max-w-4xl p-6 mx-auto bg-green-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 className="text-xl font-bold text-white capitalize text-center">Apply For Trainer</h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white">Username</label>
                            <input
                            defaultValue={displayName}
                            readOnly
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
                            <label className="text-white">Class Title</label>
                            <input
                                name="title"
                                type="text"


                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-green-300 rounded-md focus:border-green-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Payment Per Class</label>
                            <input
                                name="payment"
                                type="text"


                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-green-300 rounded-md focus:border-green-500 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label className="text-white">Available Slot</label>
                            <select 
                            onChange={handleSlotChange} 
                            name='slot' 
                            className="select select-primary w-full max-w-xs">
                                <option disabled selected>Slot</option>
                                {
                                    mySlot.map(slot => (
                                        <option key={slot?._id}>{slot?.dateTime}</option>

                                    ))
                                }
                            </select>

                        </div>
                        <div>
                            <label className="text-white">Class Banner</label>
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
                            <label className="text-white">Class Description</label>
                            <textarea placeholder="Describe Class" name='description' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-green-300 rounded-md focus:border-green-500 focus:outline-none focus:ring textarea textarea-bordered textarea-md  " ></textarea>

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

export default AddClass;
