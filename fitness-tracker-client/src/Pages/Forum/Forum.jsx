import { Helmet } from "react-helmet-async";
import { FaThumbsUp } from "react-icons/fa6";
import { FaThumbsDown } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const Forum = () => {
    const initialForums = useLoaderData();
    const { user } = useAuth();
    // const userEmail = user?.email
    const [forums, setForums] = useState(initialForums.map(forum => ({
        ...forum,
        alreadyLiked: false,
        alreadyDisliked: false
    })));
    useEffect(() => {
        const fetchLikesDislikes = async () => {
            try {
                // Fetch likes and dislikes
                const likesResponse = await fetch('https://fitness-tracker-server-tan.vercel.app/like');
                const dislikesResponse = await fetch('https://fitness-tracker-server-tan.vercel.app/dislike');
                const likesData = await likesResponse.json();
                const dislikesData = await dislikesResponse.json();

                // Update each forum with its like and dislike count
                const updatedForums = forums.map(forum => ({
                    ...forum,
                    likeCount: likesData.filter(like => like.forumId === forum._id).length,
                    dislikeCount: dislikesData.filter(dislike => dislike.forumId === forum._id).length
                }));

                setForums(updatedForums);
            } catch (error) {
                console.error('Error fetching likes/dislikes:', error);
            }
        };

        fetchLikesDislikes();
    }, [forums]);


    const handleLike = async (id) => {
        try {
            // Fetch current likes to check if the user has already liked this forum
            const likesResponse = await fetch('https://fitness-tracker-server-tan.vercel.app/like');
            const likesData = await likesResponse.json();
    
            // Check if the user already liked this forum
            const alreadyLiked = likesData.some(like => like.forumId === id && like.userEmail === user?.email);
            if (alreadyLiked) {
                toast.error("You have already liked this post.");
                return;
            }
    
            // Proceed with liking the forum post
            const response = await fetch('https://fitness-tracker-server-tan.vercel.app/like', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    forumId: id,
                    userEmail: user?.email
                })
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Update the like count and the alreadyLiked status in the local state
           
            setForums(forums.map(forum => {
                if (forum._id === id) {
                    return {
                        ...forum,
                        likeCount: forum.likeCount + 1,
                        alreadyLiked: true,
                        dislikeCount: forum.alreadyDisliked ? forum.dislikeCount - 1 : forum.dislikeCount,
                        alreadyDisliked: false
                    };
                }
                return forum;
            }));
            toast.success("Post liked successfully!");
        } catch (error) {
            console.error('Error liking the post:', error);
            toast.error("Error liking the post.");
        }
    };
    
    

    const handleDislike = async (id) => {
        try {
            // Fetch current dislikes to check if the user has already disliked this forum
            const dislikesResponse = await fetch('https://fitness-tracker-server-tan.vercel.app/dislike');
            const dislikesData = await dislikesResponse.json();
    
            // Check if the user already disliked this forum
            const alreadyDisliked = dislikesData.some(dislike => dislike.forumId === id && dislike.userEmail === user?.email);
            if (alreadyDisliked) {
                toast.error("You have already disliked this post.");
                return;
            }
    
            // Proceed with disliking the forum post
            const response = await fetch('https://fitness-tracker-server-tan.vercel.app/dislike', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    forumId: id,
                    userEmail: user?.email
                })
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Update the local state to reflect the new dislike count and reset the alreadyLiked flag
            setForums(forums.map(forum => {
                if (forum._id === id) {
                    return {
                        ...forum,
                        dislikeCount: forum.dislikeCount + 1,
                        alreadyDisliked: true,
                        likeCount: forum.alreadyLiked ? forum.likeCount - 1 : forum.likeCount,
                        alreadyLiked: false
                    };
                }
                return forum;
            }));
    
            toast.success("Post disliked successfully!");
        } catch (error) {
            console.error('Error disliking the post:', error);
            toast.error("Error disliking the post.");
        }
    };
    
    
    
    return (
        <div>
            <Helmet>
                <title>FitNezz | Forum</title>
            </Helmet>

            <div className="flex flex-col ml-10 w-10/12">
                {
                    forums.map(forum => (
                        <div key={forum._id} className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                                <img src={forum?.photo} alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                                <div className="flex flex-col space-y-3">
                                    <h4 className="text-lg font-semibold text-center md:text-left text-transform: uppercase">{forum?.name}</h4>
                                    <span className="inline-flex items-center px-2 py-1 w-[130px] bg-green-200 hover:bg-green-300 rounded-full text-sm font-semibold text-green-600">
                                        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>
                                        <span className="ml-1 text-transform: uppercase">
                                            {forum?.role}
                                        </span>
                                    </span>
                                    <p className="">Posted: {forum?.formattedDate}</p>
                                    <p className="">{forum?.post}</p>
                                </div>

                            </div>
                            <div className="flex gap-10 pt-3 pl-32">
                                <button onClick={() => handleLike(forum._id)}>
                                    <FaThumbsUp className="text-3xl" />
                                    <span>{forum.likeCount}</span>
                                </button>
                                <button onClick={() => handleDislike(forum._id)}>
                                    <FaThumbsDown className="text-3xl" />
                                    <span>{forum.dislikeCount}</span>
                                </button>
                            </div>
                        </div>
                    ))
                }



            </div>
        </div>
    );
};

export default Forum;