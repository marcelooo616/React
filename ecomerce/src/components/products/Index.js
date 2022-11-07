import { useState, useEffect } from "react";
import axios from "axios";
import Product from "../product/Index";
import { Link, useNavigate } from "react-router-dom";
import Card from "../static/card/Index";


export default function Products(props){ 

    const [productsList, setProductsList] = useState([]);
    const [description, setDescription] = useState(null);
   
    const { updateTotalPrice } = props;

    useEffect(() => {
        const promise = axios.get("http://localhost:1234/products");
        promise.then((response) => {
            setProductsList(response.data);
        });
        promise.catch(e => console.log("deu ruim! 😢", e));
    }, []);

    function buildRecipes() {
      
      if (!description) return <h1>Carregando...</h1>
      return description.map(description => {
        const url = `/products/${description.id}`;
        return (
          <div className="item"><Link to={url}>{description.details}</Link></div>
        )
        
      })
      
    }

   

    

    function buildProductsList() {
        
    
        return productsList.map(product => {
          return (
            
            <Product
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price }
              qtd={product.qtd }
              updateTotalPrice={(price) => updateTotalPrice(price)} 
                                      
            />
           
          )
        })
      }
    
      
      const products = buildProductsList();
    return(
        <>
        
        <div div onClick={buildRecipes} className="contaiener-products">
         
        {products}
        </div>
        </>
       
    );
};