import { useState } from 'react'
import './App.css'
import LogoEmpresa from "./assets/images/Logo.svg"
import Navbar from './components/NavBar.jsx'
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const [count, setCount] = useState(0)
  const [mostrar, setMostrar] = useState(false)
  const [quantity, setQuantity] = useState(0)

  return (
    <>
      <header>  
        <div className='empresa'>
        <img className='logo-empresa' src={LogoEmpresa} alt="Logo empresa"/>
        <h1>JSTecnology</h1>
        </div>
        <div className="barra-vertical"></div>
        {mostrar && (<Navbar/>)}
        <button className="button" onClick={() => setMostrar(!mostrar)}>
          {mostrar ? "Ocultar ←" : "Desplegar →"}
        </button>
        <div className="barra-vertical"></div>
        <CartWidget cantidad={quantity}/>
      </header>
      <div>
        <ItemListContainer nombre="Jano"/>
        <h2>Seleccione la cantidad de productos:</h2>
        <h3>{count}</h3>
        <button className="button" onClick={() => setCount(count + 1)}>+
        </button>
        <button className="button" onClick={() => setCount(count - 1)} disabled={count === 0}>-
        </button>
        <button className='button' onClick={() => setQuantity(count)}>Aceptar</button>
      </div>
    </>
  )
}

export default App
