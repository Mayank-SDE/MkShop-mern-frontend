import { FaArrowLeft, FaMinus, FaPlus } from "react-icons/fa"
import { MdDelete } from "react-icons/md";

// productId: string;
// photo: string;
// name: string;
// price: number;
// quantity: number;
// stock: number;

const cartItems = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
};

const Cart = () => {
    return (
        <>
            <div>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 bg-white text-black dark:bg-slate-900 mt-3 rounded-xl  dark:text-white">
                        <div className="lg:col-span-2 m-4 xl:m-8 border-b-2 border-black dark:border-white">
                            <div className="font-bold flex justify-between items-center text-lg lg:text-2xl font-mono">
                                <p>Shopping Cart</p>
                                <p>4 Items</p>
                            </div>
                            <div className="border-b-2 border-black dark:border-white mt-8 ">
                            </div>
                            <div className="my-8">
                                <div className="hidden sm:flex gap-16 xl:gap-28 my-4 justify-center font-bold items-center font-mono">
                                    <p>Product Details</p>
                                    <p >Price</p>
                                    <p>Quantity</p>
                                    <p >Total</p>
                                </div>

                                {
                                    cartItems.map((cartItem) => {
                                        return <div key={cartItem.id} className="flex sm:flex-row flex-col gap-4 sm:gap-14 xl:gap-[120px] my-4 justify-center items-center">
                                            <div className="flex flex-col justify-center items-center gap-1">
                                                <img src={cartItem.image} alt={cartItem.title} className="w-[100px] rounded-xl" />
                                                <p>{cartItem.title}</p>
                                                <button className="font-thin flex items-center justify-center gap-1"><MdDelete /><span>remove item</span></button>
                                            </div>
                                            <div>
                                                <p className="hidden sm:block font-thin"> $ {cartItem.price}</p>
                                            </div>
                                            <div className="flex gap-2 justify-center items-center text-xs">
                                                <div className="border-2 border-black px-1 py-1">
                                                    <FaPlus />
                                                </div>
                                                <div>{cartItem.quantity}</div>
                                                <div className="border-2 border-black px-1 py-1">
                                                    <FaMinus />
                                                </div>
                                            </div>
                                            <div className="font-thin">
                                                $ {cartItem.price * cartItem.quantity}
                                            </div>
                                        </div>
                                    })
                                }

                            </div>
                            <div className="mb-4">
                                <button className=" m-3 border-2 text-center uppercase border-black dark:border-white   hover:bg-white  hover:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white hover:border-black hover:scale-115 flex justify-center items-center gap-1 font-semibold bg-black text-white px-3 rounded-full py-2 dark:bg-white dark:text-black mx-auto"><FaArrowLeft /><span className="font-mono">Continue Shopping</span></button>
                            </div>
                        </div>
                        <div className="lg:col-span-1 m-4 xl:m-8 text-white bg-black dark:bg-white dark:text-black rounded-xl">
                            <div className="mt-5">
                                <div className="font-bold font-mono text-center text-2xl">
                                    <p>Order Summary</p>
                                </div>
                                <div className="border-b-2 border-black dark:border-white mt-8 ">
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
                                        <p className="py-4">$ {orderSummary.discount}</p>
                                        <p className="py-4">$ {orderSummary.tax}</p>
                                        <p className="py-4 text-2xl">$ {orderSummary.total}</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <input type="text" placeholder="Coupon Code" className=" text-black dark:text-white dark:bg-black rounded-xl px-4 py-1 text-center focus:outline-none" />
                                </div>

                                <div className="text-center">
                                    <button className="dark:text-white dark:bg-black m-3 border-2 text-center uppercase border-black dark:border-white   hover:bg-black  hover:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-black hover:border-white hover:scale-115 bg-white px-4 py-2 text-black rounded-full  my-10">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cart