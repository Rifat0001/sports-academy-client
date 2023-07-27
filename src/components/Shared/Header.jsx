import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
const Header = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const user = false;

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("black");
        } else {
            setTheme("light");
        }
    };
    const navOptions = (
        <>
            <li>
                <Link to="/" className="font-bold text-[20px] ">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/instructors" className="font-bold text-[20px] ">
                    Instructors
                </Link>
            </li>
            <li>
                <Link to="/classes" className="font-bold text-[20px] ">
                    Classes
                </Link>
            </li>
            {/* <li>
            <Link to="/dashboard" className="font-bold text-[20px] ">
              Dashboard
            </Link>
          </li> */}

            {/* to do make admin  */}

        </>
    );
    return (
        <div className={`bg-orange-300 border-b-2 border-primary shadow-md py-4 `}>
            <div className="navbar max-w-[1920px] mx-auto xl:px-20 md:px-10 sm:px-2">
                <div className="navbar-start">
                    <div className="dropdown z-10">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navOptions}
                        </ul>
                    </div>
                    <Link
                        to="/"
                        className="font-bold  uppercase tracking-wide flex items-center"
                    >
                        <p className="flex flex-col">
                            <h1 className="text-3xl  text-primary italic drop-shadow-lg font-bold">Sports Mania</h1>
                        </p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navOptions}</ul>
                </div>
                <div className="navbar-end gap-4">
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input
                            type="checkbox"
                            onChange={handleToggle}
                            checked={theme === "light" ? false : true}
                        />

                        {/* sun icon */}
                        <svg
                            className="swap-on fill-current w-10 h-10"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-off fill-current w-10 h-10"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                    {user ? (
                        <div className="flex flex-row items-center gap-5">
                            <label
                                className="tooltip"
                                data-tip={`${user.displayName ? user.displayName : ""}`}
                            >
                                <div className="w-10 ">
                                    {user.photoURL ? (
                                        <img
                                            src={`${user?.photoURL}`}
                                            alt=""
                                            className="rounded-full w-10"
                                        />
                                    ) : (
                                        <FaUserShield size={30} color="#ff3811" />
                                    )}
                                </div>
                            </label>
                            <button
                                className="btn btn-error text-white font-bold"

                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="btn btn-primary text-white rounded-md font-bold"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;