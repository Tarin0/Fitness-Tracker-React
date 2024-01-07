import { Outlet, useLoaderData } from "react-router-dom"
import Sidebar from "../Dashboard/Sidebar/Sidebar"
import useAuth from "../hooks/useAuth";
import { FaHome, FaSubscript, FaUser, FaUsers } from "react-icons/fa";
import { useEffect, useState } from "react";
import { MdSubscriptions } from "react-icons/md";
import { FaChalkboardUser, FaHouse } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
const DashboardLayout = () => {
  const [subscribersLength, setSubscribersLength] = useState(0);
  const [trainersLength, setTrainersLength] = useState(0);
  const [classBookingLength, setClassBookingLength] = useState(0);
  const [trainerSlotLength, setTrainerSlotLength] = useState(0);
  const [userSlotLength, setUserSlotLength] = useState(0);
  const [classesLength, setClassesLength] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const subscribersResponse = await fetch(
          "https://fitness-tracker-server-tan.vercel.app/subscribers"
        );
        const subscribersData = await subscribersResponse.json();
        setSubscribersLength(subscribersData.length);

        const trainersResponse = await fetch(
          "https://fitness-tracker-server-tan.vercel.app/trainers"
        );
        const trainersData = await trainersResponse.json();
        setTrainersLength(trainersData.length);

        const classBookingResponse = await fetch(
          "https://fitness-tracker-server-tan.vercel.app/class-booking"
        );
        const classBookingData = await classBookingResponse.json();
        setClassBookingLength(classBookingData.length);

        const trainerSlotResponse = await fetch(
          "https://fitness-tracker-server-tan.vercel.app/trainer-slot"
        );
        const trainerSlotData = await trainerSlotResponse.json();
        setTrainerSlotLength(trainerSlotData.length);
        const totalUsersResponse = await fetch(
          "https://fitness-tracker-server-tan.vercel.app/user"
        );
        const totalUsers = await totalUsersResponse.json();
        setUserSlotLength(totalUsers.length);

        const classesResponse = await fetch(
          "https://fitness-tracker-server-tan.vercel.app/classes"
        );
        const classesData = await classesResponse.json();
        setClassesLength(classesData.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='relative min-h-screen md:flex'>
      <Helmet>
                <title>FitNezz | Dashboard</title>
            </Helmet>
      <Sidebar></Sidebar>

      <div className='flex-1  md:ml-64'>
      <section className="relative z-10 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
  <div className="grid grid-cols-3 gap-5 mx-auto">

    {/* Subscribers */}
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col">
        <MdSubscriptions className="text-5xl font-bold text-[#1bee2ce8]" />

        <h5 className="pl-2 text-transform: uppercase text-2xl font-semibold tracking-tight text-[#12b320e8] dark:text-white">
          {subscribersLength} Subscribers
        </h5>
      </div>

      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Explore a step-by-step guideline on how members can certify for their weekly benefits.</p>

    </div>

    {/* Trainers */}
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col">
        <FaUsers className="text-5xl font-bold text-[#1bee2ce8]" />

        <h5 className="pl-2 text-transform: uppercase text-2xl font-semibold tracking-tight text-[#12b320e8] dark:text-white">
          {trainersLength} Trainers
        </h5>
      </div>

      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Discover the comprehensive guide on how trainers can certify for their weekly benefits.</p>

    </div>

    {/* Total Classes */}
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col">
        <FaHome className="text-5xl font-bold text-[#1bee2ce8]" />

        <h5 className="pl-2 text-transform: uppercase text-2xl font-semibold tracking-tight text-[#12b320e8] dark:text-white">
          {classesLength} Total Classes
        </h5>
      </div>

      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Check out the step-by-step process to certify for your weekly benefits through our fitness classes.</p>

    </div>

    {/* Available Slot */}
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col">
        <FaHouse className="text-5xl font-bold text-[#1bee2ce8]" />

        <h5 className="pl-2 text-transform: uppercase text-2xl font-semibold tracking-tight text-[#12b320e8] dark:text-white">
          {trainerSlotLength} Available Slot
        </h5>
      </div>

      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Manage and view the available training slots for your trainers.</p>

    </div>

    {/* Total Users */}
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col">
        <FaUser className="text-5xl font-bold text-[#1bee2ce8]" />

        <h5 className="pl-2 text-transform: uppercase text-2xl font-semibold tracking-tight text-[#12b320e8] dark:text-white">
          {userSlotLength} Total Users
        </h5>
      </div>

      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Monitor and manage the total number of users registered on your fitness platform.</p>

    </div>

    {/* Booked Class */}
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col">
        <FaChalkboardUser className="text-5xl font-bold text-[#1bee2ce8]" />

        <h5 className="pl-2 text-transform: uppercase text-2xl font-semibold tracking-tight text-[#12b320e8] dark:text-white">
          {classBookingLength} Booked Class
        </h5>
      </div>

      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Track and manage the classes that have been booked by members and trainers.</p>

    </div>

  </div>
</section>

        <div className='p-5'>
       
          <Outlet>
          
          </Outlet>
          
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout


