import './Adicao.css';
import { useState } from 'react';
export default function Adicao(){
    
    const [selected, setSelected] = useState(false);
    function handleSelected(){
        setSelected(!selected);
   }

   let classes = ["card"];
   if(selected){
        classes.push("selected");
   }
   
    return(
        <div className='add'> 
                    <div className={classes.join(" ")} onClick={handleSelected}>
                         <button>+</button>
                    </div>
               </div>
    );
};