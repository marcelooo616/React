import axios from "axios";
import './Details.css'
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function Details(){
    const [description, setDescription] = useState(null);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const url = "http://localhost:1234";
        const promise = axios.get(`${url}/description/${params.productId}`);
        promise.then(response => setDescription(response.data));
        promise.catch(error => console.log("error", error));
      }, [])

    
    return(
        <>
          
         {description ? <h1 className="h1">{description.details}</h1> : <h1>caregando..</h1>}
        </>
    );
};