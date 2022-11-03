import './Card.css'
export default function Card(props){
    const {title, description, time,ingredientes} = props;
    return(
        <>
          <div className="product">
          <h1>Receitinhas delícia 🍔🍟</h1>
            <h1>{title}</h1>
          </div>
          <div className="description">
            <span>Time: {time}</span>
            <span>Ingredientes: {ingredientes}</span>
            <p>{description}</p>
          </div>
        </>
    )
}