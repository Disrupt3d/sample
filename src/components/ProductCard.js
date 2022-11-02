import { React } from "react";
import { Link, useParams } from "react-router-dom";

import "../styles/Card.css";
import { FaCartPlus, FaStar } from "react-icons/fa";

export const ProductCard = ({ el }) => {
  const HandleItemDescription = () => {
    console.log(el.id);
  };

  return (
    <div className="card">
      <div className="category">{el.category}</div>
      <div className="card-title">{el.title}</div>
      <img src={el.image} alt={el.title} />{" "}
      <Link to={`/itemdescription/${el.id}`}>description</Link>
      <div className="item-price">{el.price}€</div>
      <div className="rating">
        {el.rating.rate}/ 5{" "}
        <span className="advicecount">sur {el.rating.count} Avis</span>
      </div>
      <div className="ratingwrapper">
        {el.rating && el.rating.rate > 4 && el.rating.rate < 4.5 ? (
          <>
            <FaStar className="filledrankstar" />
            <FaStar className="filledrankstar" />
            <FaStar className="filledrankstar" />
            <FaStar className="filledrankstar" />
            <FaStar className="rankstar" />
          </>
        ) : (
          ""
        )}
        {el.rating && el.rating.rate >= 4.5 && el.rating.rate < 5 ? (
          <>
            <FaStar className="filledrankstar" />
            <FaStar className="filledrankstar" />
            <FaStar className="filledrankstar" />
            <FaStar className="filledrankstar" />
            <FaStar className="filledrankstar" />
          </>
        ) : (
          ""
        )}
        {el.rating && el.rating.rate >= 3 && el.rating.rate < 4 ? (
          <>
            <FaStar className="filledrankstar" />
            <FaStar className="filledrankstar" />
            <FaStar className="filledrankstar" />
            <FaStar className="rankstar" />
            <FaStar className="rankstar" />
          </>
        ) : (
          ""
        )}
        {el.rating && el.rating.rate > 2 && el.rating.rate < 3 ? (
          <>
            <FaStar className="filledrankstar" />
            <FaStar className="filledrankstar" />
            <FaStar className="rankstar" />
            <FaStar className="rankstar" />
            <FaStar className="rankstar" />
          </>
        ) : (
          ""
        )}
        {el.rating && el.rating.rate < 2 && el.rating.rate > 1 ? (
          <>
            <FaStar className="filledrankstar" />
            <FaStar className="rankstar" />
            <FaStar className="rankstar" />
            <FaStar className="rankstar" />
            <FaStar className="rankstar" />
          </>
        ) : (
          ""
        )}
      </div>
      <div className="addtocart">
        <button type="button">
          <FaCartPlus className="cartimage" />
        </button>
      </div>
    </div>
  );
};
