import './CartWidget.css'
import ItemCounter from '../ItemCounter/ItemCounter'
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const imgCarrito = "/cart.png";
    return (
        <div>
            <Link to="/cart">
                <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
                <strong> <ItemCounter/> </strong>
            </Link>
        </div>
    )
}

export default CartWidget