const TransactionManagementSkeleton = () => {
    return (
        <div className="flex flex-wrap gap-4 justify-center mt-6">
            <div className="flex flex-col gap-2 p-4 border-2 border-slate-500 rounded-3xl items-center animate-pulse">
                <div className="h-6 w-24 bg-slate-400 dark:bg-slate-700 animate-pulse rounded mt-2"></div>
                <div className="flex flex-col gap-2 justify-start items-start w-full">
                    {Array(3).fill(0).map((_, idx) => (
                        <div key={idx} className="flex justify-center items-center gap-4 w-full p-2">
                            <div className="w-[50px] h-[50px] bg-slate-400 dark:bg-slate-700 animate-pulse rounded-lg"></div>
                            <div className="flex-1 h-4 bg-slate-400 dark:bg-slate-700 animate-pulse rounded"></div>
                            <div className="flex-1 h-4 bg-slate-400 dark:bg-slate-700 animate-pulse rounded"></div>
                            <div className="flex-1 h-4 bg-slate-400 dark:bg-slate-700 animate-pulse rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-2 p-4 border-2 border-slate-500 rounded-3xl items-center animate-pulse">
                <div className="h-6 w-24 bg-slate-400 dark:bg-slate-700 animate-pulse rounded mt-2"></div>
                <div className="flex flex-col gap-2 justify-start items-start w-full">
                    <div className="flex flex-col justify-center items-start gap-2 w-full">
                        <div className="h-4 w-16 bg-slate-400 dark:bg-slate-700 animate-pulse rounded"></div>
                        <div className="flex flex-col gap-2 w-full">
                            <div className="h-4 w-full bg-slate-400 dark:bg-slate-700 animate-pulse rounded"></div>
                            <div className="h-4 w-full bg-slate-400 dark:bg-slate-700 animate-pulse rounded"></div>
                            <div className="h-4 w-full bg-slate-400 dark:bg-slate-700 animate-pulse rounded"></div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-2 w-full">
                        <div className="h-4 w-16 bg-slate-400 dark:bg-slate-700 animate-pulse rounded"></div>
                        <div className="flex flex-col gap-2 w-full">
                            <div className="h-4 w-full bg-slate-400 dark:bg-slate-700 animate-pulse rounded"></div>
                            <div className="h-4 w-full bg-slate-400 dark:bg-slate-700 animate-pulse rounded"></div>
                            <div className="h-4 w-full bg-slate-400 dark:bg-slate-700 animate-pulse rounded"></div>
                            <div className="h-4 w-full bg-slate-400 dark:bg-slate-700 animate-pulse rounded"></div>
                            <div className="h-4 w-full bg-slate-400 dark:bg-slate-700 animate-pulse rounded"></div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 w-full mt-2">
                        <div className="h-4 w-12 bg-slate-400 dark:bg-slate-700 animate-pulse rounded"></div>
                        <div className="h-4 w-20 bg-slate-400 dark:bg-slate-700 animate-pulse rounded"></div>
                    </div>
                </div>
                <div className="w-full flex sm:justify-between items-center justify-center flex-col sm:flex-row gap-4 mt-4">
                    <div className="h-8 w-32 bg-slate-400 dark:bg-slate-700 animate-pulse rounded-full"></div>
                    <div className="h-8 w-32 bg-slate-400 dark:bg-slate-700 animate-pulse rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default TransactionManagementSkeleton;
