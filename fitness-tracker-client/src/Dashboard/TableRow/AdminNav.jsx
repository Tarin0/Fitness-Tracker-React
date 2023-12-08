import MenuItem from "../Sidebar/MenuItem";

import { FaBalanceScale,FaRegUser, FaUserCheck, FaUsers } from "react-icons/fa";

const AdminNav = () => {
    return (
        <>
            <nav>
                        <MenuItem
                            icon={FaUserCheck}
                            label='All Subscribers'
                            address='subscribers'
                        />

                        <MenuItem
                            icon={FaUsers}
                            label='All Trainers'
                            address='trainers'
                        />
                        <MenuItem
                            icon={FaRegUser}
                            label='Applied Trainers'
                            address='applied-trainers'
                        />
                        <MenuItem
                                icon={FaRegUser}
                                label='Add New Forum'
                                address='add-forum'
                            />
                        <MenuItem
                            icon={FaBalanceScale}
                            label='Balance'
                            address='balance'
                        />
                    </nav>
        </>
    );
};

export default AdminNav;