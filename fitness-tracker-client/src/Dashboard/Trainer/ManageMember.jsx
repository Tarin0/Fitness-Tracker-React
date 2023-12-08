import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { MdEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
const ManageMember = () => {
    const { user } = useAuth();
    const members = useLoaderData();

    const remainingMembers = members.filter(trainer => trainer.trainerEmail === user?.email);
    console.log(remainingMembers);


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bmc200s', 'template_h4h2w9l', form.current, 'AwaHwB_zvmSy73_eM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <Helmet>
                <title>Dashboard | member</title>
            </Helmet>
            <div className="">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div >
                                <h2>All <b>Members</b></h2>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th className='text-xl'>Class Title</th>
                                <th className='text-xl'>Member Name</th>
                                <th className='text-xl'>Member Email</th>
                                <th className='text-xl'>Payment</th>
                                <th className='text-xl'>Slot</th>
                                <th className='text-xl'>Send Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                remainingMembers.map(trainer => (
                                    <tr key={trainer._id}>
                                        <td>{trainer.classTitle}</td>
                                        <td>{trainer.memberName}</td>
                                        <td>{trainer.memberEmail}</td>
                                        <td>${trainer.payment}</td>
                                        <td>{trainer.classSlot}</td>
                                        <td>
                                            <button className="btn text-2xl text-green-400 ml-5 my-2 text-center" onClick={() => document.getElementById(`my_modal_${trainer._id}`).showModal()}><MdEmail /></button>
                                            <dialog id={`my_modal_${trainer._id}`} className="modal modal-bottom sm:modal-middle">
                                                <div className="modal-box">
                                                    <form method="dialog">
                                                        <button className="btn text-black text-xl font-bold btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div>
                                                        <form ref={form} onSubmit={sendEmail}>
                                                            <label>Name</label>
                                                            <input type="text" name="from_name" />
                                                            <label>Email</label>
                                                            <input type="email" name="from_email" />
                                                            <label>Message</label>
                                                            <textarea name="message" />
                                                            <input type="submit" value="Send" />
                                                        </form>
                                                        {/* <form ref={form} onSubmit={sendEmail}  className="max-w-sm mx-auto">
                                                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                                                        <input type="text" name='from_name' className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Name" />
                                                        <label className="block my-2 text-sm font-medium text-gray-900 ">Email Address</label>
                                                        <input type="email" name='from_email' className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Your Email" />
                                                            <label className="block my-2 text-sm font-medium text-gray-900 ">Your Email</label>
                                                            <textarea name='message' id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Leave a email..."></textarea>
                                                            <button
                                                            type="submit"
                                                            value="send"
                                                            // disabled={isRejected || trainer?.status === 'rejected'}
                                                            // onClick={() => handleConfirm(trainer)}
                                                            className="btn btn-outline btn-success"
                                                        >
                                                            Send
                                                        </button>
                                                            
                                                        </form> */}
                                                    </div>
                                                    <div className='flex justify-evenly mt-5'>


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

export default ManageMember;