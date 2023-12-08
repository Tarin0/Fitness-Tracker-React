import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Activities = () => {
    const { user } = useAuth();
    const classes = useLoaderData();
    const [isBooked, setIsBooked] = useState(false);
    const [userClassBooking, setUserClassBooking] = useState(null);
    const [isExist, setIsExist] = useState(null);
    const [todaysClasses, setTodaysClasses] = useState([]); // Initialize as an empty array

    useEffect(() => {
        // Fetch class booking data when the component mounts
        fetch('https://fitness-tracker-server-tan.vercel.app/class-booking')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUserClassBooking(data);
            });
    }, []);

    useEffect(() => {
        // Check for existing booking when userClassBooking changes
        if (userClassBooking !== null) {
            const userClasses = userClassBooking.filter(
                (booking) => booking.memberEmail === user?.email);

            console.log(userClasses);
            const currentDate = new Date();
            const formattedCurrentDate = currentDate.toLocaleDateString();

            const todaysClasses = userClasses.filter(
                (booking) => {
                    const classDate = new Date(booking.classSlot);
                    const formattedClassDate = classDate.toLocaleDateString();
                    return formattedClassDate === formattedCurrentDate;
                }
            );

            console.log(todaysClasses);
            setTodaysClasses(todaysClasses); // Update the state with todaysClasses
        }
    }, [userClassBooking, user]);

    return (
        <div>
            <h1 className='text-3xl border bg-[#71f122a9] text-green-300 font-semibold mx-auto pl-64 py-2'>Today's Class</h1>
            <div className='mt-7 grid grid-cols-1 gap-4 w-10/12 mx-auto'>
                {
                    todaysClasses.map(trainer => (
                        <div key={trainer._id} className="border rounded-xl border-gray-300 w-3/4 flex mx-auto">
                            <div className="card-body">
                                <h2 className="card-title">{trainer.classTitle}</h2>
                                <p>Trainer: {trainer.trainerName}</p>
                                <div className="card-actions">
                                    <button className="btn bg-[#78c234]">{trainer.classSlot}</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Activities;
