import { useState } from "react";
import { IconType } from "react-icons";
import { FaChartBar, FaChartLine, FaChartPie, FaProductHunt, FaUsers } from "react-icons/fa";
import { MdDashboardCustomize, MdOutlinePayment } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const DASHBOARD = [
    { url: "/admin/dashboard", Icon: MdDashboardCustomize, text: "Dashboard" },
    { url: "/admin/products", Icon: FaProductHunt, text: "Products" },
    { url: "/admin/customers", Icon: FaUsers, text: "Customers" },
    { url: "/admin/transactions", Icon: MdOutlinePayment, text: "Transactions" }
];

const CHARTS = [
    { url: "/admin/chart/pie", Icon: FaChartPie, text: "Pie Charts" },
    { url: "/admin/chart/bar", Icon: FaChartBar, text: "Bar Charts" },
    { url: "/admin/chart/line", Icon: FaChartLine, text: "Line Charts" }
];

const COUPON = [
    { url: "/admin/coupon", Icon: RiCoupon2Fill, text: "Coupon" }
];

type ListItemProps = {
    url: string;
    text: string;
    Icon: IconType;
    isActive: boolean;
    onClick: () => void;
}

const ListItem = ({ url, text, Icon, isActive, onClick }: ListItemProps) => {
    return (
        <Link
            to={url}
            onClick={onClick}
            className={`flex justify-start gap-3 items-center rounded-xl px-3 py-1 cursor-pointer 
                        ${isActive ? 'bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100' : 'hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900'}`}
        >
            <Icon />
            <span>{text}</span>
        </Link>
    );
}

type AdminSideBarContentType = {
    title: string;
    subTitles: {
        url: string;
        text: string;
        Icon: IconType;
    }[];
    activeUrl: string;
    handleItemClick: (url: string) => void;
}

const AdminSideBarContent = ({ title, subTitles, activeUrl, handleItemClick }: AdminSideBarContentType) => {
    return (

        <div className="flex flex-col justify-center items-start">
            <span className="font-thin">{title}</span>
            <ul className="flex flex-col my-4 text-xs sm:text-sm font-mono">
                {subTitles.map((subTitle) => (
                    <li key={subTitle.text} className="my-1">
                        <ListItem
                            url={subTitle.url}
                            Icon={subTitle.Icon}
                            text={subTitle.text}
                            isActive={activeUrl === subTitle.url}
                            onClick={() => handleItemClick(subTitle.url)}
                        />
                    </li>
                ))}
            </ul>
        </div>

    );
}

const AdminSideBar = () => {
    const location = useLocation();
    const [activeUrl, setActiveUrl] = useState(location.pathname);

    const handleItemClick = (url: string) => {
        setActiveUrl(url);
    }

    return (
        <aside className="w-full  bg-slate-900 text-slate-100 dark:text-slate-900 p-6 rounded-xl dark:bg-slate-100 overflow-y-auto">
            <AdminSideBarContent title="DASHBOARD" subTitles={DASHBOARD} activeUrl={activeUrl} handleItemClick={handleItemClick} />
            <AdminSideBarContent title="CHARTS" subTitles={CHARTS} activeUrl={activeUrl} handleItemClick={handleItemClick} />
            <AdminSideBarContent title="COUPON" subTitles={COUPON} activeUrl={activeUrl} handleItemClick={handleItemClick} />
        </aside>
    );
}

export default AdminSideBar;

