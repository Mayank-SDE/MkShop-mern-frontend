import { useState } from "react";
import { Order, OrderItem } from "../../../types/types";

const orderItemss: OrderItem[] = [{
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
        status: "Delivered",
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
        _id,
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
    return (
        <div className="flex flex-wrap gap-2 justify-center items-center mt-6">
            <div className="flex flex-col gap-2 p-4 border-2 border-slate-500 justify-center items-center ">
                <div className="text-lg">Order Items</div>
                {
                    orderItems.map((orderItem) => {
                        return <ProductOrderCard key={orderItem._id} _id={orderItem._id} images={orderItem.images} name={orderItem.name} price={orderItem.price} quantity={orderItem.quantity} />
                    })
                }
            </div>
            <div className="flex flex-col gap-2 p-4 border-2 border-slate-500 ">
                <div>Order Info</div>
                <div>
                    <div>User Info</div>
                    <div>
                        <div>Name : {name}</div>
                        <div>Address : {` ${address}, ${city}, ${state}, ${country} ${pinCode}`} </div>
                    </div>
                </div>
                <div>
                    <div>Amount Info</div>
                    <div>
                        <div>Subtotal : {subTotal}</div>
                        <div>Discount : {discount}</div>
                        <div>Shipping Charges : {shippingCharges}</div>
                        <div>Subtotal : {subTotal}</div>
                        <div>Tax : {tax}</div>
                        <div>Total : {total}</div>

                    </div>
                </div>
                <div>
                    <div>Status</div>
                    <div>Status : {status}</div>
                </div>
            </div>
        </div>
    )
}
const ProductOrderCard = ({ _id, images, name, price, quantity }: OrderItem) => {

    return <div className="flex justify-center items-center gap-2">
        <img className="w-[50px] object-cover rounded-lg" src={images[0]} alt="order-image" />
        <div className="text-xs font-semibold">{name}</div>
        <div className="text-xs font-mono">${price} x {quantity} = ${price * quantity}/-</div>
    </div>
}
export default TransactionManagement