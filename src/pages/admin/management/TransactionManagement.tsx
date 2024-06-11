import { useState } from "react";
import { Order, OrderItem } from "../../../types/types";

const orderItemss: OrderItem[] = [{
    name: "Macbook Air",
    images: ["https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D"],
    price: 100000,
    quantity: 50,
    _id: "abcdef"
}, {
    name: "Macbook Air",
    images: ["https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D"],
    price: 100000,
    quantity: 50,
    _id: "abcdef"
},]

const TransactionManagement = () => {

    const [orders, setOrders] = useState<Order>({
        name: "Mayank Choudhary",
        address: "77 Black Street",
        city: "Newyork",
        state: "Blade",
        country: "USA",
        status: "Placed",
        subTotal: 4000,
        discount: 1200,
        shippingCharges: 0,
        tax: 0,
        total: 4200,
        orderItems: orderItemss,
        _id: "jiofheoiwhgr",
        pinCode: "435345"
    });

    const {
        name,
        address,
        city,
        country,
        state,
        pinCode,
        status,
        subTotal,
        discount,
        shippingCharges,
        tax,
        total,
        orderItems
    } = orders;

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Placed':
                return 'text-[#007BFF]';
            case 'Picked':
                return 'text-[#FFA500]';
            case 'Packed':
                return 'text-[#6F42C1]';
            case 'Shipped':
                return 'text-[#28A745]';
            case 'Delivered':
                return 'text-[#20C997]';
            default:
                return 'text-black';
        }
    }
    const processOrderHandler = () => {
        switch (status) {
            case 'Placed':
                setOrders((prevOrder) => {
                    return { ...prevOrder, status: 'Picked' }
                })
                break;
            case 'Picked':
                setOrders((prevOrder) => {
                    return { ...prevOrder, status: 'Packed' }
                })
                break;
            case 'Packed':
                setOrders((prevOrder) => {
                    return { ...prevOrder, status: 'Shipped' }
                })
                break;
            case 'Shipped':
                setOrders((prevOrder) => {
                    return { ...prevOrder, status: 'Delivered' }
                })
                break;
            default:
                break;
        }
    }
    return (
        <div className="flex flex-wrap  gap-4 justify-center  mt-6">
            <div className="flex flex-col gap-2 p-4 border-2 border-slate-500  rounded-3xl items-center ">
                <div className="text-lg mt-2 font-bold">Order Items</div>
                {
                    orderItems.map((orderItem) => {
                        return <ProductOrderCard key={orderItem._id} _id={orderItem._id} images={orderItem.images} name={orderItem.name} price={orderItem.price} quantity={orderItem.quantity} />
                    })
                }
            </div>
            <div className="flex flex-col gap-2 p-4 border-2 border-slate-500 rounded-3xl items-center ">
                <div className="text-lg mt-2 font-bold">Order Info</div>
                <div className="flex flex-col gap-2 justify-start items-start">
                    <div className="flex flex-col justify-center items-start gap-2">
                        <div className="text-sm">User Info :-</div>
                        <div className="text-xs font-thin">
                            <div>Name: {name}</div>
                            <div>Address: {`${address}, ${city}, ${state}, ${country} ${pinCode}`}</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-2">
                        <div className="text-sm">Amount Info :-</div>
                        <div className="text-xs font-thin">
                            <div>Subtotal: {subTotal}</div>
                            <div>Discount: {discount}</div>
                            <div>Shipping Charges: {shippingCharges}</div>
                            <div>Subtotal: {subTotal}</div>
                            <div>Tax: {tax}</div>
                            <div>Total: {total}</div>
                        </div>
                    </div>
                    <div className="flex  justify-center items-center gap-2">
                        <div className="text-xs">Status :-</div>
                        <div className={`${getStatusColor(status)} text-xs`}>{status}</div>
                    </div>
                </div>
                <button
                    className={`bg-green-500 rounded-full px-3 py-2 cursor-pointer w-fit font-semibold text-xs hover:bg-green-600 text-slate-100 ${status === 'Delivered' && 'opacity-50 cursor-not-allowed'}`}
                    onClick={processOrderHandler}
                    disabled={status === 'Delivered'}
                >
                    {status !== 'Delivered' ? 'Process Order' : 'Completed'}
                </button>
            </div>
        </div>
    )
}

const ProductOrderCard = ({ _id, images, name, price, quantity }: OrderItem) => {
    return (
        <div className="flex justify-center items-center gap-4">
            <img className="w-[50px] h-[50px] object-cover rounded-lg" src={images[0]} alt="order-image" />
            <div className="text-xs font-mono">{name}</div>
            <div className="text-xs font-mono">${price} x {quantity} = ${price * quantity}/-</div>
        </div>
    )
}

export default TransactionManagement;
