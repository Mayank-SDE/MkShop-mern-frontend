
import { Outlet } from 'react-router-dom';
import AdminSideBar from '../../components/admin/AdminSideBar';

const AdminLayout = () => {
    return (
        <div className="container  flex bg-slate-100 dark:bg-slate-900 dark:text-slate-100 text-slate-900">
            <div className="absolute overflow-y-auto top-22 left-6 w-1/4 h-full bg-slate-100 dark:bg-slate-900">
                <AdminSideBar />
            </div>
            <div className="w-3/4 ml-[25%] overflow-y-auto h-screen">
                <Outlet />
            </div>
        </div>
    );
}

export default AdminLayout;
