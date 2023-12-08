import { Link } from "react-router-dom";

const Blogs = () => {
    return (
        <div>
            <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
                <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="text-center max-w-xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-600">Coach. Care. Connect.<br /></h1>
                            <h3 className="text-xl mb-5 font-light">Virtual workouts. Health Coaching Advice. Community</h3>
                            <div className="text-center mb-10">
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            </div>
                        </div>
                        <div className="-mx-3 md:flex items-start">
                            <div className="px-3 md:w-1/3">
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=1" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Kenzie Edgar.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-green-400 text-md font-medium">6 Reasons Why We Need a Personal Trainer?</p>
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>A personal trainer is like a ray of light in the vast ocean of your fitness journey. Be it the usual struggle of which exercise to do or the right kind of posture, a good personal trainer like the ones at Anytime Fitness can help you achieve your goals.With the gradual increase in the gym culture, there has been an increase in the number of people opting.....<Link className="font-semibold" to="/blog1">Read More</Link><span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                    </div>
                                </div>
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=2" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Stevie Tifft.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-green-400 text-md font-medium">Introduction To Yoga: 5 Best Poses</p>
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Yoga is a discipline that has been practiced for several thousand years. It originated on Indian soil and eventually spread worldwide. Yoga is a holistic practice that combines physical postures (asanas), breathing exercises (pranayama), and meditation .... <Link className="font-semibold" to="/blog2">Read More</Link><span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 md:w-1/3">
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=3" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Tommie Ewart.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-green-400 text-md font-medium">Fitness Trends You Didn’t Know About</p>
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Fitness is an ever-evolving industry, and with the pandemic causing many gyms to shut down or limit their services, people have been looking for new ... <Link className="font-semibold" to="/blog3">Read More</Link><span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                    </div>
                                </div>
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=4" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Charlie Howse.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-green-400 text-md font-medium">The Psychology of Motivation: How to Stay Committed to Your Fitness Journey</p>
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Motivation is a crucial factor in achieving any goal, especially in the realm of fitness. Staying committed to a fitness journey requires a lot of hard work, dedication, and discipline, which can be challenging to maintain over time. In this blog, we’ll explore the psychology of motivation and offer some tips on how to stay committed to your fitness journey.... <Link className="font-semibold" to="/blog4">Read More</Link><span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 md:w-1/3">
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=5" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Nevada Herbertson.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-green-400 text-md font-medium">Workout At Home: Problems You Could Face</p>
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Working out at home has become increasingly popular in recent times due to the ongoing pandemic and the rise of remote work. While it can  be convenient and cost-effective, there are a few common problems that people face when working out at home.In this blog post, we will discuss some of these problems and how to overcome them.... <Link className="font-semibold" to="/blog5">Read More</Link><span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                    </div>
                                </div>
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=6" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Kris Stanton.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-green-400 text-md font-medium">Fit Nutrition: Fuel Your Body Before and After a Gym Session</p>
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Proper nutrition is an essential component of a healthy and active lifestyle. When it pertains to physical activity, this is certainly relevant. Whether you are ... <Link className="font-semibold" to="/blog6">Read More</Link><span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Blogs;