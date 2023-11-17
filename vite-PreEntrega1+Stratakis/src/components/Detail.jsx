import React, { useState } from 'react';
import './Detail.css'; // Importa tus estilos CSS para el Detalle (si es necesario)

const Detail = ({ producto, onClose, setTotalQuantity }) => {
    const [count, setCount] = useState(0)

    const handleAceptar = () => {
        setTotalQuantity((prevQuantity) => prevQuantity + count);
    };
    
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{producto.title}</h2>
        <img className='img' src={producto.image} alt={producto.title} />
        <p>Precio: ${producto.price}</p>
        <p>{producto.description}</p>
        <div>
            <h2>Seleccione la cantidad de productos:</h2>
            <h3>{count}</h3>
            <button className="button" onClick={() => setCount(count + 1)}>+
             </button>
            <button className="button" onClick={() => setCount(count - 1)} disabled={count === 0}>-
             </button>
             <button className='button' onClick={handleAceptar}>Aceptar</button>
      </div>
        <button className='detail' onClick={onClose}>Cerrar Detalle</button>
      </div>
    </div>
  );
};

export default Detail;
