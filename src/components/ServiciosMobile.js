import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ServiciosMobile.css'


const ServiciosMobile = () => {
  return (
    <main className="servicios-mob">
        <ul>
            <li>
                <Link className="serv-link" to="/urgencias">

                Servicios de Urgencias
                </Link>
            </li>
            <li>
                <Link className="serv-link" to="/nuevo-plan">
                Plan de Salud Medicos Perifericos
                </Link>
            </li>
            
            <li>
                <Link className="serv-link" to="/convenio-gerdanna">
                Convenio "GERDANA SALUD"
                </Link>
                
            </li>
            <li>
                <Link className="serv-link" to="/sepelios">
                Servicios de Sepelios
                </Link>
            </li>
            <li>
                <Link className="serv-link" to="/panteones-propios">
                Panteones Propios
                </Link>
            </li>
            <li>
                <Link className="serv-link" to="/subsidio">
                Subsidios
                </Link>
            </li>
            <li>
                <Link className="serv-link" to="/convenio">
                Convenios
                </Link>
            </li>
        </ul>


    </main>
  )
}

export default ServiciosMobile