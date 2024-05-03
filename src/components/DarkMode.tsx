import { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";

const DarkMode = () => {

    const [theme, setTheme] = useState<string>(localStorage.getItem("theme") ? 'light' : 'dark');

    const root = document.documentElement;

    useEffect(() => {
        if (theme === 'dark') {
            root.classList.add('dark');
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove('dark');
            localStorage.removeItem("theme");

        }
    }, [theme]);

    const changeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <>
            <MdOutlineDarkMode onClick={() => changeTheme()} className=" text-2xl cursor-pointer w-12" />

        </>
    )
}

export default DarkMode