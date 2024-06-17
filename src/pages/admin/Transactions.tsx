import { Column } from "react-table";
import TableHOC from "../../components/admin/TableHOC";
import { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAllOrdersQuery } from "../../redux/api/orderAPI";
import { useSelector } from "react-redux";
import { CustomError } from "../../types/api-types";
import toast from "react-hot-toast";
import { getStatusColor } from "../../utils/style";
import TableSkeleton from "../../components/skeletons/TableSkeleton";
import { RootState } from "../../redux/store";

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

const Transactions = () => {
    const { user } = useSelector((state: RootState) => state.userReducer);
    const { isLoading, data, isError, error } = useAllOrdersQuery();

    const [rows, setRows] = useState<TransactionTableInterface[]>([]);

    if (isError) {
        const err = error as CustomError;
        toast.error(err.data.message);
    }
    useEffect(() => {
        if (data) {
            setRows(data.orders.map((order) => {
                return {
                    username: user?.username as string,
                    amount: order.total,
                    quantity: order.orderItems.length,
                    discount: order.discount,
                    status: <Link to="/" className={`${getStatusColor(order.status)}`}>{order.status}</Link>,
                    action: <Link className="bg-blue-500 px-3 py-1 hover:bg-blue-600 rounded-full font-semibold text-slate-100" to={`/admin/transactions/${order._id}`}>Manage</Link>,
                };
            }));
        }
    }, [data, user]);


    const Table = TableHOC<TransactionTableInterface>(
        columns,
        rows,
        'bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100 w-full overflow-x-auto h-[500px] mt-4',
        "Transactions",
        rows.length > 6
    );

    return <>{isLoading ? <TableSkeleton /> : <Table />}</>;
}

export default Transactions;
