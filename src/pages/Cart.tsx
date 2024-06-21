import { ChangeEvent, FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaRegCopy, FaRegSadCry } from "react-icons/fa";
import CartItem from "../components/CartItem";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, applyDiscount, calculatePrice, deleteFromCart, removeFromCart, saveShippingInfo } from "../redux/reducer/cartReducer";
import { CartItem as CartItemType, ShippingInfo } from "../types/types";
import toast from "react-hot-toast";
import axios from "axios";
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";
import { useGetAllCouponQuery } from "../redux/api/couponAPI";
import { server } from "../utils/config";
import { RootState } from "../redux/store";


const Cart = () => {
    const { user } = useSelector((state: RootState) => state.userReducer);
    const { cartItems, subTotal, discount, shippingCharges, shippingInfo, tax, total } = useSelector((state: RootState) => state.cartReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showCoupon, setShowCoupon] = useState<boolean>(false);
    const [updatedCartItems, setUpdatedCartItems] = useState<CartItemType[]>(cartItems);
    const [updatedShippingInfo, setUpdatedShippingInfo] = useState<ShippingInfo>(shippingInfo);
    const [couponCode, setCouponCode] = useState<string>("");
    const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);
    const [content, setContent] = useState<ReactNode>(null);
    const [buttonLabel, setButtonLabel] = useState<string>("Checkout");
    const [isCopied, setIsCopied] = useState<boolean>(false);
    let isLoadingCoupon = true;
    let couponsData = undefined;
    let isErrorData = false;
    // Fetching coupons if user is logged in
    if (user !== null) {
        const { isLoading, data, isError } = useGetAllCouponQuery();
        isLoadingCoupon = isLoading;
        couponsData = data;
        isErrorData = isError;
    }

    const discountRef = useRef(0);
    // Effect to save shipping info when it changes
    useEffect(() => {
        dispatch(saveShippingInfo(updatedShippingInfo));
    }, [updatedShippingInfo, dispatch]);

    // Effect to apply discount when coupon code changes
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (couponCode !== "") {
                axios.get(`${server}/api/v1/payment/discount?coupon=${couponCode}`, {
                    withCredentials: true,
                }).then(response => {
                    setIsValidCouponCode(true);
                    if (response.data.success) {
                        dispatch(applyDiscount(response.data.discount));
                        dispatch(calculatePrice());
                    }
                }).catch(() => {
                    dispatch(applyDiscount(0));
                    dispatch(calculatePrice());
                    setIsValidCouponCode(false);
                });
            }
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
            dispatch(applyDiscount(discountRef.current));
            setIsValidCouponCode(false);
            console.log("I render");
        };
    }, [couponCode, dispatch]);

    // Effect to handle coupon validity based on total and discount
    useEffect(() => {
        if (total + discount < discount) {
            toast.error("Coupon is not valid for this total amount.");
            setIsValidCouponCode(false);
            dispatch(applyDiscount(0));
            dispatch(calculatePrice());
        }
    }, [total, discount, dispatch]);

    // Effect to recalculate price when cart items change
    useEffect(() => {
        dispatch(calculatePrice());
    }, [updatedCartItems, dispatch]);

    // Handler to update shipping info fields
    const shippingInfoHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setUpdatedShippingInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handler to increment quantity of cart item
    const incrementQuantityHandler = (cartItem: CartItemType) => {
        if (cartItem.stock === cartItem.quantity) {
            toast.error("Product is out of stock.");
            return;
        }
        dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity + 1 }));
        setUpdatedCartItems(prevCartItems =>
            prevCartItems.map(item =>
                item.productId === cartItem.productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
        toast.success("Quantity increased successfully.");
    };

    // Handler to decrement quantity of cart item
    const decrementQuantityHandler = (cartItem: CartItemType) => {
        if (cartItem.quantity > 1) {
            dispatch(deleteFromCart(cartItem.productId));
            setUpdatedCartItems(prevCartItems =>
                prevCartItems.map(item =>
                    item.productId === cartItem.productId ? { ...item, quantity: item.quantity - 1 } : item
                )
            );
            toast.success("Quantity decreased successfully.");
        } else {
            removeHandler(cartItem.productId);
        }
    };

    // Handler to remove item from cart
    const removeHandler = (productId: string) => {
        dispatch(removeFromCart(productId));
        setUpdatedCartItems(prevCartItems =>
            prevCartItems.filter(item => item.productId !== productId)
        );
        toast.success("Item removed from cart.");
    };

    // Render cart items based on updatedCartItems state
    const renderCartItems = () => (
        <div className="lg:col-span-2 m-4 relative xl:m-8 border-b-2 border-slate-500">
            {/* Render cart items */}

            <div className="font-bold flex  justify-between items-center text-sm lg:text-lg font-mono">
                <p>Shopping Cart</p>
                <p>{updatedCartItems.length} Items</p>
            </div>
            <div className="border-b-2 border-slate-500 mt-8"></div>
            <Link to="/search" className="absolute top-[3.8rem] left-0">
                <button className="text-xs px-3 py-1 bg-slate-900 dark:bg-slate-100 gap-1 mt-1 hover:scale-110 text-slate-100 dark:text-slate-900 flex justify-center items-center font-semibold rounded-full">
                    <FaArrowLeft />
                    <span className="font-mono text-sm">Continue Shopping</span>
                </button>
            </Link>
            <div className="my-8 overflow-auto max-h-[500px] w-full">
                {updatedCartItems.length === 0 ? (
                    <div className="flex gap-2 items-center justify-center font-mono text-sm border-gray-500 border w-fit px-3 py-1 rounded-xl mx-auto text-center mt-5">
                        <div>No items Added</div>
                        <FaRegSadCry />
                    </div>
                ) : (
                    updatedCartItems.map((cartItem) => (
                        <CartItem
                            key={cartItem.productId}
                            cartItem={cartItem}
                            incrementQuantityHandler={incrementQuantityHandler}
                            decrementQuantityHandler={decrementQuantityHandler}
                            removeHandler={removeHandler}
                        />
                    ))
                )}
            </div>
        </div>
    );

    // Handler to submit shipping details form
    const shippingDetailsHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const { data } = await axios.post(`${server}/api/v1/payment/create`, {
                amount: total,
                discount
            }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            dispatch(applyDiscount(data.discount));
            discountRef.current = data.discount;

            navigate("/pay", {
                state: data.clientSecret,
            });
        } catch (error) {
            console.log(error);
            toast.error("Transaction failed. Please try again.");
        }
    };

    // Render shipping details form
    const renderBillingForm = () => (
        <div className="lg:col-span-2 h-fit w-fit overflow-y-scroll p-4 m-4 xl:m-8 rounded-xl border-2 order-1 border-slate-500">
            {/* Render billing form */}
            <div className="font-bold flex justify-center items-center text-sm lg:text-lg font-mono">
                <p>Billing Address</p>
            </div>
            <div className="border-b-2 border-slate-500 mt-8"></div>
            <form onSubmit={shippingDetailsHandler} className="flex w-fit p-4 flex-col text-slate-900 bg-slate-100 dark:text-slate-100 dark:bg-slate-900 items-center justify-center gap-2 mt-4">
                <div className="flex w-fit p-4 flex-wrap  items-start mx-auto gap-2 font-serif text-sm">
                    <div className="flex flex-col justify-center items-start gap-1 mt-3 ml-3 w-fit">
                        <label htmlFor="billingName" className="">Billing Name :</label>
                        <input
                            type="text"
                            name="billingName"
                            onChange={(event) => shippingInfoHandler(event)}
                            required
                            placeholder="Enter your billing name."
                            id="billing name"
                            className="rounded-lg p-1  border-slate-500 border text-slate-900  max-w-full"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1 mt-3 ml-3 w-fit">
                        <label htmlFor="city" className="">City :</label>
                        <input
                            type="text"
                            name="city"
                            onChange={(event) => shippingInfoHandler(event)}
                            required
                            placeholder="Enter your city."
                            id="city"
                            className="rounded-lg p-1  border-slate-500 border text-slate-900  max-w-full"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1 mt-3 ml-3 w-fit">
                        <label htmlFor="state" className="">State :</label>
                        <input
                            type="text"
                            name="state"
                            onChange={(event) => shippingInfoHandler(event)}
                            required
                            placeholder="Enter your state."
                            id="state"
                            className="rounded-lg p-1  border-slate-500 border text-slate-900  max-w-full"
                        />
                    </div>

                    <div className="flex flex-col justify-center items-start gap-1 mt-3 ml-3 w-fit">
                        <label htmlFor="Country" className="">Country :</label>
                        <input
                            type="text"
                            name="country"
                            onChange={(event) => shippingInfoHandler(event)}
                            required
                            placeholder="Enter your Country."
                            id="Country"
                            className="rounded-lg p-1  border-slate-500 border text-slate-900  max-w-full"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1 mt-3 ml-3 w-fit">
                        <label htmlFor="pinCode" className="">Pin Code :</label>
                        <input
                            type="text"
                            name="pinCode"
                            onChange={(event) => shippingInfoHandler(event)}
                            required
                            placeholder="Enter your pin code."
                            id="pinCode"
                            className="rounded-lg p-1  border-slate-500 border text-slate-900  max-w-full"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1 mt-3 ml-3 w-fit">
                        <label htmlFor="phoneNumber" className="">Phone Number :</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            onChange={(event) => shippingInfoHandler(event)}
                            required
                            placeholder="Enter your phone number."
                            id="phoneNumber"
                            className="rounded-lg p-1  border-slate-500 border text-slate-900  max-w-full"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1 mt-3 ml-3 w-fit">
                        <label htmlFor="email" className="">Email :</label>
                        <input
                            type="email"
                            name="email"
                            onChange={(event) => shippingInfoHandler(event)}
                            required
                            placeholder="Enter your email."
                            id="pinCode"
                            className="rounded-lg p-1  border-slate-500 border text-slate-900  max-w-full"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1 mt-3 ml-3 w-fit">
                        <label htmlFor="address" className="">Address :</label>
                        <textarea
                            onChange={(event) => shippingInfoHandler(event)}
                            required
                            name="address"
                            placeholder="Enter your address"
                            id="address"
                            className="rounded-lg p-1 border-stale-500 border text-slate-900 sm:w-[80%] w-full"
                            rows={5}
                            cols={50}
                        />
                    </div>
                </div>
                <button type="submit" className="px-3 py-1 text-sm text-slate-100 font-semibold bg-green-500 hover:bg-green-600 rounded-full ">Submit</button>
            </form>
        </div>
    );

    // Effect to toggle content based on button label
    useEffect(() => {
        setContent(buttonLabel === "Checkout" ? renderCartItems() : renderBillingForm());
    }, [updatedCartItems, buttonLabel]);

    // Toggle content between cart items and billing form
    const toggleContent = () => {
        if (buttonLabel === "Checkout") {
            if (!user) {
                toast.success("Cart saved. Please log in to proceed.");
                navigate("/login");
            } else {
                if (total === 200 || total === 0) {
                    return toast.error("Empty cart.");
                }
                setContent(renderBillingForm());
                setButtonLabel("<- Back");
            }
        } else {
            setContent(renderCartItems());
            setButtonLabel("Checkout");
        }
    };

    // Handler to copy coupon code to clipboard
    const copyTextHandler = async (enteredCoupon: string) => {
        await window.navigator.clipboard.writeText(enteredCoupon);
        setIsCopied(true);
    };

    // Effect to display toast message when coupon is copied
    useEffect(() => {
        if (isCopied) {
            toast.success("Coupon copied successfully. Paste it.");
            setIsCopied(false);
        }
    }, [isCopied]);

    // Return JSX for Cart component
    return (
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 container grid-cols-1 py-4">
            {content}
            {/* Render order summary and coupon section */}
            <div className="sm:col-span-1 w-fit border-2 py-4 px-8 rounded-xl text-xs border-slate-500  mx-auto mt-4 xl:mt-8">
                <div className="font-bold text-sm lg:text-lg flex justify-center items-center font-mono">
                    <p>Order Summary</p>
                </div>
                <div className="border-b-2 border-slate-500 mt-8"></div>
                <div className="my-8 flex flex-col gap-8 text-xs">
                    {[
                        { label: "Subtotal", value: subTotal },
                        { label: "Shipping Charges", value: shippingCharges },
                        { label: "Tax", value: tax },
                        { label: "Discount", value: discount },
                    ].map(({ label, value }) => {
                        let discountStyle = "";
                        if (label === "Discount") {
                            discountStyle = "text-red-500";
                        }

                        return (
                            <div key={label} className={`flex justify-between items-center font-bold text-xs ${discountStyle}`}>
                                <p>{label}</p>
                                <p className="font-mono">{discountStyle ? `-$${value}` : `$${value}`}</p>
                            </div>
                        );
                    })}
                    <div className="border-b-2 border-slate-500 mt-8"></div>
                    <div className="flex justify-between items-center font-bold text-sm">
                        <p>Total</p>
                        <p>${total}</p>
                    </div>
                </div>
                <button
                    onClick={toggleContent}
                    className="border-2 w-full border-slate-500 bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 hover:scale-105 px-3 py-1 font-bold transition-transform  font-mono rounded-full"
                >
                    {buttonLabel}
                </button>
                <div className="border-b-2 border-slate-500 mt-8"></div>
                <div className="flex flex-col justify-center gap-4 items-center font-bold text-sm lg:text-lg mt-8">
                    <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Enter coupon code"
                        className="text-sm border-b-2 bg-inherit focus:outline-none px-2"
                    />
                    {couponCode !== "" ? (
                        discount !== 0 && isValidCouponCode ? (
                            <div className="text-green-500 animate-bounce text-xs font-serif">${discount} Off using {couponCode}! 🥳</div>
                        ) : (
                            <div className="text-red-500 text-xs animate-bounce font-serif">Invalid coupon. Better luck next time. 😝</div>
                        )
                    ) : (
                        user !== null && <div>
                            <button onClick={() => setShowCoupon(prevState => !prevState)} className="flex  gap-1 justify-center items-center">
                                <div className="text-sm">Show coupons</div>
                                {!showCoupon ? <IoIosArrowDropdownCircle /> : <IoIosArrowDropupCircle />}
                            </button>
                            {showCoupon && <div className="border flex flex-col justify-center items-start  rounded-2xl overflow-auto bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900  border-slate-500 p-2 text-xs sm:text-sm">
                                {!isErrorData && !isLoadingCoupon && couponsData?.coupons.filter(({ amount }) => {
                                    return amount <= total;
                                }).map(({ amount, coupon }) => {
                                    return <div onClick={() => copyTextHandler(coupon)} key={coupon} className="flex justify-center items-center cursor-pointer gap-1 p-2">

                                        <div className="whitespace-pre-wrap w-[200px]">{`Get $${amount}off using ${coupon}`}</div>
                                        <FaRegCopy />
                                    </div>
                                })}</div>
                            }

                        </div>

                    )}
                </div>
            </div>
        </section>
    );
};

export default Cart;

/*
import { ChangeEvent, FormEvent, ReactNode, useEffect, useState } from "react";
import { FaArrowLeft, FaRegCopy, FaRegSadCry } from "react-icons/fa";
import CartItem from "../components/CartItem";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, applyDiscount, calculatePrice, deleteFromCart, removeFromCart, saveShippingInfo } from "../redux/reducer/cartReducer";
import { CartItem as CartItemType, ShippingInfo } from "../types/types";
import toast from "react-hot-toast";
import axios from "axios";
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";
import { useGetAllCouponQuery } from "../redux/api/couponAPI";
import { server } from "../utils/config";
import { RootState } from "../redux/store";




const Cart = () => {
    const { user } = useSelector(
        (state: RootState) => state.userReducer
    );
    const { cartItems, subTotal, discount, shippingCharges, shippingInfo, tax, total } = useSelector(
        (state: RootState) => state.cartReducer
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showCoupon, setShowCoupon] = useState<boolean>(false);

    const [updatedCartItems, setUpdatedCartItems] = useState<CartItemType[]>(cartItems);
    const [updatedShippingInfo, setUpdatedShippingInfo] = useState<ShippingInfo>(shippingInfo);
    const [couponCode, setCouponCode] = useState<string>("");
    const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);
    const [content, setContent] = useState<ReactNode>(null);
    const [buttonLabel, setButtonLabel] = useState<string>("Checkout");
    const [isCopied, setIsCopied] = useState<boolean>(false);
    let isLoadingCoupon = true;
    let couponsData = null;
    let isErrorData = true;
    if (user !== null) {

        const { isLoading, data, isError } = useGetAllCouponQuery();
        isLoadingCoupon = isLoading;
        couponsData = data;
        isErrorData = isError;
    }

    useEffect(() => {
        dispatch(saveShippingInfo(updatedShippingInfo));
    }, [updatedShippingInfo, dispatch]);

    useEffect(() => {
        const { token: cancelToken, cancel } = axios.CancelToken.source();
        const timeoutId = setTimeout(() => {
            if (couponCode !== "") {
                axios.get(`${server}/api/v1/payment/discount?coupon=${couponCode}`, {
                    withCredentials: true,
                    cancelToken
                }).then(response => {
                    setIsValidCouponCode(true);
                    console.log(response.data);
                    if (response.data.success) {
                        dispatch(applyDiscount(response.data.discount));
                        dispatch(calculatePrice());
                    }
                }).catch(() => {
                    dispatch(applyDiscount(0));
                    dispatch(calculatePrice());
                    setIsValidCouponCode(false);
                })
            }
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
            cancel();
            setIsValidCouponCode(false);
            dispatch(applyDiscount(0));
        }
    }, [couponCode, dispatch]);
    useEffect(() => {
        console.log(total, discount);
        if (total < discount) {
            toast.error("Coupon is not valid for this much total. Check for other coupons if available.");
            setIsValidCouponCode(false);
            dispatch(applyDiscount(0));
            dispatch(calculatePrice());
        }
    }, [total, dispatch, discount]);
    useEffect(() => {
        dispatch(calculatePrice());
    }, [updatedCartItems, dispatch]);

    const shippingInfoHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        setUpdatedShippingInfo((prevState) => {
            return { ...prevState, [event.target.name]: event.target.value }
        });
    };

    const incrementQuantityHandler = (cartItem: CartItemType) => {
        if (cartItem.stock === cartItem.quantity) {
            toast.error("Product is out of stock.");
            return;
        }
        dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity + 1 }));
        setUpdatedCartItems((prevCartItems) =>
            prevCartItems.map((item) =>
                item.productId === cartItem.productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
        toast.success("Successfully increased the quantity.");
    };

    const decrementQuantityHandler = (cartItem: CartItemType) => {
        if (cartItem.quantity > 1) {
            dispatch(deleteFromCart(cartItem.productId));
            setUpdatedCartItems((prevCartItems) =>
                prevCartItems.map((item) =>
                    item.productId === cartItem.productId ? { ...item, quantity: item.quantity - 1 } : item
                )
            );
            toast.success("Successfully decreased the quantity.");
        } else {
            removeHandler(cartItem.productId);
            setUpdatedCartItems((prevCartItems) =>
                prevCartItems.filter((item) => item.productId !== cartItem.productId)
            );
            toast.success("Item removed from the cart.");
        }
    };

    const removeHandler = (productId: string) => {
        dispatch(removeFromCart(productId));
        setUpdatedCartItems((prevCartItems) =>
            prevCartItems.filter((item) => item.productId !== productId)
        );
        toast.success("Item removed from the cart.");
    };

    const renderCartItems = () => (
        <div className="lg:col-span-2 m-4 relative xl:m-8 border-b-2 border-slate-500">
            <div className="font-bold flex  justify-between items-center text-sm lg:text-lg font-mono">
                <p>Shopping Cart</p>
                <p>{updatedCartItems.length} Items</p>
            </div>
            <div className="border-b-2 border-slate-500 mt-8"></div>
            <Link to="/search" className="absolute top-[3.8rem] left-0">
                <button className="text-xs px-3 py-1 bg-slate-900 dark:bg-slate-100 gap-1 mt-1 hover:scale-110 text-slate-100 dark:text-slate-900 flex justify-center items-center font-semibold rounded-full">
                    <FaArrowLeft />
                    <span className="font-mono text-sm">Continue Shopping</span>
                </button>
            </Link>
            <div className="my-8 overflow-auto max-h-[500px] w-full">
                {updatedCartItems.length === 0 ? (
                    <div className="flex gap-2 items-center justify-center font-mono text-sm border-gray-500 border w-fit px-3 py-1 rounded-xl mx-auto text-center mt-5">
                        <div>No items Added</div>
                        <FaRegSadCry />
                    </div>
                ) : (
                    updatedCartItems.map((cartItem) => (
                        <CartItem
                            key={cartItem.productId}
                            cartItem={cartItem}
                            incrementQuantityHandler={incrementQuantityHandler}
                            decrementQuantityHandler={decrementQuantityHandler}
                            removeHandler={removeHandler}
                        />
                    ))
                )}
            </div>

        </div>
    );
    const shippingDetailsHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {

            const { data } = await axios.post(`${server}/api/v1/payment/create`, {
                amount: total,
                discount
            }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            dispatch(applyDiscount(data.discount));
            dispatch(calculatePrice());
            navigate("/pay", {
                state: data.clientSecret,
            })

        } catch (error) {
            console.log(error);
            toast.error("Transaction failed. Please try again after some time.");
        }
    }
    const renderBillingForm = () => (
        <div className="lg:col-span-2  h-fit w-fit overflow-y-scroll p-4 m-4 xl:m-8 rounded-xl border-2 order-1 border-slate-500">
            <div className="font-bold flex justify-center items-center text-sm lg:text-lg font-mono">
                <p>Billing Address</p>
            </div>
            <div className="border-b-2 border-slate-500 mt-8"></div>
            <form onSubmit={shippingDetailsHandler} className="flex w-fit p-4 flex-col text-slate-900 bg-slate-100 dark:text-slate-100 dark:bg-slate-900 items-center justify-center gap-2 mt-4">
                <div className="flex w-fit p-4 flex-wrap  items-start mx-auto gap-2 font-serif text-sm">
                    <div className="flex flex-col justify-center items-start gap-1 mt-3 ml-3 w-fit">
                        <label htmlFor="billingName" className="">Billing Name :</label>
                        <input
                            type="text"
                            name="billingName"
                            onChange={(event) => shippingInfoHandler(event)}
                            required
                            placeholder="Enter your billing name."
                            id="billing name"
                            className="rounded-lg p-1  border-slate-500 border text-slate-900  max-w-full"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1 mt-3 ml-3 w-fit">
                        <label htmlFor="city" className="">City :</label>
                        <input
                            type="text"
                            name="city"
                            onChange={(event) => shippingInfoHandler(event)}
                            required
                            placeholder="Enter your city."
                            id="city"
                            className="rounded-lg p-1  border-slate-500 border text-slate-900  max-w-full"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1 mt-3 ml-3 w-fit">
                        <label htmlFor="state" className="">State :</label>
                        <input
                            type="text"
                            name="state"
                            onChange={(event) => shippingInfoHandler(event)}
                            required
                            placeholder="Enter your state."
                            id="state"
                            className="rounded-lg p-1  border-slate-500 border text-slate-900  max-w-full"
                        />
                    </div>

                    <div className="flex flex-col justify-center items-start gap-1 mt-3 ml-3 w-fit">
                        <label htmlFor="Country" className="">Country :</label>
                        <input
                            type="text"
                            name="country"
                            onChange={(event) => shippingInfoHandler(event)}
                            required
                            placeholder="Enter your Country."
                            id="Country"
                            className="rounded-lg p-1  border-slate-500 border text-slate-900  max-w-full"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1 mt-3 ml-3 w-fit">
                        <label htmlFor="pinCode" className="">Pin Code :</label>
                        <input
                            type="text"
                            name="pinCode"
                            onChange={(event) => shippingInfoHandler(event)}
                            required
                            placeholder="Enter your pin code."
                            id="pinCode"
                            className="rounded-lg p-1  border-slate-500 border text-slate-900  max-w-full"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1 mt-3 ml-3 w-fit">
                        <label htmlFor="phoneNumber" className="">Phone Number :</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            onChange={(event) => shippingInfoHandler(event)}
                            required
                            placeholder="Enter your phone number."
                            id="phoneNumber"
                            className="rounded-lg p-1  border-slate-500 border text-slate-900  max-w-full"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1 mt-3 ml-3 w-fit">
                        <label htmlFor="email" className="">Email :</label>
                        <input
                            type="email"
                            name="email"
                            onChange={(event) => shippingInfoHandler(event)}
                            required
                            placeholder="Enter your email."
                            id="pinCode"
                            className="rounded-lg p-1  border-slate-500 border text-slate-900  max-w-full"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1 mt-3 ml-3 w-fit">
                        <label htmlFor="address" className="">Address :</label>
                        <textarea
                            onChange={(event) => shippingInfoHandler(event)}
                            required
                            name="address"
                            placeholder="Enter your address"
                            id="address"
                            className="rounded-lg p-1 border-stale-500 border text-slate-900 sm:w-[80%] w-full"
                            rows={5}
                            cols={50}
                        />
                    </div>
                </div>
                <button type="submit" className="px-3 py-1 text-sm text-slate-100 font-semibold bg-green-500 hover:bg-green-600 rounded-full ">Submit</button>
            </form>
        </div>
    );

    useEffect(() => {
        setContent(renderCartItems());
        setButtonLabel("Checkout");
    }, [updatedCartItems]);

    const toggleContent = () => {
        if (buttonLabel === "Checkout") {
            if (user === null) {
                toast.success("We have saved your cart. Please login to continue.");
                navigate("/login");
            }
            setContent(renderBillingForm());
            setButtonLabel("<- Back");
        } else {
            setContent(renderCartItems());
            setButtonLabel("Checkout");
        }
    };
    const copyTextHandler = async (enteredCoupon: string) => {
        await window.navigator.clipboard.writeText(enteredCoupon);
        setIsCopied(true);
    }
    useEffect(() => {
        if (isCopied) {
            toast.success("Coupon copied successfully. Paste it.");
            setIsCopied(false);
        }
    }, [isCopied]);

    return (
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 container  grid-cols-1 py-4">
            {content}
            <div className="sm:col-span-1 w-fit border-2 py-4 px-8 rounded-xl text-xs border-slate-500  mx-auto mt-4 xl:mt-8">
                <div className="font-bold text-sm lg:text-lg flex justify-center items-center font-mono">
                    <p>Order Summary</p>
                </div>
                <div className="border-b-2 border-slate-500 mt-8"></div>
                <div className="my-8 flex flex-col gap-8 text-xs">
                    {[
                        { label: "Subtotal", value: subTotal },
                        { label: "Shipping Charges", value: shippingCharges },
                        { label: "Tax", value: tax },
                        { label: "Discount", value: discount },
                    ].map(({ label, value }) => {
                        let discountStyle = "";
                        if (label === "Discount") {
                            discountStyle = "text-red-500";
                        }

                        return (
                            <div key={label} className={`flex justify-between items-center font-bold text-xs ${discountStyle}`}>
                                <p>{label}</p>
                                <p className="font-mono">{discountStyle ? `-$${value}` : `$${value}`}</p>
                            </div>
                        );
                    })}
                    <div className="border-b-2 border-slate-500 mt-8"></div>
                    <div className="flex justify-between items-center font-bold text-sm">
                        <p>Total</p>
                        <p>${total}</p>
                    </div>
                </div>
                <button
                    onClick={toggleContent}
                    className="border-2 w-full border-slate-500 bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 hover:scale-105 px-3 py-1 font-bold transition-transform  font-mono rounded-full"
                >
                    {buttonLabel}
                </button>
                <div className="border-b-2 border-slate-500 mt-8"></div>
                <div className="flex flex-col justify-center gap-4 items-center font-bold text-sm lg:text-lg mt-8">
                    <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Enter coupon code"
                        className="text-sm border-b-2 bg-inherit focus:outline-none px-2"
                    />
                    {couponCode !== "" ? (
                        discount !== 0 && isValidCouponCode ? (
                            <div className="text-green-500 animate-bounce text-xs font-serif">${discount} Off using {couponCode}! </div>
                        ) : (
                            <div className="text-red-500 text-xs animate-bounce font-serif">Invalid coupon. Better luck next time. </div>
                        )
                    ) : (
                        user !== null && <div>
                            <button onClick={() => setShowCoupon(prevState => !prevState)} className="flex  gap-1 justify-center items-center">
                                <div className="text-sm">Show coupons</div>
                                {!showCoupon ? <IoIosArrowDropdownCircle /> : <IoIosArrowDropupCircle />}
                            </button>
                            {showCoupon && <div className="border flex flex-col justify-center items-start  rounded-2xl overflow-auto bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900  border-slate-500 p-2 text-xs sm:text-sm">
                                {!isErrorData && !isLoadingCoupon && couponsData?.coupons.filter(({ amount }) => {
                                    return amount <= total;
                                }).map(({ amount, coupon }) => {
                                    return <div onClick={() => copyTextHandler(coupon)} key={coupon} className="flex justify-center items-center cursor-pointer gap-1 p-2">

                                        <div className="whitespace-pre-wrap w-[200px]">{`Get $${amount}off using ${coupon}`}</div>
                                        <FaRegCopy />
                                    </div>
                                })}</div>
                            }

                        </div>

                    )}
                </div>
            </div>
        </section>
    );
};

export default Cart;
*/