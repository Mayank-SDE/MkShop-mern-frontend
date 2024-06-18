import { CiBag1, CiShoppingCart } from "react-icons/ci";
import { FaTruck } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { useDeleteOrderMutation, useOrderDetailsQuery } from "../redux/api/orderAPI";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { formatDate } from "../utils/date";
import OrderDetailsSkeleton from "../components/skeletons/OrderDetailsSkeleton";
import { Order } from "../types/types";
import { ReactElement } from "react";
import toast from "react-hot-toast";
import { MdArrowBack } from "react-icons/md";

const OrderDetail = () => {
    const params = useParams();
    const navigate = useNavigate();
    const orderId = params._id as string;
    const { data, isError, isLoading } = useOrderDetailsQuery(orderId);
    const [deleteOrder] = useDeleteOrderMutation();
    if (isLoading) {
        return <OrderDetailsSkeleton />;
    }

    const orderDetails = data?.order;

    const {
        shippingInfo,
        _id,
        discount,
        orderItems,
        shippingCharges,
        createdAt,
        updatedAt,
        status,
        subTotal,
        tax,
        total
    }: Order = orderDetails || {
        _id: "",
        shippingInfo: {
            address: "",
            city: "",
            country: "",
            state: "",
            billingName: "",
            phoneNumber: "",
            pinCode: "",
            email: "",
        },
        user: {
            _id: "",
            name: "",
        },
        status: 'Placed',
        tax: 0,
        shippingCharges: 0,
        subTotal: 0,
        total: 0,
        discount: 0,
        orderItems: [{
            productId: "",
            thumbnail: "",
            title: "",
            price: 0,
            quantity: 0,
        }],
        createdAt: "",
        updatedAt: ""
    };

    if (isError) {
        return <Navigate to="/404" />;
    }

    const deleteOrderHandler = async () => {
        if (status !== 'Delivered') {
            toast.error("Order is yet not delivered.");
            return;
        }
        try {
            const response = await deleteOrder(orderId).unwrap();
            if (response.success) {
                toast.success(response.message);
                navigate("/orders");
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Update failed. Please try again.");
        }
    }

    return (
        <div className="bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100 min-h-screen ">

            <div className="container mx-auto py-8 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2 border border-slate-500 rounded-xl p-4 bg-white relative dark:bg-slate-800">

                        <div className="flex flex-col  items-center mb-4">
                            <button className="flex justify-center absolute left-0 top-0 items-center px-3 py-1 rounded-full hover:bg-slate-700 dark:hover:bg-slate-200 bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 " onClick={() => {
                                navigate("/orders");
                            }}>
                                <MdArrowBack className="text-sm" />
                                <div className="text-sm">Orders</div>
                            </button>
                            <h2 className="font-bold mt-2  text-lg">Order ID: #{_id}</h2>
                            <div className="flex justify-between w-full text-sm mt-2">
                                <span>Ordered Date: <strong>{formatDate(createdAt)}</strong></span>
                                <span>Last Updated: <strong>{formatDate(updatedAt)}</strong></span>
                            </div>
                        </div>
                        <div className="max-h-[400px]  overflow-scroll w-full">
                            <table className="w-full text-left">
                                <thead>
                                    <tr>
                                        <th className="p-3">Item</th>
                                        <th className="p-3">Quantity</th>
                                        <th className="p-3">Price</th>
                                        <th className="p-3">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orderItems.map((item) => (
                                        <tr key={item.productId}>
                                            <td className="p-3 flex flex-col sm:flex-row items-center space-x-4">
                                                <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                                                <span className="font-bold">{item.title}</span>
                                            </td>
                                            <td className="p-3 font-mono">{item.quantity}</td>
                                            <td className="p-3 font-mono">${item.price}</td>
                                            <td className="p-3 font-mono">${item.price * item.quantity}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-4 p-4 border-t border-slate-500">
                            <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
                                <div className="gap-2 flex flex-col">
                                    <h3 className="font-bold underline text-sm mb-2">Shipping Information</h3>
                                    <p className="font-mono text-xs flex flex-wrap gap-1 ">
                                        <strong>Name:</strong> {shippingInfo.billingName}
                                    </p>
                                    <p className="font-mono text-xs flex flex-wrap gap-1 "><strong>Phone:</strong> {shippingInfo.phoneNumber}</p>
                                    <p className="font-mono text-xs flex flex-wrap gap-1 "><strong>Email:</strong> {shippingInfo.email}</p>
                                    <p className="font-mono text-xs flex flex-wrap gap-1 "><strong>Address:</strong> {shippingInfo.address}</p>
                                    <p className="font-mono text-xs flex flex-wrap gap-1 "><strong>City:</strong> {shippingInfo.city}</p>
                                    <p className="font-mono text-xs flex flex-wrap gap-1 "><strong>State:</strong> {shippingInfo.state}</p>
                                    <p className="font-mono text-xs flex flex-wrap gap-1 "><strong>Country:</strong> {shippingInfo.country}</p>
                                    <p className="font-mono text-xs flex flex-wrap gap-1 "><strong>Pin Code:</strong> {shippingInfo.pinCode}</p>
                                </div>
                                <div className="gap-2 flex flex-col">
                                    <h3 className="font-bold text-sm underline mb-2">Order Summary</h3>
                                    <p className="font-mono text-xs flex gap-1 "><strong>Tax:</strong> ${tax}</p>
                                    <p className="font-mono text-red-500 text-xs flex gap-1 "><strong>Discount:</strong>  -${discount}</p>

                                    <p className="font-mono text-xs flex gap-1 "><strong>Shipping Charges:</strong> ${shippingCharges}</p>
                                    <p className="font-mono text-xs flex gap-1 "><strong>Sub Total:</strong> ${subTotal}</p>
                                    <p className="font-mono text-xs text-green-500 flex gap-1 "><strong>Total:</strong> ${total}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-1 relative border border-slate-500 rounded-2xl max-h-[650px] p-4">
                        <h3 className="text-center font-bold mb-4">Order Status</h3>
                        <div className="space-y-6">
                            <StatusStep icon={<CiShoppingCart />} label="Order Placed" isCompleted />
                            <StatusStep icon={<GiGymBag />} label="Products Picked" isCompleted={status === 'Picked' || status === 'Packed' || status === 'Shipped' || status === 'Delivered'} />
                            <StatusStep icon={<CiBag1 />} label="Order Packed" isCompleted={status === 'Packed' || status === 'Shipped' || status === 'Delivered'} />
                            <StatusStep icon={<FaTruck />} label="Shipped" isCompleted={status === 'Shipped' || status === 'Delivered'} />
                            <StatusStep icon={<IoMdCheckmarkCircle />} label="Delivered" isCompleted={status === 'Delivered'} />
                        </div>

                        {status === 'Delivered' && <button onClick={deleteOrderHandler} className={`px-3 absolute bottom-4 py-1 bg-red-500 text-slate-100 font-semibold rounded-full text-sm hover:bg-red-600`}>Delete Order</button>}
                    </div>

                </div>
            </div>
        </div>
    );
};

const StatusStep = ({ icon, label, isCompleted }: { icon: ReactElement; label: string; isCompleted: boolean; }) => {
    return (
        <div className={` ${isCompleted ? 'text-green-500 ' : 'text-gray-400'}`}>
            <div className="flex items-center">
                <div className="flex items-center gap-2">
                    <div className="text-2xl">{icon}</div>
                    <div className="text-sm">{label}</div>
                </div>
                {isCompleted && <IoMdCheckmarkCircle className="text-xl ml-auto" />}
            </div>
            <div className={`${label === "Delivered" ? 'hidden' : ''} w-full flex flex-col items-start px-9`}>

                <div>|</div>
                <div>|</div>
                <div>|</div>

            </div>
        </div>
    );
};

export default OrderDetail;
