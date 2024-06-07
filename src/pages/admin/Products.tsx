import { ReactElement, useCallback, useState } from "react";
import { Column } from "react-table";
import TableHOC from "../../components/admin/TableHOC";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";

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

const productList: ProductTableInterface = [];
const Products = () => {
    const [data, setData] = useState<ProductTableInterface[]>([{
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/product/abcd" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100000,
        stock: 50,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 100,
        stock: 50000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 1000,
        stock: 5000,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1" >Manage</Link>,

    }, {
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s" alt="macbook-image" className="rounded-full w-[50px]" />,
        name: "Macbook",
        price: 10000,
        stock: 500,
        action: <Link to="/admin/products" className="bg-blue-500 text-slate-100 hover:bg-blue-600 text-xs font-mono rounded-full px-3 py-1"  >Manage</Link>,

    }]);
    const Table = useCallback(TableHOC<ProductTableInterface>(columns, data, 'bg-slate-100 rounded-2xl text-slate-900 dark:bg-slate-900 dark:text-slate-100 w-full overflow-x-auto  h-[500px]  mt-4', "Products", true), []);

    return <>
        <Link to="/admin/product/new" className="bg-slate-900 text-slate-100 rounded-full px-3 py-1 dark:bg-slate-100 dark:text-slate-900 flex justify-center items-center w-fit text-sm gap-2 mt-8 ">
            Product
            <IoIosAddCircle className="text-2xl" />
        </Link>
        {Table()}

    </>;
}

export default Products