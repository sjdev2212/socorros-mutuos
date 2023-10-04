import React from "react";
import { useState } from "react";
import logo from "../images/logo.png";
import Dropdowns from "./Dropdown";
import Dropdown from "./DropDown2";
import SitiosDeInteres from "./SitiosDeInteres";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import menu from "../images/menu.png";
import close from "../images/close.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(true);
  };
  const toggleClosed = () => {
    setIsOpen(false);
  };

  return (
    <main className="navbar-container">
      <section className="navbar-main">
        <div className="navbar-logo">
          <Link to="/"><img className="logo" src={logo} alt="logo" width={75} height={75} /></Link>
          <p className="brand">
            <Link to="/"><strong>
              ASOCIACION SOCORROS MUTUOS</strong>
            </Link>
          </p>
        </div>
        <section className="navbar-mobile">
          <div className="navbar-mobile-btns">
            <button
              className="hamb"
              onClick={isOpen ? toggleClosed : toggleOpen}
            >
              <img src={isOpen ? close : menu} alt="BTNS" />
            </button>
          </div>
          <ul className={isOpen ? "ul-list-mobile" : " ul-closed"}>
            <li className="item-list-mobile">
              <Link onClick={toggleClosed} className="mobile-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="item-list-mobile">
              <Link onClick={toggleClosed} className="mobile-link" to="/inst">
                Institucional
              </Link>
            </li>
            <li className="item-list-mobile">
              <Link
                className="mobile-link"
                to="/servicios-mob"
                onClick={toggleClosed}
              >
                Servicios
              </Link>
            </li>
            <li className="item-list-mobile">
              <Link
                onClick={toggleClosed}
                className="mobile-link"
                to="/contacto"
              >
                Contactarse
              </Link>
            </li>
            <li className="item-list-mobile">
              <Link onClick={toggleClosed} to="/preguntas" className="mobile-link">
                Preguntas
              </Link>
            </li>
            <li className="item-list-mobile">
              <Link onClick={toggleClosed} className="mobile-link">
                Novedades
              </Link>
            </li>

            <li className="item-list-mobile">
              <Link onClick={toggleClosed} className="mobile-link">
                Sitios de Interes
              </Link>
            </li>
            <li className="item-list-mobile">
              <Link  onClick={toggleClosed} className="mobile-link" to="/asociarse">
                Como Asociarse
              </Link>
            </li>
            <li className="item-list-mobile">
              <Link onClick={toggleClosed} className="mobile-link">
                De interes para el Socio
              </Link>
            </li>
          </ul>
        </section>

        <ul className="navbar-links">
          <li>
            <Link className="item-list" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/inst" className="item-list">
              Institucional
            </Link>
          </li>
          <li className="drop">
            <Dropdowns />
          </li>
          <li>
            <Link className="item-list" to="/contacto">
              Contactarse
            </Link>
          </li>
          <li>
            <Link className="item-list" to="/preguntas">Preguntas</Link>
          </li>
          <li className="item-list">Novedades</li>

          <li className="drop">
            <SitiosDeInteres />
          </li>
          <li>
            <Link to="/asociarse" className="item-list" >Como Asociarse</Link>
          </li>

          <li>
            <Dropdown />
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Navbar;
