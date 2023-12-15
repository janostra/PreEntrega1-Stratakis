import React, { useState } from 'react';
import './CartPage.css'
import { useCart } from '../Context/CartContext';
import BuyModal from './BuyModal';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/client';
import OrderDetails from './OrderDetails';



const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, decrementQuantity, getTotalPrice } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [orderId, setOrderId] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const handleDecrement = (productId) => {
    decrementQuantity(productId);
  };

  const closeOrder = () => {
    setIsOrderCompleted(false)
  };

  const handleBuy = (buyerInfo) => {

    const ordersCollection = collection(db, 'Ordenes');
  
    const orderData = {
      buyerInfo,
      cartItems,
      totalPrice: getTotalPrice(),
    };
  

    addDoc(ordersCollection, orderData)
      .then((docRef) => {
        console.log('Orden creada con ID:', docRef.id);
        setOrderId(docRef.id);
        setOrderDetails(orderData);
        setIsOrderCompleted(true);
        clearCart();
      })
      .catch((error) => {
        console.error('Error al crear la orden:', error);
      });
  };

  return (
    <div className='cart'>
      
      {!isModalOpen && !isOrderCompleted && (
        <>
          <h2>Carrito de compras</h2>
          {cartItems.map((item) => (
            <div key={item.id} className='itemcarrito'>
              <img className='cartimage' src={item.image} alt={item.title} />
              <h2 className='cartproduct'>{item.title} - Cantidad: {item.quantity}</h2>
            
              <div className='buttons'>              
                {item.quantity > 1 && (
                <button className='button' onClick={() => handleDecrement(item.id)}>
                  Decrementar
                </button>
              )}
              <button className='button' onClick={() => handleRemoveItem(item.id)}>
                Eliminar Producto
              </button>
              </div>

            </div>
          ))}
          <h3>Precio total: $ {getTotalPrice()} </h3>
          {cartItems.length === 0 || (
            <>
            <button className='button' onClick={openModal}>Comprar</button>
            <button className='detail' onClick={clearCart}>Limpiar Carrito</button>
            </>
          )}
        </>
      )}

      {isOrderCompleted && orderDetails && <OrderDetails order={orderDetails} orderId={orderId} onClose={closeOrder}/>}
      {isModalOpen && <BuyModal  onClose={closeModal} onSubmit={handleBuy} />}

    </div>
  );
};

export default CartPage;
