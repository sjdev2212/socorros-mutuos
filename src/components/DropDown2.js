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
      <button className="drop-btn" onMouseOver={toggleOpen}>
        De Interes para el Socio
      </button>


      <div >
        <ul onMouseLeave={toggleClosed} className={isOpen ? dropOpen : dropClosed}>
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
