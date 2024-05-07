import { brands } from "../data/brands"
import { categories } from "../data/categories"
import ProductCard from "../components/ProductCard"
import { products } from "../data/products"
import { ChangeEvent, useState } from "react"

const Search = () => {


    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [maxPrice, setMaxPrice] = useState(10000);
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [page, setPage] = useState(1);

    const sortHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setSort(event.target.value);
    }
    const rangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(Number(event.target.value));
    }
    const categoryHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value);
    }
    const brandHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setBrand(event.target.value);
    }

    const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }


    // const addToCarthandler = () => {

    // }

    const isPrevPage = page > 0;
    const isNextPage = page <= 4;


    return (<div className="pt-20 bg-slate-300 dark:bg-slate-700">
        <div className="flex flex-col xl:flex-row container">
            {/* Left Section */}

            <div className="flex  flex-wrap mb-4 pb-8 justify-center items-center xl:flex-col xl:w-[25%] border border-slate-100 text-slate-100  bg-slate-900 shadow-2xl ml-5 rounded-xl dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900  xl:h-[500px] ">
                <p className="text-3xl text-center my-7 hidden xl:block">Filters</p>
                <div className="ml-8 mt-7 text-slate-900">
                    <p className="font-bold text-slate-100 dark:text-slate-900">Sort by :-</p>
                    <select value={sort} onChange={sortHandler} className="xl:mt-2 rounded-full focus:outline-none xl:py-1 xl:px-2 dark:border-2 dark:border-slate-900 ">
                        <option value="">None</option>
                        <option value="asc">Price - (Low to High)</option>
                        <option value="dsc">Price - (High to Low)</option>
                    </select>
                </div>
                <div className="ml-8 mt-7 ">
                    <p className="font-bold">Max Price :- {` $ ${maxPrice}` || ""}</p>
                    <input type="range" min={1} max={10000} value={maxPrice} className="" onChange={rangeHandler} />
                </div>
                <div className="ml-8 mt-7  ">
                    <p className="font-bold">Categories :-</p>
                    <select value={category} onChange={categoryHandler} className="mt-2 rounded-full focus:outline-none py-1 px-2 text-slate-900 dark:border-2 dark:border-slate-900">
                        <option value="">All</option>
                        {categories.map(category => {
                            return <option key={category} value={category}>{category}</option>
                        })}
                    </select>
                </div>
                <div className="ml-8 mt-7  ">
                    <p className="font-bold">Brands :-</p>
                    <select value={brand} onChange={brandHandler} className="mt-2 rounded-full focus:outline-none py-1 px-2 w-[170px] text-slate-900 dark:border-2 dark:border-slate-900">
                        <option value="">All</option>
                        {brands.map((brand) => {
                            return <option key={brand} value={brand}>{brand}</option>
                        })}
                    </select>
                </div>
            </div>

            {/* Right Section */}
            <div className="xl:w-[74%] w-full">
                <p className=" text-3xl text-center font-serif underline">Products</p>
                <div className="flex flex-col justify-center items-center mt-16 w-full ">
                    <input type="text" value={search} onChange={searchHandler} placeholder="Search" className="px-4 w-[60%] rounded-xl py-1 focus:outline-none bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900" />
                    <div className="flex justify-between items-center w-[80%] mt-4">
                        <button disabled={!isPrevPage} onClick={() => setPage(prev => prev - 1)} className={`${!isPrevPage ? 'hidden' : ''} btn px-3 py-1 rounded-full`}>Prev</button>
                        <span>{page} of {products.length}</span>
                        <button disabled={!isNextPage} onClick={() => setPage(prev => prev + 1)} className={`${!isNextPage ? 'hidden' : ''} btn px-3 py-1 rounded-full`}>Next</button>
                    </div>
                    <div className=' pt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center '>
                        {products.map((product) => {
                            return <ProductCard key={product.id} productId={product.id} productTitle={product.title} productPrice={product.price} productRating={Math.round(product.rating)} productThumbnail={product.thumbnail} productDescription={product.description} />
                        })
                        }
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
}

export default Search