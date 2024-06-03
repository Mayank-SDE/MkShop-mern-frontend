

const NavbarSkeleton = () => {
    return (
        <div className="container font-serif duration-200 relative z-40 border-b-2 border-slate-700 dark:border-slate-400 animate-pulse ">
            <div className="py-2">
                <div className="container flex justify-between items-center">
                    <div className="flex justify-center items-center gap-2">
                        <div className="w-10 h-10 bg-gray-700 dark:bg-gray-400 rounded-full  "></div>
                        <div className="w-24 h-8 bg-gray-700 dark:bg-gray-400 rounded  "></div>
                    </div>
                    <div className="flex items-center  gap-2 sm:gap-3">
                        <div className="group relative hidden lg:block">
                            <div className="w-40 h-8 bg-gray-700 dark:bg-gray-400 rounded-full  "></div>
                        </div>
                        <div className="hidden lg:flex gap-2">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div key={index} className="w-20 h-8 bg-gray-700 dark:bg-gray-400 rounded-full  "></div>
                            ))}
                        </div>
                        <div className="w-10 h-10 bg-gray-700 dark:bg-gray-400 rounded-full  "></div>
                        <div className="lg:hidden w-10 h-10 bg-gray-700 dark:bg-gray-400 rounded-full  "></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NavbarSkeleton;
