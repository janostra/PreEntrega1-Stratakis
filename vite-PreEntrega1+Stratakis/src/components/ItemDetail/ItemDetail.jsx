import React, { useState, useEffect } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/client.js';

const ItemDetail = () => {
  const [productDetail, setProductDetail] = useState(null);
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerDetallesDelProductoPorId = async (productId) => {
      try {
        const productDocRef = doc(db, 'Productos', productId);
        const productSnapshot = await getDoc(productDocRef);

        if (productSnapshot.exists()) {
          setProductDetail({ id: productSnapshot.id, ...productSnapshot.data() });
        }
      } catch (error) {
        console.error('Error al obtener detalles del producto:', error);
      }
    };

    obtenerDetallesDelProductoPorId(id);
  }, [id]);

  const cerrarDetalle = () => {
    navigate('/');
  };

  if (!productDetail) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{productDetail.title}</h2>
        <img className='img' src={productDetail.image} alt={productDetail.title} />
        <p>Precio: ${productDetail.price}</p>
        <p>{productDetail.description}</p>

        <ItemCount count={count} setCount={setCount} producto={productDetail} onClose={cerrarDetalle} />

        <button className='detail' onClick={cerrarDetalle}>Cerrar Detalle</button>
      </div>
    </div>
  );
};

export default ItemDetail;
