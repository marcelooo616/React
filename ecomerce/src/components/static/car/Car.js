import { useState } from 'react';
import Card from '../card/Index';
import './Car.css';
export default function Car(props){
  const [value, setValue] = useState(0)

   
    return(
        <>
           <div className='car'>
              <div>
                <h2>sss</h2>
                <Card value= {value.toFixed(2)}/>
              </div>
           </div>
        </>
    );
};