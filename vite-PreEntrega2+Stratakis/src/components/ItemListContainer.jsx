import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import './ItemListContainer.css'


function ItemListContainer({ nombre, setTotalQuantity }) {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        // Reemplaza con la ruta correcta de tu archivo JSON
        const response = await fetch('../../productos.json');
        const data = await response.json();

        // Filtra los productos por categoría si categoryId está presente
        const productosFiltrados = categoryId
          ? data.filter(producto => producto.category === categoryId)
          : data;

        setProductos(productosFiltrados);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    obtenerProductos();
  }, [categoryId]);

  return (
    <>
      <h2>Bienvenido, {nombre}</h2>
      <ItemList productos={productos}  setTotalQuantity={setTotalQuantity} />
    </>
  );
}

export default ItemListContainer;
