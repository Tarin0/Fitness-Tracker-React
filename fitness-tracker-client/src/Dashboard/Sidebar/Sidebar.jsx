import { useState } from 'react'

// Icons
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'

import MenuItem from './MenuItem'
import ToggleBtn from '../../Shared/ToggleBtn'
import useAuth from '../../hooks/useAuth';
import useRole from '../../hooks/useRole';
import TrainerNav from '../TableRow/TrainerNav';
import AdminNav from '../TableRow/AdminNav'
import MemberNav from '../TableRow/MemberNav'
import { FaHome, FaUser } from 'react-icons/fa'
import { IoSettings } from "react-icons/io5";
const Sidebar = () => {
    const [toggle, setToggle] = useState(false)
    const [isActive, setActive] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const {logOut } = useAuth();
    const {role} = useRole();
    console.log('role',role);
    //   For guest/host menu item toggle button
    const toggleHandler = event => {
        setToggle(event.target.checked)
    }
    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <img className='w-10 h-10' src="/img/logo.svg" alt="" />
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto'>
                            <img className='w-14 h-14' src="/img/logo.svg" alt="" />
                            <p>FitNezz</p>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        {/* If a user is host */}
                        <nav>
                        <MenuItem
                            icon={FaHome}
                            label='Home'
                            address='/'
                        />
                        <hr />
                        </nav>
                       
                        
                        {/* Admin nav  */}
                        {role ==='admin' && <AdminNav></AdminNav>}
                        {/* trainer nav */}
                        {role ==='trainer' && <TrainerNav></TrainerNav>}
                        {/* trainer nav */}
                        {role ==='member' && <MemberNav></MemberNav>}
                        <MenuItem
                                icon={IoSettings}
                                label='Profile Settings'
                                address='update-profile'
                            />
                        
                    </div>
                    
                </div>

                <div>
                    <hr />

                    <MenuItem
                        icon={FaUser}
                        label='Profile'
                        address='profile'
                    />
                    <button onClick={logOut} className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar
