import { Outlet } from 'react-router-dom';
import AdminSideBar from '../../components/admin/AdminSideBar';
import { TbLayoutDashboard } from "react-icons/tb";

import { useState } from 'react';


const AdminLayout = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);

    return (
        <div className="container flex md:flex-row flex-col gap-2 relative bg-slate-100 dark:bg-slate-900 dark:text-slate-100 text-slate-900">
            <div className='absolute top-3 left-3 z-50 text-3xl text-slate-500 md:hidden' onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
                <TbLayoutDashboard />
            </div>
            <div className={`md:flex ${isSidebarVisible ? 'flex' : 'hidden'} h-fit md:flex-col absolute md:relative top-12 md:top-8 left-0 md:left-0 z-40 w-fit md:w-fit  bg-slate-100 dark:bg-slate-900 transition-all`}>
                <AdminSideBar />
            </div>
            <div className="flex-1  overflow-y-auto h-screen">
                <Outlet />
            </div>
        </div>
    );
}

export default AdminLayout;
