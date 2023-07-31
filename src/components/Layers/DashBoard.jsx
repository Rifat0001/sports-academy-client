import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaHome, FaHourglassHalf, FaHouseUser, FaReceipt, FaSchool, FaUserGraduate, FaUserShield, FaUserTie } from "react-icons/fa";

const DashBoard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="">
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-primary drawer-button lg:hidden"
                    >
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-primary text-white font-bold text-xl space-y-4">

                        <>
                            <div className="flex items-center justify-center py-8">
                                <div className="w-20 text-center">
                                    {user?.photoURL ? (
                                        <img
                                            src={`${user?.photoURL}`}
                                            alt=""
                                            className="rounded-full w-10"
                                        />
                                    ) : (
                                        <FaUserShield size={30} color="#ff3811" />
                                    )}
                                </div>
                                <h2 className="">{user?.displayName}</h2>
                            </div>
                            <hr />
                            <li>
                                <NavLink to="userhome"> <FaHouseUser></FaHouseUser> User Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="mycart"> <FaSchool></FaSchool> My Selected Class</NavLink>
                            </li>
                            <li>
                                <NavLink to="enrolledclasses"> <FaUserGraduate></FaUserGraduate> My Enrolled Class</NavLink>
                            </li>
                            <li>
                                <NavLink to="paymenthistory"> <FaReceipt></FaReceipt> Payment History</NavLink>
                            </li>
                        </>

                        <hr />
                        <li>
                            <NavLink to="/"> <FaHome></FaHome> Home Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/classes"> <FaHourglassHalf></FaHourglassHalf> All Classes</NavLink>
                        </li>
                        <li>
                            <NavLink to="/instructors"> <FaUserTie></FaUserTie> Instructors</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;