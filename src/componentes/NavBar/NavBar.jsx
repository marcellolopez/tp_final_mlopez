import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const imgLogo = "/logo.png";
const NavBar = () => {
  return (
    <header>
      <img className='logo' src={imgLogo} alt="Carrito" />
      <nav>
        <ul>
        <ul>
          <li>
            <NavLink className="menu" to={"/"}>Inicio</NavLink>
          </li>
          <li>
            <NavLink className="menu" to={"/categoria/1"}>Cd's</NavLink>
          </li>
          <li>
            <NavLink className="menu" to={"/categoria/2"}>Vinilos</NavLink>
          </li>
        </ul>
        </ul>        
      </nav>
      <CartWidget/>
    </header>
  )
}
export default NavBar;
