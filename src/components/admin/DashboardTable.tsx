import { Column } from 'react-table';
import TableHOC from './TableHOC';
interface transactionTable {
    id: string;
    quantity: number;
    amount: number;
    discount: number;
    status: string;
}

const columns: Column<transactionTable>[] = [
    {
        Header: "Id",
        accessor: "id"
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
    }
]

const DashboardTable = ({ data = [] }: { data: transactionTable[] }) => {

    const Table = TableHOC<transactionTable>(columns, data, 'border border-slate-900 dark:border-slate-100  rounded-2xl h-[400px] overflow-auto p-4 w-full  mt-4 ', "Top Transactions", false);

    return <Table />;

}

export default DashboardTable