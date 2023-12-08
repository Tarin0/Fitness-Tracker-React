import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const ProfileUpdate = () => {
    const users = useLoaderData();
    const {user,updateUserProfile} = useAuth();
    console.log(user);
    const updateUser = users.filter(newUser => newUser.email === user?.email);
    console.log(updateUser);
    const handleUpdate = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        

            try {
                await updateUserProfile(name, photo);
                toast.success('User Updated  successfully');
                
            }
            catch (err) {
                toast.error(err?.message);
            }

            
        
    }
    return (
        <div className="mb-20">
            <Helmet>
                <title>FitNezz | Update Profile</title>
            </Helmet>
            <section className="max-w-4xl p-6 mx-auto bg-green-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 className="text-xl font-bold text-white capitalize text-center">Update Profile</h1>
                <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white">Username</label>
                            <input
                                name="name"
                                type="text"
                                defaultValue={user?.displayName}

                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-green-300 rounded-md focus:border-green-500 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label className="text-white">Email Address</label>
                            <input
                                name="email"
                                type="email"
                                readOnly
                                defaultValue={user?.email}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-w rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Photo URL</label>
                            <input
                                name="photo"
                                type="text"
                                defaultValue={user?.photoURL}

                                placeholder="Photo URL"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-w rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>


                    </div>

                    <div className="flex justify-center mt-6">
                        <button type='submit' className="btn text-xl border-none bg-gradient-to-r from-[#71fc65] to-green-500 hover:from-green-400 hover:to-[#5ddd52]">Submit</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default ProfileUpdate;