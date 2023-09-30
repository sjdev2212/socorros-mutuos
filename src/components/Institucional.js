import {useState , useEffect } from 'react'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import aerea from '../images/aerea.jpg'
import ejercito from '../images/ejercito.jpg'
import marina from '../images/marina.jpg'
import tanques from '../images/tanques.jpg'
import '../styles/Institucional.css'

const Institucional = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    
      const divStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundSize: windowWidth > 768 ? "100vw 32vw" : "100vw 110vw",
        backgroundRepeat: "no-repeat",
        height: windowWidth > 768 ? "31vw" : "110vw",
        width: "100vw",
        margin: "0 auto",
        border: "2px solid black",
        borderRadius: "10px",
      };
    
 
  
    
      const slideImages = [
        {
          url: ejercito,
          
        },
        {
          url: aerea,
        
        },
        {
          url: marina,
       
        },
        {
            url: tanques,
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
    <main className="inst-cont" >
            
      <div className="slide-container-desk">
        <Slide>
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
      <section className="inst-section">
< div className="autoridades">
    <div className='titulo' >
   <h2>
         Autoridades
   </h2>
   </div>
   <div className="presidente">
    <h3>Presidente</h3>
    <p>CR (R) José Luis Bo</p>
   </div>
   <div className="sec-general">
    <h3>Secretario General</h3>
    <p>CR (R) Sergio Rubén  Chiachio</p>
   </div>
   <div className="director-aef">
    <h3>Director AEF</h3>
    <p>TC Juan Jose Andrés Larroulet</p>
    <h3>
        Vocales Titulares
    </h3>
    <p>CR (R) Augusto Javier Cayo</p>
    <p>CN (R) Jorge Rodríguez</p>
    <p>CR (R) Juan Carlos Brignardello</p>
   </div>
   <div className="vocales-sup">
    <h3>Vocales Suplentes</h3>
    <p>CR Med (R) Miguel Rivero</p>
    <p>CN (R) Adolfo Ernesto Rinaldi</p>
    <p>CR (R) Daniel Efrain Tello</p>
   </div>
   <div className="fiscalizadora">
    <h3>Junta Fiscalizadora</h3>
    <h5>Miembros Titulares</h5>
    <p>CR (R) Gastón Guillermo Irigoyen</p>
    <p>TC (R) Alberto José Morales</p>
    <p>VC  Sergio José Ignes</p>
   </div>
   <div className="suplentes">
    <h3 >
        Miembros Suplentes
    </h3>
    <p>CR (R) Juan Antonio Grande</p>
    <p>CR (R) Claudio Antonio Testa</p>
   </div>





</div>
<div>
    <h2>
        Historia
    </h2>
</div>

            </section>
 
      
       </main>
  )
}

export default Institucional