
// orderItems: OrderItem[];
// shippingInfo: ShippingInfo;
// tax: number;
// total: number;
// discount: number;
// shippingCharges: number;
// subtotal: number;
// status: string;
// user: {
//     name: string;
//     _id: string;
// };
const OrderItems = [{
    productId: "3234525",
    image: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
    title: "Iphone 9",
    price: 2500,
    quantity: 5
}, {
    productId: "323452",
    image: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
    title: "Macbook 13",
    price: 1050,
    quantity: 10
}, {
    productId: "323452",
    image: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
    title: "Macbook 13",
    price: 1050,
    quantity: 10
}, {
    productId: "323452",
    image: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
    title: "Macbook 13",
    price: 1050,
    quantity: 10
}, {
    productId: "323452",
    image: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
    title: "Macbook 13",
    price: 1050,
    quantity: 10
}, {
    productId: "323452",
    image: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
    title: "Macbook 13",
    price: 1050,
    quantity: 10
}, {
    productId: "323452",
    image: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
    title: "Macbook 13",
    price: 1050,
    quantity: 10
}, {
    productId: "323452",
    image: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
    title: "Macbook 13",
    price: 1050,
    quantity: 10
}];
const OrderDetails = {
    orderItems: OrderItems,
    id: "soihosh",
    shippingInfo: {
        address: "Scheme no 54, Vijay Nagar",
        city: "Indore",
        state: "Madhya Pradesh",
        country: "India",
        pinCode: "452007",
    },
    tax: 45,
    total: 455,
    discount: 45,
    shippingCharges: 45,
    subtotal: 65000,
    status: "Delivered",
    user: {
        name: "Mayank",
        id: "453433"
    }

};




// productId: string;
// photo: string;
// name: string;
// price: number;
// quantity: number;


import { CiBag1, CiShoppingCart } from "react-icons/ci"
import { FaTruck } from "react-icons/fa"
import { GiGymBag } from "react-icons/gi"
import { IoMdCheckmarkCircle } from "react-icons/io"

// _id: string;
const OrderDetail = () => {
    return (
        <div className="bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100 min-h-screen">
            <div className="container">

                <div className="grid grid-cols-1 sm:grid-cols-3 mt-5 mb-12 gap-4">
                    <div className="sm:col-span-2   w-full grid grid-cols-1 grid-rows-4 gap-3 h-[625px]">
                        <div className="bg-slate-900 row-span-1 text-slate-100 flex flex-col items-start justify-center p-8 dark:bg-slate-100 dark:text-slate-900 rounded-xl">
                            {/* Order banner */}

                            <div className="font-bold">OrderId - #{OrderDetails.id}</div>
                            <div className="text-xs font-thin ">July 27, 2022 at 09:44</div>

                        </div>
                        <div className="row-span-2 overflow-y-auto">
                            <table className="w-full" >
                                <thead >

                                    <tr >
                                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Item</th>
                                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Quantity</th>
                                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Price</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y dark:divide-slate-900 divide-slate-100 ">

                                    {
                                        OrderDetails.orderItems.map((orderItem) => {
                                            return <tr>
                                                <td className="p-3 text-sm whitespace-normal space-y-3 ">
                                                    <div className="font-serif font-bold text-xs">{orderItem.title}</div>
                                                    <div>
                                                        <img className="w-32 rounded-xl" src={orderItem.image} alt={orderItem.title} />
                                                    </div>
                                                </td>
                                                <td className="p-3 text-sm whitespace-normal font-mono">{orderItem.quantity}</td>
                                                <td className="p-3 text-sm whitespace-normal font-mono">${orderItem.price}</td>
                                            </tr>
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                        <div className="row-span-1  bg-slate-900 text-slate-100 p-4 dark:text-slate-900 dark:bg-slate-100 rounded-xl overflow-y-auto flex justify-between">
                            <div className="flex flex-col  gap-4 text-sm">
                                <div className="flex gap-4 items-center">
                                    <p>Address -</p>
                                    <p className="font-thin">{OrderDetails.shippingInfo.address}</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <p>City -</p>
                                    <p className="font-thin">{OrderDetails.shippingInfo.city}</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <p>State -</p>
                                    <p className="font-thin">{OrderDetails.shippingInfo.state}</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <p>Country -</p>
                                    <p className="font-thin">{OrderDetails.shippingInfo.country}</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <p>Pincode -</p>
                                    <p className="font-thin">{OrderDetails.shippingInfo.pinCode}</p>
                                </div>
                            </div>
                            <div className="flex flex-col  gap-4 text-sm">
                                <div className="flex gap-4 items-center">
                                    <p>Tax -</p>
                                    <p className="font-thin">$ {OrderDetails.tax}/-</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <p>Total -</p>
                                    <p className="font-thin">$ {OrderDetails.total}/-</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <p>Shipping Charges -</p>
                                    <p className="font-thin">$ {OrderDetails.shippingCharges}/-</p>
                                </div>

                                <div className="flex gap-4 items-center text-green-500">
                                    <p className="text-lg">Sub Total -</p>
                                    <p className="font-bold">$ {OrderDetails.subtotal}/-</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-1 bg-slate-900 text-slate-100 rounded-2xl pb-4 dark:bg-slate-100 dark:text-slate-900">

                        <div className="text-center my-4 font-bold">Order Status</div>
                        <div className=" space-y-5 text-sm">
                            <div className="flex items-center flex-col text-green-500 font-extrabold">
                                <div className="flex justify-between w-full px-8 items-center text-sm">
                                    <div className="flex items-center gap-4 justify-center">
                                        <div className="flex flex-col text-2xl">
                                            <CiShoppingCart />
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            {/* status */}
                                            <div className="text-sm">Order Placed</div>
                                            <div className="font-mono opacity-50 text-xs">27/01/1999</div>
                                        </div>
                                    </div>
                                    <div className="text-xl">
                                        {/* tick Mark */}
                                        <IoMdCheckmarkCircle />
                                    </div>
                                </div>
                                <div className=" w-full flex flex-col items-start px-9">
                                    {/* lines */}
                                    <div>|</div>
                                    <div>|</div>
                                    <div>|</div>
                                </div>
                            </div>
                            <div className="flex items-center flex-col text-green-100 dark:text-slate-900 font-extrabold">
                                <div className="flex justify-between w-full px-8 items-center text-sm">
                                    <div className="flex items-center gap-4 justify-center">
                                        <div className="flex flex-col  text-2xl">
                                            <GiGymBag />
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            {/* status */}
                                            <div className="text-sm">Products Picked</div>
                                            <div className="font-mono opacity-50 text-xs">1/02/1999</div>
                                        </div>
                                    </div>
                                    <div className="text-xl">
                                        {/* tick Mark */}
                                        <IoMdCheckmarkCircle />
                                    </div>
                                </div>
                                <div className=" w-full flex flex-col items-start px-9">
                                    {/* lines */}
                                    <div>|</div>
                                    <div>|</div>
                                    <div>|</div>

                                </div>
                            </div>
                            <div className="flex items-center flex-col text-green-100 dark:text-slate-900 font-extrabold">
                                <div className="flex justify-between w-full px-8 items-center text-sm">
                                    <div className="flex items-center gap-4 justify-center">
                                        <div className="flex flex-col  text-2xl">
                                            <CiBag1 />
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            {/* status */}
                                            <div className="text-sm">Order Packed</div>
                                            <div className="font-mono opacity-50 text-xs">5/02/1999</div>
                                        </div>
                                    </div>
                                    <div className="text-xl">
                                        {/* tick Mark */}
                                        <IoMdCheckmarkCircle />
                                    </div>
                                </div>
                                <div className=" w-full flex flex-col items-start px-9">
                                    {/* lines */}
                                    <div>|</div>
                                    <div>|</div>
                                    <div>|</div>

                                </div>
                            </div>
                            <div className="flex items-center flex-col text-green-100 dark:text-slate-900 font-extrabold">
                                <div className="flex justify-between w-full px-8 items-center text-sm">
                                    <div className="flex items-center gap-4 justify-center">
                                        <div className="flex flex-col  text-2xl">
                                            <FaTruck />
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            {/* status */}
                                            <div className="text-sm">Shipped</div>
                                            <div className="font-mono opacity-50 text-xs">1/02/1999</div>
                                        </div>
                                    </div>
                                    <div className="text-xl">
                                        {/* tick Mark */}
                                        <IoMdCheckmarkCircle />
                                    </div>
                                </div>
                                <div className=" w-full flex flex-col items-start px-9">
                                    {/* lines */}
                                    <div>|</div>
                                    <div>|</div>
                                    <div>|</div>

                                </div>
                            </div>
                            <div className="flex items-center flex-col text-green-100 dark:text-slate-900 font-extrabold">
                                <div className="flex justify-between w-full px-8 items-center text-sm">
                                    <div className="flex items-center gap-4 justify-center">
                                        <div className="flex flex-col  text-2xl">
                                            <IoMdCheckmarkCircle />
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            {/* status */}
                                            <div className="text-sm">Delivered</div>
                                            <div className="font-mono opacity-50 text-xs">1/02/1999</div>
                                        </div>
                                    </div>
                                    <div className="text-xl">
                                        {/* tick Mark */}
                                        <IoMdCheckmarkCircle />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetail