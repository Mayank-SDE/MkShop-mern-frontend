import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

type ProductCardProps = {
    productId: string;
    productPrice: number;
    productTitle: string;
    productRating: number;
    productThumbnail: string;
    productDescription: string;
}

const ProductCard = ({ productId, productPrice, productTitle, productRating, productThumbnail, productDescription }: ProductCardProps) => {

    const addToCartHandler = () => {
        // Add to cart logic
    }

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FaStar key={i} className={i <= productRating ? 'text-yellow-500' : 'text-gray-300'} />
            );
        }
        return stars;
    };

    return (
        <div className="max-w-[300px] h-fit m-2  bg-slate-100 border-slate-500 border-2 flex flex-col justify-between items-center rounded-3xl text-slate-900 dark:bg-slate-900 dark:text-slate-100 shadow-2xl transition-all transform hover:scale-105 hover:bg-slate-900 hover:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900 group">
            <img src={productThumbnail.startsWith("a") ? `http://localhost:3000/${productThumbnail}` : productThumbnail} alt={productDescription} className=" h-[150px] rounded-full object-contain" />
            <div className="p-4 flex flex-col text-sm justify-center items-center">
                <h3 className="text-sm font-semibold">{productTitle}</h3>
                <div className="flex items-center mt-2">
                    <p className="bg-slate-900 px-2 py-1 text-slate-100 dark:bg-slate-100 dark:text-slate-900 rounded-full group-hover:bg-slate-100 group-hover:text-slate-900 dark:group-hover:bg-slate-900 dark:group-hover:text-slate-100 text-xs">
                        ${productPrice}
                    </p>
                </div>
                <div className="flex mt-2">
                    {renderStars()}
                </div>
            </div>
            <div className="w-full p-4 flex flex-col items-center">
                <button onClick={addToCartHandler} className="w-fit bg-blue-500 text-white py-1 px-3 rounded-full mb-2 hover:bg-blue-600 text-xs transition">
                    Add to Cart
                </button>
                <Link to={`/product/${productId}`} className="w-fit text-center bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 text-xs transition">
                    View Product
                </Link>
            </div>
        </div>
    );
}

export default ProductCard;
