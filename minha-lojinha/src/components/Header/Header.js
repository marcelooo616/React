import { useState } from 'react';
import Card from '../card/Card';
import Product from '../products/Products';
import './Header.css';

const products = [
    { name: "Bolo de aniversário", icon: "https://i.imgur.com/WZdjXWM.jpg'", price: 20.9 },
    { name: "Balão", icon: "https://i.imgur.com/WZdjXWM.jpg'", price: 5.6 },
    { name: "Confete", icon: "https://i.imgur.com/WZdjXWM.jpg'", price: 2.9 },
    { name: "Suco de caixinha", icon: "https://i.imgur.com/WZdjXWM.jpg'", price: 1.9 },
    { name: "Doces diversos", icon: "https://i.imgur.com/WZdjXWM.jpg'", price: 12.3 }
 
 ]
export default function Header(){
    const [value, setValue] = useState(0)

    function valueFinal(){
        setValue(value - value);
    }
    return(
        <>
            <div className="header">
                <div className='topo'>
                    <h1>Sacola</h1>
                </div>
                <div className='section-value'>               
                    <Card value="Total"/>
                    <Card value={value.toFixed(2)}/>
                    <div className='total'>                               
                        <span className='value' onClick={valueFinal}>Finalizar</span>
                    </div>
                    
                </div>              
                <div className='home-product'>                  
                    <Product updateTotalPrice={(price) => setValue(value + price) }/>        
                </div>
            </div>           
        </>
    );
};