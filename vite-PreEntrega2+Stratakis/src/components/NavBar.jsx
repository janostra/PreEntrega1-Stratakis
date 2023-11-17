import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

function Navbar() {
 return (
    <>
      <nav className='navbar'>
        <ul>
          <NavLink className="navbar-button" to="/">Todos</NavLink>
          <NavLink className="navbar-button" to="/category/celulares">Celulares</NavLink>
          <NavLink className="navbar-button" to="/category/televisores">Televisores</NavLink>
          <NavLink className="navbar-button" to="/category/consolas">Consolas</NavLink>
          <NavLink className="navbar-button" to="/category/notebooks">Notebooks</NavLink>
        </ul>
      </nav>
      
    </>
    );
  }
  

export default Navbar;
