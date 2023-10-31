import React, { Fragment } from 'react';
import './NavBar.css'

function Navbar() {
 return (
    <>
      <nav className='navbar'>
        <ul>
          <li><button className="navbar-button" href="#">Celulares</button></li>
          <li><button className="navbar-button" href="#">Televisores</button></li>
          <li><button className="navbar-button" href="#">Consolas</button></li>
          <li><button className="navbar-button" href="#">Notebooks</button></li>
        </ul>
      </nav>
      
    </>
    );
  }
  

export default Navbar;
