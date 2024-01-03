import './App.css';
import {CartProvider} from "./Context/CartContext.jsx"
import LogoEmpresa from "./assets/images/Logo.svg";
import Navbar from './components//NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import CartPage from './components/CartPage/CartPage.jsx';
import ItemDetail from './components/ItemDetail/ItemDetail.jsx'
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';


function App() {

  return (
    <Router>
      
      <CartProvider>
      <header>  
          <div className='empresa'>
            <img className='logo-empresa' src={LogoEmpresa} alt="Logo empresa"/>
            <h1>JSTecnology</h1>
          </div>
          <div className="barra-vertical"></div>
          
          <Navbar/>
          
          <div className="barra-vertical"></div>

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
          <Route path='/item/:id' element={<ItemDetail />} />
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
