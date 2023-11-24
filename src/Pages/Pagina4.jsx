import React from 'react';
import "./Pagescss/Pagina4.css"
import CardComponent from "../Components/Card";
import { useEffect, useState } from "react";
import Video2 from "../Components/video2"

const Pagina4 = () => {
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
      <Video2></Video2>
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
}
  
export default Pagina4;
