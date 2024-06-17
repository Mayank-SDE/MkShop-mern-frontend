export const LineChartSkeleton = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center mt-6 gap-4 sm:gap-20 animate-pulse">
            <div className="flex flex-col justify-center items-center w-full h-[400px] gap-4">
                <div className="bg-gray-200 h-4 w-3/4 rounded-md"></div>
                <div className="bg-gray-200 h-full w-full rounded-md"></div>
                <div className="bg-gray-300 h-6 w-48 rounded-md mt-2"></div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[400px] gap-4">
                <div className="bg-gray-200 h-4 w-3/4 rounded-md"></div>
                <div className="bg-gray-200 h-full w-full rounded-md"></div>
                <div className="bg-gray-300 h-6 w-48 rounded-md mt-2"></div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[400px] gap-4">
                <div className="bg-gray-200 h-4 w-3/4 rounded-md"></div>
                <div className="bg-gray-200 h-full w-full rounded-md"></div>
                <div className="bg-gray-300 h-6 w-48 rounded-md mt-2"></div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[400px] gap-4">
                <div className="bg-gray-200 h-4 w-3/4 rounded-md"></div>
                <div className="bg-gray-200 h-full w-full rounded-md"></div>
                <div className="bg-gray-300 h-6 w-48 rounded-md mt-2"></div>
            </div>
        </div>
    );
};