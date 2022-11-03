import './Product.css';
import { useState } from 'react';

export default function Product(props){

    const {price, name, oldPrice, image, updateTotalPrice} = props;
    const [selected, setSelected] = useState(false);

    function action(){
        setSelected(!selected);
    
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
                        <span className='price'> R$ {price.toFixed(2)}</span>
                    </div>
                    <div onClick={ handleSelected} className="buttons"  >
                        <button className={classes.join(" ")} onClick={action}>comprar</button>
                    </div>
                </div>
            </div>
        </>
    );
};