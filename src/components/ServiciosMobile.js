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
                <Link className="serv-link" to="/farmacias">
                Servicios de Sepelios
                </Link>
            </li>
            <li>
                <Link className="serv-link" to="/farmacias">
                Panteones Propios
                </Link>
            </li>
            <li>
                <Link className="serv-link" to="/farmacias">
                Subsidios
                </Link>
            </li>
            <li>
                <Link className="serv-link" to="/farmacias">
                Convenios
                </Link>
            </li>
        </ul>


    </main>
  )
}

export default ServiciosMobile