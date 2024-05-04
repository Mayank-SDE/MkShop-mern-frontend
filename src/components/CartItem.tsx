import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";


type CartItemProps = {
    cartItem: {
        title: string;
        price: number;
        quantity: number;
        image: string;
        productId: string;
    };
}
const CartItem = ({ cartItem }: CartItemProps) => {
    return (
        <div className="flex sm:flex-row flex-col gap-4 sm:gap-14 xl:gap-[120px] my-4 justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-1">
                <img src={cartItem.image} alt={cartItem.title} className="w-[100px] rounded-xl" />
                <Link to={`/product/${cartItem.productId}`}>{cartItem.title}</Link>
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
    )
}

export default CartItem