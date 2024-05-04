
import { FaStar } from "react-icons/fa"
import { brands } from "../data/brands"
import { categories } from "../data/categories"
import { products } from "../data/products"

const Search = () => {

    return (
        <div className="pt-20 bg-slate-300 dark:bg-slate-700">
            <div className="flex flex-col xl:flex-row container">
                {/* Left Section */}

                <div className="flex  flex-wrap mb-4 pb-8 justify-center items-center xl:flex-col xl:w-[25%] border border-slate-100 text-slate-100  bg-slate-900 shadow-2xl ml-5 rounded-xl dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900  xl:h-[500px] ">
                    <p className="text-3xl text-center my-7 hidden xl:block">Filters</p>
                    <div className="ml-8 mt-7 text-slate-900">
                        <p className="font-bold text-slate-100 dark:text-slate-900">Sort by :-</p>
                        <select className="xl:mt-2 rounded-full focus:outline-none xl:py-1 xl:px-2 dark:border-2 dark:border-slate-900 ">
                            <option value="">None</option>
                            <option value="asc">Price - (Low to High)</option>
                            <option value="dsc">Price - (High to Low)</option>
                        </select>
                    </div>
                    <div className="ml-8 mt-7 ">
                        <p className="font-bold">   Max Price :-</p>
                        <input type="range" min={0} max={100000} value={10000} className="" />
                    </div>
                    <div className="ml-8 mt-7  ">
                        <p className="font-bold">Categories :-</p>
                        <select className="mt-2 rounded-full focus:outline-none py-1 px-2 text-slate-900 dark:border-2 dark:border-slate-900">
                            <option value="">None</option>
                            {categories.map(category => {
                                return <option key={category} value={category}>{category}</option>
                            })}
                        </select>
                    </div>
                    <div className="ml-8 mt-7  ">
                        <p className="font-bold">Brands :-</p>
                        <select className="mt-2 rounded-full focus:outline-none py-1 px-2 w-[170px] text-slate-900 dark:border-2 dark:border-slate-900">
                            <option value="">None</option>
                            {brands.map((brand) => {
                                return <option key={brand} value={brand}>{brand}</option>
                            })}
                        </select>
                    </div>
                </div>

                {/* Right Section */}
                <div className="xl:w-[74%] ">
                    <p className=" text-3xl text-center font-serif underline">Products</p>
                    <div className="flex flex-col justify-center items-center mt-16 ">
                        <input type="text" placeholder="Search" className="px-4 w-[60%] rounded-xl py-1 focus:outline-none bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900" />
                        <div className=' pt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center '>
                            {products.map((product) => {
                                let temp = Math.round(product.rating);
                                return <div className=' w-[250px] h-[350px] m-5 bg-slate-100  flex flex-col justify-center items-center rounded-3xl text-slate-900 dark:hover:text-slate-900 dark:hover:bg-slate-100 text-center font-mono dark:bg-slate-900 dark:text-slate-100 hover:bg-slate-900 hover:text-slate-100  group shadow-2xl' key={product.id} >
                                    <img src={product.thumbnail} alt={product.description} className='w-full mt-0 h-[180px] rounded-3xl ' />
                                    <p className=''>{product.title}</p>
                                    <div className="flex justify-between gap-2 mt-2">
                                        <p className='bg-slate-900 px-2 py-1  text-slate-100 dark:bg-slate-100 dark:text-slate-900 rounded-full  group-hover:bg-slate-100 group-hover:text-slate-900 dark:group-hover:text-slate-100 dark:group-hover:bg-slate-900 '>Price-{product.price}$</p>
                                        <p className='bg-slate-900 flex gap-1 justify-center items-center text-slate-100 dark:bg-slate-100 dark:text-slate-900     group-hover:bg-slate-100 group-hover:text-slate-900 dark:group-hover:text-slate-100 dark:group-hover:bg-slate-900 rounded-full'>
                                            <FaStar className={`${--temp > 0 ? 'text-yellow-500' : ''}`} />
                                            <FaStar className={`${--temp > 0 ? 'text-yellow-500' : ''}`} />
                                            <FaStar className={`${--temp > 0 ? 'text-yellow-500' : ''}`} />
                                            <FaStar className={`${--temp > 0 ? 'text-yellow-500' : ''}`} />
                                            <FaStar className={`${--temp > 0 ? 'text-yellow-500' : ''}`} />
                                        </p>
                                    </div>


                                    <button className='bg-slate-900 my-2 hover:scale-110  px-3 py-1  group-hover:bg-slate-100 group-hover:text-slate-900 dark:group-hover:text-slate-100 dark:group-hover:bg-slate-900 text-slate-100  dark:bg-slate-100 dark:text-slate-900  rounded-full '><span className=' dark:hover:bg-slate-100 dark:hover:text-slate-900 hover:bg-slate-900 hover:text-slate-100  rounded-full'>Add to Cart</span></button>
                                    <button className='bg-slate-900 mb-1 px-2 py-1 hover:scale-110  group-hover:bg-slate-100 group-hover:text-slate-900 dark:group-hover:text-slate-100 dark:group-hover:bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900  rounded-full'> <span className=' hover:bg-slate-900 hover:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900  rounded-full'>View Product</span></button>


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