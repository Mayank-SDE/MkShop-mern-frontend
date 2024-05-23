import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader';
import Profile from './pages/Profile';
import { Toaster } from 'react-hot-toast';
import { UserReducerInitialState } from './types/reducer-types';
import { useSelector } from 'react-redux';

const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const Products = lazy(() => import('./pages/admin/Products'));
const Customers = lazy(() => import('./pages/admin/Customers'));
const Transactions = lazy(() => import('./pages/admin/Transactions'));
const PieChart = lazy(() => import('./pages/admin/PieChart'));
const BarChart = lazy(() => import('./pages/admin/BarChart'));
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

function App() {
  const { user } = useSelector((state: { userReducer: UserReducerInitialState }) => state.userReducer);

  return (
    <div className='text-slate-900 bg-slate-100 dark:bg-slate-900 dark:text-slate-100 h-fit pb-[20px] '>
      <Router>
        <Suspense fallback={<Loader />}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* Not Logged in user */}
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
            <Route path="/login/success" element={<LoginSuccess />} />

            {/* Logged In User Route */}
            <Route path="/orders" element={!user ? <Navigate to="/" /> : <Orders />} />
            <Route path="/orders/:id" element={!user ? <Navigate to="/" /> : <OrderDetail />} />
            <Route path="/profile" element={!user ? <Navigate to="/" /> : <Profile />} />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={user?.role === 'admin' ? <Dashboard /> : <Navigate to="/" />} />
            <Route path="/admin/products" element={user?.role === 'admin' ? <Products /> : <Navigate to="/" />} />
            <Route path="/admin/customers" element={user?.role === 'admin' ? <Customers /> : <Navigate to="/" />} />
            <Route path="/admin/transactions" element={user?.role === 'admin' ? <Transactions /> : <Navigate to="/" />} />
            <Route path="/admin/chart/pie" element={user?.role === 'admin' ? <PieChart /> : <Navigate to="/" />} />
            <Route path="/admin/chart/bar" element={user?.role === 'admin' ? <BarChart /> : <Navigate to="/" />} />
            <Route path="/admin/chart/line" element={user?.role === 'admin' ? <LineChart /> : <Navigate to="/" />} />
          </Routes>
        </Suspense>
        <Toaster position='top-center' />
      </Router>
    </div>
  );
}

export default App;
