import React from "react";
import { Slide } from "react-slideshow-image";
import { useState, useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import "../styles/Prestadores.css";
import alergia from "../images/alergia.png";
import analisis from "../images/analisis-clinicos.png";
import api from "../images/API2.png";
import cardio from "../images/cardio.png";
import cardioElectro from "../images/cardiología-y-electro.png";
import plasctica from "../images/cirugia-plastica.png";
import clinica1 from "../images/clinica-medica-1.png";
import clinica2 from "../images/clinica-medica-2.png";
import clinica3 from "../images/clinica-medica-3.png";
import ecos from "../images/ecos.png";
import endocrinologia from "../images/endo.png";
import flebologia from "../images/flebo.png";
import geriatria from "../images/geriatria.png";
import ginecologia from "../images/ginecologia.png";
import neuro from "../images/neuro.png";
import odo1 from "../images/odo1.png";
import odo2 from "../images/odo2.png";
import odo3 from "../images/odo3.png";
import odo4 from "../images/odo4.png";
import odo5 from "../images/odo5.png";
import oftal from "../images/oftal.png";
import podo from "../images/podo.png";
import psico from "../images/psico.png";
import psico2 from "../images/psico2.png";
import trauma from "../images/trauma.png";
import uro from "../images/uro.png";

const Prestadores = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: windowWidth > 768 ? "30vw" : "60vw 60vw",
    backgroundRepeat: "no-repeat",
    height: windowWidth > 768 ? "34vw" : "60vw",
    width:  windowWidth > 7668 ?  "50%" :"100%",
    margin: "6vw auto",
    border: windowWidth >  768 ?  "2px solid grey" : "none",
    borderRadius: "10px",
    position: "relative",
    bottom: "4.5vw",
    left : windowWidth > 768 ? "0" : "18vw",
  };

  const slideImages = [
    {
      url: alergia,
    },
    {
      url: analisis,
    },
    {
      url: api,
    },
    {
      url: cardio,
    },
    {
      url: cardioElectro,
    },
    {
      url: plasctica,
    },
    {
      url: clinica1,
    },
    {
      url: clinica2,
    },
    {
      url: clinica3,
    },
    {
      url: ecos,
    },
    {
      url: endocrinologia,
    },
    {
      url: flebologia,
    },
    {
      url: geriatria,
    },
    {
      url: ginecologia,
    },
    {
      url: neuro,
    },
    {
      url: odo1,
    },
    {
      url: odo2,
    },
    {
      url: odo3,
    },
    {
      url: odo4,
    },
    {
      url: odo5,
    },
    {
      url: oftal,
    },
    {
      url: podo,
    },
    {
      url: psico,
    },
    {
      url: psico2,
    },
    {
      url: trauma,
    },
    {
      url: uro,
    },
  ];

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <main className="prestadores-cont">
      <div className="prestadores-h1">
        <h1>Prestadores Médicos Periféricos</h1>
      </div>
      <div className="slide-prestadores">
        <Slide
          easing="ease"
          duration={2000}
          transitionDuration={1000}
          infinite={true}
          indicators={false}
          arrows={false}
          pauseOnHover={true}
        >
          {slideImages.map((slideImage, index) => (
            <div key={index}>
          
              <div
                className="slide-mob"
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>
    </main>
  );
};

export default Prestadores;
