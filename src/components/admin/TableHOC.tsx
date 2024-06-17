
import { FaSortDown, FaSortUp } from 'react-icons/fa';
import { GrCaretNext, GrCaretPrevious, GrChapterNext, GrChapterPrevious } from 'react-icons/gr';
import { TiArrowUnsorted } from 'react-icons/ti';
import { Column, useTable, TableOptions, useSortBy, usePagination } from 'react-table';

function TableHOC<T extends NonNullable<unknown>>(columns: Column<T>[], data: T[], containerClassname: string, heading: string, showPagination: boolean = false) {
    return function HOC() {
        const options: TableOptions<T> = {
            columns, data, initialState: {
                pageSize: 5
            }
        };

        const tableInstance = useTable(options, useSortBy, usePagination);
        const { getTableBodyProps, getTableProps, page, prepareRow, headerGroups, state, nextPage, previousPage, canNextPage, canPreviousPage, pageOptions, gotoPage, pageCount, setPageSize } = tableInstance;
        const { pageIndex, pageSize } = state;

        return (
            <div className="relative container">
                {showPagination && (
                    <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-800 shadow-lg z-10 flex text-sm flex-wrap justify-center items-center gap-4 py-2">
                        <button className={`${!canPreviousPage ? 'opacity-20' : ''}`} disabled={!canPreviousPage} onClick={() => gotoPage(0)}><GrChapterPrevious /></button>
                        <button disabled={!canPreviousPage} className={`flex justify-center items-center gap-2 hover:bg-slate-900 hover:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900 rounded-full px-2 ${!canPreviousPage ? 'opacity-20' : ''}`} onClick={() => previousPage()}>
                            <GrCaretPrevious />
                            <p>Prev</p>
                        </button>
                        <span>{pageIndex + 1} of {pageOptions.length}</span>
                        <button disabled={!canNextPage} className={`flex justify-center items-center gap-2 hover:bg-slate-900 hover:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900 rounded-full px-2 ${!canNextPage ? 'opacity-20' : ''}`} onClick={() => nextPage()}>
                            <p>Next</p>
                            <GrCaretNext />
                        </button>
                        <button className={`${!canNextPage ? 'opacity-20' : ''}`} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}><GrChapterNext /></button>

                        <span className="flex sm:flex-row flex-col justify-center items-center gap-2">
                            <label htmlFor="jumpPage">Go to page :-</label>
                            <input className="w-28 rounded-xl text-slate-900 border-slate-900 border px-2" type="number" id="jumpPage" defaultValue={pageIndex + 1} onChange={(event) => {
                                const pageNumber = event.target.value ? Number(event.target.value) - 1 : 0
                                gotoPage(pageNumber)
                            }} />
                        </span>
                        <span>
                            <select className="rounded-full text-slate-900 border-slate-900 border px-2" value={pageSize} onChange={(event) => setPageSize(Number(event.target.value))}>
                                {[5, 10, 15, 20, 25, 30, 35, 50].map((size, index) => (
                                    <option value={size} key={index}>Show - {size}</option>
                                ))}
                            </select>
                        </span>
                    </div>
                )}
                <div className={`${containerClassname}`}>
                    <div className="text-xl text-center underline font-bold mt-2">{heading}</div>
                    <div className="overflow-x-auto">
                        <table {...getTableProps()} className="min-w-full relative mt-4">
                            <thead className="bg-slate-900 text-slate-100  sticky top-0 dark:bg-slate-100 dark:text-slate-900">
                                {headerGroups.map((headerGroup, index) => (
                                    <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                                        {headerGroup.headers.map((column, index) => (
                                            <th
                                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                                key={index}
                                                className="bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                            >
                                                {column.render('Header')}
                                                {(column.render('Header') !== 'Action') && (
                                                    <div className="text-xs font-thin">
                                                        {column.isSorted ? (
                                                            column.isSortedDesc ? (
                                                                <div className="flex justify-start items-center">Desc <FaSortUp /></div>
                                                            ) : (
                                                                <div className="flex justify-start items-center">Asc <FaSortDown /></div>
                                                            )
                                                        ) : (
                                                            <div className="flex justify-start items-center">Sort <TiArrowUnsorted /></div>
                                                        )}
                                                    </div>
                                                )}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()} className="divide-y divide-slate-500 overflow-y-scroll">
                                {page.map((row, index) => {
                                    prepareRow(row);
                                    return (
                                        <tr {...row.getRowProps()} key={index}>
                                            {row.cells.map((cell, index) => (
                                                <td
                                                    {...cell.getCellProps()}
                                                    key={index}
                                                    className="px-6 py-4 border-t border-slate-500 whitespace-nowrap text-xs"
                                                >
                                                    {cell.render('Cell')}
                                                </td>
                                            ))}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default TableHOC;

