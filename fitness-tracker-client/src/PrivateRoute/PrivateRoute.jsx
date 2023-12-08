import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children}) => {
const {user,loading} =useAuth();
const  location= useLocation();

if(loading)
{
    return <span className="loading loading-spinner loading-lg"></span>
}
if(user?.email)
    {
        
    return children;
    } 
    
    return <Navigate state={location.pathname} to="/login" replace></Navigate>
    // return <Navigate state={{from: location}} to="/login" replace='true'></Navigate>
};

export default PrivateRoute;