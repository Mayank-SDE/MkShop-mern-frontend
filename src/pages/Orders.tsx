import { useMemo } from "react";
import { useGlobalFilter, usePagination, useRowSelect, useSortBy, useTable } from "react-table"
import { myOrderTableData } from "../data/myOrderTable/myOrderTableData";
import { COLUMNS } from "../data/myOrderTable/myOrderTableColumns";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import GlobalFilter from "../components/GlobalFilter";
import { GrCaretNext, GrCaretPrevious, GrChapterNext, GrChapterPrevious } from "react-icons/gr";
import { TiArrowUnsorted } from "react-icons/ti";
import Checkbox from "../components/Checkbox";


const Orders = () => {


    const data = useMemo(() => myOrderTableData, []);

    const columns = useMemo(() => COLUMNS, []);


    const tableInstance = useTable({
        data,
        columns,
        initialState: {
            pageIndex: 2
        }
    }, useGlobalFilter, useSortBy, usePagination, useRowSelect, (hooks) => {
        hooks.visibleColumns.push((columns) => {
            return [{
                id: 'selection',
                Header: ({ getToggleAllRowsSelectedProps }) => {
                    <Checkbox {...getToggleAllRowsSelectedProps()} />
                },
                Cell: ({ row }) => {
                    <Checkbox {...row.getToggleRowSelectedProps()} />
                }
            },
            ...columns];
        });
    });

    const { getTableBodyProps, getTableProps, page, prepareRow, headerGroups, footerGroups, state, setGlobalFilter, nextPage, previousPage, canNextPage, canPreviousPage, pageOptions, gotoPage, pageCount, setPageSize, allColumns, getToggleHideAllColumnsProps } = tableInstance;


    const { globalFilter, pageIndex, pageSize } = state;


    return (
        <>

            <div>
                <div className="container overflow-auto rounded-lg shadow-xl">
                    <p className="text-center my-10 text-2xl font-bold font-serif">My Orders</p>
                    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-5">
                        <button className={`${!canPreviousPage ? 'opacity-20' : ''}`} disabled={!canPreviousPage} onClick={() => gotoPage(0)}><GrChapterPrevious /></button>
                        <button disabled={!canPreviousPage} className={`flex justify-center items-center gap-2 hover:bg-slate-900 hover:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900 rounded-full px-2 ${!canPreviousPage ? 'opacity-20' : ''}`} onClick={() => previousPage()}><GrCaretPrevious />
                            <p>Prev</p>
                        </button>
                        <span>{pageIndex + 1} of {pageOptions.length}</span>
                        <button disabled={!canNextPage} className={`flex justify-center items-center gap-2 hover:bg-slate-900 hover:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900 rounded-full px-2 ${!canNextPage ? 'opacity-20' : ''}`} onClick={() => nextPage()}>
                            <p>Next</p>
                            <GrCaretNext />
                        </button>
                        <button className={`${!canNextPage ? 'opacity-20' : ''}`} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}><GrChapterNext /></button>

                        <span className="flex justify-center items-center gap-2">
                            <label htmlFor="jumpPage">Go to page :-</label>
                            <input className="w-28 rounded-xl text-slate-900 border-slate-900 border px-2" type="number" id="jumpPage" defaultValue={pageIndex + 1} onChange={(event) => {
                                const pageNumber = event.target.value ? Number(event.target.value) - 1 : 0
                                gotoPage(pageNumber)
                            }} />
                        </span>
                        <span>
                            <select className="rounded-full text-slate-900 border-slate-900 border px-2" value={pageSize} onChange={(event) => setPageSize(Number(event.target.value))} name="" id="">
                                {
                                    [5, 10, 15, 20, 25, 30, 35, 50].map((pageSizeClient) => {
                                        return <option value={pageSizeClient}>Show - {pageSizeClient}</option>
                                    })
                                }
                            </select>
                        </span>

                    </div>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-5">
                        <div>
                            <Checkbox {...getToggleHideAllColumnsProps()} /> Toggle All
                        </div>
                        {
                            allColumns.map((column) => {
                                return <div key={column.id} className="flex justify-center gap-2 items-center">
                                    <label htmlFor="viewCol">
                                        {column.Header as string}
                                    </label>
                                    <input type="checkbox" id="viewCol" {...column.getToggleHiddenProps()} />
                                </div>
                            })
                        }
                    </div>
                    <table {...getTableProps()} className="w-full">
                        <thead className="dark:bg-slate-100 dark:text-slate-900 text-slate-100 bg-slate-900 border-b-2 border-gray-200 text-xl">
                            {
                                headerGroups.map(headerGroup => {
                                    return <tr {...headerGroup.getHeaderGroupProps()}>
                                        {
                                            headerGroup.headers.map((column) => {
                                                return <th className="p-3 text-sm font-semibold tracking-wide text-left" {...column.getHeaderProps(column.getSortByToggleProps())}>
                                                    <div> {column.render("Header")}</div>
                                                    <div className="text-xs font-thin">{column.isSorted ? column.isSortedDesc ? <div className="flex justify-start items-center">Desc <FaSortUp /></div> : <div className="flex justify-start items-center">Asc <FaSortDown /></div> : <div className="flex justify-start items-center">Order <TiArrowUnsorted /></div>}</div>

                                                </th>
                                            })
                                        }
                                    </tr>
                                })
                            }
                        </thead>
                        <tbody {...getTableBodyProps()} className="divide-y dark:divide-slate-900 divide-slate-100 ">
                            {
                                page.map(row => {
                                    prepareRow(row);
                                    // return <tr className="even:bg-slate-100 even:text-slate-900 odd:bg-slate-900 odd:text-slate-100" {...row.getRowProps()}>
                                    return <tr className="dark:hover:bg-slate-100 hover:bg-slate-900 text-slate-900 dark:hover:text-slate-900 dark:text-slate-100 hover:text-slate-100" {...row.getRowProps()}>
                                        {
                                            row.cells.map(cell => {
                                                return <td className="p-3 text-sm whitespace-normal " {...cell.getCellProps()}>
                                                    {cell.render("Cell")}
                                                </td>
                                            })

                                        }
                                    </tr>
                                })
                            }
                        </tbody>
                        <tfoot className="bg-slate-100 text-slate-900 dark:text-slate-100 dark:bg-slate-900 border-b-2 border-gray-200">
                            {footerGroups.map(footerGroup => {
                                return <tr {...footerGroup.getFooterGroupProps()}>
                                    {
                                        footerGroup.headers.map((column) => {
                                            return <td {...column.getFooterProps()}>{column.render("Footer")}</td>
                                        })
                                    }
                                </tr>
                            })}
                        </tfoot>
                    </table >
                    {/* {
                        JSON.stringify({
                            selectedFlatRows: selectedFlatRows.map((row) => row.original)
                        }, null, 2)
                    } */}
                </div >
            </div >

        </>)
}

export default Orders