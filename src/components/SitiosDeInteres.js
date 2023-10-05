import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SitiosDeInteres.css'


const SitiosDeInteres = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(true);
  };
  const toggleClosed = () => {
    setIsOpen(false);
  }

const dropOpen = "drop-open-sitios"
const dropClosed = "drop-closed"

  return (
    <div >
      <button className="drop-btn" onMouseOver={toggleOpen}>
        Sitios de Interes
      </button>


      <div >
        < ul onMouseLeave={toggleClosed} className={isOpen ? dropOpen : dropClosed}>
            <div className="primeros-7">

          <li className="drop-item-interes">
            <Link className="drop-link-interes" target="_blank" to="http://www.centrodeoficiales.com.ar/" >
        Centro de Oficiales
            </Link>
            </li>
            
          <li className="drop-item-interes">
            <Link className="drop-link-interes" target="_blank" to="https://www.centronaval.org.ar/">
            Centro Naval
            </Link>
            </li>
          <li className="drop-item-interes">
            <Link className="drop-link-interes" target="_blank" to="https://www.argentina.gob.ar/ejercito">
            Ejercito Argentino
            </Link>
            
            </li>
         
          <li className="drop-item-interes">
          <Link className="drop-link-interes" target="_blank" to="https://mupim.org.ar/">
          Mupim
            </Link>
            </li>
          <li className="drop-item-interes"> 
          <Link className="drop-link-interes" target="_blank" to="https://femfase.com.ar/">
          FEMFASE
          </Link>
          </li>
          
          <li className="drop-item-interes">
          <Link className="drop-link-interes" target="_blank" to="https://www.smsv.com.ar/">
            Sociedad Militar Seguro de Vida
            </Link>
            </li>
            </div>

            <div className="segundos-6">
            <li className="drop-item-interes">
          <Link  className="drop-link-interes" target="_blank" to="http://www.circulomilitar.org/">
            Circulo Militar
            </Link>
            </li>
            <li className="drop-item-interes">
          <Link className="drop-link-interes" target="_blank" to="https://www.argentina.gob.ar/iaf">
            Instituto de Ayuda Financiera 
            </Link>
            </li>
            <li className="drop-item-interes">
          <Link className="drop-link-interes" target="_blank" to="https://capellaniamayorea.ejercito.mil.ar/">
           Capellania Mayor del Ejercito
            </Link>
            </li>
            <li className="drop-item-interes">
          <Link className="drop-link-interes" target="_blank" to="https://cirgen.org.ar/">
           Circulo de Gendarmeria Nacional
            </Link>
            </li>
            <li className="drop-item-interes">
          <Link className="drop-link-interes" target="_blank" to="https://www.ampgn.com.ar/AMUGENAL/">
           Ayuda mutua del personal Gendarmeria Nacional
            </Link>
            </li>
            <li className="drop-item-interes">
            <Link className="drop-link-interes" target="_blank" to="https://www.aca.org.ar/">
            Automovil Club Argentino
            </Link>
            </li>
            </div>
          </ul>
    
      
    </div>
    </div>
  );
};

export default SitiosDeInteres;