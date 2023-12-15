import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../firebase/client.js'


function ItemListContainer({ nombre }) {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const obtenerProductos = () => {
      const productosref = collection(db, 'Productos');

      let productosQuery;

      if (categoryId) {
        const categoriaFiltrada = where('category', '==', categoryId);
        productosQuery = query(productosref, categoriaFiltrada);
      } else {
        productosQuery = productosref;
      }

      getDocs(productosQuery)
        .then((snapchot) => {
          if (snapchot.size === 0) {
            console.log("no results");
          }
          setProductos(snapchot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => {
          console.error('Error al obtener productos:', error);
        });
    };

    obtenerProductos();
  }, [categoryId]);

  return (
    <>
      <h2>Bienvenido, {nombre}</h2>
      <ItemList productos={productos}/>
    </>
  );
}

export default ItemListContainer;
