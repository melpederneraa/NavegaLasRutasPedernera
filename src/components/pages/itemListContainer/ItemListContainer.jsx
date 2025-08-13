import { useEffect, useState } from "react";
import { productsMock } from "../../../productsMock";
import ProductCard from "../../common/productCard/ProductCard";
import { useParams } from "react-router";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const productosFiltrados = productsMock.filter(
      (producto) => producto.category === name
    );
    const getProducts = new Promise((resolve) => {
      resolve(name ? productosFiltrados : productsMock);
    });
    getProducts.then((res) => setItems(res));
  }, [name]);

  return (
    <div className="items-container">
      <h1 className="items-title">Mis productos</h1>
      <div className="items-grid">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
