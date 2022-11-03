import { useState, useEffect } from "react";
import axios from "axios";
import Product from "../product/Index";
import Card from "../static/card/Index";


export default function Products(props){ 

    const [productsList, setProductsList] = useState([]);
   
    const { updateTotalPrice } = props;

    useEffect(() => {
        const promise = axios.get("http://localhost:1234/products");
        promise.then((response) => {
            setProductsList(response.data);
        });
        promise.catch(e => console.log("deu ruim! 😢", e));
    }, []);

    

    function buildProductsList() {
        
    
        return productsList.map(product => {
          return (
            <Product
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              updateTotalPrice={(price) => updateTotalPrice(price)}                          
            />
          )
        })
      }
    

      const products = buildProductsList();
    return(
        <>
        
        <div className="contaiener-products">
         
        {products}
        </div>
        </>
       
    );
};