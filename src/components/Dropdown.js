// src/components/Dropdown.js
import React, { useState } from 'react';
import '../styles/Dropdown.css'


const Dropdown = () => {
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
        Servicios
      </button>


      <div onMouseLeave={toggleClosed} style={isOpen ? dropOpen : dropClosed}>
        <ul className="drop-list">
          <li className="drop-item">Servicio de urgencias</li>
          <li className="drop-item">Plan de Salud Medicos Perifericos</li>
          <li className="drop-item">Convenio "GERDANA SALUD"</li>
          <li className="drop-item">Servicios de Sepelios</li>
          <li className="drop-item">IMPORTANTE: NUEVOS SERVICIOS DE SALUD RELACIONADOS CON COVID 19</li>
          <li className="drop-item">Panteones Propios</li>
          <li className="drop-item">Subsidios</li>
          <li className="drop-item">Convenios</li>
        </ul>
    
      
    </div>
    </div>
  );
};

export default Dropdown;
