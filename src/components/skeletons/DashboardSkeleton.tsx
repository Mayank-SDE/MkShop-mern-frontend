import TableSkeleton from "./TableSkeleton";

const WidgetSkeleton = () => {
    return (
        <div className="animate-pulse flex space-x-4 p-4 bg-gray-200 rounded-lg h-24 w-60 mb-4">
            <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-slate-700 dark:bg-slate-400 animate-pulse rounded w-3/4"></div>
                <div className="space-y-2">
                    <div className="h-4 bg-slate-700 dark:bg-slate-400 animate-pulse rounded"></div>
                    <div className="h-4 bg-slate-700 dark:bg-slate-400 animate-pulse rounded w-5/6"></div>
                </div>
            </div>
        </div>
    );
}

const BarChartSkeleton = () => {
    return (
        <div className="animate-pulse bg-gray-200 rounded-lg h-64 w-full mt-4">
            <div className="h-full flex items-center justify-center">
                <div className="space-y-2 w-full px-4">
                    <div className="h-4 bg-slate-700 dark:bg-slate-400 animate-pulse rounded w-full mb-4"></div>
                    <div className="h-4 bg-slate-700 dark:bg-slate-400 animate-pulse rounded w-full mb-4"></div>
                    <div className="h-4 bg-slate-700 dark:bg-slate-400 animate-pulse rounded w-full mb-4"></div>
                    <div className="h-4 bg-slate-700 dark:bg-slate-400 animate-pulse rounded w-full mb-4"></div>
                    <div className="h-4 bg-slate-700 dark:bg-slate-400 animate-pulse rounded w-full mb-4"></div>
                    <div className="h-4 bg-slate-700 dark:bg-slate-400 animate-pulse rounded w-full mb-4"></div>
                </div>
            </div>
        </div>
    );
}
const DoughnutChartSkeleton = () => {
    return (
        <div className="animate-pulse bg-gray-200 rounded-lg h-64 w-full flex items-center justify-center mt-4">
            <div className="bg-slate-700 dark:bg-slate-400 animate-pulse h-32 w-32 rounded-full"></div>
        </div>
    );
}

export const DashboardSkeleton = () => {
    return (
        <div className="container flex flex-col justify-center items-center overflow-y-auto mt-8">
            <div className="flex flex-wrap justify-around gap-2 items-center">
                <WidgetSkeleton />
                <WidgetSkeleton />
                <WidgetSkeleton />
                <WidgetSkeleton />
            </div>
            <div className="flex flex-wrap w-full mt-3">
                <BarChartSkeleton />
            </div>
            <div className="flex flex-wrap justify-around items-center w-full mt-10">
                <DoughnutChartSkeleton />
                <div className="animate-pulse bg-gray-200 rounded-lg h-64 w-1/3 mt-4 p-4">
                    <div className="h-4 bg-slate-700 dark:bg-slate-400 animate-pulse rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-slate-700 dark:bg-slate-400 animate-pulse rounded w-full mb-4"></div>
                    <div className="h-4 bg-slate-700 dark:bg-slate-400 animate-pulse rounded w-full mb-4"></div>
                    <div className="h-4 bg-slate-700 dark:bg-slate-400 animate-pulse rounded w-full mb-4"></div>
                </div>
            </div>
            <TableSkeleton />
        </div>
    );
}
