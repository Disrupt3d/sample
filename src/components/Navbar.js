import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <div className="header">
      <div className="navbar-layout">
        <img className="logo" src={Logo} alt="Ag-créations" />

        <div className="menuitems">
          <Link className="link" to="/accueil">
            Accueil
          </Link>
          <Link className="link" to="/produit">
            Produits
          </Link>
          <Link className="link" to="/profil">
            Profils
          </Link>
        </div>
      </div>
    </div>
  );
};
