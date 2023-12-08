import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import { getToken, saveUser } from "../../api/auth";


const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    // const location = useLocation();
    // console.log(location)
    const handleGoogleLogin = async () => {
        
        try {

            const result = await signInWithGoogle();
           console.log(result);
           console.log(result?.user);
           console.log(result?.user?.email);
            const updatedUser={
                email: result?.user?.email,
                role:'member',
                status:'Verified'
            }
            fetch(`https://fitness-tracker-server-tan.vercel.app/result?.user/${result?.user?.email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log("Update User Role Response:", data);
                if (data.modifiedCount > 0) {
                    console.log("User role updated successfully");
                } else {
                    console.log("User role not updated");
                }
                toast.success('User login  successfully');
            })
            // .catch(error => {
            //     console.error("Error updating trainer:", error);
            // });

            // const dbResponse = await saveUser(result?.user);
            // toast.success('User login  successfully');
            await getToken(result?.user?.email);
            navigate('/');

        }
        catch (err) {
            toast.error(err?.message);
        }           
    }

    return (
        <div className="">
            <div className="social-login text-2xl">
                            <h3>log in via</h3>
                            {/* <div className="divider text-teal-500"></div> */}
           
                            <div className="social-icons">
                            <button onClick={handleGoogleLogin} className="flex mx-auto mb-5"> <FaGoogle /></button>
                            </div>
                        </div>
        </div>
    );
};

export default SocialLogin;