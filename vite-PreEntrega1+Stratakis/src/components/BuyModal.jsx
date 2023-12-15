import React, { useState, useEffect } from 'react';
import "./BuyModal.css"

const BuyModal = ({ onClose, onSubmit }) => {
  const [buyerInfo, setBuyerInfo] = useState({ name: '', phone: '', email: '' });
  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    const { name, phone, email } = buyerInfo;
    setIsFormComplete(name.trim() !== '' && phone.trim() !== '' && email.trim() !== '');
  }, [buyerInfo]);
  
  const handleInputChange = (e) => {
    setBuyerInfo({ ...buyerInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (isFormComplete) {
      onSubmit(buyerInfo);
      onClose();
    } else {
      alert('Por favor, complete todos los campos antes de finalizar la compra.');
    }
  };

  return (

      <div className='buycontainer'>
        <h2>Ingrese sus datos:</h2>
        <form className='forum'>
          <div className='label'>          
            <label>Nombre:</label>
            <input type="text" name="name" value={buyerInfo.name} onChange={handleInputChange} required/>
          </div>

          <div className='label'>
            <label>Teléfono:</label>
            <input type="text" name="phone" value={buyerInfo.phone} onChange={handleInputChange} required/>
          </div>
          
          <div className='label'>
            <label>Correo Electrónico:</label>
            <input type="email" name="email" value={buyerInfo.email} onChange={handleInputChange} required/>
          </div>  
        </form>
        <button className='button' onClick={handleSubmit} disabled={!isFormComplete}>Finalizar Compra</button>
        <button className='detail' onClick={onClose}>Cancelar</button>
      </div>

  );
};

export default BuyModal;
