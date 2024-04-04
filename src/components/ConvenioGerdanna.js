import React from 'react'
import logo from "../images/logo.png"
import gerdanna from "../images/gerdanna.jpg"
import Insti from '../videos/insti.mp4'
import ScrollToTop from "./ScrollToTop";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import  "../styles/ConvenioGerdanna.css"


const ConvenioGerdanna = () => {
const custom = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
        height: "50%",
        backgroundColor: "whitesmoke",
        border: "1px solid green",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "5px 5px 5px rgba(0,0,0,0.5)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        },
    overlay: {
        backgroundColor: "rgba(0,0,0,0.5)",
        },
    };

    const h2Modal = {
        color: "green",
        textAlign: "center",
    }


    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }
  
    useEffect(() => {
      openModal();
    }, []);



    const highlight = {
        backgroundColor : "green", 
        color: "whitesmoke",
        borderRadius: "1px",
    }

  return (
    <main className="convenio-cont" >
             <ScrollToTop />
      <Modal
        isOpen={modalIsOpen}
  style={custom}
        contentLabel="Example Modal"
      >

        <h2 style={h2Modal}>NUEVO COSEGURO DE GERDANNA  SALUD</h2>
        <ul className='modal-list'>
            <li>Coseguro visita médica a domicilio $2500</li>
            <li> Coseguro consulta (solo interior del país) $2000</li>
        </ul>
        <button  style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            cursor: "pointer",
            border: "none",
            marginTop: "10px",
            alignSelf: "center",

            width: "100px",
          }} onClick={closeModal}>Cerrar</button>
      </Modal>
<section className="convenio-left">
    <video className="video" controls >
        <source  type="video/mp4" src={Insti} />
    </video>
        <div className="cartilla-div">
        <h2>
        CARTILLAS DE PRESTADORES DE GERDANNA SALUD
        </h2>
        <a href="http://www.gerdanna.com.ar/wp-content/uploads/2023/08/Gral.-Centro-Medico-C.A.B.A.-Y-G.B.A.pdf"
        target='_blank' rel="noreferrer"
        >
        CENTRO MEDICO CABA Y GRAN BUENOS AIRES
        </a>
        <a   href="http://www.gerdanna.com.ar/wp-content/uploads/2023/06/GRAL-Centro-Medico-Interior.pdf"
        target='_blank' rel="noreferrer"
         >
        CENTRO MEDICO INTERIOR
        </a>
    </div>

</section>
<section className="convenio-right">
    <header
    className="convenio-header"
    >
        <img className="convenio-logo" alt="logo-socorros" src={logo}></img>
        <h2>
        CONVENIO GERDANNA SALUD
        </h2>
        <img   className="convenio-gerdanna"src={gerdanna} alt="logo-gerdanna"></img>
        </header>
        <div className="convenio-text">
            <p>
            La Asociación Socorros Mutuos Fuerzas Armadas pone a disposición del socio, un nuevo Servicio de Salud,<span style={highlight}> vigente a partir del 01 de Agosto de 2018</span>, que complementa el anterior, brindando nuevas prestaciones médicas a nivel Nacional:
            </p>
            <p>
            <strong style={highlight}>Visita Médica Domiciliaria:</strong> Cuando el beneficiario por circunstancias de tiempo, lugar y/o persona se vea impedido 0 sumamente dificultado para trasladarse hasta algún centro médico o consultorio zonal, dentro de Cap Fed y Gran Bs As, durante las 24 hs los 365 del año.Visita Médica Domiciliaria: Cuando el beneficiario por circunstancias de tiempo, lugar y/o persona se vea impedido 0 sumamente dificultado para trasladarse hasta algún centro médico o consultorio zonal, dentro de Cap Fed y Gran Bs As, durante las 24 hs los 365 del año.
            </p>
            <p>
            <strong style={highlight}>Emergencia:</strong> Se brindará en aquellos casos en que se encuentre en riesgo la vida el beneficiario y su asistencia no permita dilación.
            </p>
            <p> <strong style={highlight}>Urgencia Médica: </strong>Se brindará cuando el beneficiario se encuentre en situación de riesgo pero no corra peligro su vida .</p>
            <p>
            <span style={highlight}>Los Servicios de Emergencia y Urgencia Médica será prestado para aquellos beneficiarios que residan en Todo el Territorio Nacional. </span>
            </p>
            <p>
           <strong style={highlight}>Red de Asistencia Médica Domiciliaria (R.A.M.A) </strong>Se brinda al beneficiario prestaciones Programadas ambulatorias de Primer Nivel de Complejidad(consultas y estudios, sin mediana y alta complejidad) y prácticas de Radiología y Laboratorio espécificas.Red de Asistencia Médica Domiciliaria (R.A.M.A) Se brinda al beneficiario prestaciones Programadas ambulatorias de Primer Nivel de Complejidad(consultas y estudios, sin mediana y alta complejidad) y prácticas de Radiología y Laboratorio espécificas.
            </p>
<h4>
Plan Orientado a Pacientes Pediatricos
</h4>
<p>
A partir del año 2020, el Asociado cuenta, para sus hijos menores desde el año hasta 13 años de edad con el Plan Orientado a PACIENTES  PEDIATRICOS, pudiendo contar con Visita Médica Domiciliaria Pediátrica diurna y nocturna con un coseguro de atención en la franja horaria de 08:00 a 08:00 hs
</p>
<p>
¿ Cuando corresponde la visita médica ? La misma se denomina Código Verde y se encuentra indicada para pacientes con patologías que no revisten gravedad siempre que las mismas no le permitan transitar. Es decir que se vean impedidos de asistir por sus propios medios a una Guardia o Consulta Médica.
</p>
<p>
Los pedidos de atención médica se efectuarán telefónicamente a los siguientes Números: 011-4959-9595 y desde el interior del país al 0810-666-6350
</p>
<p>
Ya se encuentran en nuestra Nueva Sede (ubicada en Piedras 77 5to “B” Ciudad Autónoma de Buenos Aires) las credenciales de Gerdanna Salud, que le serán solicitadas para su mejor atención. Puede retirarlas personalmente o solicitar que le sean enviadas a su domicilio si vive a mas de 10 km de distancia de la Sede.
</p>
        </div>

</section>


    </main>
  )
}

export default ConvenioGerdanna