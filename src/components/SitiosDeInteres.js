import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dropdown.css'


const SitiosDeInteres = () => {
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
        Sitios de Interes
      </button>


      <div >
        < ul onMouseLeave={toggleClosed} className={isOpen ? dropOpen : dropClosed}>
          <li className="drop-item">
            <Link className="drop-link" to="http://www.centrodeoficiales.com.ar/" >
        Centro de Oficiales
            </Link>
            </li>
            
          <li className="drop-item">
            <Link className="drop-link" to="https://www.centronaval.org.ar/">
            Centro Naval
            </Link>
            </li>
          <li className="drop-item">
            <Link className="drop-link" to="https://www.argentina.gob.ar/ejercito">
            Ejercito Argentino
            </Link>
            
            </li>
          <li className="drop-item"> 
          <Link className="drop-link" to="/sepelios">
          Servicios de Sepelios
          </Link>
          </li>
          <li className="drop-item">
          <Link className="drop-link" to="https://mupim.org.ar/">
          Mupim
            </Link>
            </li>
          <li className="drop-item"> 
          <Link className="drop-link" to="https://femfase.com.ar/">
          FEMFASE
          </Link>
          </li>
          
          <li className="drop-item">
          <Link className="drop-link" to="https://www.smsv.com.ar/">
            Sociedad Militar Seguro de Vida
            </Link>
            </li>
            <li className="drop-item">
          <Link className="drop-link" to="http://www.circulomilitar.org/">
            Circulo Militar
            </Link>
            </li>
            <li className="drop-item">
          <Link className="drop-link" to="https://www.argentina.gob.ar/iaf">
            Instituto de Ayuda Financiera 
            </Link>
            </li>
            <li className="drop-item">
          <Link className="drop-link" to="https://capellaniamayorea.ejercito.mil.ar/">
           Capellania Mayor del Ejercito
            </Link>
            </li>
            <li className="drop-item">
          <Link className="drop-link" to="https://cirgen.org.ar/">
           Circulo de Gendarmeria Nacional
            </Link>
            </li>
            <li className="drop-item">
          <Link className="drop-link" to="https://www.ampgn.com.ar/AMUGENAL/">
           Ayuda mutua del personal Gendarmeria Nacional
            </Link>
            </li>
            <li className="drop-item">
            <Link className="drop-link" to="https://www.aca.org.ar/">
            Automovil Club Argentino
            </Link>
            </li>
          </ul>
    
      
    </div>
    </div>
  );
};

export default SitiosDeInteres;