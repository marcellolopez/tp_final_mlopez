import {useContext} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { carrito, total, cantidadTotal, vaciarCarrito, eliminarProducto } = useContext(CarritoContext);
    if ( cantidadTotal == 0 ) {
        return (    
            <>
                <h1> Tu carrito está vacío </h1>
                <Link to="/"> Ver productos</Link>
            </>
        )
    } else {
        return (
            <div>
            {carrito.map(prod => (
                <div className="col-12" style={{ width: "14rem" }} key={prod.item.id}>
                    <div id={prod.item.id}>
                        <h3>Nombre: {prod.item.nombre}</h3>
                        <h3>Cantidad: {prod.cantidad} </h3>
                        <h3 onClick={() => eliminarProducto(prod.item.id)}>Eliminar</h3>
                    </div>
                </div>

            ))}
            <Link to="/"> Ver más productos</Link>
            <br></br>
            <h3 onClick={() => vaciarCarrito()}>Vaciar Carrito</h3>
            <h3> Total a pagar: ${total}</h3>
            <Link to="/checkout"> Finalizar compra</Link>
        </div>
        )
    }
}

export default Cart
