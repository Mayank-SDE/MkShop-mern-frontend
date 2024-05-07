import { useState } from "react";
import { useAsyncDebounce } from "react-table";


type GlobalFilterProps = {
    filter: string;
    setFilter: (filterValue: any) => void;
}

const GlobalFilter = ({ filter, setFilter }: GlobalFilterProps) => {

    const [value, setValue] = useState(filter);


    const onChangeHandler = useAsyncDebounce((value) => {
        return setFilter(value || '');
    }, 1000);

    return (
        <span className="flex justify-center items-center gap-4 my-4 font-semibold">
            Search:{" "}
            <input type="text" value={value} onChange={(event) => {
                setValue(event.target.value)
                onChangeHandler(event.target.value)
            }} className="rounded-lg text-slate-900 dark:bg-slate-900 dark:border-slate-100 dark:border border border-slate-900 dark:text-slate-100 px-3 py-1" placeholder="Filter" />
        </span>
    )
}

export default GlobalFilter