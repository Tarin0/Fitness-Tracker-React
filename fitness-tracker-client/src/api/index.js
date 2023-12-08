import axios from "axios";
import { clearCookie } from "./auth";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})


axiosSecure.interceptors.response.use(function (response) {
    return response;
}, async (error) => {
    const status = error.response.status;
    // console.log('status error in the interceptor', status);
    // for 401 or 403 logout the user and move the user to the login
    if (status === 401 || status === 403) {
        await clearCookie;
        window.location.replace('/login');
    }
    return Promise.reject(error);
}

)


export default axiosSecure