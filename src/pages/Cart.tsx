import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { FaArrowLeft, FaCheck, FaRegSadCry } from "react-icons/fa";
import { MdError } from "react-icons/md";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartReducerInitialState } from "../types/reducer-types";
import { addToCart, removeFromCart } from "../redux/reducer/cartReducer";
import { CartItem as CartItemType } from "../types/types";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Cart = () => {
    const { cartItems, subTotal, discount, shippingCharges, shippingInfo, tax, total } = useSelector((state: { cartReducer: CartReducerInitialState }) => state.cartReducer);

    const [couponCode, setCouponCode] = useState<string>("");
    const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

    const shippingInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
    }

    const dispatch = useDispatch();

    const incrementQuantityHandler = async (cartItem: CartItemType) => {

        if (cartItem.stock === cartItem.quantity) {
            toast.error("Product is out of stock.");
            return;
        }
        dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity + 1 }));

    }

    const decrementQuantityHandler = async (cartItem: CartItemType) => {

        if (cartItem.quantity === 1) {
            dispatch(removeFromCart(cartItem.productId));
            return;
        }
        dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity - 1 }));
    }
    const removeHandler = async (productId: string) => {

        dispatch(removeFromCart(productId));

    }


    const display: ReactNode = (
        <div className="lg:col-span-2 m-4 xl:m-8 border-b-2 border-slate-900 dark:border-slate-100">
            <div className="font-bold flex justify-between items-center text-lg lg:text-2xl font-mono">
                <p>Shopping Cart</p>
                <p>{cartItems.length} Items</p>
            </div>
            <div className="border-b-2 border-slate-900 dark:border-slate-100 mt-8 "></div>
            <div className="my-8">
                {cartItems.length === 0 && (
                    <div className="hidden sm:flex gap-16 xl:gap-28 my-4 justify-center font-bold items-center font-mono">
                        <p>Product Details</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                    </div>
                )}
                {cartItems.length === 0 ? (
                    <div className=" flex gap-2 items-center justify-center font-mono text-lg border-slate-500 border w-fit px-3 py-1 rounded-xl mx-auto text-center mt-5">
                        <div>  No items Added</div>
                        <FaRegSadCry />
                    </div>
                ) : (
                    cartItems.map((cartItem) => <CartItem key={cartItem.productId} cartItem={cartItem} incrementQuantityHandler={incrementQuantityHandler} decrementQuantityHandler={decrementQuantityHandler} removeHandler={removeHandler} />)
                )}
            </div>
            <Link to="/search" className="mb-4">
                <button className="m-3 border-2 text-center border-slate-900 dark:border-slate-100 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-slate-100 dark:hover:border-slate-100 hover:border-slate-900 hover:scale-115 flex justify-center items-center gap-1 font-semibold bg-slate-900 text-slate-100 px-3 rounded-full py-1 dark:bg-slate-100 dark:text-slate-900 mx-auto">
                    <FaArrowLeft />
                    <span className="font-mono text-sm">Continue Shopping</span>
                </button>
            </Link>
        </div>
    );

    const [firstContent, setFirstContent] = useState<ReactNode>(display);
    const [secondContent, setSecondContent] = useState<string>("Checkout");

    const toggleUI = () => {
        setSecondContent("Checkout");
        setFirstContent(display);
    };

    const changeUI = () => {
        setSecondContent("Pay Now");
        setFirstContent(
            <div className="lg:col-span-2 order-1 m-4 xl:m-8 border-b-2 border-slate-900 dark:border-slate-100">
                <div className="font-bold flex justify-center items-center text-lg lg:text-2xl font-mono">
                    <p>Billing Address</p>
                </div>
                <div className="border-b-2 border-slate-900 dark:border-slate-100 mt-8 "></div>
                <div>
                    <form className="flex text-slate-900 bg-slate-100 dark:text-slate-100 dark:bg-slate-900 flex-col items-start w-[80%] mx-auto gap-2 font-serif mt-4">
                        <div className="flex flex-col mt-3 ml-3 gap-2 w-full">
                            <label htmlFor="address">Address</label>
                            <input
                                onChange={shippingInfoHandler}
                                required
                                value={shippingInfo.address}
                                type="text"
                                placeholder="Enter your address."
                                id="address"
                                className="rounded-xl px-3 py-1 border-slate-900 dark:border-slate-100 dark:bg-slate-900 border sm:w-[80%] w-full"
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 mt-3 ml-3 gap-3">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="name">Billing Name</label>
                                <input
                                    onChange={shippingInfoHandler}
                                    required
                                    value={shippingInfo.billingName}
                                    type="text"
                                    placeholder="Enter your name."
                                    id="name"
                                    className="rounded-xl px-3 py-1 border-slate-900 dark:border-slate-100 dark:bg-slate-900 border"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="country">Country</label>
                                <input
                                    onChange={shippingInfoHandler}
                                    required
                                    value={shippingInfo.country}
                                    type="text"
                                    placeholder="Enter your country."
                                    id="country"
                                    className="rounded-xl px-3 py-1 border-slate-900 dark:border-slate-100 dark:bg-slate-900 border"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="state">State</label>
                                <input
                                    onChange={shippingInfoHandler}
                                    required
                                    value={shippingInfo.state}
                                    type="text"
                                    placeholder="Enter your state."
                                    id="state"
                                    className="rounded-xl px-3 py-1 border-slate-900 dark:border-slate-100 dark:bg-slate-900 border"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="city">City</label>
                                <input
                                    onChange={shippingInfoHandler}
                                    required
                                    value={shippingInfo.city}
                                    type="text"
                                    placeholder="Enter your city."
                                    id="city"
                                    className="rounded-xl px-3 py-1 border-slate-900 dark:border-slate-100 dark:bg-slate-900 border"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    onChange={shippingInfoHandler}
                                    required
                                    value={shippingInfo.phoneNumber}
                                    type="text"
                                    placeholder="Enter your phone number."
                                    id="phone"
                                    className="rounded-xl px-3 py-1 border-slate-900 dark:border-slate-100 dark:bg-slate-900 border"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="pincode">Pin Code</label>
                                <input
                                    onChange={shippingInfoHandler}
                                    required
                                    value={shippingInfo.pinCode}
                                    type="text"
                                    placeholder="Enter your pincode."
                                    id="pincode"
                                    className="rounded-xl px-3 py-1 border-slate-900 dark:border-slate-100 dark:bg-slate-900 border"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="email">Email</label>
                                <input
                                    onChange={shippingInfoHandler}
                                    required
                                    value={shippingInfo.email}
                                    type="email"
                                    placeholder="Enter your email."
                                    id="email"
                                    className="rounded-xl px-3 py-1 border-slate-900 dark:border-slate-100 dark:bg-slate-900 border"
                                />
                            </div>
                            <div className="mb-4">
                                <button onClick={toggleUI} className="mt-3 border-2 text-center border-slate-900 dark:border-slate-100 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-slate-100 dark:hover:border-slate-100 hover:border-slate-900 hover:scale-115 flex justify-center items-center gap-1 font-semibold bg-slate-900 text-slate-100 px-2 rounded-full py-1 dark:bg-slate-100 dark:text-slate-900 mx-auto">
                                    <FaArrowLeft />
                                    <span className="font-mono text-sm">Order Details</span>
                                </button>
                            </div>
                        </div>
                        <div className="mx-auto">
                            <button className="product-btn" type="submit">
                                Pay Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (Math.random() > 0.5) {
                setIsValidCouponCode(true);
            } else {
                setIsValidCouponCode(false);
            }
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
            setIsValidCouponCode(false);
        };
    }, [couponCode]);

    return (
        <div>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 bg-slate-100 text-slate-900 dark:bg-slate-900 mt-3 rounded-xl dark:text-slate-100">
                    {firstContent}
                    <div className="lg:col-span-1 m-4 xl:m-8 text-slate-100 bg-slate-900 dark:bg-slate-100 dark:text-slate-900 rounded-xl">
                        <div className="mt-5">
                            <div className="font-bold font-mono text-center text-2xl">
                                <p>Order Summary</p>
                            </div>
                            <div className="border-b-2 border-slate-900 dark:border-slate-100 mt-8 "></div>
                            <div className="flex justify-center lg:justify-around items-center my-5 gap-4 lg:gap-[1px]">
                                <div className="font-semibold">
                                    <p className="py-4">Subtotal :-</p>
                                    <p className="py-4">Shipping Charges :-</p>
                                    <p className="py-4">Discount :-</p>
                                    <p className="py-4">Tax :-</p>
                                    <p className="py-4 font-bold">Total :-</p>
                                </div>
                                <div className="font-thin">
                                    <p className="py-4">$ {subTotal}</p>
                                    <p className="py-4">$ {shippingCharges}</p>
                                    <p className="py-4 text-red-500">-${discount}</p>
                                    <p className="py-4">$ {tax}</p>
                                    <p className="py-4 text-2xl">$ {total}</p>
                                </div>
                            </div>
                            <div className="text-center mb-2">
                                <input
                                    type="text"
                                    placeholder="Coupon Code"
                                    className="text-slate-900 dark:text-slate-100 dark:bg-slate-900 rounded-xl px-4 py-1 text-center focus:outline-none"
                                    onChange={(event) => setCouponCode(event.target.value)}
                                />
                            </div>
                            {couponCode && (
                                isValidCouponCode ? (
                                    <div className="flex justify-center items-center mt-4 text-green-500 font-semibold gap-2 w-[80%] line-clamp-1">
                                        <FaCheck />
                                        <span>${discount} Off using the {couponCode}</span>
                                    </div>
                                ) : (
                                    <div className="flex justify-center items-center mt-4 text-red-500 font-semibold gap-2">
                                        <MdError />
                                        <span>Invalid Coupon Code</span>
                                    </div>
                                )
                            )}
                            {cartItems.length > 0 && secondContent === 'Checkout' && (
                                <div className="text-center">
                                    <button className="dark:text-slate-100 dark:bg-slate-900 m-3 border-2 text-center uppercase border-slate-900 dark:border-slate-100 hover:bg-slate-900 hover:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900 dark:hover:border-slate-900 hover:border-slate-100 hover:scale-115 bg-slate-100 px-4 py-1 text-slate-900 rounded-full my-10" onClick={changeUI}>
                                        {secondContent}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
