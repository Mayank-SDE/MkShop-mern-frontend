import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react'
import Loader from './components/Loader';
import Profile from './pages/Profile';
import { Toaster } from 'react-hot-toast';




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

  const [user, setUser] = useState(null);

  // useEffect(() => {

  //   const getUser = () => {
  //     fetch("http://localhost:3000/auth/login/success", {
  //       method: "GET",
  //       credentials: "include",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Credentials": "true"
  //       }
  //     }).then(response => {
  //       if (response.status === 202) {
  //         return response.json();
  //       }
  //       throw new Error("Authentication failed.")
  //     }).then(responseObject => {
  //       setUser(responseObject.user);
  //     }).catch(error => {
  //       console.log(error);
  //     });

  //   }

  //   getUser();
  // }, []);
  console.log(user);

  return (
    <div className='text-slate-900 bg-slate-100 dark:bg-slate-900 dark:text-slate-100 h-fit pb-[100px] '>
      <Router>
        {/* This will be common to all the routings */}
        <Navbar />
        {/* Suspense Router will help in displaying the Loading component untill the rest components are loaded. */}
        <Suspense fallback={<Loader />}>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* Not Logged in user */}
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />

            {/* Logged In User Route */}
            <Route>
              <Route path='/orders' element={!user ? <Navigate to="/" /> : <Orders />} />
              <Route path='/orders/:id' element={!user ? <Navigate to="/" /> : <OrderDetail />} />
              <Route path='/profile/:id' element={!user ? <Navigate to="/" /> : <Profile />} />
            </Route>


          </Routes>
        </Suspense>
      </Router>
      <Toaster position='top-center' />
    </div>
  )
}

export default App
