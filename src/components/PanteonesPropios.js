import React from 'react'
import {useState , useEffect } from 'react'
import { Slide } from "react-slideshow-image";
import pilar from '../images/pilar.jpeg'
import lujan from '../images/lujan.jpeg'
import otra from '../images/laotra.jpeg'
import "react-slideshow-image/dist/styles.css";
import '../styles/PanteonesPropios.css'

const PanteonesPropios = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const divStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        justifyItems: "flex-start",
        backgroundSize: windowWidth > 768 ? "50vw 32vw" : "50vw 50vw",
        backgroundRepeat: "no-repeat",
        height: windowWidth > 768 ? "24vw" : "50vw",
        width: "50vw",
        border: "2px solid black",
        borderRadius: "10px",
        boxShadow: "0 0 10px 0 black",
        margin: "0 0 0 0",
    
      };
    
 
  
    
      const slideImages = [
        {
          url: pilar,
          
        },
        {
          url: lujan,
        
        },
        {
          url: otra,
       
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
   <main className="propios-container">
    <div className="propios-h1">

        <h1>Panteones Propios</h1>

    </div>
    <section className="propios-section">
        <div className="propios-text">
            <h3>
            Cementerio De La Chacarita
            </h3>
            <p>Nuestra Asociación posee tres Panteones habilitados en el Cementerio de la Chacarita. Son los identificados con las letras «A» (Nuestra Señora del Pilar) , «B» (Nuestra Señora de Luján) que cuenta con una hermosa Capilla y que en consideración a sus características histórico testimoniales, estético arquitectónicas, así como tambien paisajístico-ambientales, el Gobierno de la Ciudad de Buenos Aires viabilizó su protección legal y, por último el «C» (Nuestra Señora del Carmen).</p>
            <p>El ingreso a los mismos es un derecho fundamental de nuestros asociados.</p>
             </div>
    <div className="slide-container-propios">
        
     
        <Slide 
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
           
                
              </div>
            </div>
          ))}
        </Slide>

      </div>

    </section>
   

    
   </main>
  )
}

export default PanteonesPropios