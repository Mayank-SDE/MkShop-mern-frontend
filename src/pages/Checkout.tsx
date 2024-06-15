import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { NewOrderRequestBody } from '../types/api-types';
import { useSelector } from 'react-redux';
import { CartReducerInitialState, UserReducerInitialState } from '../types/reducer-types';
import { useNewOrderMutation } from '../redux/api/orderAPI';
import { resetCart } from '../redux/reducer/cartReducer';
import { useDispatch } from 'react-redux';



const stripePromise = loadStripe('pk_test_51P7tQlSEQClnb0YAArYSa3wc2uTthagoOUQUDt1JpNwTRgoHSQsLRxJMf29BDWdMhXXMZXoAvDUNq6SI71vam43300zCqcXCMt');

const CheckoutForm = () => {

    const { user } = useSelector(
        (state: { userReducer: UserReducerInitialState }) => state.userReducer
    );

    const { cartItems, subTotal, discount, shippingCharges, shippingInfo, tax, total } = useSelector(
        (state: { cartReducer: CartReducerInitialState }) => state.cartReducer
    );

    const [newOrder] = useNewOrderMutation();
    const dispatch = useDispatch();

    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        setIsProcessing(true);

        const orderData: NewOrderRequestBody = {
            orderItems: cartItems,
            subTotal,
            discount,
            shippingCharges,
            shippingInfo,
            tax,
            total,
            status: "Placed",
            user: user?._id as string
        };
        const { paymentIntent, error } = await stripe.confirmPayment({
            elements,
            confirmParams: { return_url: window.location.origin },
            redirect: "if_required"
        });
        if (error) {
            setIsProcessing(false);
            return toast.error(error.message || "Transaction failed.");
        }

        if (paymentIntent.status === 'succeeded') {

            try {
                const response = await newOrder(orderData).unwrap();
                if (response.success) {
                    dispatch(resetCart());
                    toast.success(response.message);
                } else {
                    toast.error(response.message);

                }
            } catch (error) {
                console.error(error);
                toast.error("Processing order failed. Please try again.");
            }
            navigate("/orders");
        }
        setIsProcessing(false);
    }
    return <div className='container flex justify-center items-center mt-[100px] '>

        <form className='w-fit rounded-3xl text-sm font-mono bg-slate-100 text-slate-900  dark:text-slate-100 border border-slate-500  flex flex-col gap-4 justify-center items-center p-4 ' onSubmit={submitHandler}>
            <PaymentElement />
            <button type='submit' disabled={isProcessing} className='px-3 bg-green-500 hover:bg-green-600 py-1 text-slate-100 font-bold text-sm rounded-full'>
                {isProcessing ? "Processing..." : "Pay"}
            </button>
        </form>
    </div>
}

const Checkout = () => {
    const location = useLocation();
    const clientSecret: string | undefined = location.state;
    if (!clientSecret) {
        return <Navigate to={"/shipping"} />
    }
    return (
        <Elements options={{
            clientSecret
        }} stripe={stripePromise} >
            <CheckoutForm />
        </Elements>
    )
}

export default Checkout