const OrderDetailsSkeleton = () => {
    return (
        <div className="bg-slate-100 dark:bg-slate-900 min-h-screen flex flex-col items-center justify-center animate-pulse">
            <div className="w-full max-w-4xl p-4">
                <div className="h-8 bg-slate-400 dark:bg-slate-700 animate-pulserounded w-3/4 mb-4"></div>
                <div className="h-8 bg-slate-400 dark:bg-slate-700 animate-pulserounded w-1/2 mb-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5 mb-12">
                    <div className="col-span-2">
                        <div className="h-48 bg-slate-400 dark:bg-slate-700 animate-pulserounded mb-4"></div>
                        <div className="h-96 bg-slate-400 dark:bg-slate-700 animate-pulserounded mb-4"></div>
                        <div className="h-48 bg-slate-400 dark:bg-slate-700 animate-pulserounded mb-4"></div>
                    </div>
                    <div className="col-span-1">
                        <div className="h-80 bg-slate-400 dark:bg-slate-700 animate-pulserounded mb-4"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetailsSkeleton;
