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


  const dropOpen = "drop-open"
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
          <li className="drop-item">Formas de  pago</li>
          <li className="drop-item">Constancia de pago</li>
          <li className="drop-item">FUMIGACION DE LOS PANTEONES A Y B</li>
          <li className="drop-item">VISITA DE UN CURSO DE LA UADE</li>
          <li className="drop-item">PRESTADORES MEDICOS PERIFERICOS  AÑO- 2021</li>
      
        </ul>
    
      
    </div>
    </div>
  );
};

export default Dropdown2;
