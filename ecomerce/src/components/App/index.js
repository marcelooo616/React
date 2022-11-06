import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../static/navbar/Index';
import Footer from '../static/footer/Index';
import Header from '../header/Index';
import Products from '../products/Index';
import Vendas from '../page/vendas';
import CartContext from '../../context/CartContext';
import { useState } from 'react';
import Cart from '../static/cart/index';
import Details from '../page/details';

function App() {
  const [ cart, setCart ] = useState([]);
  return (
    <CartContext.Provider value={{cart, setCart}}>      
        <BrowserRouter>
          <Navbar/> 
            <Routes> 
              <Route path='/' element={<Header/>}></Route>      
              <Route path='/home' element={<Header/>}></Route>
              <Route path='/product' element={<Products/>}></Route>
              <Route path="/products/:productId" element={<Vendas/>}></Route> 
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path='/description/:descriptionId' element={<Details/>}></Route>
            </Routes>
          <Footer/>
        </BrowserRouter>     
    </CartContext.Provider>
  
    
  );
}

export default App;
