/* eslint-disable react/prop-types */
import "./ItemDetail.css"


const ItemDetail = ( {id, artista, album, precio, img} ) => {
  const formato_precio = precio ? precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }) : '';
  return (
    <div className="itemDetailCart">
      <div className="imgDetailCart">
        <img className="imgDetail" src={img} alt= {artista} />
      </div>
      <div className="itemDetail">
        <h3 className="artist-name m-0"> {artista} </h3>
        <h4 className="album-name m-0"> {album} </h4>
        <p className="product-price m-0"> {formato_precio} </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
    </div>
  )
}

export default ItemDetail