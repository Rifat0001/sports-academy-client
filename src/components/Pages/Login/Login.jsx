import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import Swal from "sweetalert2";
import login from '../../../assets/login.jpg'
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { useState } from "react";
const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .catch((err) => {
                console.log(err);
                alert('Give Correct Email and Password')
            });
    };
    return (
        <div className="max-w-[1920px] mx-auto xl:px-28 md:px-10 sm:px-4 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <img
                        src={login}
                        alt=""
                    />
                </div>
                <div>
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered bg-white rounded-none"
                                {...register("email", { required: true })}
                            />
                            {errors.email?.type === "required" && (
                                <span className="font-bold text-error">Email is required</span>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="w-full flex">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Your Password"
                                    className="input input-bordered rounded-none border-r-0 bg-white w-11/12"
                                    {...register("password", {
                                        required: true,
                                    })}
                                />
                                <button
                                    type="button"
                                    className="bg-primary input-bordered input border-l-0 rounded-none w-1/12"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <RiEyeFill className="text-white" /> : <RiEyeOffFill className="text-white" />}
                                </button>
                            </div>
                            {errors.password?.type === "required" && (
                                <span className="font-bold text-error">
                                    Password is required.
                                </span>
                            )}
                        </div>

                        <div className="form-control mt-6">
                            <input
                                type="submit"
                                className="btn btn-primary rounded-none"
                                value="Login"
                            />
                        </div>
                    </form>

                    <div className="text-center card-body">
                        <GoogleSignIn></GoogleSignIn>
                        <p>
                            New to this website? Please
                            <Link to="/register" className="text-primary font-bold"> Register</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;