// src/components/Dropdown.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dropdown.css'


const Dropdown = () => {
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
        Servicios
      </button>


      <div >
        < ul onMouseLeave={toggleClosed} className={isOpen ? dropOpen : dropClosed}>
          <li className="drop-item">
            <Link className="drop-link" to="/urgencias">
            Servicio de urgencias
            </Link>
            </li>
            
          <li className="drop-item">
            <Link className="drop-link" to="/nuevo-plan">
            Plan de Salud Medicos Perifericos
            </Link>
            </li>
          <li className="drop-item">
            <Link className="drop-link" to="/convenio-gerdanna">
            Convenio "GERDANA SALUD"
            </Link>
            
            </li>
          <li className="drop-item">Servicios de Sepelios</li>
          <li className="drop-item">Panteones Propios</li>
          <li className="drop-item">Subsidios</li>
          <li className="drop-item">Convenios</li>
        </ul>
    
      
    </div>
    </div>
  );
};

export default Dropdown;
