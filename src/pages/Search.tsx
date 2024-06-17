import { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useGetFilteredBrandsQuery, useGetFilteredCategoriesQuery, useSearchProductsQuery } from "../redux/api/productAPI";
import ProductCard from "../components/ProductCard";
import { CustomError } from "../types/api-types";
import { Product } from "../types/types";
import { ImCross } from "react-icons/im";
import ProductSkeleton from "../components/skeletons/ProductSkeleton";
import { useSearchParams } from "react-router-dom";

const Search = () => {

    const [searchParams] = useSearchParams()

    const [search, setSearch] = useState<string>(searchParams.get("keyword") || "");
    const [sort, setSort] = useState<string>("");
    const [maxPrice, setMaxPrice] = useState<number>(10000);
    const [page, setPage] = useState<number>(1);
    const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get("category") || '');
    const [selectedBrand, setSelectedBrand] = useState<string>('');

    const { data: filteredCategories, isLoading: loadingCategories, isError: isCategoryError, error: categoryError } = useGetFilteredCategoriesQuery({ selectedBrand });
    const { data: filteredBrands, isLoading: loadingBrands, isError: isBrandsError, error: brandsError } = useGetFilteredBrandsQuery({ selectedCategory });

    if (isCategoryError) {
        toast.error((categoryError as CustomError).data.message);
    }

    if (isBrandsError) {
        toast.error((brandsError as CustomError).data.message);
    }

    const { isLoading: productLoading, data: searchedProducts, isError: isLoadingProductsError, error: loadingProductsError } = useSearchProductsQuery({ search, sort, category: selectedCategory, brand: selectedBrand, page, price: maxPrice });

    useEffect(() => {
        setSearch(searchParams.get("keyword") || "");
        setSelectedCategory(searchParams.get("category") || "");
    }, [searchParams]);

    if (isLoadingProductsError) {
        toast.error((loadingProductsError as CustomError).data.message);
    }

    const sortHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setSort(event.target.value);
    };

    const rangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(Number(event.target.value));
    };

    const categoryHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
        if (selectedCategory) {
            setSelectedBrand('');
        }
    };

    const brandHandler = (event: ChangeEvent<HTMLSelectElement>) => {

        setSelectedBrand(event.target.value);
        if (selectedBrand) {
            setSelectedCategory('');
        }
    };

    const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const clearFilters = () => {
        setSearch('');
        setMaxPrice(100000);
        setPage(1);
        setSelectedBrand('');
        setSelectedCategory('');
        setSort('');
    }

    const isPrevPage = page > 1;
    const isNextPage = page < (searchedProducts?.totalPage ?? 1);
    const totalPage = searchedProducts?.totalPage;

    return (
        <div className="pt-20 w-full bg-slate-100 dark:bg-slate-900">
            <div className="flex relative flex-col w-full lg:flex-row container">
                {/* Left Section */}
                <div className="flex flex-wrap flex-row lg:flex-col lg:w-[25%] w-full justify-center items-start p-4 gap-4 border border-slate-100 text-slate-100 bg-slate-900 rounded-xl dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900 h-fit">
                    <p className="text-lg font-mono">Filters</p>
                    <div className="text-sm text-slate-900">
                        <p className="font-bold text-slate-100 dark:text-slate-900">Sort by :-</p>
                        <select value={sort} onChange={sortHandler} className="xl:mt-2 rounded-full focus:outline-none xl:py-1 xl:px-2 dark:border-2 text-xs dark:border-slate-900">
                            <option value="">None</option>
                            <option value="asc">Price - (Low to High)</option>
                            <option value="dsc">Price - (High to Low)</option>
                        </select>
                    </div>
                    <div className="text-sm">
                        <p className="font-bold">Max Price :- {` $${maxPrice}`}</p>
                        <input type="range" min={1} max={10000} value={maxPrice} className="text-xs" onChange={rangeHandler} />
                    </div>
                    <div className="text-sm">
                        <p className="font-bold">Categories :-</p>
                        <select value={selectedCategory} onChange={categoryHandler} className="mt-2 rounded-full focus:outline-none py-1 px-2 text-slate-900 dark:border-2 text-xs dark:border-slate-900">
                            <option value="">All</option>
                            {!loadingCategories && filteredCategories?.categories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>



                    </div>
                    <div className="text-sm">
                        <p className="font-bold">Brands :-</p>
                        <select value={selectedBrand} onChange={brandHandler} className="mt-2 rounded-full focus:outline-none py-1 px-2 w-[170px] text-slate-900 dark:border-2 text-xs dark:border-slate-900">
                            <option value="">All</option>
                            {!loadingBrands && filteredBrands?.brands.map((brand) => (
                                <option key={brand} value={brand}>{brand}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full flex flex-col gap-4">
                    <p className="text-lg text-center font-serif underline">Products</p>
                    <div className="flex flex-col gap-4 text-sm justify-center items-center w-full">
                        <input type="text" value={search} onChange={searchHandler} placeholder="Search" className="px-4 w-[60%] rounded-xl py-1 focus:outline-none bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900" />
                        {totalPage && totalPage > 1 && <div className="flex justify-between items-center w-[80%]">
                            <button disabled={!isPrevPage} onClick={() => setPage(prev => prev - 1)} className={`${!isPrevPage ? 'bg-slate-500' : ''} bg-slate-900 dark:bg-slate-100 px-4 text-slate-100 dark:text-slate-900 hover:scale-110 text-xs py-1 rounded-full`}>Prev</button>
                            <span className="text-xs font-mono">{page} of {searchedProducts?.totalPage}</span>
                            <button disabled={!isNextPage} onClick={() => setPage(prev => prev + 1)} className={`${!isNextPage ? 'bg-slate-500' : ''} bg-slate-900 hover:bg-slate-600 hover:text-slate-100 dark:bg-slate-100 px-4 text-slate-100 dark:text-slate-900 hover:scale-110 text-xs py-1 rounded-full`}>Next</button>
                        </div>
                        }
                        <div className=" flex justify-center items-center text-xs flex-wrap gap-2">
                            {search && <div className="font-mono  gap-2 rounded-xl px-3  py-1 flex justify-center items-center  border-slate-500 border text-slate-500 hover:bg-slate-600 hover:text-slate-100 order"><div> Keyword : {search}</div>  <button className="text-xs" onClick={() => setSearch("")}>
                                <ImCross />
                            </button>
                            </div>}
                            {sort && <div className="font-mono flex justify-center items-center gap-2 rounded-xl px-3  py-1  border-slate-500  text-slate-500 hover:bg-slate-600 hover:text-slate-100 border"><div> Order : {sort}</div>  <button className="text-xs" onClick={() => setSort("")}>
                                <ImCross />
                            </button>
                            </div>}
                            {selectedCategory && <div className="font-mono flex justify-center items-center gap-2 rounded-xl px-3  py-1 border-slate-500  text-slate-500 hover:bg-slate-600 hover:text-slate-100 border"><div> Category : {selectedCategory}</div> <button className="text-xs" onClick={() => setSelectedCategory("")}>
                                <ImCross />
                            </button>
                            </div>}
                            {selectedBrand && <div className="font-mono flex justify-center items-center gap-2 rounded-xl px-3  py-1 border-slate-500 border text-slate-500 hover:bg-slate-600 hover:text-slate-100 "><div> Brand : {selectedBrand}</div> <button className="text-xs" onClick={() => setSelectedBrand("")}>
                                <ImCross />
                            </button>
                            </div>}
                            {page && <div className="font-mono flex justify-center items-center gap-2 rounded-xl px-3  py-1 border-slate-500 border text-slate-500 hover:bg-slate-600 hover:text-slate-100 "><div> Page : {page}
                            </div> <button className="text-xs" onClick={() => setPage(1)}>
                                    <ImCross />
                                </button>
                            </div>}
                            {maxPrice && <div className="font-mono flex justify-center items-center gap-2 rounded-xl px-3  py-1 border  text-slate-500 border-slate-500 hover:bg-slate-600 hover:text-slate-100 "><div> Less than :</div> {maxPrice} <button className="text-xs" onClick={() => setMaxPrice(100000)}>
                                <ImCross />
                            </button>
                            </div>}
                            {
                                (maxPrice || page || selectedBrand || selectedCategory || sort || search) && <button onClick={clearFilters} className="gap-2 rounded-xl px-3  py-1 border  text-slate-500 border-slate-500 cursor-pointer hover:bg-slate-600 hover:text-slate-100">Clear All</button>
                            }
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 h-screen overflow-y-scroll ">
                            {!productLoading && searchedProducts?.products.map((product: Product) => (
                                <ProductCard
                                    key={product._id}
                                    productId={product._id}
                                    productTitle={product.title}
                                    productPrice={product.price}
                                    productRating={Math.round(product.rating)}
                                    productThumbnail={product.thumbnail}
                                    productDescription={product.description}
                                    productQuantity={1}
                                    productStock={product.stock}
                                />
                            ))}
                            {productLoading &&
                                [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
                                    return <ProductSkeleton key={item} />
                                })
                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
