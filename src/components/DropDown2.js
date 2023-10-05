import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/DropDown2.css'


const Dropdown2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(true);
  };
  const toggleClosed = () => {
    setIsOpen(false);
  }


  const dropOpen = "drop-open-2"
  const dropClosed = "drop-closed"
  return (
    <div >
      <button style={{
        marginRight: "2vw",
      }} className="drop-btn" onMouseOver={toggleOpen}>
        De Interes para el Socio
      </button>


      <div >
        <ul onMouseLeave={toggleClosed} className={isOpen ? dropOpen : dropClosed}>
          <li className="drop-item" >
            <Link className="drop-link" to="/formas-de-pago">
            
            Formas de  pago
            </Link>
            
            </li>
          <li className="drop-item">
            <Link className="drop-link" to="/constancia-de-pago">
            Constancia de pago
            </Link>
            </li>
          <li className="drop-item">
            <Link className="drop-link" to="/fumigaciones">
            FUMIGACION DE LOS PANTEONES A Y B
            </Link>
            </li>
          <li className="drop-item">VISITA DE UN CURSO DE LA UADE</li>
          <li className="drop-item">PRESTADORES MEDICOS PERIFERICOS  AÑO- 2021</li>
      
        </ul>
    
      
    </div>
    </div>
  );
};

export default Dropdown2;
