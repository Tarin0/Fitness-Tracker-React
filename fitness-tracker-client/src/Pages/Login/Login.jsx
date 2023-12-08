
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../Login/Login.css'

import { FaLock, FaUser } from "react-icons/fa";
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from './SocialLogin';
import { getToken } from '../../api/auth';
const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        try {
            const result = await signIn(email, password)
            await getToken(result?.user?.email);
            toast.success('User logged in successfully');
            navigate(location?.state ? location?.state : '/');

        }
        catch (err) {
            toast.error(err?.message);
        }

    };
    return (
        <div>
            <div className="container">
                <div className="screen w-[380px]">
                    <div className="screen__content">
                    
                        <form onSubmit={handleSubmit} className="login">
                            
                            <div className="flex gap-2 pt-28">
                                
                               <p>Do not have an account?</p>
                               <Link to="/signup" state={{ from: location }} className='underline text-green-800 font-semibold'> Signup</Link>
                            </div>
                            <div className="login__field pt-7">
                                <FaUser className="login__icon fas fa-user" />
                                <input type="email" name='email' className="login__input" placeholder="Your Email" />
                            </div>
                            <div className="login__field pt-7">
                                <FaLock className="login__icon fas fa-lock" />
                                <input type="password" name='password' className="login__input" placeholder="Your Password" />
                            </div>
                            <button className="btn login__submit ">
                                <span className="button__text text-center">Log In Now</span>
                               
                                
                            </button>
                        </form>
                        
                        <SocialLogin></SocialLogin>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>





           
        </div>
    );
};

export default Login;