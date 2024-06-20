

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="relative">
                <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-blue-300 border-solid rounded-full animate-spin-slow"></div>
                <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-blue-200 border-solid rounded-full animate-spin-reverse"></div>
            </div>
        </div>
    );
};

export default Loader;
