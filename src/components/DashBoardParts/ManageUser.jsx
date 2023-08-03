
import { useQuery } from '@tanstack/react-query';
import { FaGraduationCap, FaUserSecret } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';
const ManageUser = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure.get("/users");
        return res.data;
    });

    const handleAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `User is now Admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleInstructor = id => {
        fetch(`http://localhost:5000/users/instructor/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `User is now a Instructor`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div className="w-full xl:px-32">
            <h3 className="font-bold text-2xl">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    {user.role === "admin" ? (
                                        "Admin"
                                    ) : user.role === "student" ? (
                                        <>
                                            <button
                                                onClick={() => handleAdmin(user._id)}
                                                className="btn btn-sm bg-red-500 hover:bg-red-500 text-white"

                                            >
                                                <FaUserSecret></FaUserSecret> Make Admin
                                            </button>
                                            <button
                                                onClick={() => handleInstructor(user._id)}
                                                className="btn btn-sm bg-green-500 hover:bg-green-500 ms-4 text-white"

                                            >
                                                <FaGraduationCap></FaGraduationCap>   Make Instructor
                                            </button>
                                        </>
                                    ) : user.role === "instructor" ? (
                                        <button
                                            onClick={() => handleAdmin(user._id)}
                                            className="btn btn-sm bg-red-500 hover:bg-red-500 text-white"
                                        >
                                            Make Admin
                                        </button>
                                    ) : (
                                        user.role
                                    )}
                                </td>


                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;