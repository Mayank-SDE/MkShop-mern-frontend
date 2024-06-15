import { TbError404 } from "react-icons/tb"


const NotFound = () => {
    return (
        <div className="conteiner bg-slate-100 flex w-full  flex-col mt-[40px] items-center dark:bg-slate-900 text-slate-900 dark:text-slate-100 ">
            <div className="text-[300px]"> <TbError404 /> </div>
            <div className="text-3xl font-serif">Oh Snap ! Page not found. 😅</div>
        </div>
    )
}

export default NotFound