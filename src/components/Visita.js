import React from 'react'
import YouTube from 'react-youtube';
import { useState, useEffect } from "react";
import '../styles/Visita.css'

const Visita = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const opts = {
        height: windowWidth < 768 ?  '330vw'  : '340', 
        width: windowWidth < 768 ?  '330vw'  : '640',
        playerVars: {
          autoplay: 0,
        },
        }
        useEffect(() => {
            const handleWindowResize = () => {
              setWindowWidth(window.innerWidth);
            };
            window.addEventListener("resize", handleWindowResize);
            return () => window.removeEventListener("resize", handleWindowResize);
          }, []);
  return (

    <main className="visita-cont">
        <h1>
            Visita de un Curso de la UADE a nuestros panteones
        </h1>
        <div className="youtube">
        <YouTube  opts={opts}  videoId="XqapDO8ZQ3s"  />
        </div>

    </main>
  )
}

export default Visita