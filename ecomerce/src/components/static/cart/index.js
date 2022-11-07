import { useContext, useState } from 'react';
import Card from '../card/Index';
import './Cart.css';
import CartContext from '../../../context/CartContext';
import Banner from '../banner/Index';
import Product from "../../product/Index";
export default function Cart(props){

  const { cart } = useContext(CartContext);

  function getTotalFromProducts(){
    return cart.reduce((total, product) => {
      total += product.price;
      return total ;
      

    },0)
}


const num = 2;
function handleCartList(){
   
    return cart.map(product => {
      return(
        <Product
        id={product.id}
        image={product.image}
        name={product.name}
        price={product.price }                              
      />
      )
    })
}

function finalizarCompra(){
  
};

const List = handleCartList();
const fim = finalizarCompra();
   
    return(
        <div className='container-cart'>  
               <div className='total'>              
                <Card value= {getTotalFromProducts().toFixed(2)}/> 
                <span>itens: {cart.length}</span>             
              </div>     
           <div className='cart'>                                   
              <div className="cart-list"></div>
                 <div className='topo'>
                    <h1>Produtos </h1>
                 </div>
                 <div className='list'>
                     {List}
                     <button>setCart</button>
                 </div>
                 <div className='button-back'>
                     {cart.length > 0 ? <button>fim</button> : <button>voltar</button>}
                 </div>                
             </div>
        </div>
    );
};