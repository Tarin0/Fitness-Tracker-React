import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {

    const { user, logOut } = useAuth();
    const navigate = useNavigate();
    
    return (
        <div>
            <div className="navbar bg-base-100 mt-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/gallery">Gallery</NavLink></li>
                        <li><NavLink to="/trainer">Trainer</NavLink></li>
                        <li><NavLink to="/classes">Classes</NavLink></li>
                        <li><NavLink to="/forum">Forum</NavLink></li>
                        <li><NavLink to="/location">Location</NavLink></li>
                        </ul>
                    </div>
                    <a className="font-semibold  text-3xl">Fit<span className="text-green-500">Nezz</span></a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal flex gap-5 mr-52 text-green-600  font-medium text-xl bg-gradient-to-r from-[#68f75a] via-green-100 to-[#86d87f]">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/gallery">Gallery</NavLink></li>
                        <li><NavLink to="/trainer">Trainer</NavLink></li>
                        <li><NavLink to="/classes">Classes</NavLink></li>
                        <li><NavLink to="/forum">Forum</NavLink></li>
                        <li><NavLink to="/location">Location</NavLink></li>

                    </ul>
                </div>

                {
                    user?.email ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-16 rounded-xl ">
                                    <img className="w-10 h-10" src={user?.photoURL} alt={user?.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    
                                    <button className="btn btn-sm  btn-ghost">{user?.displayName}</button>

                                </li>
                                <li>
                                <Link className="btn btn-sm  btn-ghost" to="/dashboard">Dashboard</Link>
                                    

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                        :
                        <ul>
                            <li>

                                <div className="navbar-end md:flex">
            
                                    <Link className="btn text-xl bg-gradient-to-r from-[#71fc65] to-green-600 hover:from-green-400 hover:to-[#5ddd52]" to="/login">Login</Link>
                                </div>
                            </li>
                        </ul>

                }
            </div>
        </div>
    );
};

export default Navbar;