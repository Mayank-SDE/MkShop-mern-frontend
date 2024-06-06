import { ReactElement, useCallback, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Column } from "react-table";
import TableHOC from "../../components/admin/TableHOC";


interface CustomerTableInterface {
    avatar: ReactElement;
    name: string;
    gender: string;
    email: string;
    role: string;
    action: ReactElement;
}
const columns: Column<CustomerTableInterface>[] = [{
    Header: "Avatar",
    accessor: "avatar"
}, {
    Header: "Name",
    accessor: "name"
}, {
    Header: "Gender",
    accessor: "gender"
}, {
    Header: "Email",
    accessor: "email"
}, {
    Header: "Role",
    accessor: "role"
}, {
    Header: "Action",
    accessor: "action"
}];
const Customers = () => {
    const [data, setData] = useState<CustomerTableInterface[]>([{
        avatar: <img className="w-[50px] rounded-full" src="http://localhost:3000/assets/MKShop-e63ecf03-60ba-4eba-9b59-864ae75ea80a.jpeg" alt="mayank-img" />,
        name: "Mayank Choudhary",
        gender: "Male",
        email: "mayankchoudhary6055@gmail.com",
        role: "admin",
        action: <div className="text-xl text-red-500 hover:scale-150 hover:text-red-900 cursor-pointer"><MdDelete /></div>
    }, {
        avatar: <img className="w-[50px] rounded-full" src="http://localhost:3000/assets/MKShop-e63ecf03-60ba-4eba-9b59-864ae75ea80a.jpeg" alt="mayank-img" />,
        name: "Mayank Choudhary",
        gender: "Male",
        email: "mayankchoudhary6055@gmail.com",
        role: "admin",
        action: <div className="text-xl text-red-500 hover:scale-150 hover:text-red-900 cursor-pointer"><MdDelete /></div>
    }, {
        avatar: <img className="w-[50px] rounded-full" src="http://localhost:3000/assets/MKShop-e63ecf03-60ba-4eba-9b59-864ae75ea80a.jpeg" alt="mayank-img" />,
        name: "Mayank Choudhary",
        gender: "Male",
        email: "mayankchoudhary6055@gmail.com",
        role: "admin",
        action: <div className="text-xl text-red-500 hover:scale-150 hover:text-red-900 cursor-pointer"><MdDelete /></div>
    }, {
        avatar: <img className="w-[50px] rounded-full" src="http://localhost:3000/assets/MKShop-e63ecf03-60ba-4eba-9b59-864ae75ea80a.jpeg" alt="mayank-img" />,
        name: "Mayank Choudhary",
        gender: "Male",
        email: "mayankchoudhary6055@gmail.com",
        role: "admin",
        action: <div className="text-xl text-red-500 hover:scale-150 hover:text-red-900 cursor-pointer"><MdDelete /></div>
    }]);
    const Table = useCallback(TableHOC<CustomerTableInterface>(columns, data, 'bg-slate-100  text-slate-900 dark:bg-slate-900 dark:text-slate-100 w-full overflow-x-auto  h-[500px]  mt-4', "Customers", true), []);

    return Table();

}

export default Customers