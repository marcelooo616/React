import './Card.css'
export default function Card(props){
    const {value} = props;
   
    return(
        <>
        <div className='card-total'>
            <span>Total: </span>
            <span className='span'>R$ {value} </span>
        </div>
        </>
    );
    
};