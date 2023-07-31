import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../hooks/useCart';

const ClassCart = ({ course }) => {
    const { _id, course_name, course_instructor, price, seats, url } = course;
    const { user } = useContext(AuthContext);
    // for update the add to cart length after clicking each time 
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToCart = course => {
        console.log(course);

        if (user) {
            const cartItem = { cartItem: _id, course_name, course_instructor, price, url, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Food added successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card my-5 w-96 bg-base-100 shadow-xl">
            <figure><img src={url} className="w-full h-[250px]" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold text-primary">{course_name}</h2>
                <p className="font-semibold text-lg"><span className="font-bold me-4">Instructor:</span>{course_instructor}</p>
                <p className="font-semibold text-lg"><span className="font-bold me-4">Available Seats:</span>{seats}</p>
                <p className="font-semibold text-lg"><span className="font-bold me-4">Price:</span>${price}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(course)} className="btn text-white btn-primary w-full">Enroll Now <FaShoppingCart></FaShoppingCart> </button>
                </div>
            </div>
        </div>
    );
};

export default ClassCart;