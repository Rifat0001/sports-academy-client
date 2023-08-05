import { Elements } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);
const Payment = () => {
    const { _id } = useParams();
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchCartItem = async () => {
            try {
                const response = await axios.get(`https://myapp-nine-iota.vercel.app/carts/${_id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access-token')}`,
                    },
                });

                const data = response.data;
                setItem(data);
                setLoading(false)
            } catch (error) {
                console.log('Error:', error);
                setError(error)
                setLoading(false)
            }
        };

        fetchCartItem();
    }, [_id])
    console.log(item);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    // const [cart] = useCart();
    // const items = cart.map(item => item)
    // console.log(items);
    // const total = cart.reduce((sum, item) => sum + item.price, 0);

    const price = parseFloat(item.price?.toFixed(2))
    console.log(price)
    return (
        <div className="w-full xl:px-28 md:px-10 sm:px-2">
            <h2>Payment</h2>
            <Elements stripe={stripePromise}>

                <CheckoutForm item={item} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;