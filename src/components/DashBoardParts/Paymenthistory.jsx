import { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { AuthContext } from '../Provider/AuthProvider';

const Paymenthistory = () => {
    const [paymentData, setPaymentData] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext)

    useEffect(() => {
        axiosSecure.get("/payments")
            .then((res) => {
                const userPaymentData = res.data.filter((item) => item.email === user?.email);
                const sortedData = userPaymentData.sort((a, b) => new Date(b.date) - new Date(a.date));
                setPaymentData(sortedData);
            })
            .catch((error) => {
                console.error("Failed to fetch paid items:", error);
            });
    }, [axiosSecure, user]);
    return (
        <div className=" overflow-x-auto w-full xl:px-32 md:px-10 sm:px-2">
            <h2>Payment History</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Transaction ID</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {paymentData.map((payment) => (
                        <tr key={payment._id}>
                            <td>{payment.email}</td>
                            <td>{payment.transactionId}</td>
                            <td>{payment.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Paymenthistory;