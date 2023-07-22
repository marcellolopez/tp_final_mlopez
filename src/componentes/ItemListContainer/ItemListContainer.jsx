import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos, getProductoPorCategoria } from "../../asyncmock";
import { useParams } from "react-router-dom";
import { getDocs, collection, query  , where } from 'firebase/firestore';   
import { db } from "../../services/config.js"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams();
  const getProductos = () => query(collection(db,"inventario"));
  const getProductosPorCategoria = () => query(collection(db,"inventario"), where("categoria_id","==",idCategoria));

  useEffect( () => {

      const misProductos = idCategoria ? getProductosPorCategoria() : getProductos();

      getDocs(misProductos)
          .then(res => {
              setProductos(res.docs.map((doc) => ({id: doc.id, ...doc.data()})))
          })
          .catch((error) => console.log("el error es", error))
      
  },[idCategoria])
  return (
    <div className="ItemListContainer">
      <ItemList productos={productos} />
    </div>
  )
}
export default ItemListContainer;
