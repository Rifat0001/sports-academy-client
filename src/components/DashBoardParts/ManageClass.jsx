import React, { useState } from 'react';
import useClass from '../hooks/useClass';
import Swal from 'sweetalert2';

const ManageClass = () => {
    const [classData, refetch] = useClass();
    const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedFeedback, setSelectedFeedback] = useState("");

    const handleApprove = async (item) => {
        fetch(`https://myapp-nine-iota.vercel.app/class/approve/${item._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Approved",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    const handleDeny = (item) => {
        fetch(`https://myapp-nine-iota.vercel.app/class/denied/${item._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Denied",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    const handleFeedback = (item) => {

        setFeedbackModalOpen(true);
        setSelectedClass(item);
    };

    const handleSubmitFeedback = () => {

        fetch(
            `https://myapp-nine-iota.vercel.app/class/feedback/${selectedClass._id}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    feedback: selectedFeedback,
                }),
            }
        )
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Feedback Given",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })


        setFeedbackModalOpen(false);
        setSelectedClass(null);
        setSelectedFeedback("");
    };


    return (
        <div className="w-full">
            <h2 className='ms-4'>Manage Classes</h2>
            <div className="overflow-x-auto py-6 mx-3">
                <table className="table table-xs">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="font-bold text-sm text-black">#</th>
                            <th className="font-bold text-sm text-black">Image</th>
                            <th className="font-bold text-sm text-black">Name</th>
                            <th className="font-bold text-sm text-black">Instructor</th>
                            <th className="font-bold text-sm text-black">Email</th>
                            <th className="font-bold text-sm text-black">Price</th>
                            <th className="font-bold text-sm text-black">Available Seats</th>
                            <th className="font-bold text-sm text-black">Status</th>
                            <th className="font-bold text-sm text-black">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {classData.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-bold">{item.name}</td>
                                <td className="font-bold">{item?.instructor}</td>
                                <td className="font-bold">{item?.email}</td>
                                <td className="text-start font-bold">${item.price}</td>
                                <td className="text-center font-bold">{item.availableSeats}</td>
                                <td className="text-center font-bold">{item.status}</td>
                                <td>
                                    <button
                                        onClick={() => handleApprove(item)}
                                        className="btn btn-success btn-sm"
                                        disabled={item.status !== "pending"}
                                    >
                                        Approve
                                    </button>
                                    <button
                                        onClick={() => handleDeny(item)}
                                        className="btn mx-5 btn-error btn-sm"
                                        disabled={item.status !== "pending"}
                                    >
                                        Deny
                                    </button>
                                    <button
                                        onClick={() => handleFeedback(item)}
                                        className="btn btn-warning btn-sm"
                                        disabled={item.status == "approved" || item.status == "pending"}
                                    >
                                        Feedback
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {feedbackModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="modal modal-open">
                        <div className="modal-box">
                            <h3 className="text-lg font-bold mb-4">Send Feedback</h3>
                            <p className="mb-2">Class: {selectedClass?.name}</p>
                            <textarea
                                className="textarea textarea-bordered w-full"
                                placeholder="Enter your feedback"
                                value={selectedFeedback}
                                onChange={(e) => setSelectedFeedback(e.target.value)}
                            />
                            <div className="modal-action">
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setFeedbackModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="btn btn-primary"
                                    onClick={handleSubmitFeedback}
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageClass;