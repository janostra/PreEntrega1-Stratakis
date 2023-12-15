import React from 'react';
import BotonImagen from '../assets/images/Cart.svg';
import './CartWidget.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

function CartWidget() {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <button className='cart-button' onClick={() => navigate('/cart')}>
      <img className='cart-image' src={BotonImagen} alt="Carrito-de-compras" />
      {totalQuantity >= 0 && <p>{totalQuantity}</p>}
    </button>
  );
}

export default CartWidget;
