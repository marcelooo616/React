import './Product.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Product(props){

    const {id,price, name, oldPrice, image,qtd, updateTotalPrice} = props;
    const [selected, setSelected] = useState(false);
    const navigate = useNavigate();
    function action(){
        setSelected(!selected);
       
    
     }
     
     function buildViewProduct(){
        navigate(`/products/${id}`);
    }
    function buildViewdetails(){
        navigate(`/description/${id}`);
    }
    

    function handleSelected(){
        const isSelected = !selected;
        if(isSelected){
            updateTotalPrice(price);        
        }else{
           
            updateTotalPrice(price * -1);
        }    
       
     }

     let classes = ['card'];
        if(selected){
            classes.push("selected");
        }
    
   
    return(
        <>
            <div className='container-product'>
                <div className='card'>
                    <div className='card-img'>
                    <img src={image} alt="Awesome Product" />
                    </div>
                    <div className='card-info'>
                        <span className='nome'> {name}</span>
                        <span className='price'> R$ {price.toFixed(2) }</span>
                        <span className='qtd'>{qtd}</span>
                    </div>
                    <div onClick={ handleSelected} className="buttons"  >
                           <button className={classes.join(" ")} onClick={buildViewProduct}>Ver mais</button>                     
                    </div>
                </div>
            </div>
        </>
    );
};