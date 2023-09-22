import React, { useState } from 'react';
import '../styles/DropDown2.css'


const Dropdown2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(true);
  };
  const toggleClosed = () => {
    setIsOpen(false);
  }

  const dropClosed ={
    display: "none"
 

  }
  const dropOpen ={
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    backgroundColor: "whitesmoke",
    border: "3px solid rgba(0,0,0,.15)",
    MaxWidth: "4vw",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: "1",
    marginTop: "10px",
    listStyle: "none",  
    height: "25vw",
 

  }

  return (
    <div >
      <button className="drop-btn" onMouseOver={toggleOpen}>
        De Interes para el Socio
      </button>


      <div onMouseLeave={toggleClosed} style={isOpen ? dropOpen : dropClosed}>
        <ul className="drop-list">
          <li className="drop-item">FUMIGACION DE LOS PANTEONES A Y B</li>
          <li className="drop-item">VISITA DE UN CURSO DE LA UADE</li>
          <li className="drop-item">PRESTADORES MEDICOS PERIFERICOS  AÑO- 2021</li>
          <li className="drop-item">Vacuna Antigripal</li>
          <li className="drop-item">NUEVAS MEDIDAS RELACIONADAS CON LA PANDEMIA</li>
          <li className="drop-item">NUEVA EMPRESA DE SEPELIO</li>
      
        </ul>
    
      
    </div>
    </div>
  );
};

export default Dropdown2;
