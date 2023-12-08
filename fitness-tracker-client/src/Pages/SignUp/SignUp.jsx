
import { Link, useNavigate } from 'react-router-dom';
import '../Login/Login.css'

import { FaEnvelope, FaLock, FaPhotoVideo, FaUser } from "react-icons/fa";
import SocialLogin from '../Login/SocialLogin';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import { getToken, saveUser } from '../../api/auth';

const SignUp = () => {
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    // console.log(location.state);
    const handleSignUp = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/;

        if (!passwordRegex.test(password)) {
            toast.error('Password length at least six characters , one Capital letter & one special character:');
            return;
        }
        else {


            try {
                const result = await createUser(email, password)
                await updateUserProfile(name, photo);

                const dbResponse = await saveUser(result?.user);
                console.log(dbResponse);
                toast.success('User registered  successfully');
                await getToken(result?.user?.email);
                navigate('/');

            }
            catch (err) {
                toast.error(err?.message);
            }

            // createUser(email, password)
            //     .then(result => {
            //         // console.log(result.user);
            //         toast.success('User registered  successfully');
            //         const user = { email, name, photo };
            //         fetch('https://job-portal-server-lemon.vercel.app/user', {
            //             method: 'POST',
            //             headers: {
            //                 'content-type': 'application/json'
            //             },
            //             body: JSON.stringify(user)
            //         })
            //             .then(res => res.json())
            //             .then(data => {
            //                 console.log(data);
            //                 if (data.insertedId) {
            //                     toast.success('User added in DB');
            //                     navigate('/');
            //                 }
            //             })
            //     })
            //     .catch(error => {
            //         toast.error(error.message)
            //     })

        }
    }

    return (
        <div>
            <div className="container ">
                <div className="screen  w-[500px]">
                    <div className="screen__content">

                        <form onSubmit={handleSignUp} className="login">

                            <div className="flex gap-2 pt-12">

                                <p>Already have an account?</p>
                                <Link to="/login" className='underline text-green-800 font-semibold'> Login</Link>
                            </div>
                            <div className="login__field pt-6 pl-5">
                                <FaUser className="login__icon fas fa-user" />
                                <input name='name' type="text" className="login__input" placeholder="User name" />
                            </div>
                            <div className="login__field pt-6 pl-5">
                                <FaEnvelope className="login__icon fas fa-user" />
                                <input name='email' type="text" className="login__input" placeholder="Email" />
                            </div>
                            <div className="login__field pt-6 pl-5">
                                <FaPhotoVideo className="login__icon fas fa-user" />
                                <input name='photo' type="text" className="login__input" placeholder="Photo URL" />
                            </div>
                            <div className="login__field pt-6 pl-5">
                                <FaLock className="login__icon fas fa-lock" />
                                <input name='password' type="password" className="login__input" placeholder="Password" />
                            </div>
                            <button type='submit' className="btn login__submit">
                                <span className="button__text  text-center">Sign Up</span>


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

export default SignUp;