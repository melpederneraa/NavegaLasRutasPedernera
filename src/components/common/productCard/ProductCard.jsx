import { Link } from "react-router";
import "./productCard.css";

const ProductCard = ({ product }) => {
  const { title, description, price, id } = product;
  return (
    <article className="card">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">${price}</p>
        <p className="card-desc">{description}</p>
      </div>
      <div className="card-actions">
        <Link to={`/detalle/${id}`} className="btn btn-outline">
          Ir al detalle
        </Link>
        <button className="btn">Agregar al carrito</button>
      </div>
    </article>
  );
};

export default ProductCard;
