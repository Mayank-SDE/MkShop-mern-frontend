

const Skeleton = ({ className }: { className: string }) => (
    <div className={`bg-slate-700 dark:bg-slate-400 animate-pulse ${className}`}></div>
);
const ProductManagementSkeleton = () => {
    return (<div className="flex flex-wrap gap-2 text-slate-900 dark:text-slate-100 justify-center">
        <div className="flex flex-col gap-3 flex-1 p-4 border-slate-500 border rounded-lg my-6">
            <Skeleton className="h-4 w-24 mb-2" />
            <Skeleton className="h-4 w-40 mb-2" />
            <Skeleton className="h-8 w-full mb-4" />
            <div className="flex flex-wrap justify-center items-center flex-1 gap-4">
                {[...Array(3)].map((_, index) => (
                    <Skeleton key={index} className="w-[150px] h-[150px] rounded-lg" />
                ))}
            </div>
        </div>
        <div className="w-fit h-fit p-4 border-slate-500 rounded-lg border my-6">
            <div className="text-center text-lg font-bold">Update Product</div>
            <form className="flex flex-col justify-center items-center gap-6">
                <div className="flex flex-wrap justify-around mt-4 gap-3">
                    <div className="flex flex-col gap-2">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="flex flex-col text-sm gap-2">
                                <Skeleton className="h-4 w-40 mb-2" />
                                <Skeleton className="h-8 w-48" />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="flex flex-col text-sm gap-2">
                                <Skeleton className="h-4 w-40 mb-2" />
                                <Skeleton className="h-24 w-48" />
                            </div>
                        ))}
                        <div className="flex flex-col text-sm gap-2">
                            <Skeleton className="h-4 w-40 mb-2" />
                            <Skeleton className="h-8 w-48" />
                        </div>
                    </div>
                </div>
                <Skeleton className="h-10 w-24 mt-4" />
            </form>
        </div>
    </div>
    )
}

export default ProductManagementSkeleton