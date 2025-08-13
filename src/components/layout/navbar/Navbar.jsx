import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Link } from "react-router";
import logo from "../../../assets/images/logo.png";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Logo Quinino" />
      </Link>

      <ul className="navbar-links">
        <li><Link to="/category/sanguche">Sanguches</Link></li>
        <li><Link to="/category/pizza">Pizzas</Link></li>
        <li><Link to="/category/empanada">Empanadas</Link></li>
        <li><Link to="/category/postre">Postres</Link></li>
        <li><Link to="/category/bebida">Bebidas</Link></li>
      </ul>

      <CartWidget />
    </div>
  );
};
