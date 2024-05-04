
import { FaCartArrowDown, FaRegRegistered } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { IoMdSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";


const Menu = [
    {
        title: "Home",
        icon: <IoHomeOutline className="text-xl drop-shadow-sm cursor-pointer " />,
        link: "/"
    }, {
        title: "Cart",
        icon: <FaCartArrowDown className="text-xl drop-shadow-sm cursor-pointer " />
        , link: "/cart"

    }, {
        title: "Login",
        icon: <CiLogin className="text-xl drop-shadow-sm cursor-pointer " />,
        link: "/login"
    }, {
        title: "Register",
        icon: <FaRegRegistered className="text-xl drop-shadow-sm cursor-pointer " />,
        link: "/register"
    },
];
const Navbar = () => {

    const [flag, setFlag] = useState<boolean>(false);

    const toggleHamburger = () => {
        setFlag(flag => !flag);
    }

    return (
        <>
            <div className="bg-gray-300 font-serif dark:bg-black dark:text-white text-black  border-b-4 dark:border-white border-black duration-200 relative z-40">

                {/* Upper Navbar */}

                <div className="bg-white dark:bg-black py-2 ">
                    <div className="container flex justify-between items-center">
                        <div>
                            <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
                                <FaShoppingBag className="w-10" />
                                MKShop
                            </Link>
                        </div>
                        <div className="flex justify-between items-center sm:gap-3 gap-[2px] ">
                            {/* Search bar */}
                            <div className="group relative hidden lg:block ">
                                <input type="text" placeholder='Search' className="w-[150px] sm:w-[200px] sm:group-hover:w-[300px] transition-all duration-300 rounded-full border border-white px-2 py-1 focus:outline-none focus:border-1 focus:border-black  dark:border-white dark:bg-white bg-black text-white dark:text-black" />
                                <Link to="/search">
                                    <IoMdSearch className="text-white cursor-pointer dark:text-black group-hover:scale-125 absolute top-1/2 right-3 -translate-y-1/2" /></Link>
                            </div>

                            {Menu.map(menu => {
                                return <Link to={menu.link} key={menu.title}
                                    // onClick={() => handleOrderPopup()}
                                    className=" hidden bg-black dark:bg-white  dark:text-black transition-all duration-200 text-white py-1 px-4 rounded-full lg:flex items-center group"
                                >
                                    <span className="group-hover:block hidden transition-all duration-300 pr-1" >
                                        {menu.title}
                                    </span>
                                    {menu.icon}
                                </Link>
                            })
                            }

                            {/* DarkMode Switch */}
                            <div>
                                <DarkMode />
                            </div>
                            <div>
                                <GiHamburgerMenu className="text-2xl lg:hidden cursor-pointer" onClick={toggleHamburger} />
                            </div>
                        </div>

                    </div>

                </div>
                {/* Hamburger Menu */}

                <div className="flex flex-col">

                    <div className="lg:hidden p-3">
                        <input type="text" placeholder='Search' className="w-full rounded-xl border border-white px-2 py-1 focus:outline-none focus:border-1 focus:border-black dark:text-black  dark:border-white dark:bg-white bg-black text-white" />
                        <Link to="/search"><IoMdSearch className="text-white text-xl cursor-pointer dark:text-black group-hover:scale-125 absolute right-5  sm:top-[73px] top-[69px]" /></Link>
                    </div>

                    {flag && Menu.map(menu => {

                        return <Link to={menu.link} key={menu.title}
                            // onClick={() => handleOrderPopup()}
                            className=" lg:hidden py-4 border border-white dark:border-black rounded-5xl bg-black dark:bg-white  dark:text-black text-white flex justify-center items-center cursor-pointer hover:bg-white hover:text-black hover:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white "
                        >
                            <span className="px-2" >
                                {menu.title}
                            </span>
                            {menu.icon}
                        </Link>
                    })}
                </div>


            </div>

        </>
    )
}

export default Navbar