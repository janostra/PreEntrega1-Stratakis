import { useState } from 'react';
import './App.css';
import {CartProvider} from "./Context/CartContext.jsx"
import LogoEmpresa from "./assets/images/Logo.svg";
import Navbar from './components/NavBar.jsx';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import CartPage from './components/CartPage';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';


function App() {
  const [mostrar, setMostrar] = useState(false);



  return (
    <Router>
      
      <CartProvider>
      <header>  
          <div className='empresa'>
            <img className='logo-empresa' src={LogoEmpresa} alt="Logo empresa"/>
            <h1>JSTecnology</h1>
          </div>
          <div className="barra-vertical"></div>
          
          {mostrar && <Navbar/>}
          

          <button className="button" onClick={() => setMostrar(!mostrar)}>
            {mostrar ? "Ocultar ←" : "Desplegar →"}
          </button>
          
          <div className="barra-vertical"></div>
          <CartWidget/>
        </header> 
        <Routes>
          <Route
            path='/'
            element={<ItemListContainer nombre="Jano"/>}
          />
          <Route
            path='/category/:categoryId'
            element={<ItemListContainer nombre="Jano"/>}
          />
          <Route path='/cart' element={<CartPage />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
        <footer className='footer'>
            <img className='logo-empresa-footer' src={LogoEmpresa} alt="Logo empresa"/>
            <h4>JSTenology - derechos reservados</h4>
        </footer>
      </CartProvider>


    </Router>
  );
}

export default App;
