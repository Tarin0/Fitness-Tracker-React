import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage";
import Classes from "../Pages/Classes/Classes";
import Trainer from "../Pages/Trainer/Trainer";
import Gallery from "../Pages/Gallery/Gallery";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TrainerForm from "../Pages/Trainer/TrainerForm";
import DashboardLayout from "../Layout/DashboardLayout";
import Subscribers from "../Dashboard/Admin/Subscribers";
import AllTrainers from "../Dashboard/Admin/AllTrainers";
import AppliedTrainers from "../Dashboard/Admin/AppliedTrainers";
import Profile from "../Dashboard/Admin/Profile";
import Balance from "../Dashboard/Admin/Balance";
import Payment from "../Pages/Payment/Payment";
import ManageSlots from "../Dashboard/Trainer/ManageSlots";
import ManageMember from "../Dashboard/Trainer/ManageMember";
import AddForum from "../Dashboard/Trainer/AddForum";
import AddClass from "../Dashboard/Trainer/AddClass";
import ClassBooking from "../Pages/Classes/ClassBooking";
import Forum from "../Pages/Forum/Forum";
import Location from "../Pages/Location/Location";
import TrainerDetails from "../Pages/Trainer/TrainerDetails";
import Blog1 from "../Pages/Home/BlogSection.jsx/Blog1";
import Blog2 from "../Pages/Home/BlogSection.jsx/Blog2";
import Blog3 from "../Pages/Home/BlogSection.jsx/Blog3";
import Blog4 from "../Pages/Home/BlogSection.jsx/Blog4";
import Blog5 from "../Pages/Home/BlogSection.jsx/Blog5";
import Blog6 from "../Pages/Home/BlogSection.jsx/Blog6";
import Activities from "../Dashboard/Member/Activities";
import RecommendedClass from "../Dashboard/Member/RecommendedClass";
import ProfileUpdate from "../Dashboard/Member/ProfileUpdate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/blog1',
        element: <Blog1/>
      },
      {
        path: '/blog2',
        element: <Blog2/>
      },
      {
        path: '/blog3',
        element: <Blog3/>
      },
      {
        path: '/blog4',
        element: <Blog4/>
      },
      {
        path: '/blog5',
        element: <Blog5/>
      },
      {
        path: '/blog6',
        element: <Blog6/>
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>
      },
      {
        path: '/location',
        element: <Location></Location>
      },
      {
        path: '/trainer',
        element: (<PrivateRoute><Trainer></Trainer></PrivateRoute>),
        loader: () => fetch('https://fitness-tracker-server-tan.vercel.app/trainers')
      },
      {
        path: '/trainers/:id',
        element: (<PrivateRoute><TrainerDetails></TrainerDetails></PrivateRoute>),
        loader: ({ params }) => fetch(`https://fitness-tracker-server-tan.vercel.app/trainers/${params.id}`)
      },
      {
        path: '/classes',
        element: (<PrivateRoute><Classes></Classes></PrivateRoute>),
        loader: () => fetch('https://fitness-tracker-server-tan.vercel.app/classes')
      },
      {
        path: '/forum',
        element: (<PrivateRoute><Forum></Forum></PrivateRoute>),
        loader: () => fetch('https://fitness-tracker-server-tan.vercel.app/forum')
      },
      {
        path: '/trainer-form',
        element: (<PrivateRoute><TrainerForm></TrainerForm></PrivateRoute>)
      },
      {
        path: '/classes/:id',
        element: (<PrivateRoute><ClassBooking></ClassBooking></PrivateRoute>),
        loader: ({ params }) => fetch(`https://fitness-tracker-server-tan.vercel.app/classes/${params.id}`)
      }

    ]
  },
  { path: '/login', element: <Login /> },

  { path: '/signup', element: <SignUp></SignUp> },
  {
    path: '/dashboard',
    element:(<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>) ,
    children: [

      // admin nav 
      {
        path: 'subscribers',
        element:(<PrivateRoute> <Subscribers></Subscribers></PrivateRoute>) ,
        loader: () => fetch('https://fitness-tracker-server-tan.vercel.app/subscribers')
      },
      {
        path: 'trainers',
        element:(<PrivateRoute><AllTrainers></AllTrainers></PrivateRoute>) ,
        loader: () => fetch('https://fitness-tracker-server-tan.vercel.app/trainers')
      },
      {
        path: 'applied-trainers',
        element:(<PrivateRoute><AppliedTrainers></AppliedTrainers></PrivateRoute>)  ,
        loader: () => fetch('https://fitness-tracker-server-tan.vercel.app/applied-trainer')
      },
      {
        path: 'balance',
        element: <Balance></Balance>
      },
      {
        path: 'payment',
        element:(<PrivateRoute><Payment></Payment></PrivateRoute>) ,
        loader: () => fetch('https://fitness-tracker-server-tan.vercel.app/trainers')
      },
      {
        path: 'manage-slots',
        element:(<PrivateRoute><ManageSlots></ManageSlots></PrivateRoute>) ,
        loader: () => fetch('https://fitness-tracker-server-tan.vercel.app/trainer-slot')
        
      },
      {
        path: 'manage-member',
        element:(<PrivateRoute><ManageMember></ManageMember></PrivateRoute>) ,
        loader: () => fetch('https://fitness-tracker-server-tan.vercel.app/class-booking')
      },
      {
        path: 'add-forum',
        element:(<PrivateRoute><AddForum></AddForum></PrivateRoute>) ,
        loader: () => fetch('https://fitness-tracker-server-tan.vercel.app/user')
        
      },
      {
        path: 'add-class',
        element:(<PrivateRoute><AddClass></AddClass></PrivateRoute>) ,
        loader: () => fetch('https://fitness-tracker-server-tan.vercel.app/trainer-slot')
        
      },
      {
        path: 'activities',
        element:(<PrivateRoute><Activities></Activities></PrivateRoute>) ,
        loader: () => fetch('https://fitness-tracker-server-tan.vercel.app/classes')
        
      },
      {
        path: 'recommended-class',
        element:(<PrivateRoute><RecommendedClass></RecommendedClass></PrivateRoute>) ,
        loader: () => fetch('https://fitness-tracker-server-tan.vercel.app/class-booking')
        
      },
      {
        path: 'update-profile',
        element:(<PrivateRoute><ProfileUpdate></ProfileUpdate></PrivateRoute>) ,
        loader: () => fetch('https://fitness-tracker-server-tan.vercel.app/user')
        
      },




      {
        path: 'profile',
        element:(<PrivateRoute><Profile></Profile></PrivateRoute>) 
      }
    ]
  }


]);