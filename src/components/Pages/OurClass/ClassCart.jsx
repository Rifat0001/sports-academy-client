import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../hooks/useCart';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const ClassCart = ({ course }) => {
    const { _id, name, instructor, price, availableSeats, studentEnrolled, image, status } = course;
    const { user } = useContext(AuthContext);
    // for update the add to cart length after clicking each time 
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToCart = course => {
        console.log(course);

        if (user) {
            const cartItem = { cartItem: _id, name, instructor, price, image, email: user.email }
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
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const isSeatsAvailable = availableSeats > 0;
    const isAdminOrInstructor = user && (isAdmin || isInstructor);
    const isButtonDisabled = !isSeatsAvailable || isAdminOrInstructor;


    return (
        <div className={`card my-5 w-96  shadow-2xl ${availableSeats === 0 ? 'bg-error' : 'bg-base-100'} `}>
            <figure><img src={image} className="w-full h-[250px]" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold text-primary">{name}</h2>
                <p className="font-semibold text-lg"><span className="font-bold me-4">Instructor:</span>{instructor}</p>
                <p className="font-semibold text-lg"><span className="font-bold me-4">Available Seats:</span>{availableSeats}</p>
                <p className="font-semibold text-lg"><span className="font-bold me-4">Price:</span>${price}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(course)} disabled={isButtonDisabled} className="btn text-white btn-primary w-full">Enroll Now <FaShoppingCart></FaShoppingCart> </button>
                </div>
            </div>
        </div>
    );
};

export default ClassCart;