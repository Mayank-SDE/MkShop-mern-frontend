import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartItem as CartItemType } from "../types/types";

type CartItemProps = {
    cartItem: CartItemType;
    removeHandler: (productId: string) => void;
    incrementQuantityHandler: (cartItem: CartItemType) => void;
    decrementQuantityHandler: (cartItem: CartItemType) => void;
};

const CartItem = ({ cartItem, removeHandler, incrementQuantityHandler, decrementQuantityHandler }: CartItemProps) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 my-4 justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">
                <img src={cartItem.thumbnail} alt={cartItem.title} className="w-24 h-24 object-cover rounded-xl" />
                <Link to={`/product/${cartItem.productId}`} className="font-semibold text-center">
                    {cartItem.title}
                </Link>
                <button
                    onClick={() => removeHandler(cartItem.productId)}
                    className="font-light flex items-center justify-center gap-1 text-red-500 hover:text-red-700"
                >
                    <MdDelete />
                    <span>Remove</span>
                </button>
            </div>
            <div className="flex flex-col items-center sm:items-start">
                <p className="hidden sm:block font-light text-lg">$ {cartItem.price.toFixed(2)}</p>
            </div>
            <div className="flex gap-2 items-center">
                <button
                    onClick={() => incrementQuantityHandler(cartItem)}
                    className="hover:scale-110 text-green-500 hover:text-green-700"
                >
                    <FaPlus />
                </button>
                <div className="border-slate-500 text-slate-100 dark:text-slate-900 rounded-full border bg-slate-900 dark:bg-slate-100 px-3 py-1">
                    {cartItem.quantity}
                </div>
                <button
                    onClick={() => decrementQuantityHandler(cartItem)}
                    className="hover:scale-110 text-red-500 hover:text-red-700"
                >
                    <FaMinus />
                </button>
            </div>
            <div className="font-light text-lg">
                $ {(cartItem.price * cartItem.quantity).toFixed(2)}
            </div>
        </div>
    );
};

export default CartItem;
