import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { FaMoneyBill, FaRecycle, FaRemoveFormat, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Mycart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0).toFixed(2);
    const handleDelete = (items) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${items._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your item is deleted',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full xl:px-32">
            <div className="uppercase flex items-center justify-between font-bold gap-6">
                <h3 className="text-xl">Total Items: {cart.length}</h3>
                <h3 className="text-xl">Total Price: ${total}</h3>
                {/* <Link to="/dashboard/payment">
            <button className="btn btn-secondary">Pay Now</button>
          </Link> */}
            </div>
            <div className="overflow-x-auto py-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="font-bold text-xl text-black">#</th>
                            <th className="font-bold text-xl text-black">Image</th>
                            <th className="font-bold text-xl text-black">Name</th>
                            <th className="font-bold text-xl text-black">Price</th>
                            <th className="font-bold text-xl text-black">Pay</th>
                            <th className="font-bold text-xl text-black">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {cart.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className=" w-20 rounded h-12">
                                                <img
                                                    src={item.url}

                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-bold">{item.course_name}</td>
                                <td className="text-start font-bold">${item.price}</td>
                                <td>
                                    <Link
                                        to={`/dashboard/payment/${item._id}`}

                                    >
                                        <button className="btn bg-green-600 hover:bg-green-700 text-white btn-sm">Pay <FaMoneyBill className='text-xl'></FaMoneyBill> </button>
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(item)}
                                        className="btn btn-sm hover:bg-red-600 bg-red-500 text-white"
                                    >
                                        Delete <FaTrash className='text-xl'></FaTrash>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mycart;