const ProductSkeleton = () => {
    return (
        <div className="max-w-[500px] h-fit m-2 bg-slate-100 border-slate-500 border-2 flex flex-col justify-between items-center rounded-3xl text-slate-900 dark:bg-slate-900 dark:text-slate-100 shadow-2xl transition-all transform hover:scale-105 animate-pulse">
            <div className="h-[150px] w-[150px] bg-slate-300 dark:bg-slate-700 rounded-full"></div>
            <div className="p-4 flex flex-col text-sm justify-center items-center">
                <div className="h-4 w-3/4 bg-slate-700 dark:bg-slate-400 rounded mb-2"></div>
                <div className="h-4 w-1/2 bg-slate-700 dark:bg-slate-400 rounded mb-2"></div>
                <div className="flex mt-2 space-x-1">
                    {new Array(5).fill(null).map((_, i) => (
                        <div key={i} className="h-4 w-4 bg-slate-700 dark:bg-slate-400 rounded-full"></div>
                    ))}
                </div>
            </div>
            <div className="w-full p-4 flex flex-col items-center space-y-2">
                <div className="h-8 w-3/4 bg-slate-700 dark:bg-slate-400 rounded-full"></div>
                <div className="h-8 w-3/4 bg-slate-700 dark:bg-slate-400 rounded-full"></div>
            </div>
        </div>
    );
};


export default ProductSkeleton