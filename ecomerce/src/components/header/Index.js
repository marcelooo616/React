import { useState } from 'react';
import Banner from '../static/banner/Index';
import './Header.css'
import Products from '../products/Index';
import Card from '../static/card/Index';




export default function Header(){
    const [value, setValue] = useState(0)
    
    return(
        <div className='header'>
             
            <div className='banner'>
               <Banner/>
            </div>
           
            <div className='total'>
                 <Card value= {value.toFixed(2)}/>
            </div>
            <div className='contaiener-products'>
            
              <Products updateTotalPrice={(price) => setValue(value + price)}/>
            </div>
             
        </div>
    );
};