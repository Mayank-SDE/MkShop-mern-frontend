import { useMemo } from "react";
import { useTable } from "react-table"
import { myOrderTableData } from "../data/myOrderTable/myOrderTableData";
import { COLUMNS } from "../data/myOrderTable/myOrderTableColumns";


const Orders = () => {


    const data = useMemo(() => myOrderTableData, []);

    const columns = useMemo(() => COLUMNS, []);


    const tableInstance = useTable({
        data,
        columns
    });

    const { getTableBodyProps, getTableProps, rows, prepareRow, headerGroups } = tableInstance;

    return (
        <>

            <div>
                <div className="container">
                    <table {...getTableProps()}>
                        <thead>
                            {
                                headerGroups.map(headerGroup => {
                                    return <tr {...headerGroup.getHeaderGroupProps()}>
                                        {
                                            headerGroup.headers.map((column) => {
                                                return <th {...column.getHeaderProps()}>
                                                    {column.render("Header")}
                                                </th>
                                            })
                                        }
                                    </tr>
                                })
                            }
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {
                                rows.map(row => {
                                    prepareRow(row);
                                    return <tr {...row.getRowProps()}>
                                        {
                                            row.cells.map(cell => {
                                                return <td {...cell.getCellProps()}>
                                                    {cell.render("Cell")}
                                                </td>
                                            })

                                        }
                                    </tr>
                                })
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

        </>)
}

export default Orders