import React from 'react'
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../Estilos/Inicio.css";

function Inicio() {
    return (
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1> Mario's Pizzeria </h1>
          <p> PIZZA PARA CUALQUIER GUSTO</p>
          <Link to="/menu">
            <button> HAZ TU ORDEN </button>
          </Link>
        </div>
      </div>
    );
  }
  
  export default Inicio;