import { useState , useEffect} from "react";
import axios from "axios";
import './PageComida.css'
import { useParams  } from "react-router-dom";
import Card from "../components/card";
export default function ProductPage(){
    const [product,setProduct] = useState(null);
    const params = useParams();

    useEffect(() => {
        const url = "http://localhost:1234";
        const promise = axios.get(`${url}/recipes/${params.productId}`);
        promise.then((response) => setProduct(response.data));
        promise.catch((e) => alert("deu ruim"))
    }, [])

    return(
        <div className="container">

           <div className="page-product">
        
                {
                product ?
                <Card 
                title={product.title}
                ingredientes={product.ingredients}
                description={product.steps}
                time={product.time}
                /> : <h1>Carregand ...</h1>
                } 
                
       
        </div>
        </div>
   
    );
};