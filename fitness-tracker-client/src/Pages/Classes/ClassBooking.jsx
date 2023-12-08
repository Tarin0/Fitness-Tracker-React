import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const ClassBooking = () => {
    const { user } = useAuth();
    const classInfo = useLoaderData();
    const [isBooked, setIsBooked] = useState(false);
    const [userClassBooking, setUserClassBooking] = useState(null);
    const [isExist, setIsExist] = useState(null);
  
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
        const existingBooking = userClassBooking.filter(
          (booking) =>
            booking.memberEmail === user?.email &&
            booking.trainerEmail === classInfo.email &&
            booking.classTitle === classInfo.title &&
            booking.status === 'booked'
        );
        console.log(existingBooking);
        setIsExist(existingBooking);
      }
    }, [userClassBooking, user, classInfo]);
  
    const handleBooking = () => {
      console.log(isExist);
      if (isExist && isExist.length > 0) {
        toast.error("You have already booked this class");
        return;
      }
      console.log(isExist);
        const classBooking = {
            memberEmail: user?.email,
            memberName: user?.displayName,
            trainerName: classInfo.name,
            trainerEmail: classInfo.email,
            classTitle: classInfo.title,
            classSlot: classInfo.slot,
            payment: classInfo.payment,
            status: 'booked'
        };
        setIsBooked(true);
        
        fetch('https://fitness-tracker-server-tan.vercel.app/class-booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(classBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success("Your slot is booked successfully");
                }
            })

    }


    return (
        <div>


            <div className="mt-6 w-full bg-white  rounded-lg shadow ">
                <img className="mx-auto" src={classInfo.imageURL} alt="" />
                <div className="p-5">
                    <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {classInfo.title}</h5>
                    <p className="mb-3 text-center font-normal text-gray-700">{classInfo.description}</p>
                    <div className="border border-gray-500 w-6/12 mx-auto my-5">

                        <p className="text-center text-xl text-gray-600">Trainer Name: {classInfo.name}</p>
                        <p className="text-center text-xl text-gray-600">${classInfo.payment} Per Class</p>
                        <p className="text-center text-xl text-gray-600">Available Slot: {classInfo.slot}</p>
                    </div>
                    <button
                        onClick={handleBooking}
                        disabled={isBooked}
                        className="btn bg-[#78c234] text-center ml-72">
                        Book Class
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ClassBooking;