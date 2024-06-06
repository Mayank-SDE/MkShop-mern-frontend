
import { Outlet } from 'react-router-dom';
import AdminSideBar from '../../components/admin/AdminSideBar';
import { MdDashboard } from 'react-icons/md';
// import { useState } from 'react';

const AdminLayout = () => {

    // const [dashboard, toggleDashboard] = useState(false);

    return (
        <div className="container  flex md:flex-row flex-col gap-2 relative bg-slate-100 dark:bg-slate-900 dark:text-slate-100 text-slate-900">
            <div className='absolute top-3 z-50 text-3xl text-slate-500 md:hidden'>
                <MdDashboard />
            </div>
            <div className=" hidden absolute md:flex  overflow-y-auto top-22 left-6 md:max-w-1/4 h-fit  bg-slate-100 dark:bg-slate-900">
                <AdminSideBar />
            </div>
            <div className=" w-full md:w-3/4 md:ml-[25%] overflow-y-auto h-screen">
                <Outlet />
            </div>
        </div>
    );
}

export default AdminLayout;
