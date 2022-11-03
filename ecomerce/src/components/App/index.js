import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../static/navbar/Index';
import Footer from '../static/footer/Footer';
import Header from '../header/Index';
import Products from '../products/Index';
import Car from '../static/car/Car';

function App() {
  return (
   <>  
      <BrowserRouter>
      <Navbar/> 
        <Routes>       
          <Route path='/home' element={<Header/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/products' element={<Products/>}></Route> 
          <Route path='/car' element={<Car/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
   </> 
  );
}

export default App;
