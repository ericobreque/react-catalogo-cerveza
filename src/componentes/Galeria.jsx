import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import "../index.css"

import Context from '../Context'
import { useNavigate } from "react-router-dom";
import React, { useContext } from 'react'


const Galeria = () => {
    const{lista, addtoCart} = useContext (Context);
    const Navigate = useNavigate ();
  return (
    <div className="row m-5 align-items-center justify-content-center">
        {lista.map((cerveza) => (
        <Col className="col-12 col-md-6 col-lg-3 m-4"key ={cerveza.id}>
        <Card  style={{ width: '20rem' }}>
            <Card.Img variant="top" src={cerveza.img} />
            <Card.Body>
        <       Card.Title> <h4>Cerveza {cerveza.name}</h4></Card.Title>
                <hr/>
                <Card.Text>
                <b>Ingredientes:</b>
                <ul>
                 {cerveza.ingredients.map((ingredientes, i) =>
                 <li key={i}>
                     🍺 {ingredientes}
                 </li>
                 )}
                </ul>
                </Card.Text>
                <h2 className="text-center text-dark pb-3">
                     $ {cerveza.price.toLocaleString("es-Cl")}
                </h2>
                <div className ="d-flex justify-content-around mb-4">
                <Button 
                variant="primary"
                to={`cerveza/${cerveza.id}`}
                onClick = {() => Navigate(`cerveza/${cerveza.id}`)}
                >Ver mas 👀</Button>
                <Button 
                variant="danger"
                onClick = {() => addtoCart(cerveza)}
                >Añadir 🛒</Button>
                </div>
            </Card.Body>
         </Card>
         </Col>
        )       
        )}
  </div>
  )
}

export default Galeria