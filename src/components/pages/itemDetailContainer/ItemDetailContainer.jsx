import { useEffect, useState } from "react";
import { productsMock } from "../../../productsMock";
import { useParams } from "react-router";
const ItemDetailContainer = () => {
  const { id } = useParams(); // ---> {id: 15}
  // const navigate = useNavigate(); // una funcion

  const [product, setProduct] = useState({});

  useEffect(() => {
    const element = productsMock.find((producto) => producto.id === id);
    setProduct(element);
    // setTimeout(() => {
    //   navigate("/");
    // }, 3000);
  }, [id]);

  return (
    <div>
      <h3>{product.title}</h3>
      <h3>{product.price}</h3>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetailContainer;
