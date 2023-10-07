import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/DeInteresMobile.css'

const DeInteresMobile = () => {
  return (
    <main className="de-interes-cont">

        <ul >
            <li>
                <Link  className="de-interes-link"  to="/formas-de-pago">
                Formas de Pago
                </Link>
            </li>
            <li>
                <Link className="de-interes-link" to="/constancia-de-pago">
               Constancia de Pago
                </Link>
            </li>
            
            <li>
                <Link className="de-interes-link" to="/visita">
               Visita de un Curso de la UADE
                </Link>
            </li>
            <li>
                <Link className="de-interes-link" to="/prestadores">
                Prestadores Medicos Perifericos
                </Link>
            </li>
        </ul>
    </main>
  )
}

export default DeInteresMobile