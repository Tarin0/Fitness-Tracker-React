import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const AddForum = () => {
    const { user } = useAuth();
    // console.log(user)
    const users = useLoaderData();
    const mainUser = users.filter(trainer => trainer.email === user?.email);
    const handleForum = async e => {
        e.preventDefault();
        const form = e.target;
        const name = user?.displayName;
        const role = mainUser[0]?.role;
        const photo = user?.photoURL;
        const post = form.post.value;
        const date = new Date();

        const options = {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true, // Display in 12-hour format with AM/PM
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        };

        const formattedDate = date.toLocaleString('en-US', options);

        const forumDetails = { name, role, photo, formattedDate, post };
        console.log(forumDetails);


        try {
            fetch('https://fitness-tracker-server-tan.vercel.app/forum', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(forumDetails)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        toast.success('Your Post added');
                        form.reset();

                    }
                })
        }
        catch (err) {
            toast.error(err);
        }
    };
    return (
        <div><Helmet>
        <title>FitNezz | Dashboard Forum</title>
    </Helmet>

            <form onSubmit={handleForum} className=" mx-auto">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Post</label>
                <textarea name='post' id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a post..."></textarea>
                <div className="flex justify-center mt-6">
                    <button type='submit' className="btn text-xl border-none bg-gradient-to-r from-[#71fc65] to-green-500 hover:from-green-400 hover:to-[#5ddd52]">Submit</button>
                </div>
            </form>

        </div>
    );
};

export default AddForum;