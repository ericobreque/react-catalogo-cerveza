import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from "./componentes/NavBar"
import Home from "./views/Home"
import Carrito from "./views/Carrito"
import CervezaDetalle from "./views/CervezaDetalle"

import Context from "./Context"

const App = () => {
  const [lista, setLista] = useState([]);
  const [agregar, setAgregar] = useState ([]);

  const getCerveza = async () => {
    const res = await fetch ('./cerveza.json')
    const data = await res.json()
    setLista(data);
    console.log(data)
    
  };
  useEffect(() => {
    getCerveza();
  }, []);

  //funciones para el carro

  const addtoCart = ({id, price, name, img}) => {
    const productoEncontradoIndex = agregar.findIndex((p) => p.id === id);
    const producto = {id, price, name, img, count: 1};

    if (productoEncontradoIndex >= 0){
      agregar[productoEncontradoIndex].count++;
      setAgregar([...agregar]);
    } else{
      setAgregar ([...agregar, producto]);
    }
  };

  const incrementar = (i) => {
    agregar[i].count++;
    setAgregar([...agregar]);
  };

  const decrement = (i) => {
    const {count} = agregar[i];
    if (count === 1) {
      agregar.splice(i, 1);
    } else {
      agregar[i].count--;
    }
    setAgregar([...agregar]);
  };
  

  return (
    <div className ="App">
      <Context.Provider value={{lista, setLista, agregar, setAgregar, incrementar, decrement, addtoCart }}>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/cerveza/:id" element={<CervezaDetalle />} />
        </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App