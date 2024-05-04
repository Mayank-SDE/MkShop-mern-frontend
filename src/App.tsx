import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react'
import Loader from './components/Loader';


const Navbar = lazy(() => import('./components/Navbar'));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));
const Home = lazy(() => import('./pages/Home'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Shipping = lazy(() => import('./pages/Shipping'));


function App() {

  // bg-slate-100 karna hai last me 
  return (
    <div className='text-slate-900 bg-slate-100 dark:bg-slate-900 dark:text-slate-100'>
      <Router>
        {/* This will be common to all the routings */}
        <Navbar />
        {/* Suspense Router will help in displaying the Loading component untill the rest components are loaded. */}
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* Not Logged in user */}
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/shipping" element={<Shipping />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
