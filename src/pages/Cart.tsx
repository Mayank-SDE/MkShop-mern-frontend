import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { FaArrowLeft, FaCheck, FaRegSadCry } from "react-icons/fa";
import { MdError } from "react-icons/md";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CartReducerInitialState } from "../types/reducer-types";
import { addToCart, calculatePrice, deleteFromCart, removeFromCart } from "../redux/reducer/cartReducer";
import { CartItem as CartItemType } from "../types/types";
import toast from "react-hot-toast";

const Cart = () => {
    const { cartItems, subTotal, discount, shippingCharges, shippingInfo, tax, total } = useSelector(
        (state: { cartReducer: CartReducerInitialState }) => state.cartReducer
    );

    const [updatedCartItems, setUpdatedCartItems] = useState<CartItemType[]>(cartItems);
    const [couponCode, setCouponCode] = useState<string>("");
    const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);
    const [content, setContent] = useState<ReactNode>(null);
    const [buttonLabel, setButtonLabel] = useState<string>("Checkout");


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculatePrice());
    }, [updatedCartItems, dispatch])


    const shippingInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
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
        <div className="lg:col-span-2 m-4 xl:m-8 border-b-2 border-slate-900 dark:border-slate-100">
            <div className="font-bold flex justify-between items-center text-sm lg:text-lg font-mono">
                <p>Shopping Cart</p>
                <p>{updatedCartItems.length} Items</p>
            </div>
            <div className="border-b-2 border-slate-900 dark:border-slate-100 mt-8"></div>
            <div className="my-8 overflow-auto h-[500px]">
                {updatedCartItems.length === 0 ? (
                    <div className="flex gap-2 items-center justify-center font-mono text-sm border-slate-500 border w-fit px-3 py-1 rounded-xl mx-auto text-center mt-5">
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
            <Link to="/search" className="mb-4">
                <button className="m-3 border-2 text-center border-slate-900 dark:border-slate-100 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-slate-100 hover:border-slate-900 hover:scale-105 flex justify-center items-center gap-1 font-semibold bg-slate-900 text-slate-100 px-3 rounded-full py-1 dark:bg-slate-100 dark:text-slate-900 mx-auto transition-transform">
                    <FaArrowLeft />
                    <span className="font-mono text-sm">Continue Shopping</span>
                </button>
            </Link>
        </div>
    );

    const renderBillingForm = () => (
        <div className="lg:col-span-2 order-1 m-4 xl:m-8 border-b-2 border-slate-900 dark:border-slate-100">
            <div className="font-bold flex justify-center items-center text-sm lg:text-lg font-mono">
                <p>Billing Address</p>
            </div>
            <div className="border-b-2 border-slate-900 dark:border-slate-100 mt-8"></div>
            <form className="flex flex-col text-slate-900 bg-slate-100 dark:text-slate-100 dark:bg-slate-900 items-start w-[80%] mx-auto gap-2 font-serif mt-4">
                {[
                    { label: "Address", value: shippingInfo.address, id: "address", type: "text" },
                    { label: "Billing Name", value: shippingInfo.billingName, id: "name", type: "text" },
                    { label: "Country", value: shippingInfo.country, id: "country", type: "text" },
                    { label: "State", value: shippingInfo.state, id: "state", type: "text" },
                    { label: "City", value: shippingInfo.city, id: "city", type: "text" },
                    { label: "Phone Number", value: shippingInfo.phoneNumber, id: "phone", type: "text" },
                    { label: "Pin Code", value: shippingInfo.pinCode, id: "pinCode", type: "text" },
                ].map(({ label, value, id, type }) => (
                    <div key={id} className="flex flex-col gap-1 mt-3 ml-3 w-full">
                        <label htmlFor={id}>{label}</label>
                        <input
                            onChange={shippingInfoHandler}
                            required
                            value={value}
                            type={type}
                            placeholder={`Enter your ${label.toLowerCase()}.`}
                            id={id}
                            className="rounded-xl px-3 py-1 border-slate-900 dark:border-slate-100 dark:bg-slate-900 border sm:w-[80%] w-full"
                        />
                    </div>
                ))}
            </form>
        </div>
    );

    useEffect(() => {
        setContent(renderCartItems());
    }, [updatedCartItems]);

    const toggleContent = () => {
        if (content === renderCartItems()) {
            setContent(renderBillingForm());
            setButtonLabel("Pay Now");
        } else {
            setContent(renderCartItems());
            setButtonLabel("Checkout");
        }
    };

    const handleCouponCode = () => {
        toast(
            <span className="flex gap-3 items-center">
                {isValidCouponCode ? (
                    <>
                        <MdError className="text-xl text-red-500 animate-spin" />
                        <span className="font-mono font-bold">The entered coupon code is invalid.</span>
                    </>
                ) : (
                    <>
                        <FaCheck className="text-xl text-green-500 animate-bounce" />
                        <span className="font-mono font-bold">The entered coupon code is valid.</span>
                    </>
                )}
            </span>
        );
        setIsValidCouponCode(!isValidCouponCode);
    };

    return (
        <section className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 py-24">
            {content}
            <div className="lg:col-span-1 order-1 m-4 xl:m-8">
                <div className="font-bold text-sm lg:text-lg flex justify-center items-center font-mono">
                    <p>Order Summary</p>
                </div>
                <div className="border-b-2 border-slate-900 dark:border-slate-100 mt-8"></div>
                <div className="my-8 flex flex-col gap-8">
                    {[
                        { label: "Subtotal", value: subTotal },
                        { label: "Shipping Charges", value: shippingCharges },
                        { label: "Tax", value: tax },
                        { label: "Discount", value: discount },
                    ].map(({ label, value }) => (
                        <div key={label} className="flex justify-between items-center font-bold text-sm lg:text-lg">
                            <p>{label}</p>
                            <p className="font-mono">${value}</p>
                        </div>
                    ))}
                    <div className="border-b-2 border-slate-900 dark:border-slate-100 mt-8"></div>
                    <div className="flex justify-between items-center font-bold text-sm lg:text-lg">
                        <p>Total</p>
                        <p>${total}</p>
                    </div>
                </div>
                <button
                    onClick={toggleContent}
                    className="border-2 w-full border-slate-900 dark:border-slate-100 bg-slate-900 dark:bg-slate-100 dark:text-slate-900 text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900 dark:hover:text-slate-100 hover:text-slate-900 px-3 py-1 font-bold transition-transform hover:scale-105 font-mono rounded-full"
                >
                    {buttonLabel}
                </button>
                <div className="border-b-2 border-slate-900 dark:border-slate-100 mt-8"></div>
                <div className="flex justify-between items-center font-bold text-sm lg:text-lg mt-8">
                    <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Enter coupon code"
                        className="w-[75%] border-b-2 bg-inherit focus:outline-none px-2"
                    />
                    <button
                        onClick={handleCouponCode}
                        className="w-[20%] text-center border-2 border-slate-900 dark:border-slate-100 bg-slate-900 dark:bg-slate-100 dark:text-slate-900 text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900 dark:hover:text-slate-100 hover:text-slate-900 px-3 py-1 font-bold transition-transform hover:scale-105 font-mono rounded-full"
                    >
                        Apply
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Cart;
