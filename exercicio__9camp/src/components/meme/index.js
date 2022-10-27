import './Meme.css'
export default function Meme(props){
    const {title, image} = props;
    return(
       
             <div className="card-meme">
                <div className='titulo-post'>
                   <h1 className="titulo">{title}</h1>
                </div>
                <div className='image-post'>
                    <img className="img" src={image} alt="Hyperlink" />
                </div>
                
                
             </div>
        
    );
};