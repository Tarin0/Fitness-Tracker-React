import MenuItem from "../Sidebar/MenuItem";
import { FaBalanceScale, FaRegUser, FaUserCheck, FaUsers } from "react-icons/fa";


const TrainerNav = () => {
    return (
        <>
            <nav>
                            <MenuItem
                                icon={FaUserCheck}
                                label='Manage Slots'
                                address='manage-slots'
                            />

                            <MenuItem
                                icon={FaUsers}
                                label='Manage Member'
                                address='manage-member'
                            />
                            <MenuItem
                                icon={FaRegUser}
                                label='Add New Forum'
                                address='add-forum'
                            />
                            <MenuItem
                                icon={FaBalanceScale}
                                label='Add New Class'
                                address='add-class'
                            />
                        </nav>
        </>
    );
};

export default TrainerNav;