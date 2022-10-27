import Adicao from '../buttons/adicao';
import Subtracao from '../buttons/subtracao';
import { useState } from 'react';
import './Card.css';
import Divisao from '../buttons/divisao';
import Multiplicacao from '../buttons/multiplicacao';

export default function Card(){
     const [value, setValue] = useState(0)
     function adicao(){
          setValue(value + 1);
     }
     function subtracao(){
          setValue(value - 1);
     }
     function divisao(){
          setValue(value / 2);
     }
     function multiplicacao(){
          setValue(value * 2);
     }
     function zerar(){
          setValue(value - value)
     }
    return(
        <div className='card'>
          
           <div className='tela'>
               <span className='resultado'>                   
                    {value}
               </span>              
           </div>
           <div className='buttons'>
               <div onClick={adicao}>
                    <Adicao/>
               </div>
               <div onClick={subtracao}>
                    <Subtracao/>
               </div>   
               <div onClick={divisao}>
                    <Divisao/>
               </div>  
               <div onClick={multiplicacao}>
                    <Multiplicacao/>    
               </div>     
                <button onClick={zerar}>zera</button>                    
           </div>        
        </div>
    );
};