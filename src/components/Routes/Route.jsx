import { createBrowserRouter } from "react-router-dom";
import Main from "../Layers/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Layers/DashBoard";
import OurClass from "../Pages/OurClass/OurClass";
import OurInstructor from "../Pages/OurInstructor/OurInstructor";
import UserHome from "../DashBoardParts/UserHome";
import Mycart from "../Pages/Dashboard/Mycart";
import ManageUser from "../DashBoardParts/ManageUser";
import Errorpage from "../Pages/ErrorPage/Errorpage";
import InstructorHome from "../DashBoardParts/InstructorHome";
import AdminHome from "../DashBoardParts/AdminHome";
import AddClass from "../DashBoardParts/AddClass";
import Instructorroute from "./Instructorroute";
import MyClass from "../DashBoardParts/MyClass";
import ManageClass from "../DashBoardParts/ManageClass";
import Adminroute from "./Adminroute";
import Payment from "../payment/Payment";
import EnrollClass from "../DashBoardParts/EnrollClass";
import Paymenthistory from "../DashBoardParts/Paymenthistory";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Errorpage></Errorpage>,
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
    {
        path: 'dashboard',
        element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
        children: [
            {
                path: 'userhome',
                element: <UserHome></UserHome>
            },
            {
                path: 'instructorhome',
                element: <InstructorHome></InstructorHome>
            },
            {
                path: 'adminhome',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'payment/:_id',
                element: <Payment></Payment>
            },
            {
                path: 'enrolledclasses',
                element: <EnrollClass></EnrollClass>
            },
            {
                path: 'paymenthistory',
                element: <Paymenthistory></Paymenthistory>
            },
            {
                path: 'addclass',
                element: <Instructorroute><AddClass></AddClass></Instructorroute>
            },
            {
                path: 'myclass',
                element: <MyClass></MyClass>
            },
            {
                path: 'manageclasses',
                element: <Adminroute><ManageClass></ManageClass></Adminroute>
            },
            {
                path: 'mycart',
                element: <Mycart></Mycart>
            },
            {
                path: 'manageusers',
                element: <Adminroute><ManageUser></ManageUser></Adminroute>
            }
        ]
    }
]);