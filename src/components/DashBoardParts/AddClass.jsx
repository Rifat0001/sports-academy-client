import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Provider/AuthProvider';

const AddClass = () => {
    const { user } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: {
            studentsEnrolled: 0,
        },
    });

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="w-full">
            <h2 className="font-bold text-4xl text-center">Add a Class</h2>
            <div className="card flex-shrink-0 w-full bg-base-100">
                <div className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <form >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Name*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Class Name"
                                className={`input input-bordered ${errors.name ? "input-error" : ""
                                    }`}
                                {...register("name", { required: true })}
                            />
                            {errors.name && (
                                <span className="text-xs text-red-500">
                                    Class Name is required
                                </span>
                            )}
                        </div>
                        <div className="flex items-center justify-between gap-5">
                            {/* Instructor Name */}
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Instructor Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Instructor Name"
                                    className="input input-bordered"
                                    readOnly
                                    value={user?.displayName}
                                    {...register("instructor", { required: true })} // Replace 'user?.displayName' with your actual instructor name value
                                />
                            </div>
                            {/* Instructor Email */}
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Instructor Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Instructor Email"
                                    className="input input-bordered"
                                    readOnly
                                    value={user?.email}
                                    {...register("email", { required: true })} // Replace 'user?.email' with your actual instructor email value
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-5">
                            {/* Available Seats */}
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Available Seats*</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Available Seats"
                                    className={`input input-bordered ${errors.availableSeats ? "input-error" : ""
                                        }`}
                                    {...register("availableSeats", { required: true })}
                                />
                                {errors.availableSeats && (
                                    <span className="text-xs text-red-500">
                                        Available Seats is required
                                    </span>
                                )}
                            </div>
                            {/* Price */}
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Price*</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Price"
                                    className={`input input-bordered ${errors.price ? "input-error" : ""
                                        }`}
                                    {...register("price", { required: true })}
                                />
                                <input
                                    type="number"
                                    placeholder="Enrolled Students"
                                    className="input input-bordered"
                                    hidden
                                    {...register("studentsEnrolled", {
                                        defaultValue: 0,
                                    })}
                                />

                                {errors.price && (
                                    <span className="text-xs text-red-500">
                                        Price is required
                                    </span>
                                )}
                            </div>
                            {/* Upload Image */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Upload Image*</span>
                                </label>
                                <input
                                    type="file"
                                    className="file-input file-input-bordered w-full max-w-xs"
                                    {...register("image", { required: true })}
                                />
                                {errors.image && (
                                    <span className="text-xs text-red-500">
                                        Image is required
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input
                                className="btn btn-primary"
                                type="submit"
                                value="Add Class"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddClass;