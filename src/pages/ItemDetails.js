import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ItemDetails = () => {
  const itemId = useParams();
  const parsedId = parseInt(itemId.id);

  const [seeSpecificItem, setSeeSpecificItem] = useState();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${parsedId}`)
      .then((response) => setSeeSpecificItem(response.data));
    console.log(seeSpecificItem);
  }, []);

  return <div>{seeSpecificItem && seeSpecificItem.title}</div>;
};
