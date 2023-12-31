import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";  
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import gerdana from "../images/doc.jpg";
import chacaedit from "../images/panteonesedit.jpg";
import marpla from "../images/marpla.jpg";
import gerdanna from "../images/gerdanna.jpeg";
import "../styles/Carousel.css";

const Carousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const spanStyle = {
    width: windowWidth > 768 ? "37vw" : "88vw",
    height: windowWidth > 768 ? "29.5vw" : "75vw",
    border: "2px solid black",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  
    borderRadius: "15px",
    boxShadow: "0 0 10px black",
    position: "relative",
    top: windowWidth > 768 ? "2vw" : "12vw",
    right: windowWidth > 768 ? "19vw" : "0",
  };

  const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: windowWidth > 768 ? "cover" : "100vw 110vw",
    backgroundRepeat: "no-repeat",
    height: windowWidth > 768 ? "36vw" : "110vw",
    width: "90%",
    margin: "6vw auto",
    border: "2px solid black",
    borderRadius: "10px",
  };

  const paragraphStyle = {
    color: "green",
    fontSize: windowWidth > 768 ? "1.8vw" : "5.5vw",
    fontWeight: "bold",
    textAlign: "center",
    position: "relative",
    top: windowWidth > 768 ? "2vw" : "6vw",
    zIndex: "1",
  };

  const paragraphStyle2 = {
    color: "green",
    fontSize: windowWidth > 768 ? "2.2vw" : "5.5vw",
    fontWeight: "bold",
    textAlign: "center",
    position: "relative",
    top: windowWidth > 768 ? "10vw" : "6vw",
    zIndex: "1",
  };
  const gerdanaH1 = "Plan de Salud ";
  const panteones = "Panteones Propios";

  const slideImages = [
    {
      url: gerdana,
      text: "Atención en consultorios periféricos",
      paragraph: paragraphStyle,
      h1: gerdanaH1,
      h1styled: {
        color: "green",
        fontSize: windowWidth > 768 ? "2.6vw" : "6.5vw",
        fontWeight: "bold",
        textAlign: "center",
        marignTop: "3vw",
        position: "relative",
        top: "2vw",
        zIndex: "1",
      },
      btn: "Ver mas",
      redirect: "/nuevo-plan",
      linkStyle: "link-style",
    },
    {
      url: gerdanna,
      text: "Convenio con Gerdanna Salud ",
      paragraph: paragraphStyle2,
      btn: "Ver mas",
      redirect: "http://www.gerdanna.com.ar/",
      linkStyle: "link-style",
    },
    {
      url: chacaedit,
      h1: panteones,
      h1styled: {
        color: "green",
        fontSize: windowWidth > 768 ? "2.6vw" : "6.5vw",
        fontWeight: "bold",
        textAlign: "center",
        marignTop: "3vw",
        position: "relative",
        top: "2vw",
      },
      text: "Nuestra Asociación cuenta con tres Panteones habilitados en el Cementerio de la Chacarita",
      paragraph: paragraphStyle,
      btn: "Ver mas",
      redirect: "/panteones-propios",
      linkStyle: "link-style",

    },
    {
      url: marpla,
      h1: "Convenios en Turismo",
      h1styled: {
        color: "green",
        fontSize: windowWidth > 768 ? "2.6vw" : "6.5vw",
        fontWeight: "bold",
        textAlign: "center",
        marignTop: "3vw",
        position: "relative",
        top: "2vw",
      },
      text: "Nuestra Asociación cuenta con convenios en Turismo a traves de la empresa TURISMO MIL",
      paragraph: paragraphStyle,
      btn: "Ver mas",
      linkStyle: "link-style",
      redirect: "/turismo",
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
    <main className="main-carousel">
      <div className="slide-container-desk">
        <Slide 
          easing="ease"
          duration={3000}
          transitionDuration={1000}
          infinite={true}
          indicators={true}
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
              >
                <div style={spanStyle}>
                  <h1 style={slideImage.h1styled}>{slideImage.h1}</h1>

                  <p style={slideImage.paragraph}>{slideImage.text}</p>
                </div>
                <Link  className={slideImage.linkStyle} to={slideImage.redirect}>
                <button className="btn-vermas">
                  {slideImage.btn}</button>
                  </Link>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </main>
  );
};

export default Carousel;
