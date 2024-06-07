import React, { useState } from "react";

const NewProduct = () => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [rating, setRating] = useState<number>(0);
    const [discountPercentage, setDiscountPercentage] = useState<number>(0);
    const [stock, setStock] = useState<number>(0);
    const [brand, setBrand] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [images, setImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const files = Array.from(event.target.files);
            console.log(images);
            setImages(files);
            setImagePreviews(files.map(file => URL.createObjectURL(file)));
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log({
            title,
            description,
            price,
            rating,
            discountPercentage,
            stock,
            brand,
            category: category.trim().replace(/\s+/g, '-').toUpperCase(),
            images
        });
    };

    return (
        <div className=" w-fit border-2 border-slate-500 rounded-xl mx-auto  p-4  my-6">
            <div className="text-center text-lg font-bold">New Product</div>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-6">
                <div className="flex flex-wrap justify-around mt-4 gap-3 ">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col text-sm  gap-2">
                            <div className="flex gap-[2px]">
                                <div className="text-red-500">*</div>
                                <label className="text-slate-700 dark:text-slate-300 font-semibold" htmlFor="title">Title</label>
                            </div>
                            <input
                                className="text-xs  rounded-lg py-1 px-2 bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900"
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter product title"
                                required
                            />
                        </div>
                        <div className="flex flex-col text-sm  gap-2">
                            <div className="flex gap-[2px]">
                                <div className="text-red-500">*</div>
                                <label className="text-slate-700 dark:text-slate-300 font-semibold" htmlFor="price">Price</label>
                            </div>
                            <input
                                className="text-xs  rounded-lg py-1 px-2 bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900"
                                type="number"
                                id="price"
                                value={price}
                                onChange={(e) => setPrice(parseFloat(e.target.value))}
                                placeholder="Enter product price"
                                required
                            />
                        </div>
                        <div className="flex flex-col text-sm  gap-2">
                            <div className="flex gap-[2px]">
                                <div className="text-red-500">*</div>
                                <label className="text-slate-700 dark:text-slate-300 font-semibold" htmlFor="rating">Rating</label>
                            </div>
                            <input
                                className="text-xs  rounded-lg py-1 px-2 bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900"
                                type="number"
                                id="rating"
                                value={rating}
                                onChange={(e) => setRating(parseFloat(e.target.value))}
                                placeholder="Enter product rating"
                                required
                                max={5}
                                min={1}
                            />
                        </div>
                        <div className="flex flex-col text-sm  gap-2">
                            <div className="flex gap-[2px]">
                                <div className="text-red-500">*</div>
                                <label className="text-slate-700 dark:text-slate-300 font-semibold" htmlFor=
                                    "discountPercentage">Discount Percentage</label></div>
                            <input
                                className=" text-xs rounded-lg py-1 px-2 bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900"
                                type="number"
                                id="discountPercentage"
                                value={discountPercentage}
                                onChange={(e) => setDiscountPercentage(parseFloat(e.target.value))}
                                placeholder="Enter discount percentage"
                                required
                                max={100}
                                min={0}
                            />
                        </div>
                        <div className="flex flex-col text-sm  gap-2">
                            <div className="flex gap-[2px]">
                                <div className="text-red-500">*</div>
                                <label className="text-slate-700 dark:text-slate-300 font-semibold" htmlFor="stock">Stock</label>
                            </div>
                            <input
                                className="text-xs  rounded-lg py-1 px-2 bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900"
                                type="number"
                                id="stock"
                                value={stock}
                                onChange={(e) => setStock(parseFloat(e.target.value))}
                                placeholder="Enter product stock"
                                required
                            />
                        </div>
                        <div className="flex flex-col text-sm  gap-2">
                            <div className="flex gap-[2px]">
                                <div className="text-red-500">*</div>
                                <label className="text-slate-700 dark:text-slate-300 font-semibold" htmlFor="brand">Brand</label>
                            </div>
                            <input
                                className="text-xs  rounded-lg py-1 px-2 bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900"
                                type="text"
                                id="brand"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                                placeholder="Enter product brand"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">

                        <div className="flex flex-col text-sm  gap-2">
                            <div className="flex gap-[2px]">
                                <div className="text-red-500">*</div>
                                <label className="text-slate-700 dark:text-slate-300 font-semibold" htmlFor=
                                    "category">Category</label></div>
                            <input
                                className="text-xs  rounded-lg py-1 px-2 bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900"
                                type="text"
                                id="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                placeholder="Enter product category"
                                required
                            />
                        </div>
                        <div className="flex flex-col  text-sm  gap-2">
                            <div className="flex gap-[2px]">
                                <div className="text-red-500">*</div>
                                <label className="text-slate-700 dark:text-slate-300 font-semibold" htmlFor=
                                    "description">Description</label></div>
                            <textarea
                                className="text-xs  h-[90px] rounded-lg py-1 px-2 bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900"
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter product description"
                                required
                            />
                        </div>
                        <div className="flex flex-col text-sm justify-center cursor-pointer items-center mt-5 gap-2">
                            <div className="flex gap-[2px]">
                                <div className="text-red-500">*</div>
                                <label className="text-slate-700 dark:text-slate-300 font-semibold" htmlFor="images">Images</label>
                            </div>
                            <div className="text-xs font-thin">* Please choose exactly 4 images simontaniously.</div>
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
                                        src={src}
                                        alt={`Product Image ${index + 1}`}
                                    />
                                ))}
                            </div>

                        </div>

                    </div>

                </div>
                <button
                    type="submit" className="bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900  px-3 text-[15px]  hover:scale-115 mt-4 w-fit  py-1 h-fit  font-semibold cursor-pointer rounded-full"
                >
                    Done
                </button>
            </form>
        </div>
    );
};

export default NewProduct;
