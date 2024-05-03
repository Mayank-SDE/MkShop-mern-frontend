
import { categories } from '../data/categories';
const CategoriesSection = () => {
    return (<div className='dark:border-white border-b-2 border-black pb-7'>
        <div>
            <h1 className='text-3xl my-[70px] font-serif underline border-black dark:border-white dark:text-white  hover:bg-black  hover:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-black hover:border-white hover:scale-115 rounded-xl w-fit px-5 py-2 mx-auto'>Categories</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4">
            {categories.map((data: string) => {
                return <a href="#" key={data} className="dark:text-white m-3 border-2 text-center uppercase border-black dark:border-white rounded-full py-2  hover:bg-black  hover:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-black hover:border-white hover:scale-115">{data}</a>
            })}
        </div>
    </div>
    )
}

export default CategoriesSection