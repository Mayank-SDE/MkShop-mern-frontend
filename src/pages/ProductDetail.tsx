import { FaMinus, FaPlus, FaStar } from "react-icons/fa";

const product = {
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
    images: [
        'https://cdn.dummyjson.com/product-images/1/1.jpg',
        'https://cdn.dummyjson.com/product-images/1/2.jpg',
        'https://cdn.dummyjson.com/product-images/1/3.jpg',
        'https://cdn.dummyjson.com/product-images/1/4.jpg',
        'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
    ],
};
const ProductDetail = () => {
    let temp = Math.round(product.rating);
    return (
        <div>
            <div className="pt-16 container dark:bg-slate-700">
                <h1 className="text-3xl font-bold underline font-serif text-center">Product Details</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="m-12">
                        <div className=" sm:w-[300px]">
                            {/* Bigger Image */}
                            <img className=" object-fill rounded-xl " src={product.thumbnail} alt={product.title} />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-4 ">
                            {/* Smaller Images */}
                            {product.images.map(image => {
                                return <div key={image} className=" mt-2">
                                    <img src={image} alt="small-image" className="max-w-[100px] rounded-xl" />
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="m-12">
                        <h1 className="text-2xl font-semibold py-2">{product.title}</h1>
                        <p className="text-xl font-serif py-2">{product.description}.</p>
                        <p className=' flex gap-1 py-2  rounded-full '>
                            <FaStar className={`${--temp > 0 ? 'text-yellow-500' : ''}`} />
                            <FaStar className={`${--temp > 0 ? 'text-yellow-500' : ''}`} />
                            <FaStar className={`${--temp > 0 ? 'text-yellow-500' : ''}`} />
                            <FaStar className={`${--temp > 0 ? 'text-yellow-500' : ''}`} />
                            <FaStar className={`${--temp > 0 ? 'text-yellow-500' : ''}`} />
                        </p>
                        <p className="py-2 text-red-500 font-bold">{product.discountPercentage} % Off</p>
                        <p className="bg-green-300 text-green-600 px-3 py-1 w-fit rounded-xl">InStock - {product.stock}</p>
                        <p className="py-2  font-bold">$ {product.price} Only/-</p>
                        <div className="flex gap-2 text-xs my-5">
                            <div className="border-2 border-black px-1 py-1">
                                <FaPlus />
                            </div>
                            <div>2</div>
                            <div className="border-2 border-black px-1 py-1">
                                <FaMinus />
                            </div>
                        </div>
                        <button className='bg-black my-2 hover:scale-110  px-3 py-1  group-hover:bg-white group-hover:text-black dark:group-hover:text-white dark:group-hover:bg-black text-white  dark:bg-white dark:text-black  rounded-full '><span className=' dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white  rounded-full'>Add to Cart</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail