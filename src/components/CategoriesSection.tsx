
import { categories } from '../data/categories';
const CategoriesSection = () => {
    return (<div className='dark:border-slate-100 container border-b-2 border-slate-900 pb-7'>
        <div>
            <h1 className='text-3xl my-[70px] font-serif underline btn hover:scale-115 rounded-xl w-fit px-5 py-2 mx-auto'>Categories</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4">
            {categories.map((data: string) => {
                return <a href="#" key={data} className=" m-3 border-2 text-center uppercase  rounded-full py-2  btn  hover:scale-115">{data}</a>
            })}
        </div>
    </div>
    )
}

export default CategoriesSection