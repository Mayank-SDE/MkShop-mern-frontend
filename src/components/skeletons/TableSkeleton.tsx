


const TableSkeleton = () => {
    const rows = Array(5).fill(0);

    return (

        <table className="min-w-full mt-4 ">
            <thead className="bg-gray-900  dark:bg-slate-100 ">
                <tr>
                    <th className="px-6 py-4 "><div className='bg-gray-400 animate-pulse py-1 px-3 rounded-xl dark:bg-gray-700 w-20 h-5'></div></th>

                    <th className="px-6 py-4 "><div className='bg-gray-400 animate-pulse py-1 px-3 rounded-xl dark:bg-gray-700 w-20 h-5'></div></th>

                    <th className="px-6 py-4 "><div className='bg-gray-400 animate-pulse py-1 px-3 rounded-xl dark:bg-gray-700 w-20 h-5'></div></th>

                    <th className="px-6 py-4 "><div className='bg-gray-400 animate-pulse py-1 px-3 rounded-xl dark:bg-gray-700 w-20 h-5'></div></th>

                    <th className="px-6 py-4 "><div className='bg-gray-400 animate-pulse py-1 px-3 rounded-xl dark:bg-gray-700 w-20 h-5'></div></th>
                </tr>
            </thead>
            <tbody>
                {rows.map((_, index) => (
                    <tr key={index} className="border-t border-gray-500">
                        <td className="px-6 py-4 "><div className='bg-gray-700 animate-pulse dark:bg-gray-400 w-10 h-10 rounded-full'></div></td>

                        <td className="px-6 py-4 "><div className='bg-gray-700 animate-pulse py-1 px-3 rounded-xl dark:bg-gray-400 w-20 h-5'></div></td>

                        <td className="px-6 py-4 "><div className='bg-gray-700 animate-pulse py-1 px-3 rounded-xl dark:bg-gray-400 w-20 h-5'></div></td>

                        <td className="px-6 py-4 "><div className='bg-gray-700 animate-pulse py-1 px-3 rounded-xl dark:bg-gray-400 w-20 h-5'></div></td>

                        <td className="px-6 py-4 "><div className='bg-gray-700 animate-pulse py-1 px-3 rounded-xl dark:bg-gray-400 w-20 h-5'></div></td>
                    </tr>
                ))}
            </tbody>
        </table>

    );
};

export default TableSkeleton;
