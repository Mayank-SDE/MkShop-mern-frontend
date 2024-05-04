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
                    <div className="grid grid-cols-1 lg:grid-cols-3 bg-slate-100 text-slate-900 dark:bg-slate-900 mt-3 rounded-xl  dark:text-slate-100">
                        <div className="lg:col-span-2 m-4 xl:m-8 border-b-2 border-slate-900 dark:border-slate-100">
                            <div className="font-bold flex justify-between items-center text-lg lg:text-2xl font-mono">
                                <p>Shopping Cart</p>
                                <p>4 Items</p>
                            </div>
                            <div className="border-b-2 border-slate-900 dark:border-slate-100 mt-8 ">
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
                                                <div className="border-2 border-slate-900 px-1 py-1">
                                                    <FaPlus />
                                                </div>
                                                <div>{cartItem.quantity}</div>
                                                <div className="border-2 border-slate-900 px-1 py-1">
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
                                <button className=" m-3 border-2 text-center uppercase border-slate-900 dark:border-slate-100   hover:bg-slate-100  hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-slate-100 dark:hover:border-slate-100 hover:border-slate-900 hover:scale-115 flex justify-center items-center gap-1 font-semibold bg-slate-900 text-slate-100 px-3 rounded-full py-2 dark:bg-slate-100 dark:text-slate-900 mx-auto"><FaArrowLeft /><span className="font-mono">Continue Shopping</span></button>
                            </div>
                        </div>
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
                                        <p className="py-4">$ {orderSummary.discount}</p>
                                        <p className="py-4">$ {orderSummary.tax}</p>
                                        <p className="py-4 text-2xl">$ {orderSummary.total}</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <input type="text" placeholder="Coupon Code" className=" text-slate-900 dark:text-slate-100 dark:bg-slate-900 rounded-xl px-4 py-1 text-center focus:outline-none" />
                                </div>

                                <div className="text-center">
                                    <button className="dark:text-slate-100 dark:bg-slate-900 m-3 border-2 text-center uppercase border-slate-900 dark:border-slate-100   hover:bg-slate-900  hover:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900 dark:hover:border-slate-900 hover:border-slate-100 hover:scale-115 bg-slate-100 px-4 py-2 text-slate-900 rounded-full  my-10">Checkout</button>
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