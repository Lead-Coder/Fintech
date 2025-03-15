import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './pages/product';
import Cart from './pages/cart';
import Hero from './pages/hero';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import Userdetails from './pages/userDetails';
import Stock from './pages/stock';

function App() {
  return (
    <>
    <div>
     <Router>
        <Routes>
           <Route path="/" element={<Hero />} />
           <Route path="/product" element={<Product />} />
           <Route path="/cart" element={<Cart />} />
           <Route path="/login" element={<Login />} />
           <Route path="/signup" element={<Signup />} />
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/userdetails" element={<Userdetails />} />
           <Route path="/stock" element={<Stock />} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
