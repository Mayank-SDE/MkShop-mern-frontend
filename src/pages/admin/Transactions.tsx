import { Column } from "react-table";
import TableHOC from "../../components/admin/TableHOC";
import { ReactElement, useCallback, useState } from "react";
import { Link } from "react-router-dom";


interface TransactionTableInterface {
    username: string;
    amount: number;
    quantity: number;
    discount: number;
    status: ReactElement;
    action: ReactElement;
}
const columns: Column<TransactionTableInterface>[] = [{
    Header: "Username",
    accessor: "username"
}, {
    Header: "Quantity",
    accessor: "quantity"
}, {
    Header: "Amount",
    accessor: "amount"
}, {
    Header: "Discount",
    accessor: "discount"
}, {
    Header: "Status",
    accessor: "status"
}, {
    Header: "Action",
    accessor: "action"
}];

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Placed':
            return 'text-[#007BFF]';
        case 'Picked':
            return 'text-[#FFA500]';
        case 'Packed':
            return 'text-[#6F42C1]';
        case 'Shipped':
            return 'text-[#28A745]';
        case 'Delivered':
            return 'text-[#20C997]';
        default:
            return 'text-black';
    }
}

const Transactions = () => {

    const [data, setData] = useState([{

        username: "Mayank Choudhary",
        action: <Link className="bg-blue-500 px-3 py-1 hover:bg-blue-600 rounded-full font-semibold text-slate-100" to="/admin/transactions/abcd">Manage</Link>,
        status: <Link to="/" > delivered</Link>,
        quantity: 50,
        amount: 5000,
        discount: 50
    }, {

        username: "Mayank Choudhary",
        action: <Link className="bg-blue-500 px-3 py-1 hover:bg-blue-600 rounded-full font-semibold text-slate-100" to="/">Manage</Link>,
        status: <Link to="/"> delivered</Link>,
        quantity: 50,
        amount: 5000,
        discount: 50
    }, {

        username: "Mayank Choudhary",
        action: <Link className="bg-blue-500 px-3 py-1 hover:bg-blue-600 rounded-full font-semibold text-slate-100" to="/">Manage</Link>,
        status: <Link to="/"> delivered</Link>,
        quantity: 50,
        amount: 5000,
        discount: 50
    }, {

        username: "Mayank Choudhary",
        action: <Link className="bg-blue-500 px-3 py-1 hover:bg-blue-600 rounded-full font-semibold text-slate-100" to="/">Manage</Link>,
        status: <Link to="/"> delivered</Link>,
        quantity: 50,
        amount: 5000,
        discount: 50
    }, {

        username: "Mayank Choudhary",
        action: <Link className="bg-blue-500 px-3 py-1 hover:bg-blue-600 rounded-full font-semibold text-slate-100" to="/">Manage</Link>,
        status: <Link to="/"> delivered</Link>,
        quantity: 50,
        amount: 5000,
        discount: 50
    }, {

        username: "Mayank Choudhary",
        action: <Link className="bg-blue-500 px-3 py-1 hover:bg-blue-600 rounded-full font-semibold text-slate-100" to="/">Manage</Link>,
        status: <Link to="/"> delivered</Link>,
        quantity: 50,
        amount: 5000,
        discount: 50
    }, {

        username: "Mayank Choudhary",
        action: <Link className="bg-blue-500 px-3 py-1 hover:bg-blue-600 rounded-full font-semibold text-slate-100" to="/">Manage</Link>,
        status: <Link to="/"> delivered</Link>,
        quantity: 50,
        amount: 5000,
        discount: 50
    }]);
    const Table = useCallback(TableHOC<TransactionTableInterface>(columns, data, 'bg-slate-100  text-slate-900 dark:bg-slate-900 dark:text-slate-100 w-full overflow-x-auto  h-[500px]  mt-4', "Transactions", true), []);

    return Table();
}

export default Transactions