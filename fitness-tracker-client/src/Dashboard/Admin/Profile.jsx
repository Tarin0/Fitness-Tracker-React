import { Helmet } from "react-helmet-async";
import TeamIcon from "../../Pages/Shared/Team/TeamIcon";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
    const {user} = useAuth();
    console.log(user);
    return (
        <div>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <div className="w-full bg-gray-100 px-10 pt-10">
                <div className="mx-auto">
                    <div role="list" aria-label="Fitness Coaches" className="flex items-center justify-center">
                        {/* Coach 1 */}
                        <div role="listitem" className=" md:w-4/5 relative mt-16 mb-32 sm:mb-24">
                            <div className="rounded overflow-hidden shadow-md bg-white">
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-44 w-44">
                                        <img src={user?.photoURL} alt="Display Picture of Andres Berlin" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div className="px-6 mt-28 space-y-7">
                                    <h1 className="font-bold text-3xl text-center mb-1">{user?.displayName}</h1>
                                    <p className="text-gray-800 text-sm text-center">{user?.email}</p>
    
                                    <TeamIcon></TeamIcon>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Profile;