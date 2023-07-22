/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";
import { CarritoContext } from "../../context/CarritoContext";

const Item = ({ id, artista, album, precio, img, stock }) => {


  const formato_precio = precio.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP'
  });

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarProducto} = useContext(CarritoContext);
 

  const manejadorCantidad = (cantidad) => {
      setAgregarCantidad(cantidad);
      const item = {id, artista, album, precio, formato_precio};
      console.log(item);
      
      agregarProducto(item, cantidad);
  }

  return (
    <div className="cardContainer">
      <img className="img" src={img} alt={artista} />
      <h3 className="artist-name m-0"> {artista} </h3>
      <h4 className="album-name m-0"> {album} </h4>
      <p className="product-price m-0"> {formato_precio} </p>
      <Link className="btn-white" to={`/item/${id}`} > 
      Ver Producto
      </Link> 
      <ItemCount inicial={0} stock={stock} funcionAgregar={manejadorCantidad}/>
    </div>
  );
};

export default Item;
