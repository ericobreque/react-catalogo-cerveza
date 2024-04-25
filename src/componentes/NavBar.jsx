import React, { useContext } from 'react'
import Context from '../Context'
import "../index.css"

import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

export default function NavBar() {
  const{agregar} = useContext(Context);
  const total = agregar.reduce(
    (valorAnterior, {count, price}) => valorAnterior + price*count, 0);

  return (
    
    <Navbar className="d-flex justify-content-between px-4 bg-navbar" variant="ligth">
     
        <Navbar.Brand>
            <Link to="/" className="logo-nombre mx-1 mb-0">
               <h4 className="mb-0">🍻 Vikingos Beer </h4></Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Link to="/Carrito" className="logo-nombre mx-1 mb-0"> <h4 className="mb-0">🛒${total.toLocaleString("es-Cl")} </h4></Link>
        </Navbar.Collapse>
        
    </Navbar>

  )
}
