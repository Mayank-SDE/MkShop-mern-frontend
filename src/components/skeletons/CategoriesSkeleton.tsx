
const DUMMY_CATEGORIES = Array(16).fill("skeleton");

const CategoriesSkeleton = () => {

    return (
        <div className='dark:border-slate-100 container border-b-2 border-slate-900 animate-pulse pb-7'>
            <div>
                <h1 className='text-3xl my-[70px] rounded-xl w-fit px-5 py-2 dark:bg-gray-400 bg-gray-700 mx-auto '>
                    <span className="invisible">Categories</span>
                </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
                {DUMMY_CATEGORIES.map((data, index) => {
                    return <a href="#" key={index} className=" my-3 mx-auto border-2 w-[200px] dark:bg-gray-400 bg-gray-700 rounded-full py-2 ">
                        <span className="invisible">{data}</span>
                    </a>
                })}
            </div>
        </div>
    )
}

export default CategoriesSkeleton