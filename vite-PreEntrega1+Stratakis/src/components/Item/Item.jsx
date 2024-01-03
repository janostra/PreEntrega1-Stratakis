import './Item.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useNavigate } from 'react-router-dom';

const Item = ({id, title, price, description, category, image})  => {
    const navigate = useNavigate();

    const mostrarDetalle = () => {
        navigate(`/item/${id}`); 
      };
    
    return (

        <article className="card">
                <h2 className='title'>
                    {title}
                </h2>
            <picture className='imgcontainer'>
                <img className='img' src={image} alt={title} />
            </picture>
            <section>
                <h3>precio=${price} </h3>
            </section>
            <footer>
             <button className='detail-button' onClick={mostrarDetalle}>Detalle</button>
            </footer>
             <ItemDetail/>
        </article>
    )
}
export default Item