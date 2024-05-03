
import { FaStar } from "react-icons/fa"
import { brands } from "../data/brands"
import { categories } from "../data/categories"
import { products } from "../data/products"

const Search = () => {

    return (
        <div className="pt-20 bg-slate-300 dark:bg-slate-700">
            <div className="flex flex-col xl:flex-row container">
                {/* Left Section */}

                <div className="flex flex-wrap mb-4 pb-8 justify-center items-center xl:flex-col xl:w-[25%] border border-white text-white  bg-black shadow-2xl ml-5 rounded-xl dark:border-white dark:bg-white dark:text-black  xl:h-[500px] ">
                    <p className="text-3xl text-center my-7 hidden xl:block">Filters</p>
                    <div className="ml-8 mt-7 text-black">
                        <p className="font-bold text-white dark:text-black">Sort by :-</p>
                        <select className="xl:mt-2 rounded-full focus:outline-none xl:py-1 xl:px-2 dark:border-2 dark:border-black ">
                            <option value="">None</option>
                            <option value="asc">Price - (Low to High)</option>
                            <option value="dsc">Price - (High to Low)</option>
                        </select>
                    </div>
                    <div className="ml-8 mt-7 ">
                        <p className="font-bold">   Max Price :-</p>
                        <input type="range" min={0} max={100000} value={1000} className="" />
                    </div>
                    <div className="ml-8 mt-7  ">
                        <p className="font-bold">Categories :-</p>
                        <select className="mt-2 rounded-full focus:outline-none py-1 px-2 text-black dark:border-2 dark:border-black">
                            <option value="">None</option>
                            {categories.map(category => {
                                return <option value={category}>{category}</option>
                            })}
                        </select>
                    </div>
                    <div className="ml-8 mt-7  ">
                        <p className="font-bold">Brands :-</p>
                        <select className="mt-2 rounded-full focus:outline-none py-1 px-2 w-[170px] text-black dark:border-2 dark:border-black">
                            <option value="">None</option>
                            {brands.map((brand) => {
                                return <option value={brand}>{brand}</option>
                            })}
                        </select>
                    </div>
                </div>

                {/* Right Section */}
                <div className="xl:w-[74%] ">
                    <p className=" text-3xl text-center font-serif underline">Products</p>
                    <div className="flex flex-col justify-center items-center mt-16 ">
                        <input type="text" placeholder="Search" className="px-4 w-[60%] rounded-xl py-1 focus:outline-none bg-black text-white dark:bg-white dark:text-black" />
                        <div className=' pt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center '>
                            {products.map((product) => {
                                let temp = Math.round(product.rating);
                                return <div className=' w-[250px] h-[350px] m-5 bg-white  flex flex-col justify-center items-center rounded-3xl text-black dark:hover:text-black dark:hover:bg-white text-center font-mono dark:bg-black dark:text-white hover:bg-black hover:text-white  group shadow-2xl' key={product.id} >
                                    <img src={product.thumbnail} alt={product.description} className='w-full mt-0 h-[180px] rounded-3xl ' />
                                    <p className=''>{product.title}</p>
                                    <div className="flex justify-between gap-2 mt-2">
                                        <p className='bg-black px-2 py-1  text-white dark:bg-white dark:text-black rounded-full  group-hover:bg-white group-hover:text-black dark:group-hover:text-white dark:group-hover:bg-black '>Price-{product.price}$</p>
                                        <p className='bg-black flex gap-1 justify-center items-center text-white dark:bg-white dark:text-black     group-hover:bg-white group-hover:text-black dark:group-hover:text-white dark:group-hover:bg-black rounded-full'>
                                            <FaStar className={`${--temp > 0 ? 'text-yellow-500' : ''}`} />
                                            <FaStar className={`${--temp > 0 ? 'text-yellow-500' : ''}`} />
                                            <FaStar className={`${--temp > 0 ? 'text-yellow-500' : ''}`} />
                                            <FaStar className={`${--temp > 0 ? 'text-yellow-500' : ''}`} />
                                            <FaStar className={`${--temp > 0 ? 'text-yellow-500' : ''}`} />
                                        </p>
                                    </div>


                                    <button className='bg-black my-2 hover:scale-110  px-3 py-1  group-hover:bg-white group-hover:text-black dark:group-hover:text-white dark:group-hover:bg-black text-white  dark:bg-white dark:text-black  rounded-full '><span className=' dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white  rounded-full'>Add to Cart</span></button>
                                    <button className='bg-black mb-1 px-2 py-1 hover:scale-110  group-hover:bg-white group-hover:text-black dark:group-hover:text-white dark:group-hover:bg-black text-white dark:bg-white dark:text-black  rounded-full'> <span className=' hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black  rounded-full'>View Product</span></button>


                                </div>
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search