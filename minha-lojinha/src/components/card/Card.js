import './Card.css';
export default function Card(props){
    const {value} = props;
    return(
        <>
            <div className='total'>                               
                <span className='value'>{value}</span>
            </div>
        </>
    );
};