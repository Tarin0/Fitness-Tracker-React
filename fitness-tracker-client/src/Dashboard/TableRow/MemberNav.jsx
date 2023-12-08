
import { FaBalanceScale, FaRegUser, FaUserCheck, FaUsers } from "react-icons/fa";
import MenuItem from "../Sidebar/MenuItem";

const MemberNav = () => {
    return (
        <>
            <nav>
                            <MenuItem
                                icon={FaUserCheck}
                                label='Activity Log'
                                address='activities'
                            />
                            <MenuItem
                                icon={FaUserCheck}
                                label='Recommended Classes'
                                address='recommended-class'
                            />                          
                            
                        </nav>
        </>
    );
};

export default MemberNav;



