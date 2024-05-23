
import { FaCartArrowDown, FaRegRegistered } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { IoMdSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { CiLogin, CiLogout } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link, useNavigate } from "react-router-dom";
import { MdAdminPanelSettings } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import { UserReducerInitialState } from "../types/reducer-types";
import { useState } from "react";
import { useLogoutMutation } from "../redux/api/userAPI";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { userDoesNotExists } from "../redux/reducer/userReducer";
import { useSelector } from "react-redux";
import { persistor } from "../redux/store";
import { ImProfile } from "react-icons/im";





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
    }, {
        title: "Admin",
        icon: <MdAdminPanelSettings className="text-xl drop-shadow-sm cursor-pointer " />,
        link: "/admin"
    },
    {
        title: "Orders",
        icon: <AiOutlineShopping className="text-xl drop-shadow-sm cursor-pointer " />,
        link: "/orders"
    }, {
        title: "Profile",
        icon: <ImProfile className="text-xl drop-shadow-sm cursor-pointer " />,
        link: "/profile"
    },
    {
        title: 'Logout',
        icon: <CiLogout className="text-xl drop-shadow-sm cursor-pointer " />,
        link: "#",

    }];

const Navbar = () => {

    const [hamburgerIsOpen, setHamburgerIsOpen] = useState<boolean>(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toggleHamburger = () => {
        setHamburgerIsOpen(hamburgerIsOpen => !hamburgerIsOpen);
    }
    const [logout] = useLogoutMutation();

    const logoutHandler = async () => {

        try {

            const response = await logout().unwrap();
            if (response.success) {
                toast.success(response.message);
            }
            dispatch(userDoesNotExists());
            await persistor.purge(); // Clear persisted state on logout
            navigate("/");
        } catch (error: any) {
            toast.error(error.data.message);
        }
    }

    const { user } = useSelector((state: { userReducer: UserReducerInitialState }) => {
        return state.userReducer;
    });
    let imageURL = '';
    if (user) {

        imageURL = user.image as string;
    }


    return (
        <>
            <div className=" container font-serif  duration-200 relative z-40 border-b-2 border-slate-900 dark:border-slate-100">
                {/* Upper Navbar */}
                <div className=" py-2 ">
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
                                <input type="text" placeholder='Search' className="w-[150px] sm:w-[200px] sm:group-hover:w-[300px] transition-all duration-300 rounded-full border px-2 py-1 focus:outline-none focus:border-1  dark:text-slate-900 dark:bg-slate-100 bg-slate-900 text-slate-100" />
                                <Link to="/search">
                                    <IoMdSearch className=" cursor-pointer  dark:text-slate-900 dark:bg-slate-100 bg-slate-900 text-slate-100 hover:scale-125 absolute top-1/2 right-3 -translate-y-1/2" /></Link>
                            </div>
                            {Menu.filter((menu) => {

                                if (user) {
                                    if (menu.title === 'Login' || menu.title === 'Register') {
                                        return false;
                                    }
                                    if (user.role === 'user') {
                                        if (menu.title === 'Admin') {
                                            return false;
                                        }
                                    }
                                } else {
                                    if (menu.title === 'Logout' || menu.title === 'Admin' || menu.title === 'Orders' || menu.title === "Profile") { return false; }
                                }

                                return true;
                            }).map(menu => {
                                return <Link to={menu.link} key={menu.title} onClick={menu.title === "Logout" ? logoutHandler : undefined}
                                    className=" hidden  transition-all duration-200  py-1 px-4 rounded-full btn lg:flex items-center group"
                                >
                                    <span className="group-hover:block hidden transition-all duration-200 pr-1" >
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
                        <input type="text" placeholder='Search' className="w-full  dark:text-slate-900 dark:bg-slate-100 bg-slate-900 text-slate-100 rounded-xl border  px-2 py-1 focus:outline-none focus:border-1 " />
                        <Link to="/search"><IoMdSearch className=" text-xl cursor-pointer  group-hover:scale-125 absolute   sm:top-[73px] top-[69px] right-8 hover:scale-110 sm:right-[65px] dark:text-slate-900 text-slate-100" /></Link>
                    </div>
                    <div >
                        {user && <p className="flex justify-center items-center py-4 gap-2  tracking-wider font-bold font-serif text-lg"><img src={imageURL.startsWith("a") ? `http://localhost:3000/${imageURL}` : imageURL} alt={`${user.username}`} className="w-[50px] rounded-full" />{`Welcome,  ${user.username}`}</p>}
                    </div>
                    {hamburgerIsOpen && Menu.filter((menu) => {

                        if (user) {
                            if (menu.title === 'Login' || menu.title === 'Register') {
                                return false;
                            }
                            if (user.role === 'user') {
                                if (menu.title === 'Admin') {
                                    return false;
                                }
                            }
                        } else {
                            if (menu.title === 'Logout' || menu.title === 'Admin' || menu.title === 'Orders') { return false; }
                        }

                        return true;
                    }).map(menu => {

                        return <Link to={menu.link} key={menu.title}
                            onClick={() => toggleHamburger()}
                            className=" lg:hidden py-4 border rounded-5xl  btn flex justify-center items-center cursor-pointer  "
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
