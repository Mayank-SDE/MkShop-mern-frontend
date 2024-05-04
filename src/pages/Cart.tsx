import { ReactNode, useEffect, useState } from "react";
import { FaArrowLeft, FaCheck } from "react-icons/fa"
import { MdError } from "react-icons/md";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

// productId: string;
// photo: string;
// name: string;
// price: number;
// quantity: number;
// stock: number;

const cartItems = [
    {
        productId: "gskngk",
        title: 'iPhone 9',
        description: 'An apple mobile which is nothing like apple',
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: 'Apple',
        category: 'smartphones',
        image: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
        quantity: 1
    },
    {
        productId: "gskngk",
        title: 'iPhone 9',
        description: 'An apple mobile which is nothing like apple',
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: 'Apple',
        category: 'smartphones',
        image: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
        quantity: 2
    }
    , {
        productId: "gskngk",
        title: 'iPhone 9',
        description: 'An apple mobile which is nothing like apple',
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: 'Apple',
        category: 'smartphones',
        image: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
        quantity: 4
    }
    ,
    {
        productId: "gskngk",
        title: 'iPhone 9',
        description: 'An apple mobile which is nothing like apple',
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: 'Apple',
        category: 'smartphones',
        image: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
        quantity: 4
    }];

const orderSummary = {
    subtotal: 2342,
    shippingCharges: 45,
    tax: 5435,
    discount: 453,
    total: 453,
    cartItems
};



const Cart = () => {

    const [couponCode, setCouponCode] = useState<string>("");
    const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

    const display: ReactNode = <div className="lg:col-span-2 m-4 xl:m-8 border-b-2 border-slate-900 dark:border-slate-100">
        <div className="font-bold flex justify-between items-center text-lg lg:text-2xl font-mono">
            <p>Shopping Cart</p>
            <p>4 Items</p>
        </div>
        <div className="border-b-2 border-slate-900 dark:border-slate-100 mt-8 ">
        </div>
        <div className="my-8">

            {cartItems.length === 0 && <div className="hidden sm:flex gap-16 xl:gap-28 my-4 justify-center font-bold items-center font-mono">
                <p>Product Details</p>
                <p >Price</p>
                <p>Quantity</p>
                <p >Total</p>
            </div>}

            {cartItems.length === 0 ? <h1 className="text-xl text-center mt-5">No items Added</h1> : orderSummary.cartItems.map((cartItem) => {
                return <CartItem cartItem={cartItem} />
            })
            }

        </div>
        <Link to="/search" className="mb-4">
            <button className=" m-3 border-2 text-center uppercase border-slate-900 dark:border-slate-100   hover:bg-slate-100  hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-slate-100 dark:hover:border-slate-100 hover:border-slate-900 hover:scale-115 flex justify-center items-center gap-1 font-semibold bg-slate-900 text-slate-100 px-3 rounded-full py-2 dark:bg-slate-100 dark:text-slate-900 mx-auto"><FaArrowLeft /><span className="font-mono">Continue Shopping</span></button>
        </Link>
    </div>;

    const [firstContent, setFirstContent] = useState<ReactNode>(display);

    const [secondContent, setSecondContent] = useState<string>("Checkout");

    const toggleUI = () => {
        setSecondContent("Checkout");
        setFirstContent(display);
    }

    const changeUI = () => {
        setSecondContent("Pay Now");
        setFirstContent(<div className="lg:col-span-2 m-4 xl:m-8 border-b-2 border-slate-900 dark:border-slate-100">
            <div className="font-bold flex justify-center items-center text-lg lg:text-2xl font-mono">
                <p>Billing Address</p>
            </div>
            <div className="border-b-2 border-slate-900 dark:border-slate-100 mt-8 ">
            </div>
            <div>
                <form action="" className="flex  text-slate-900 bg-slate-100 dark:text-slate-100 dark:bg-slate-900 flex-col items-start w-[80%] mx-auto gap-2 font-serif  mt-4">
                    <div className="flex flex-col mt-3 ml-3 gap-2">
                        <label htmlFor="address" className="text-md">Home Address </label>
                        <textarea name="address" id="address" placeholder="Enter your address" className="focus:outline-none rounded-xl px-3 py-2 border border-slate-900 text-slate-900"></textarea>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 mt-3 ml-3 gap-3">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="Enter your name." id="name" className="rounded-xl px-3 py-1 border-slate-900 border" />
                        </div><div className="flex flex-col gap-1">
                            <label htmlFor="country">Country</label>
                            <input type="text" placeholder="Enter your country." id="country" className="rounded-xl px-3 py-1 border-slate-900 border" />
                        </div><div className="flex flex-col gap-1">
                            <label htmlFor="state">State</label>
                            <input type="text" placeholder="Enter your state." id="state" className="rounded-xl px-3 py-1 border-slate-900 border" />
                        </div><div className="flex flex-col gap-1">
                            <label htmlFor="city">City</label>
                            <input type="text" placeholder="Enter your city." id="city" className="rounded-xl px-3 py-1 border-slate-900 border" />
                        </div><div className="flex flex-col gap-1">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" placeholder="Enter your phone number." id="phone" className="rounded-xl px-3 py-1 border-slate-900 border" />
                        </div><div className="flex flex-col gap-1">
                            <label htmlFor="zipcode">Zip Code</label>
                            <input type="text" placeholder="Enter your zipcode." id="zipcode" className="rounded-xl px-3 py-1 border-slate-900 border" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="Enter your email." id="email" className="rounded-xl px-3 py-1 border-slate-900 border" />
                        </div>
                        <div className="mb-4">
                            <button onClick={toggleUI} className=" m-3 border-2 text-center uppercase border-slate-900 dark:border-slate-100   hover:bg-slate-100  hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-slate-100 dark:hover:border-slate-100 hover:border-slate-900 hover:scale-115 flex justify-center items-center gap-1 font-semibold bg-slate-900 text-slate-100 px-3 rounded-full py-2 dark:bg-slate-100 dark:text-slate-900 mx-auto"><FaArrowLeft /><span className="font-mono">Order Details</span></button>
                        </div>

                    </div>
                </form>
            </div>
        </div>);
    }
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

        }
    }, []);

    return (
        <>
            <div>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 bg-slate-100 text-slate-900 dark:bg-slate-900 mt-3 rounded-xl  dark:text-slate-100">

                        {firstContent}
                        <div className="lg:col-span-1 m-4 xl:m-8 text-slate-100 bg-slate-900 dark:bg-slate-100 dark:text-slate-900 rounded-xl">
                            <div className="mt-5">
                                <div className="font-bold font-mono text-center text-2xl">
                                    <p>Order Summary</p>
                                </div>
                                <div className="border-b-2 border-slate-900 dark:border-slate-100 mt-8 ">
                                </div>
                                <div className="flex justify-center lg:justify-around items-center my-5 gap-4 lg:gap-[1px]">
                                    <div className="font-semibold">
                                        <p className="py-4">Subtotal :-</p>
                                        <p className="py-4">Shipping Charges :-</p>
                                        <p className="py-4">Discount :-</p>
                                        <p className="py-4">Tax :-</p>
                                        <p className="py-4 font-bold">Total :-</p>
                                    </div>
                                    <div className="font-thin">
                                        <p className="py-4">$ {orderSummary.subtotal}</p>
                                        <p className="py-4">$ {orderSummary.shippingCharges}</p>
                                        <p className="py-4 text-red-500">-${orderSummary.discount}</p>
                                        <p className="py-4">$ {orderSummary.tax}</p>
                                        <p className="py-4 text-2xl">$ {orderSummary.total}</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <input type="text" placeholder="Coupon Code" className=" text-slate-900 dark:text-slate-100 dark:bg-slate-900 rounded-xl px-4 py-1 text-center focus:outline-none" onChange={(event) => setCouponCode(event.target.value)} />
                                </div>
                                {
                                    couponCode && (isValidCouponCode ? <div className="flex justify-center items-center mt-4 text-green-500 font-semibold gap-2 w-[80%] line-clamp-1"><FaCheck /> <span>${orderSummary.discount} Off using the {couponCode}</span></div> : <div className="flex justify-center items-center mt-4 text-red-500 font-semibold gap-2"><MdError /><span>Invalid Coupon Code</span></div>)
                                }
                                {cartItems.length > 0 && <div className="text-center">

                                    <button className="dark:text-slate-100 dark:bg-slate-900 m-3 border-2 text-center uppercase border-slate-900 dark:border-slate-100   hover:bg-slate-900  hover:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900 dark:hover:border-slate-900 hover:border-slate-100 hover:scale-115 bg-slate-100 px-4 py-1 text-slate-900 rounded-full  my-10" onClick={changeUI}>{secondContent}</button>

                                </div>}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cart