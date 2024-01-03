import React from 'react';
import { useCart } from '../../Context/CartContext';

const ItemCount = ({ count, setCount, producto, onClose }) => {
  const { addToCart } = useCart();

  const handleAceptar = () => {
    addToCart(producto, count);
    onClose();
  };
  return (
    <>
    <div>
      <h4>{count}</h4>
      <button className="button" onClick={() => setCount(count + 1)}>+</button>
      <button className="button" onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
    </div>
    <button className='button' onClick={handleAceptar} disabled={count === 0}>Agregar al carrito</button>
    </>

  );
};

export default ItemCount;
