
const ChartSkeleton = () => {
    return (
        <div className="animate-pulse flex flex-col justify-center items-center w-[300px] h-[300px]  gap-4 bg-slate-900 dark:bg-slate-100  rounded-full p-6">
            <div className="bg-slate-700 dark:bg-slate-400 animate-pulse rounded-full h-32 w-32 mb-4"></div>
            <div className="bg-slate-700 dark:bg-slate-400 animate-pulse h-6 w-3/4 rounded"></div>
        </div>
    );
};

export const PieChartSkeleton = () => {
    return (
        <div className="flex  flex-col w-full justify-center items-center m-6 gap-4 sm:gap-20">
            <ChartSkeleton />
            <ChartSkeleton />
            <ChartSkeleton />
            <ChartSkeleton />
            <ChartSkeleton />
            <ChartSkeleton />
        </div>
    );
};