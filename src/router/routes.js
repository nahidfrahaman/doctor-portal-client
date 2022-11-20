import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appoinment/Appointment/Appointment.js";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignIN from "../Pages/Signup/SignIN";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element:<Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>

        },
        {
          path:'/appointment',
          element: <Appointment></Appointment>
        },
        {
          path: '/signin',
          element:<SignIN></SignIN>
        },
        {
          path: '/dashboard',
          element: <PrivateRoute>
            <DashBoard></DashBoard>
          </PrivateRoute>
        }
       
      ]
    },
    
  
  ])
  