

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './components/Cart';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {useState} from 'react'
import ProductDetails from './components/ProductDetails';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [cartItems,setCartItems]=useState([]);
  return (
    <div className="App text-center">
      <BrowserRouter>
      <ToastContainer theme='light' position='top-center'/>
      <Navbar cartItems={cartItems}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems}/>}/>
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>

      </Routes>
      
      <Footer/>
      </BrowserRouter>
   
   
    </div>
  );
}

export default App;
