

const HeroSkeleton = () => {
    return (

        <div className="container min-h-[550px] sm:min-h-[650px] flex justify-center items-center duration-200 relative overflow-hidden dark:border-slate-100 border-b-2 border-slate-900 dark:text-slate-100 dark:bg-slate-900 bg-slate-100 text-slate-900">
            <div className="h-[700px] w-[700px] bg-slate-900 dark:bg-slate-300 absolute -top-[70%] right-0 rounded-xl rotate-45"></div>
            <div className="container pb-8 sm:pb-0">
                <div className="px-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 sm:mt-50">
                        <div className="flex flex-col gap-4 justify-center pt-12 mt-20 sm:mt-[1rem] sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 bg-slate-100 dark:bg-slate-900 rounded-xl animate-pulse">
                            <div className="h-12 sm:h-16 lg:h-20 bg-gray-700 dark:bg-gray-400 rounded"></div>
                            <div className="h-6 sm:h-8 bg-gray-700 dark:bg-gray-400 rounded"></div>
                            <div className="h-6 sm:h-8 bg-gray-700 dark:bg-gray-400 rounded w-1/2 mx-auto sm:mx-0"></div>
                            <div className="h-10 bg-gray-700 dark:bg-gray-400 rounded-full mx-auto sm:mx-0 w-32"></div>
                        </div>
                        <div className="order-1 sm:order-2 flex justify-center items-center">
                            <div className="h-48 w-48 bg-gray-700 dark:bg-gray-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default HeroSkeleton;
