import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const ManageSlots = () => {
    const { user, loading } = useAuth();
    const allSlots = useLoaderData();
    const [updatedSlots, setUpdatedSlots] = useState(allSlots);
  
  
    const handleSlot = async (e) => {
      e.preventDefault();
      const form = e.target;
      const date = form.date.value;
      const selectedRadio = form.querySelector('input[name="list-radio"]:checked');
      const selectedTime = selectedRadio.value;
  
      const dateTime = `${date} ${selectedTime}`;
  
      const trainerBooking = {
        email: user?.email,
        name: user?.displayName,
        date: date,
        time: selectedTime,
        dateTime: dateTime,
      };
  
      console.log("Date and Time:", dateTime);
  
      try {
        const response = await fetch("https://fitness-tracker-server-tan.vercel.app/trainer-slot", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(trainerBooking),
        });
  
        const data = await response.json();
  
        console.log(data);
  
        if (data.insertedId) {
            setUpdatedSlots((prevSlots) => [data, ...prevSlots]);
            toast.success("Your slot is booked successfully");
          form.reset();
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle error as needed
      }
    };
  
    // Move the console.log outside the handleSlot function
    console.log("Outside handleSlot. Current Updated Slots:", updatedSlots);
  
    return (
        <>
            <Helmet>
                <title>Dashboard | Slots</title>
            </Helmet>
            <div className="text -center pl-52">
                <hr />
                <h1 className="text-3xl text-center text-[#64f170] font-semibold">Manage Slots</h1>
                <hr />
            </div>
            <div className=" flex  py-12">
                <div className=" mx-auto w-5/6  bg-white">
                    <form onSubmit={handleSlot}>
                        <div className="-mx-3 flex flex-col gap-5">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        className="mb-2 block text-base font-medium text-[#07074D]"
                                    >
                                        Date
                                    </label>
                                    <input
                                    required
                                        type="date"
                                        name="date"
                                        id="date"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white  px-6 text-base font-medium text-[#88d342] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>

                            <div>
                                <h3 className="my-4 pl-4 text-gray-900 ">Morning</h3>
                                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex  ">
                                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                        <div className="flex items-center ps-3">
                                            <input required id="horizontal-list-radio-license" type="radio" value="8:00 AM" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 " />
                                            <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">8:00 AM</label>
                                        </div>
                                    </li>
                                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                        <div className="flex items-center ps-3">
                                            <input required id="horizontal-list-radio-id" type="radio" value="9:00 AM" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 " />
                                            <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">9:00 AM</label>
                                        </div>
                                    </li>
                                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                        <div className="flex items-center ps-3">
                                            <input required id="horizontal-list-radio-military" type="radio" value="10:00 AM" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 " />
                                            <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">10:00 AM</label>
                                        </div>
                                    </li>
                                    <li className="w-full">
                                        <div className="flex items-center ps-3">
                                            <input required id="horizontal-list-radio-passport" type="radio" value="11:00 AM" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 " />
                                            <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">11:00 AM</label>
                                        </div>
                                    </li>
                                </ul>
                                <h3 className="my-4 pl-4 text-gray-900 ">Afternoon</h3>
                                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex  ">
                                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                        <div className="flex items-center ps-3">
                                            <input required id="horizontal-list-radio-license" type="radio" value="2:00 PM" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 " />
                                            <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">2:00 PM</label>
                                        </div>
                                    </li>
                                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                        <div className="flex items-center ps-3">
                                            <input required id="horizontal-list-radio-id" type="radio" value="3:00 PM" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 " />
                                            <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">3:00 PM</label>
                                        </div>
                                    </li>
                                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                        <div className="flex items-center ps-3">
                                            <input required id="horizontal-list-radio-military" type="radio" value="4:00 PM" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 " />
                                            <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">4:00 PM</label>
                                        </div>
                                    </li>
                                    <li className="w-full">
                                        <div className="flex items-center ps-3">
                                            <input required id="horizontal-list-radio-passport" type="radio" value="5:00 PM" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 " />
                                            <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">5:00 PM</label>
                                        </div>
                                    </li>
                                </ul>
                                <h3 className="my-4 pl-4 text-gray-900 ">Evening</h3>
                                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex  ">
                                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                        <div className="flex items-center ps-3">
                                            <input required id="horizontal-list-radio-license" type="radio" value="6:00 PM" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 " />
                                            <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">6:00 PM</label>
                                        </div>
                                    </li>
                                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                        <div className="flex items-center ps-3">
                                            <input required id="horizontal-list-radio-id" type="radio" value="7:00 PM" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 " />
                                            <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">7:00 PM</label>
                                        </div>
                                    </li>
                                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                        <div className="flex items-center ps-3">
                                            <input required id="horizontal-list-radio-military" type="radio" value="8:00 PM" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 " />
                                            <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">8:00 PM</label>
                                        </div>
                                    </li>
                                    <li className="w-full">
                                        <div className="flex items-center ps-3">
                                            <input required id="horizontal-list-radio-passport" type="radio" value="9:00 PM" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 " />
                                            <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">9:00 PM</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <button type="submit"
                                className="hover:shadow-form mt-5 w-3/12 mx-auto rounded-md bg-[#64f170] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            >
                                Book Your Slot
                            </button>
                        </div>
                    </form>
                </div>
            </div>


            <div className="">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div >
                                <h2>All <b>Slot</b></h2>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th className='text-xl'>Name</th>
                                <th className='text-xl'>Email</th>
                                <th className='text-xl'>Slot(date-time)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                updatedSlots.map(trainer => (
                                    <tr key={trainer._id}>
                                        <td>{trainer?.name}</td>
                                        <td>{trainer?.email}</td>
                                        <td>{trainer?.dateTime}</td>

                                    </tr>
                                ))
                            }



                        </tbody>
                    </table>

                </div>
            </div>
        </>
    );
};

export default ManageSlots;
