import Product from "../product/Product";
import './Products.css';

const productsList = [
    { name: "Bolo de aniversário", icon: "https://i.imgur.com/WZdjXWM.jpg'", price: 20.9 },
    { name: "Balão", icon: "https://i.imgur.com/WZdjXWM.jpg'", price: 5.6 },
    { name: "Confete", icon: "https://i.imgur.com/WZdjXWM.jpg'", price: 2.9 },
    { name: "Suco de caixinha", icon: "https://i.imgur.com/WZdjXWM.jpg'", price: 1.9 },
    { name: "Doces diversos", icon: "https://i.imgur.com/WZdjXWM.jpg'", price: 12.3 },
    { name: "Bolo de aniversário", icon: "https://i.imgur.com/WZdjXWM.jpg'", price: 20.9 },
    { name: "Balão", icon: "https://i.imgur.com/WZdjXWM.jpg'", price: 5.6 },
    { name: "Confete", icon: "https://i.imgur.com/WZdjXWM.jpg'", price: 2.9 },
    { name: "Suco de caixinha", icon: "https://i.imgur.com/WZdjXWM.jpg'", price: 1.9 },
    { name: "Doces diversos", icon: "https://i.imgur.com/WZdjXWM.jpg'", price: 12.3 }
 ]
export default function Products(props){
    const{ updateTotalPrice } = props;
    return(
        <>
        
        <div className="products">
        {productsList.map((product) => {
            return(
                
                <Product
                icon={product.icon}
                name={product.name}
                price={product.price}
                updateTotalPrice={(price) => updateTotalPrice(price)}
                />
                      
             

            )
        })}
        </div>
        </>
    );
};