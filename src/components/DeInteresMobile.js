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
                <Link className="de-interes-link" to="/fumigaciones">
                Fumigacion de los panteones A y B
                </Link>
            </li>
            <li>
                <Link className="de-interes-link" to="/formas-de-pago">
               Visita de un Curso de la UADE
                </Link>
            </li>
            <li>
                <Link className="de-interes-link" to="/de-interes-mob">
                Prestadores Medicos Perifecicos 2021
                </Link>
            </li>
        </ul>
    </main>
  )
}

export default DeInteresMobile