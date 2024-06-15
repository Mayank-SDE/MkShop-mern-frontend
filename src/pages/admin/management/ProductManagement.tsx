import React, { useEffect, useState } from "react";
import { useDeleteProductMutation, useGetProductDetailsQuery, useUpdateProductMutation } from "../../../redux/api/productAPI";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Product } from "../../../types/types";
import ProductManagementSkeleton from "../../../components/skeletons/ProductManagementSkeleton";
import toast from "react-hot-toast";
import { MdArrowBack } from "react-icons/md";

const ProductManagement = () => {
    const params = useParams();
    const { data, isLoading, isError } = useGetProductDetailsQuery(params.id as string);

    const [updateProduct] = useUpdateProductMutation();
    const [deleteProduct] = useDeleteProductMutation();
    const navigate = useNavigate()
    const product = data?.product as Product;

    const [updatedTitle, setUpdatedTitle] = useState("");
    const [updatedDescription, setUpdatedDescription] = useState("");
    const [updatedPrice, setUpdatedPrice] = useState(0);
    const [updatedRating, setUpdatedRating] = useState(0);
    const [updatedDiscountPercentage, setUpdatedDiscountPercentage] = useState(0);
    const [updatedStock, setUpdatedStock] = useState(0);
    const [updatedBrand, setUpdatedBrand] = useState("");
    const [updatedCategory, setUpdatedCategory] = useState("");
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);


    useEffect(() => {
        if (product) {
            setUpdatedTitle(product.title);
            setUpdatedDescription(product.description);
            setUpdatedPrice(product.price);
            setUpdatedRating(product.rating);
            setUpdatedDiscountPercentage(product.discountPercentage);
            setUpdatedStock(product.stock);
            setUpdatedBrand(product.brand);
            setUpdatedCategory(product.category);
            setImagePreviews(product.images.map((image: string) => (image)));
        }
    }, [product]);
    if (isError) {
        return <Navigate to={"/404"} />
    }
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const files = Array.from(event.target.files);
            setImageFiles(files);
            setImagePreviews(files.map(file => URL.createObjectURL(file)));
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!updatedTitle ||
            !updatedDescription ||
            !updatedPrice ||
            !updatedRating ||
            !updatedDiscountPercentage ||
            !updatedStock ||
            !updatedBrand ||
            !updatedCategory ||
            !imageFiles.length
        ) {
            toast.error("Enter all the fields correctly");
            return;
        }
        if (imageFiles.length !== 4) {
            toast.error("Enter exactly 4 images");
            return;
        }

        const formData = new FormData();
        formData.append("title", updatedTitle.trim());
        formData.append("description", updatedDescription.trim());
        formData.append("price", updatedPrice.toString().trim());
        formData.append("rating", updatedRating.toString().trim());
        formData.append("discountPercentage", updatedDiscountPercentage.toString().trim());
        formData.append("stock", updatedStock.toString().trim());
        formData.append("brand", updatedBrand.trim());
        formData.append("category", updatedCategory.trim());
        imageFiles.forEach((file) => {
            formData.append("images", file);
        });

        try {
            const response = await updateProduct({ formData, productId: product._id }).unwrap();
            if (response.success) {
                toast.success(response.message);
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Update failed. Please try again.");
        }
    };
    const deleteProductHandler = async () => {
        try {
            const response = await deleteProduct({ productId: product._id }).unwrap();
            if (response.success) {
                toast.success(response.message);
                navigate("/admin/products");
                return;
            } else {
                toast.error(response.message);

            }
        } catch (error) {
            console.error(error);
            toast.error("Deletion failed. Please try again.");
        }
    }


    return isLoading ? (
        <ProductManagementSkeleton />
    ) : (
        <div className="flex flex-wrap gap-2 text-slate-900 dark:text-slate-100 justify-center">
            <div className="flex flex-col gap-3 flex-1 p-4 border-gray-500 border rounded-lg my-6">
                <div className="flex justify-between items-center">
                    <div className="dark:text-slate-100 text-slate-900 font-bold text-xs">ID - {product._id}</div>
                    {updatedStock > 0 ? (
                        <div className="text-green-500 font-bold text-xs">Available - {updatedStock} left</div>
                    ) : (
                        <div className="text-red-500 font-bold text-xs">Not Available</div>
                    )}
                </div>
                <div className="flex justify-between items-center">
                    <div className="dark:text-slate-100 text-slate-900 font-mono text-xs">createdAt : {new Date(product.createdAt).toLocaleDateString()}</div>
                    <div className="dark:text-slate-100 text-slate-900 font-mono text-xs">updatedAt : {new Date(product.updatedAt).toLocaleDateString()}</div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="dark:text-slate-100 text-slate-900 font-bold text-xs">{updatedTitle}</div>
                    <div className="font-mono text-xs">Price : ${updatedPrice}/-</div>
                </div>
                <div className="flex flex-wrap justify-center items-center flex-1 gap-4">
                    {
                        imagePreviews.map((src, index) => (
                            <img
                                className="w-[150px] rounded-lg"
                                key={index}
                                src={src.startsWith("a") ? `http://localhost:3000/${src}` : src}
                                alt={`Product Image ${index + 1}`}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="w-fit h-fit p-4 border-gray-500 rounded-lg border relative my-6">
                <Link className="bg-slate-900 dark:bg-slate-100 px-3 py-1 absolute top-2 right-2 text-slate-100 dark:text-slate-900 flex items-center justify-center gap-1 rounded-full" to="/admin/products">
                    <div className="text-sm"><MdArrowBack /></div>
                    <div className="text-xs "> Products</div>
                </Link>
                <div className="text-center text-lg font-bold">Update Product</div>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-6">
                    <div className="flex flex-wrap justify-around mt-4 gap-3">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col text-sm gap-2">
                                <div className="flex gap-[2px]">
                                    <div className="text-red-500">*</div>
                                    <label className="text-slate-700 dark:text-slate-300 font-semibold" htmlFor="title">Title</label>
                                </div>
                                <input
                                    className="text-xs rounded-lg py-1 px-2 bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900"
                                    type="text"
                                    id="title"
                                    value={updatedTitle}
                                    onChange={(e) => setUpdatedTitle(e.target.value)}
                                    placeholder="Enter product title."
                                    required
                                />
                            </div>
                            <div className="flex flex-col text-sm gap-2">
                                <div className="flex gap-[2px]">
                                    <div className="text-red-500">*</div>
                                    <label className="text-slate-700 dark:text-slate-300 font-semibold" htmlFor="price">Price</label>
                                </div>
                                <input
                                    className="text-xs rounded-lg py-1 px-2 bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900"
                                    type="number"
                                    id="price"
                                    value={updatedPrice}
                                    onChange={(e) => setUpdatedPrice(Number(e.target.value))}
                                    placeholder="Enter product price."
                                    required
                                />
                            </div>
                            <div className="flex flex-col text-sm gap-2">
                                <div className="flex gap-[2px]">
                                    <div className="text-red-500">*</div>
                                    <label className="text-slate-700 dark:text-slate-300 font-semibold" htmlFor="rating">Rating</label>
                                </div>
                                <input
                                    className="text-xs rounded-lg py-1 px-2 bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900"
                                    type="number"
                                    id="rating"
                                    value={updatedRating}
                                    onChange={(e) => setUpdatedRating(Number(e.target.value))}
                                    placeholder="Enter product rating."
                                    required
                                    max={5}
                                    min={1}
                                />
                            </div>
                            <div className="flex flex-col text-sm gap-2">
                                <div className="flex gap-[2px]">
                                    <div className="text-red-500">*</div>
                                    <label className="text-slate-700 dark:text-slate-300 font-semibold" htmlFor="discountPercentage">Discount Percentage</label>
                                </div>
                                <input
                                    className="text-xs rounded-lg py-1 px-2 bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900"
                                    type="number"
                                    id="discountPercentage"
                                    value={updatedDiscountPercentage}
                                    onChange={(e) => setUpdatedDiscountPercentage(Number(e.target.value))}
                                    placeholder="Enter discount percentage."
                                    required
                                    max={100}
                                    min={0}
                                />
                            </div>
                            <div className="flex flex-col text-sm gap-2">
                                <div className="flex gap-[2px]">
                                    <div className="text-red-500">*</div>
                                    <label className="text-slate-700 dark:text-slate-300 font-semibold" htmlFor="stock">Stock</label>
                                </div>
                                <input
                                    className="text-xs rounded-lg py-1 px-2 bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900"
                                    type="number"
                                    id="stock"
                                    value={updatedStock}
                                    onChange={(e) => setUpdatedStock(Number(e.target.value))}
                                    placeholder="Enter product stock."
                                    required
                                />
                            </div>
                            <div className="flex flex-col text-sm gap-2">
                                <div className="flex gap-[2px]">
                                    <div className="text-red-500">*</div>
                                    <label className="text-slate-700 dark:text-slate-300 font-semibold" htmlFor="brand">Brand</label>
                                </div>
                                <input
                                    className="text-xs rounded-lg py-1 px-2 bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900"
                                    type="text"
                                    id="brand"
                                    value={updatedBrand}
                                    onChange={(e) => setUpdatedBrand(e.target.value)}
                                    placeholder="Enter product brand."
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col text-sm gap-2">
                                <div className="flex gap-[2px]">
                                    <div className="text-red-500">*</div>
                                    <label className="text-slate-700 dark:text-slate-300 font-semibold" htmlFor="category">Category</label>
                                </div>
                                <input
                                    className="text-xs rounded-lg py-1 px-2 bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900"
                                    type="text"
                                    id="category"
                                    value={updatedCategory}
                                    onChange={(e) => setUpdatedCategory(e.target.value)}
                                    placeholder="Enter product category."
                                    required
                                />
                            </div>
                            <div className="flex flex-col text-sm gap-2">
                                <div className="flex gap-[2px]">
                                    <div className="text-red-500">*</div>
                                    <label className="text-slate-700 dark:text-slate-300 font-semibold" htmlFor="description">Description</label>
                                </div>
                                <textarea
                                    className="text-xs h-[90px] rounded-lg py-1 px-2 bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900"
                                    id="description"
                                    value={updatedDescription}
                                    onChange={(e) => setUpdatedDescription(e.target.value)}
                                    placeholder="Enter product description."
                                    required
                                />
                            </div>
                            <div className="flex flex-col text-sm justify-center cursor-pointer items-center mt-5 gap-2">
                                <div className="flex gap-[2px]">
                                    <div className="text-red-500">*</div>
                                    <label className="text-slate-900 dark:text-slate-100 font-semibold" htmlFor="images">Images</label>
                                </div>
                                <div className="text-xs font-thin">* Please choose exactly 4 images simultaneously.</div>
                                <input
                                    className="text-xs"
                                    type="file"
                                    id="images"
                                    multiple
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    required
                                />
                                <div className="flex flex-wrap text-sm font-semibold gap-2">
                                    {imagePreviews.map((src, index) => (
                                        <img
                                            className="w-[60px] rounded-3xl"
                                            key={index}
                                            src={src.startsWith("a") ? `http://localhost:3000/${src}` : src}
                                            alt={`Product Image ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-around items-center w-full">
                        <button
                            type="submit"
                            className="bg-green-500 text-slate-100 hover:bg-green-600 px-3 text-xs hover:scale-115 mt-4 w-fit py-1 h-fit font-semibold cursor-pointer rounded-full"
                        >
                            Update
                        </button>
                        <button
                            onClick={deleteProductHandler}
                            type="button"
                            className="bg-red-500 text-slate-100 hover:bg-red-600 px-3 text-xs hover:scale-115 mt-4 w-fit py-1 h-fit font-semibold cursor-pointer rounded-full"
                        >
                            Delete
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductManagement;
