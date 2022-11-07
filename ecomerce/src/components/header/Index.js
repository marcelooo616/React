import { useState, useContext } from 'react';
import Banner from '../static/banner/Index';
import './Header.css'
import Products from '../products/Index';
import Card from '../static/card/Index';

import CartContext from '../../context/CartContext';


export default function Header(){
    const { cart } = useContext(CartContext);

    function getTotalFromProducts(){
        return cart.reduce((total, product) => {
            return total += product.price  ;

        },0)
    }
    
    return(
        <div className='header'>
             
            <div className='banner'>
               <Banner/>
            </div>
           
            <div className='total'>
                 <Card value= {getTotalFromProducts().toFixed(2)}/>
            </div>
            <div className='contaiener-products'>
            
              <Products />
            </div>
             
        </div>
    );
};