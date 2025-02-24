

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App text-center">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>

      </Routes>
      
      <Footer/>
      </BrowserRouter>
   
   
    </div>
  );
}

export default App;
