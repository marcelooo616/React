import './Navbar.css';
import {Link} from "react-router-dom";
export default function Navbar(){
    return(
        <>
               <div className='container'>
                    <div className='logo'>
                        <img className='img-logo' src='https://i.imgur.com/KQuOKjY.png'/>
                    </div>
                    <div className='menu'>
                        <Link to="/home" className='link'>
                            <div className='menu-item'>
                                <h1>Menu</h1>
                            </div> 
                        </Link>
                        
                        <Link to="/products" className='link'>
                            <div className='menu-item'>
                                <h1>Prdutos</h1>  
                            </div>
                        </Link>
                        <Link to="/products" className='link'>
                            <div className='menu-item'>
                                <h1>sobre</h1>
                            </div> 
                        </Link>
                        <Link to="/car" className='link'>
                            <div className='menu-item'>
                                <h1>carrinho</h1> 
                            </div>
                        </Link>                                                             
                    </div>
               </div>
        </>
    );
};