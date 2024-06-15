import { getStatusColor } from "../../../utils/style";
import { useDeleteOrderMutation, useOrderDetailsQuery, useProcessOrderMutation } from "../../../redux/api/orderAPI";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import TransactionManagementSkeleton from "../../../components/skeletons/TransactionManagementSkeleton";
import toast from "react-hot-toast";


const TransactionManagement = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { isLoading, isError, data } = useOrderDetailsQuery(params.orderId!);

    const [processOrder] = useProcessOrderMutation();
    const [deleteOrder] = useDeleteOrderMutation();

    const { shippingInfo, _id, discount, orderItems, shippingCharges, status, subTotal, tax, total } = data?.order || {
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
        status: '',
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
        }]
    };

    const processOrderHandler = async () => {

        try {
            const response = await processOrder(_id).unwrap();
            if (response.success) {
                toast.success(response.message);
                navigate("/admin/transactions");
                return;
            } else {
                toast.error(response.message);

            }
        } catch (error) {
            console.error(error);
            toast.error("Processing order failed. Please try again.");
        }
    }
    const deleteOrderHandler = async () => {
        try {
            const response = await deleteOrder(_id).unwrap();
            if (response.success) {
                toast.success(response.message);
                navigate("/admin/transactions");
                return;
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Deletion failed. Please try again.");
        }
    }
    if (isError) {
        return <Navigate to={"/404"} />
    }

    return (
        isLoading ? <TransactionManagementSkeleton /> : <div className="flex flex-wrap  gap-4 justify-center  mt-6">
            <div className="flex flex-col gap-2 p-4 border-2 border-slate-500  rounded-3xl items-center ">
                <div className="text-lg mt-2 font-bold">Order Items</div>
                <div>Order id : {_id}</div>
                {
                    orderItems.map((orderItem) => {
                        return <ProductOrderCard key={orderItem.productId} productId={orderItem.productId} thumbnail={orderItem.thumbnail} title={orderItem.title} price={orderItem.price} quantity={orderItem.quantity} />
                    })
                }
            </div>
            <div className="flex flex-col gap-2 p-4 border-2 border-slate-500 rounded-3xl items-center ">
                <div className="text-lg mt-2 font-bold">Order Info</div>
                <div className="flex flex-col gap-2 justify-start items-start">
                    <div className="flex flex-col justify-center items-start gap-2">
                        <div className="text-sm">User Info :-</div>
                        <div className="text-xs font-thin">
                            <div>Billing Name: {shippingInfo.billingName}</div>
                            <div>Address: {`${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.country} ${shippingInfo.pinCode}`}</div>
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
                <div className="w-full flex sm:justify-between items-center justify-center  flex-col sm:flex-row gap-4">
                    <button
                        className={`bg-green-500 rounded-full px-3 py-1 cursor-pointer w-fit font-semibold text-xs hover:bg-green-600 text-slate-100 ${status === 'Delivered' && 'opacity-50 cursor-not-allowed'}`}
                        onClick={processOrderHandler}
                        disabled={status === 'Delivered'}
                    >
                        {status !== 'Delivered' ? 'Process Order' : 'Completed'}
                    </button>
                    <button
                        className={`bg-red-500 rounded-full px-3 py-1 cursor-pointer w-fit font-semibold text-xs hover:bg-red-600 text-slate-100`}
                        onClick={deleteOrderHandler}
                        disabled={status === 'Delivered'}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

const ProductOrderCard = ({ productId, thumbnail, title, price, quantity }: { productId: string, thumbnail: string, title: string, price: number, quantity: number }) => {
    return (
        <div className="flex justify-center items-center gap-4">
            <img className="w-[50px] h-[50px] object-cover rounded-lg" src={thumbnail} alt="order-image" />
            <div>{productId}</div>
            <div className="text-xs font-mono">{title}</div>
            <div className="text-xs font-mono">${price} x {quantity} = ${price * quantity}/-</div>
        </div>
    )
}

export default TransactionManagement;
