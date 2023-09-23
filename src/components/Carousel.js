import React, { useState, useEffect } from "react";
/* import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"; */
import doctor from '../images/medico.jpg'
import sepel from '../images/sepelios.jpg'
import call from '../images/call.jpg'
import logo from '../images/logo.png'

import "../styles/Carousel.css";

 const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const [div , setDiv] = useState(0);

/*   const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const nextDiv = () => {
    setDiv(div === divs.length - 1 ? 0 : div + 1);

  }
 */
  const data = [
    {
        src: doctor,
        alt: "doctor",


    },
    {
      src: sepel,
      alt: "doctor2",
    

    },
    {
      src: call,
      alt: "call",
       
    },
  ];

  const divs = [
    {
        text: "+ Beneficios",
       className: "div1",
         id: "div1",
         h1: "Plan de Salud",
         h1Classame: "h1",
         p: "Atención en consultorios periféricos y Prestaciones Médicas Gerdana Salud ",
         pClassame: "p",
         button : "Conocer más",
            buttonClassame: "button",
         logo : logo,
    },
    {
      text: "text 2 ",
      className: "div2",
      id: "div2",
      logo : logo,
    },
    {
      text: "textssssssssssssss",
      className: "div3",
      id: "div3",
      logo : logo,
    }]


useEffect(() => {
    const interval = setInterval(() => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
        setDiv(div === data.length - 1 ? 0 : div + 1);
    }, 6000);
    return () => clearInterval(interval);
}
// eslint-disable-next-line
, [slide]);



  return (
    <div className="carousel">


      {data.map((item, idx) => {
        return (
         
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
            
        );
      })}
        <span >
        {divs.map((item, idx) => {  
        return (
            <div
            key={idx}
            id={item.id}>

<span className={div === idx ? item.className : "div-hidden"}>

            {item.text}
</span>
<span className={div === idx ? item.h1Classame : "div-hidden"}>
            {item.h1}
</span>
<p className={div === idx ? item.pClassame : "div-hidden"}>{item.p}</p>
<button className={div === idx ? item.buttonClassame : "div-hidden"}>{item.button}</button>
<img className={div === idx ? "logo" : "div-hidden"} src={item.logo} alt="logo" />
          

            </div>
        );
        }
        )}



    </span>

    </div>

   
  );
};

export default Carousel;