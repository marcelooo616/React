import { useState } from 'react';
import ButtonAdd from '../../components/buttons/button-add/ButtonAdd';
import './Product.css';

export default function Product(props){
   const {name, icon, price, updateTotalPrice} = props;
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
             <div className='card-product' >              
                 <img src={icon}/>

                   <div className='info'>
                           <span className=''>{name}</span>
                        <div className='total'>                               
                           <span className='value'>{price.toFixed(2)}</span>
                        </div >
                        <div  onClick={handleSelected}>
                             <button className={classes.join(" ")} onClick={action}><ButtonAdd/></button>
                        </div>              
                  </div>                       
             </div>    
        </>
      );
};