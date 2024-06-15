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
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-6 py-4 px-2 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 w-full sm:w-auto">
                <img src={cartItem.thumbnail} alt={cartItem.title} className="w-20 h-20 object-cover rounded-lg shadow-md" />
                <div className="flex flex-col">
                    <Link to={`/product/${cartItem.productId}`} className="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:underline">
                        {cartItem.title}
                    </Link>
                    <button
                        onClick={() => removeHandler(cartItem.productId)}
                        className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1 mt-1"
                    >
                        <MdDelete />
                        <span>Remove</span>
                    </button>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    ${cartItem.price.toFixed(2)}
                </p>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => incrementQuantityHandler(cartItem)}
                        className="text-green-500 text-xs hover:text-green-700 transition-transform transform hover:scale-110"
                    >
                        <FaPlus />
                    </button>
                    <div className="sm:text-sm font-mono font-semibold text-gray-900 text-xs dark:text-gray-100 px-3 py-1 border rounded-lg border-gray-300 dark:border-gray-600">
                        {cartItem.quantity}
                    </div>
                    <button
                        onClick={() => decrementQuantityHandler(cartItem)}
                        className="text-red-500 text-xs hover:text-red-700 transition-transform transform hover:scale-110"
                    >
                        <FaMinus />
                    </button>
                </div>
                <p className="sm:text-sm text-xs font-mono font-medium text-gray-900 dark:text-gray-100">
                    ${(cartItem.price * cartItem.quantity).toFixed(2)}
                </p>
            </div>
        </div>
    );
};

export default CartItem;
