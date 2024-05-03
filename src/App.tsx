import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from "./components/Navbar"
import Search from "./pages/Search"
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {


  return (
    <div className="dark:bg-black dark:text-white bg-gray-300 text-black">
      <Router>
        <Navbar />
        <Routes>
          {/* Not Logged in user */}
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
