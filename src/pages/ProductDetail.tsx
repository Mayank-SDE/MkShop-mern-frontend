import { useState, useEffect } from 'react';
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa';
import CategoriesSection from '../components/CategoriesSection';
import { useGetProductDetailsQuery } from '../redux/api/productAPI';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { CartItem, Product } from '../types/types';
import Loader from '../components/Loader';
import defaultImg from '../assets/MK.png';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { addToCartWithQuantity } from '../redux/reducer/cartReducer';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { server } from '../utils/config';

const ProductDetail = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetProductDetailsQuery(id as string);
    const { cartItems } = useSelector(
        (state: RootState) => state.cartReducer
    );
    let productQuantity = 1;
    cartItems.forEach(cartItem => {
        console.log(cartItem.productId, id);
        if (cartItem.productId === id) {
            console.log("Matched");
            productQuantity = cartItem.quantity;
        }
    })

    console.log(productQuantity);
    const [quantity, setQuantity] = useState<number>(productQuantity);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const product = data?.product as Product;
    const [selectedImage, setSelectedImage] = useState<string>(defaultImg); // Default to defaultImg

    const thumbnail = product?.thumbnail.startsWith("a") ? `${server}/${product?.thumbnail}` : product?.thumbnail;
    useEffect(() => {
        if (product) {

            setSelectedImage(thumbnail || defaultImg); // Update when product is available
        }
    }, [product]);

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };

    if (isLoading) {
        return <Loader />;
    }

    if (isError || !product) {
        return <Navigate to="/404" />;
    }

    const rating = Math.round(product.rating as number) || 0;

    const addToCartHandler = (cartItem: CartItem) => {
        console.log("From add to cart", cartItem);
        dispatch(addToCartWithQuantity(cartItem));
        toast.success("Successfully added to cart");
        navigate("/cart");
    };

    const quantityIncreaseHandler = () => {
        if (quantity < product.stock) {
            setQuantity((prevState) => prevState + 1);
        } else {
            toast.error("Product is out of stock");
            return;
        }
    };

    const quantityDecreaseHandler = () => {
        if (quantity === 1) {
            return toast.error("Product quantity must be greater than or equal to 1.");
        }
        setQuantity((prevState) => prevState - 1);
    };

    return (
        <div className="p-8 container dark:bg-slate-900 bg-slate-100">
            <h1 className="text-2xl font-bold underline font-serif mt-8 text-center">Product Details</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 p-8 gap-4">
                <div className="m-4 flex gap-4 flex-col justify-center items-center sm:m-0">
                    <div className="font-thin text-xs text-slate-900 dark:text-slate-100">Note - Select an image to get the bigger view.</div>
                    <div className="sm:w-[300px] mx-auto">
                        <img className="object-cover w-full h-full max-h-[300px] rounded-xl" src={selectedImage} alt={product.title} />
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-4 sm:mx-auto">
                        {product.images.map((image) => (
                            <div key={image} className="cursor-pointer" onClick={() => handleImageClick(image)}>
                                <img
                                    src={image.startsWith("a") ? `${server}/${image}` : image}
                                    alt="small-image"
                                    className="object-cover w-full h-full max-h-[100px] max-w-[100px] rounded-xl"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="m-4 sm:m-0">
                    <h1 className="text-lg uppercase font-semibold py-2">{product.title}</h1>
                    <p className="text-sm font-serif py-2">{product.description}.</p>
                    <div className="flex items-center gap-1 py-2">
                        {[...Array(5)].map((_, index) => (
                            <FaStar
                                key={index}
                                className={`text-yellow-500 ${index < rating ? 'text-yellow-500' : ''}`}
                            />
                        ))}
                    </div>
                    <p className="py-2 text-xs text-red-500 font-bold">{product.discountPercentage} % Off</p>
                    {product.stock > 0 ? (
                        <p className="bg-green-300 text-xs text-green-600 px-3 py-1 w-fit rounded-xl mb-4">
                            InStock - {product.stock}
                        </p>
                    ) : (
                        <p className="bg-green-300 text-xs text-red-600 px-3 py-1 w-fit rounded-xl mb-4">
                            Out of stock - {product.stock}
                        </p>
                    )}
                    <p className="py-2 font-mono text-xs">$ {product.price} Only/-</p>
                    <div className="flex justify-center w-fit items-center gap-2 text-xs my-5">
                        <button onClick={quantityIncreaseHandler} className="border-2 bg-slate-900 text-slate-100 dark:text-slate-900 cursor-pointer hover rounded-full dark:bg-slate-100 px-1 py-1">
                            <FaPlus />
                        </button>
                        <div className="text-slate-900 dark:text-slate-100 font-semibold">{quantity}</div>
                        <button onClick={quantityDecreaseHandler} className="border-2 bg-slate-900 text-slate-100 dark:text-slate-900 rounded-full cursor-pointer dark:bg-slate-100 px-1 py-1">
                            <FaMinus />
                        </button>
                    </div>
                    <button onClick={() => addToCartHandler({
                        productId: product._id,
                        thumbnail: product.thumbnail,
                        title: product.title,
                        price: product.price,
                        quantity: quantity,
                        stock: product.stock
                    })} className="px-3 py-1 bg-green-500 hover:bg-green-600 text-slate-100 font-semibold text-sm hover:scale-110 cursor-pointer rounded-full">
                        Add to cart
                    </button>
                </div>
            </div>
            <CategoriesSection />
        </div>
    );
};

export default ProductDetail;
