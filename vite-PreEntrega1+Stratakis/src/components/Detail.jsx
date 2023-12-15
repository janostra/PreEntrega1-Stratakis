import React, { useState } from 'react';
import './Detail.css';
import Counter from './Counter';
import { useCart } from '../Context/CartContext';

const Detail = ({ producto, onClose}) => {
  const { addToCart } = useCart();
  const [count, setCount] = useState(0);

  const handleAceptar = () => {
    addToCart(producto, count);
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{producto.title}</h2>
        <img className='img' src={producto.image} alt={producto.title} />
        <p>Precio:${producto.price}</p>
        <p>{producto.description}</p>

        <Counter count={count} setCount={setCount} />

        <button className='button' onClick={handleAceptar} disabled={count === 0}>Agregar al carrito</button>
        <button className='detail' onClick={onClose}>Cerrar Detalle</button>
      </div>
    </div>
  );
};

export default Detail;
