import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const RecommendedClass = () => {
    const { user } = useAuth();
    const userClassBooking = useLoaderData();
    console.log(userClassBooking);
    console.log(user);
    const [recommendedClass, setRecommendedClass] = useState(null);
    const userClasses = userClassBooking.filter((booking) => booking.memberEmail === user?.email);
    console.log(userClasses[0]?.trainerEmail);

    useEffect(() => {
        if (user) {
            console.log('Running useEffect');
    
            // Fetch class data when the component mounts
            fetch('https://fitness-tracker-server-tan.vercel.app/classes')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const newClasses = data.filter(
                        (classItem) => classItem.email !== userClasses[0]?.trainerEmail
                    );
                    setRecommendedClass(newClasses);
                })
                .catch(error => {
                    console.error('Error fetching class data:', error);
                });
        }
    }, [user]);
    
    

    return (
        <div>
            <Helmet>
                <title>FitNezz | Recommended Classes</title>
            </Helmet>
            <h1 className='text-3xl text-green-300 font-semibold mt-5 pl-60'>Some Recommended Classes</h1>
            <div className='mt-7 grid grid-cols-1 gap-4 w-10/12 mx-auto'>
                {
                    recommendedClass && recommendedClass.map((classItem) => (
                        <div key={classItem._id} className="border rounded-xl border-gray-300 w-3/4 flex mx-auto">
                            <div className="card-body">
                                <h2 className="card-title">{classItem.title}</h2>
                                <p>Trainer: {classItem.name}</p>
                                <div className="card-actions">
                                    <button className="btn bg-[#78c234]">{classItem.slot}</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default RecommendedClass;
