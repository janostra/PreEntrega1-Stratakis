import { useState } from 'react';
import './App.css';
import LogoEmpresa from "./assets/images/Logo.svg";
import Navbar from './components/NavBar.jsx';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';

function App() {
  const [mostrar, setMostrar] = useState(false);
  const [totalquantity, setTotalQuantity] = useState(0);



  return (
    <Router>
      <>
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
          <CartWidget cantidad={totalquantity}/>
        </header>

        <Routes>
          <Route
            path='/'
            element={<ItemListContainer nombre="Jano" setTotalQuantity={setTotalQuantity} />}
          />
          <Route
            path='/category/:categoryId'
            element={<ItemListContainer nombre="Jano" setTotalQuantity={setTotalQuantity} />}
          />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
        <footer className='footer'>
      
            <img className='logo-empresa-footer' src={LogoEmpresa} alt="Logo empresa"/>
            <h4>JSTenology - derechos reservados</h4>
          

          
        </footer>
      </>
    </Router>
  );
}

export default App;
