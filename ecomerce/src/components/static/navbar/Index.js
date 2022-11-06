import './Navbar.css';
import {Link} from "react-router-dom";
export default function Navbar(){
    return(
        <div className='navbar'>
        
         <div className='logo'>
             <img className='img-logo' src='https://i.imgur.com/xHEIpmQ.png'/>
             <img className='img-frete' src='https://i.imgur.com/CrtBaFa.jpg'/>
         </div>
               <div  className='container'>
                   
                    <div className='menu'>
                        <Link to="/home" className='link'>
                            <div className='menu-item'>
                                <h1>Home</h1>
                            </div> 
                        </Link>
                        
                        <Link to="/product" className='link'>
                            <div className='menu-item'>
                                <h1>Prdutos</h1>  
                            </div>
                        </Link>
                        <Link to="/products" className='link'>
                            <div className='menu-item'>
                                <h1>sobre</h1>
                            </div> 
                        </Link>
                        <Link to="/cart" className='link'>
                            <div className='menu-item'>
                                <h1>carrinho</h1> 
                            </div>
                        </Link>                                                             
                    </div>
               </div>
        </div>
    );
};