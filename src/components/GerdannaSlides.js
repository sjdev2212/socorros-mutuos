import { Slide } from "react-slideshow-image";
import { useState, useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import "../styles/GerdannaSlides.css";
import instructivo1 from "../images/instructivo1.jpeg";
import instructivo2 from "../images/instructivo2.jpeg";
import instructivo3 from "../images/instructivo3.jpeg";
import instructivo4 from "../images/instructivo4.jpeg";
import instructivo5 from "../images/instructivo5.jpeg";
import instructivo6 from "../images/instructivo6.jpeg";
import instructivo7 from "../images/instructivo7.jpeg";
import instructivo8 from "../images/instructivo8.jpeg";


const GerdannaSlides = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    const divStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundSize: windowWidth > 768 ? "40vw"  : "75vw 60vw",
        backgroundRepeat: "no-repeat",
        height: windowWidth > 768 ? "20vw" : "100vw",
        width:  windowWidth > 768 ?  "50vw" : "82vw",
        margin: "6vw auto",
    
        borderRadius: "10px",
        position: "relative",
        bottom: "4.5vw",

        left : windowWidth > 768 ? "8vw" : "0",
      };
    
      const slideImages = [
        {
          url: instructivo1,
        },
        {
          url: instructivo2,
        },
        {
          url: instructivo3,
        },
        {
          url: instructivo4,
        },
        {
          url: instructivo5,
        },
        {
          url: instructivo6,
        },
        {
          url: instructivo7,
        },
        {
          url: instructivo8,
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
        <main className="gerdanna-cont">
          <div className="gerdanna-h1">
            <h3>
                Gerdanna Salud
            </h3>
            <h1>Descargue la App para acceder a más beneficios</h1>
          </div>
          <div className="slide-gerdanna">
            <Slide
              easing="ease"
              duration={5000}
              transitionDuration={1000}
              infinite={true}
              indicators={true}
              arrows={true}
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
    
    export default GerdannaSlides;
    