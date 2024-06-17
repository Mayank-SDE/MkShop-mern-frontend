const BarChartSkeleton = () => {
    return (
        <div className="flex flex-col w-[80%] justify-center items-center m-14 gap-8 animate-pulse">
            <div className="flex flex-col justify-center items-center w-full h-[400px] gap-4">
                <div className="bg-slate-700 dark:bg-slate-400 animate-pulse h-6 w-48 rounded-md"></div>
                <div className="bg-slate-700 dark:bg-slate-400 animate-pulse h-full w-full rounded-md"></div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[400px] gap-4">
                <div className="bg-slate-700 dark:bg-slate-400 animate-pulse h-6 w-48 rounded-md"></div>
                <div className="bg-slate-700 dark:bg-slate-400 animate-pulse h-full w-full rounded-md"></div>
            </div>
        </div>
    );
};

export default BarChartSkeleton;