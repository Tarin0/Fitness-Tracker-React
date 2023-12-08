import { Link } from 'react-router-dom';

const BeTrainerSection = () => {
   
    return (
        <div className="bg-white dark:bg-gray-800">
            <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span className="block">
                        Passionate About Fitness?
                    </span>
                    <span className="block text-[#71fc65]">
                        It's Time to Inspire Others!
                    </span>
                </h2>
                <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
                    If you have a deep passion for fitness and a desire to share your knowledge, join our team of dedicated trainers. Help others achieve their fitness goals and make a positive impact on their lives.
                </p>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md shadow">
                        <Link className="btn text-xl border-none bg-gradient-to-r from-[#71fc65] to-green-600 hover:from-green-400 hover:to-[#5ddd52]" to="/trainer-form">Be Trainer</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeTrainerSection;
