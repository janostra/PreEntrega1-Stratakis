import React from 'react';

const OrderDetails = ({ order, orderId, onClose }) => {

  return (
    <div>
      <h2>Detalles de la Orden</h2>
      <p>ID de la Orden: {orderId}</p>
      <p>Nombre del Comprador: {order.buyerInfo.name}</p>
      <p>Teléfono del Comprador: {order.buyerInfo.phone}</p>
      <p>Correo Electrónico del Comprador: {order.buyerInfo.email}</p>
      <h3>Lista de Compra:</h3>
      <ul>
        {order.cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - Cantidad: {item.quantity} - Precio Unitario: ${item.price} - Subtotal: ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p>Precio Total: ${order.totalPrice}</p>
      <button className='button' onClick={onClose}>Volver</button>
    </div>
  );
};

export default OrderDetails;
