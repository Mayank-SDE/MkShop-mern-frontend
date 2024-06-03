import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { UserReducerInitialState } from './types/reducer-types';
import { useSelector } from 'react-redux';
import NavbarSkeleton from './components/skeletons/NavbarSkeleton';



const Profile = lazy(() => import("./pages/Profile"))
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const Products = lazy(() => import('./pages/admin/Products'));
const Customers = lazy(() => import('./pages/admin/Customers'));
const PieChart = lazy(() => import('./pages/admin/PieChart'));
const BarChart = lazy(() => import('./pages/admin/BarChart'));
const Coupon = lazy(() => import('./pages/admin/Coupon'));
const Transactions = lazy(() => import('./pages/admin/Transactions'));
const LineChart = lazy(() => import("./pages/admin/LineChart"));
const LoginSuccess = lazy(() => import('./pages/LoginSuccess'));
const Navbar = lazy(() => import('./components/Navbar'));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));
const Home = lazy(() => import('./pages/Home'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Orders = lazy(() => import('./pages/Orders'));
const OrderDetail = lazy(() => import('./pages/OrderDetail'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'));
const AdminLayout = lazy(() => import('./pages/admin/AdminLayout'));

function App() {
  const { user } = useSelector((state: { userReducer: UserReducerInitialState }) => state.userReducer);

  return (
    <div className='text-slate-900 bg-slate-100 dark:bg-slate-900 dark:text-slate-100 h-fit pb-[20px] '>
      <Router>
        <Suspense fallback={<NavbarSkeleton />}>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* Not Logged in user */}
            <Route>
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
              <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
              <Route path="/login/success" element={<LoginSuccess />} />
            </Route>
            {/* Logged In User Route */}
            <Route element={<ProtectedRoute isAuthenticated={user ? true : false} />}>
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/:id" element={<OrderDetail />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            {/* Admin Routes */}
            <Route element={<ProtectedRoute isAuthenticated={true} adminOnly={true} admin={user?.role === 'admin'} />}>
              <Route path='/admin/*' element={<AdminLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="products" element={<Products />} />
                <Route path="customers" element={<Customers />} />
                <Route path="transactions" element={<Transactions />} />
                <Route path="chart/pie" element={<PieChart />} />
                <Route path="chart/bar" element={<BarChart />} />
                <Route path="chart/line" element={<LineChart />} />
                <Route path="coupon" element={<Coupon />} />

              </Route>
            </Route>
          </Routes>
        </Suspense>
        <Toaster position='top-center' />
      </Router>
    </div>
  );
}

export default App;
