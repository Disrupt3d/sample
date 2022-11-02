import { React, useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "../components/ProductCard";
import "../styles/Produits.css";

export const Produits = () => {
  const [allproducts, setAllproducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setAllproducts(response.data));
  }, []);

  return (
    <div>
      <h1 className="pagetitle">Produits</h1>
      {console.log(allproducts)}
      <div className="productwrapper">
        {allproducts &&
          allproducts.map((el, index) => <ProductCard key={index} el={el} />)}
      </div>
    </div>
  );
};
