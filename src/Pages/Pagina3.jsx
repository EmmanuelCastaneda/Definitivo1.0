import React from "react";
import "./Pagescss/Pagina3.css";
import CardComponent from "../Components/Card";
import { useEffect, useState } from "react";
import Video3 from "../Components/video3";

const Pagina3 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <Video3></Video3>
      <div className="Ropa">
        <div className="Canasta">
          {products.map((product) => (
            <CardComponent
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
            ></CardComponent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagina3;
