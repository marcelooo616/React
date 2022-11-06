import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import Details from '../details';
import './Vendas.css';

import CartContext from '../../../context/CartContext';

export default function Vendas(){
    
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const params = useParams();
    const { cart, setCart } = useContext(CartContext);
    

    useEffect(() => {
        const url = "http://localhost:1234";
        const promise = axios.get(`${url}/products/${params.productId}`);
        promise.then(response => setProduct(response.data));
        promise.catch(error => console.log("error", error));
      }, [])

      


      function backHome(){
        navigate("/home")
      }

      function addProduct(){
        if(isProductAlreadySelected()){
            const updateProductList = removeProduct();
            setCart(updateProductList);
        }else{
            setCart([...cart, product]);
        }
      }

      function isProductAlreadySelected(){
         return cart.find(productOnCart => product.id === productOnCart.id);   
      }

      function removeProduct(){
        return cart.filter(productOnCart => product.id !== productOnCart.id);
      }

      

    return(
        <div className='bg'>
        <div className='container-vendas'>
           
            {
                product ? 
                
                <div className='container-details'>
                    <div className='container-product'>
                        <div className='card'>
                            <div className='card-img'>
                                <img src={product.image} alt="Awesome Product" />
                            </div>
                            <div className='card-info'>
                                <span className='nome'> {product.name}</span>
                                <span className='price'> R$ {product.price.toFixed(2)}</span>
                            </div>
                            <div className="buttons-vendas"  >                      
                                <button className='margin-right' onClick={backHome} >Back</button>
                                <button className='margin-left' onClick={addProduct} >{product && !isProductAlreadySelected() ? <>add Cart</> : <>Remove</>}</button>                       
                            </div>
                        </div>
                   </div>
                    <div className='details'>
                       <Details/>
                    </div>
            </div>              
                : <h1> Carregando...</h1>
            }    
        </div>
        </div>
    );
};