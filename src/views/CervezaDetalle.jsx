import {useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom"
import Context from '../Context'
import Button from 'react-bootstrap/Button';

export default function CervezaDetalle() {

  const [cervezaDetail, setCervezadetail] = useState ({});
  const {lista, addtoCart} = useContext(Context);
  const {id} = useParams();

  const obtenerDatos = () => { 
    const datosCerveza = lista.find((cerveza) => cerveza.id === id);
    setCervezadetail (datosCerveza);
  };

  useEffect(() => {
    obtenerDatos();
  }, [lista]);

  return (
    <>
    <div className ="container mt-5">
      <div className ="card-mb-3 estilos">
        <div className ="row g-0">
        <div className ="col-md-6">
          <img 
          src ={cervezaDetail.img}
          className= "img-fluid estilos rounded-start"
          alt = {cervezaDetail.name}
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title text-capitalize">{cervezaDetail.name}</h5>
            <hr/>
             <p className="card-text">{cervezaDetail.desc}</p>
             <b>Ingredientes:</b>
                <ul>
                 {cervezaDetail.ingredients?.map((ingredient, i) =>(
                   <li key={i}>
                     🍺 {ingredient}
                   </li>
                 ))}
                </ul>
           
           <div className="d-flex justify-content-around">
                    <h4>Precio: ${cervezaDetail.price}</h4> 
            </div>
            <Button 
                variant="danger"
                onClick = {() => addtoCart(cervezaDetail)}
                >Añadir 🛒</Button>
          </div>
        </div>
        </div>
        
      </div>
      
    </div>
    </>
  )
}
