import { ReactElement, useEffect, useState } from "react";
import { Column } from "react-table";
import TableHOC from "../../components/admin/TableHOC";

import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import { useGetAllProductsQuery } from "../../redux/api/productAPI";
import toast from "react-hot-toast";
import { CustomError } from "../../types/api-types";
import TableSkeleton from "../../components/skeletons/TableSkeleton";
import { server } from "../../utils/config";



interface ProductTableInterface {
    image: ReactElement;
    name: string;
    price: number;
    stock: number;
    action: ReactElement;
}

const columns: Column<ProductTableInterface>[] = [{
    Header: "Image",
    accessor: "image"
}, {
    Header: "Name",
    accessor: "name"
}, {
    Header: "Price",
    accessor: "price"
}, {
    Header: "Stock",
    accessor: "stock"
}, {
    Header: "Action",
    accessor: "action"
}];

const Products = () => {
    const { data, isLoading, isError, error } = useGetAllProductsQuery();
    const [rows, setRows] = useState<ProductTableInterface[]>([]);

    useEffect(() => {
        if (isError) {
            toast.error((error as CustomError).data.message);
        }
        if (data && data.success) {
            const newRows = data.products.map(product => {
                return {
                    image: <img src={product.thumbnail.startsWith("a") ? `${server}/${product.thumbnail}` : product.thumbnail} alt="product" className="rounded-full w-[50px]" />,
                    name: product.title,
                    price: product.price,
                    stock: product.stock,
                    action: <Link to={`/admin/product/${product._id}`} className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1">Manage</Link>,
                };
            });
            setRows(newRows);
        }
    }, [data, isError, error]);

    const Table = TableHOC<ProductTableInterface>(columns, rows, 'bg-slate-100 rounded-2xl text-slate-900 dark:bg-slate-900 dark:text-slate-100 w-full overflow-x-auto h-[500px] mt-4', "Products", true);

    return (
        <>
            <Link to="/admin/product/new" className="bg-slate-900 text-slate-100 rounded-full px-3 py-1 dark:bg-slate-100 dark:text-slate-900 flex justify-center items-center w-fit text-sm gap-2 mt-14 sm:mt-8">
                Product
                <IoIosAddCircle className="text-2xl" />
            </Link>
            {isLoading ? <TableSkeleton /> : <Table />}
        </>
    );
};

export default Products;
