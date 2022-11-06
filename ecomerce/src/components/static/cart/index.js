import { useContext, useState } from 'react';
import Card from '../card/Index';
import './Cart.css';
import CartContext from '../../../context/CartContext';
import Banner from '../banner/Index';
export default function Cart(props){

  const { cart } = useContext(CartContext);

  function getTotalFromProducts(){
    return cart.reduce((total, product) => {
        return total += product.price;

    },0)
}

   
    return(
        <>
           <div className='car'>
            <Banner/>
              <div className='total'>
                
                <Card value= {getTotalFromProducts().toFixed(2)}/>
              </div>
           </div>
        </>
    );
};