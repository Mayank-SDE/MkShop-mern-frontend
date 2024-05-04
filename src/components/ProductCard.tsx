import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

type ProductCardProps = {
    productId: number;
    productPrice: number;
    productTitle: string;
    productRating: number;
    productThumbnail: string;
    productDescription: string;
}

// const server = '';

const ProductCard = ({ productId, productPrice, productTitle, productRating, productThumbnail, productDescription }: ProductCardProps) => {


    const addToCartHandler = () => {

    }

    return (<>
        <div className=' w-[250px] h-[350px] m-5 bg-slate-100  flex flex-col justify-center items-center rounded-3xl text-slate-900 dark:hover:text-slate-900 dark:hover:bg-slate-100 text-center font-mono dark:bg-slate-900 dark:text-slate-100 hover:bg-slate-900 hover:text-slate-100  group shadow-2xl' key={productId} >
            <img src={`${productThumbnail}`} alt={productDescription} className='w-full mt-0 h-[180px] rounded-3xl ' />
            <p className=''>{productTitle}</p>
            <div className="flex justify-between gap-2 mt-2">
                <p className='bg-slate-900 px-2 py-1  text-slate-100 dark:bg-slate-100 dark:text-slate-900 rounded-full  group-hover:bg-slate-100 group-hover:text-slate-900 dark:group-hover:text-slate-100 dark:group-hover:bg-slate-900 '>Price-{productPrice}$</p>
                <p className='bg-slate-900 flex gap-1 justify-center items-center text-slate-100 dark:bg-slate-100 dark:text-slate-900     group-hover:bg-slate-100 group-hover:text-slate-900 dark:group-hover:text-slate-100 dark:group-hover:bg-slate-900 rounded-full'>
                    <FaStar className={`${--productRating > 0 ? 'text-yellow-500' : ''}`} />
                    <FaStar className={`${--productRating > 0 ? 'text-yellow-500' : ''}`} />
                    <FaStar className={`${--productRating > 0 ? 'text-yellow-500' : ''}`} />
                    <FaStar className={`${--productRating > 0 ? 'text-yellow-500' : ''}`} />
                    <FaStar className={`${--productRating > 0 ? 'text-yellow-500' : ''}`} />
                </p>
            </div>

            <button className='product-btn'><span className='product-span-btn' onClick={addToCartHandler}>Add to Cart</span></button>
            <Link to={`/product/${productId}`} className='product-btn'><span className='product-span-btn'>View Product</span></Link>


        </div>
    </>)
}

export default ProductCard