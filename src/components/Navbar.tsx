import { FaCartArrowDown, FaRegRegistered, FaShoppingBag } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { CiLogin, CiLogout } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAdminPanelSettings } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import { ImProfile } from "react-icons/im";

import { Link, useNavigate } from "react-router-dom";
import { ReactElement, useState } from "react";
import { useLogoutMutation } from "../redux/api/userAPI";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { userDoesNotExists } from "../redux/reducer/userReducer";
import { persistor } from "../redux/store";
import DarkMode from "./DarkMode";
import { UserReducerInitialState } from "../types/reducer-types";
import { resetCart } from "../redux/reducer/cartReducer";
import { server } from "../utils/config";


const menuItems = [
    { title: "Home", icon: <IoHomeOutline />, link: "/" },
    { title: "Cart", icon: <FaCartArrowDown />, link: "/cart" },
    { title: "Login", icon: <CiLogin />, link: "/login" },
    { title: "Register", icon: <FaRegRegistered />, link: "/register" },
    { title: "Admin", icon: <MdAdminPanelSettings />, link: "/admin/dashboard" },
    { title: "Orders", icon: <AiOutlineShopping />, link: "/orders" },
    { title: "Profile", icon: <ImProfile />, link: "/profile" },
    { title: "Logout", icon: <CiLogout />, link: "#" },
];

const Navbar = () => {
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logout] = useLogoutMutation();
    const [search, setSearch] = useState<string>("");

    const { user } = useSelector((state: { userReducer: UserReducerInitialState }) => state.userReducer);
    const imageURL = user ? (user.image as string) : '';

    const toggleHamburger = () => setHamburgerIsOpen(!hamburgerIsOpen);

    const logoutHandler = async () => {
        try {
            const response = await logout().unwrap();
            if (response.success) {
                toast.success(response.message);
                dispatch(userDoesNotExists());
                dispatch(resetCart());
                persistor.purge().then((response) => {
                    console.log(response);
                    navigate("/");
                }).catch(error => {
                    console.log(error);
                });
            }
        } catch (error: any) {
            toast.error(error.data.message);
        }
    };


    const filteredMenuItems = menuItems.filter(menu => {
        if (user) {
            if (menu.title === "Login" || menu.title === "Register") return false;
            if (user.role === "user" && menu.title === "Admin") return false;
        } else {
            if (["Logout", "Admin", "Orders", "Profile"].includes(menu.title)) return false;
        }
        return true;
    });

    const MenuItem = ({ title, icon, link }: { title: string; icon: ReactElement; link: string; }) => (
        <Link to={link} key={title} onClick={title === "Logout" ? logoutHandler : undefined}
            className="hidden lg:flex items-center py-1 px-4 rounded-full transition-all duration-200 group btn">
            <span className="hidden group-hover:block pr-1">{title}</span>
            <span className="text-xl drop-shadow-sm cursor-pointer">{icon}</span>
        </Link>
    );

    return (
        <div className="container font-serif duration-200 relative z-40 border-b-2 border-slate-900 dark:border-slate-100">
            <div className="py-2">
                <div className="container flex justify-between items-center">
                    <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
                        <FaShoppingBag className="w-10" />
                        MKShop
                    </Link>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <div className="group relative hidden lg:block">
                            <input type="text" placeholder="Search" className="w-[150px] sm:w-[200px] sm:group-hover:w-[300px] transition-all duration-300 rounded-full border px-2 py-1 focus:outline-none dark:text-slate-900 dark:bg-slate-100 bg-slate-900 text-slate-100" onChange={(event) => setSearch(event.target.value)} />
                            <Link to={`/search?keyword=${search}`}>
                                <IoMdSearch className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer dark:text-slate-900 dark:bg-slate-100 bg-slate-900 text-slate-100 hover:scale-125" />
                            </Link>
                        </div>
                        {filteredMenuItems.map(menu => <MenuItem key={menu.title} {...menu} />)}
                        <DarkMode />
                        <GiHamburgerMenu className="text-2xl lg:hidden cursor-pointer" onClick={toggleHamburger} />
                    </div>
                </div>
            </div>
            {user && (
                <p className="flex justify-center items-center py-4 gap-2 tracking-wider font-bold font-serif text-lg">
                    <img src={imageURL.startsWith("a") ? `${server}/${imageURL}` : imageURL} alt={user.username} className="w-[50px]  rounded-full" />
                    {`Welcome, ${user.username.toUpperCase()}`}
                </p>
            )}
            {hamburgerIsOpen && (
                <div className="flex flex-col lg:hidden">
                    <div className="p-3">
                        <input type="text" placeholder="Search" className="w-full relative rounded-xl border px-2 py-1 dark:text-slate-900 dark:bg-slate-100 bg-slate-900 text-slate-100 focus:outline-none" onChange={(event) => setSearch(event.target.value)} />
                        <Link to={`/search?keyword=${search}`}>
                            <IoMdSearch className="absolute top-[68px] sm:top-[72px] right-8  sm:right-[65px] text-xl cursor-pointer  text-slate-100 dark:text-slate-900 hover:scale-110" />
                        </Link>
                    </div>

                    {filteredMenuItems.map(menu => (
                        <Link to={menu.link} key={menu.title} onClick={toggleHamburger} className="py-4 border rounded-5xl btn flex justify-center items-center cursor-pointer">
                            {filteredMenuItems.map(menu => <MenuItem key={menu.title} {...menu} />)}
                        </Link>
                    ))}
                </div>
            )}

        </div>
    );
};

export default Navbar;
