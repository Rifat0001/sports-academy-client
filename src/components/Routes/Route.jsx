import { createBrowserRouter } from "react-router-dom";
import Main from "../Layers/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Layers/DashBoard";
import UserHome from "../Pages/Dashboard/UserHome";
import OurClass from "../Pages/OurClass/OurClass";
import OurInstructor from "../Pages/OurInstructor/OurInstructor";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'class',
                element: <OurClass></OurClass>
            },
            {
                path: 'instructor',
                element: <OurInstructor></OurInstructor>
            }
        ]
    },
    // {
    //     path: 'dashboard',
    //     element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
    //     children: [
    //         {
    //             path: 'userhome',
    //             element: <UserHome></UserHome>
    //         }
    //     ]
    // }
]);