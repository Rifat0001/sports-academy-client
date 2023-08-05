import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from "../hooks/useAxiosSecure";
const EnrollClass = () => {
    const [paidItems, setPaidItems] = useState([]);
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get("/payments")
            .then((res) => {
                // setPaidItems(res.data);
                const userPaidItems = res.data.filter((item) => item.email === user?.email);
                console.log(userPaidItems);

                setPaidItems(userPaidItems);
            })
            .catch((error) => {
                console.error("Failed to fetch paid items:", error);
            });
    }, [axiosSecure, user]);


    return (
        <div className="overflow-x-auto w-full xl:px-32 md:px-10 sm:px-2">
            <h2 className="text-3xl text-primary">Enrolled Classes</h2>
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th className="text-xl font-semibold">#</th>
                        <th className="text-xl font-semibold">Item Name</th>
                        <th className="text-xl font-semibold">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {paidItems.map((item, index) => (
                        <tr key={item._id}>
                            <td className="text-xl font-semibold">{index + 1}</td>
                            <td className="text-xl font-semibold">{item.itemNames}</td>
                            <td className="text-xl font-semibold">{item.price}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EnrollClass;