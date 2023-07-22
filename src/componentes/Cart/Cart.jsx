import {useContext} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import "./Cart.css";

const Cart = () => {
    const { carrito, total, cantidadTotal, vaciarCarrito, eliminarProducto } = useContext(CarritoContext);
    if ( cantidadTotal == 0 ) {
        return (    
            <>
                <center>
                    <h1> Tu carrito está vacío </h1>
                    <Link to="/"> Ver productos</Link>
                </center>
            </>
        )
    } else {
        const formato_total = total.toLocaleString('es-CL', {
            style: 'currency',
            currency: 'CLP'
          });
        return (
            <center>
            <div className="contenedor">
                {carrito.map(prod => (
                    <div className="CartCardDetail"  style={{ width: "20rem" }} key={prod.item.id}>
                        <div id={prod.item.id}>
                            <h3>Artista: {prod.item.artista}</h3>
                            <h3>Album: {prod.item.album}</h3>
                            <h3>Precio: {prod.item.formato_precio}</h3>
                            <h3>Cantidad: {prod.cantidad} </h3>
                            <button className='button' onClick={() => eliminarProducto(prod.item.id)}>Eliminar</button>
                            <hr />
                        </div>
                        
                    </div>
                    
                ))}
                <div className="CartDetail">
                    <div>
                        <Link to="/"> Ver más productos</Link>
                    </div>
                    <div>
                        <button className='button' onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                    </div>
                    <div>
                        <h3> Total a pagar: {formato_total}</h3>
                    </div>
                    <div>
                        <Link to="/checkout"> Finalizar compra</Link>
                    </div>
                </div>
            </div>
            </center>
        )
    }
}

export default Cart
