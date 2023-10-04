import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/SitiosMobile.css'

const SitiosMobile = () => {
  return (
    <main className="sitios-mob">
          < ul  >
        

          <li className="drop-item">
            <Link className="drop-link-interes" target="_blank" to="http://www.centrodeoficiales.com.ar/" >
        Centro de Oficiales
            </Link>
            </li>
            
          <li className="drop-item">
            <Link className="drop-link-interes" target="_blank" to="https://www.centronaval.org.ar/">
            Centro Naval
            </Link>
            </li>
          <li className="drop-item">
            <Link className="drop-link-interes" target="_blank" to="https://www.argentina.gob.ar/ejercito">
            Ejercito Argentino
            </Link>
            
            </li>
         
          <li className="drop-item">
          <Link className="drop-link-interes" target="_blank" to="https://mupim.org.ar/">
          Mupim
            </Link>
            </li>
          <li className="drop-item"> 
          <Link className="drop-link-interes" target="_blank" to="https://femfase.com.ar/">
          FEMFASE
          </Link>
          </li>
          
          <li className="drop-item">
          <Link className="drop-link-interes" target="_blank" to="https://www.smsv.com.ar/">
            Sociedad Militar Seguro de Vida
            </Link>
            </li>
          

  
            <li className="drop-item">
          <Link className="drop-link-interes" target="_blank" to="http://www.circulomilitar.org/">
            Circulo Militar
            </Link>
            </li>
            <li className="drop-item">
          <Link className="drop-link-interes" target="_blank" to="https://www.argentina.gob.ar/iaf">
            Instituto de Ayuda Financiera 
            </Link>
            </li>
            <li className="drop-item">
          <Link className="drop-link-interes" target="_blank" to="https://capellaniamayorea.ejercito.mil.ar/">
           Capellania Mayor del Ejercito
            </Link>
            </li>
            <li className="drop-item">
          <Link className="drop-link-interes" target="_blank" to="https://cirgen.org.ar/">
           Circulo de Gendarmeria Nacional
            </Link>
            </li>
            <li className="drop-item">
          <Link className="drop-link-interes" target="_blank" to="https://www.ampgn.com.ar/AMUGENAL/">
           Ayuda mutua del personal Gendarmeria Nacional
            </Link>
            </li>
            <li className="drop-item">
            <Link className="drop-link-interes" target="_blank" to="https://www.aca.org.ar/">
            Automovil Club Argentino
            </Link>
            </li>
           
          </ul>


    </main>
  )
}

export default SitiosMobile