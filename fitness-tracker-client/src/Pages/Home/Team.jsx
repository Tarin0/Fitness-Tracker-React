import TeamIcon from "../Shared/Team/TeamIcon";

const Team = () => {
    return (
        <div>
            <div className="mb-5">
                <div className="flex justify-center mx-auto pt-16">
                    <div className="mb-16">
                        <p className="text-gray-500 text-lg text-center font-normal pb-3">MEET OUR COACHES</p>
                        <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold sm:w-4/6 w-5/6 mx-auto">The Dedicated Coaches Behind Your Fitness Journey</h1>
                    </div>
                </div>
                <div className="w-full bg-gray-100 px-10 pt-10">
                    <div className="mx-auto">
                        <div role="list" aria-label="Fitness Coaches" className="lg:flex md:flex sm:flex items-center flex-wrap md:justify-around sm:justify-around">
                            {/* Coach 1 */}
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" alt="Display Picture of Andres Berlin" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold text-3xl text-center mb-1">Andres Berlin</h1>
                                        <p className="text-gray-800 text-sm text-center">Certified Personal Trainer</p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">Andres specializes in high-intensity interval training (HIIT) and functional fitness. With over 10 years of experience, he's passionate about helping clients achieve their fitness goals.</p>
                                        <TeamIcon></TeamIcon>
                                    </div>
                                </div>
                            </div>

                            {/* Coach 2 */}
                            <div role="listitem" className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif" alt="Display Picture of Silene Tokyo" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold text-3xl text-center mb-1">Silene Tokyo</h1>
                                        <p className="text-gray-800 text-sm text-center">Nutrition Specialist</p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">Silene is a certified nutritionist with a focus on creating personalized meal plans. She believes in the synergy of nutrition and fitness for optimal well-being.</p>
                                        <TeamIcon></TeamIcon>
                                    </div>
                                </div>
                            </div>

                            {/* Coach 3 */}
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif" alt="Display Picture of Johnson Stone" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold text-3xl text-center mb-1">Johnson Stone</h1>
                                        <p className="text-gray-800 text-sm text-center">Fitness Specialist</p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">With a background in sports science, Johnson specializes in designing personalized fitness plans. His expertise lies in strength training and functional movement.</p>
                                       <TeamIcon></TeamIcon>
                                    </div>
                                </div>
                            </div>
                            {/* Coach 4 */}
<div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
    <div className="rounded overflow-hidden shadow-md bg-white">
        <div className="absolute -mt-20 w-full flex justify-center">
            <div className="h-32 w-32">
                <img src="https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg" alt="Display Picture of Dean Jones" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
            </div>
        </div>
        <div className="px-6 mt-16">
            <h1 className="font-bold text-3xl text-center mb-1">Dean Jones</h1>
            <p className="text-gray-800 text-sm text-center">Fitness Coach</p>
            <p className="text-center text-gray-600 text-base pt-3 font-normal">As a seasoned fitness coach, Dean brings 20 years of experience in promoting holistic well-being. His passion lies in guiding individuals toward their fitness goals through personalized training programs and a focus on the mind-body connection.</p>
           <TeamIcon></TeamIcon>
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

export default Team;
