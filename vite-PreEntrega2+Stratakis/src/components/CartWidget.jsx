import React from 'react'
import BotonImagen from '../assets/images/Cart.svg'
import './CartWidget.css'

function CartWidget(props) {
  return (
    <>
    <button className='cart-button'>
        <img className='cart-image' src={BotonImagen} alt="Carrito-de-compras" />
        <p>{props.cantidad}</p>
    </button>
    </>
  );
  }

export default CartWidget;