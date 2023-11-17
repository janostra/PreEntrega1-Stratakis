import React, { useState} from 'react';
import './Item.css'
import Detail from './Detail';

const Item = ({id, title, price, description, category, image, setTotalQuantity})  => {
    const [detalleVisible, setDetalleVisible] = useState(false);

    const mostrarDetalle = () => {
        setDetalleVisible(true);
      };
    
    const cerrarDetalle = () => {
       setDetalleVisible(false);
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
            {detalleVisible && (
                     <Detail
                     producto={{ id, title, price, description, category, image }}
                     onClose={cerrarDetalle}

                     setTotalQuantity={setTotalQuantity}
                   />
            )}
        </article>
    )
}
export default Item