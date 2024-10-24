import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Historia from "./components/Historia";
import Urgencias from "./components/Urgencias";
import Footer from "./components/Footer";
import Institucional from "./components/Institucional";
import ServiciosMobile from "./components/ServiciosMobile";
import NuevoPlanSalud from "./components/NuevoPlanSalud";
import ConvenioGerdanna from "./components/ConvenioGerdanna";
import Sepelios from "./components/Sepelios";
import PanteonesPropios from "./components/PanteonesPropios";
import Convenio from "./components/Convenio";
import Subsidio from "./components/Subsidio";
import Contacto from "./components/Contacto";
import Preguntas from "./components/Preguntas";
import Asociarse from "./components/Asociarse";
import SitiosMobile from "./components/SitiosMobile";
import FormasDePago from "./components/FormasDePago";
import DeInteresMobile from "./components/DeInteresMobile";
import ConstanciaDePago from "./components/ConstanciaDePago";
import Prestadores from "./components/Prestadores";
import Novedades from "./components/Novedades";
import Turismo from "./components/Turismo";
import Visita from "./components/Visita";
import GerdannaSlides from "./components/GerdannaSlides";
import ScrollToTop from "./components/ScrollToTop";
import Modal from "react-modal";



function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    openModal();

    setTimeout(() => {
      closeModal();
    }
    , 11000);
  }, []);




  return (
    <main className="main-container">
      <Navbar />
      <ScrollToTop />

     
    <Modal
        isOpen={modalIsOpen}
         contentLabel="Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            
          },
          content: {
           
            width: "60%",
            height: "70%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            border: "2px solid green",
            padding: "20px",
            position: "relative",
            top: "9vw",
          
          
          },
        }}
      >
 <section style={
    {
      display: "flex",
  flexDirection: "column",
      textAlign: "center",
      width: "100%",
      height: "100%",
      overflowY: "scroll",
      overflowX: "hidden",
      padding: "20px"
    }
 }>
  <h1 style={{
    fontSize: "1.5rem",
    color : "green"
  }}>
  Asociación Socorros Mutuos "Fuerzas Armadas"
  </h1>
  <h4 style={{
    color: "green",
    fontSize: "1rem"
  }}>
  ASAMBLEA ORDINARIA - Ejercicio Social 142º 
  </h4>
  <h4 style={{
    color: "green",
    fontSize: "1rem"
  }}>
  CONVOCATORIA
  </h4>
  <p style={{
    fontSize: ".85rem",
    textAlign: "center",
    margin: "10px",
    padding: "10px"
  }}>
  En cumplimiento con lo establecido en las disposiciones legales y estatutarias el Consejo Directivo de la Asociación Socorros Mutuos “Fuerzas Armadas” convoca a los señores y señoras asociados Activos a participar de la Asamblea Ordinaria correspondiente al 142º Ejercicio, a realizarse el 12 de noviembre de 2024 a las 16.00 horas, en en Escuela Superior de Guerra “Teniente General Luis María Campos», sita en Av. Luis María Campos 480 de la Ciudad Autónoma de Buenos Aires (ingreso alternativo Savio 235), para tratar el siguiente 
  </p>
  <h4 style={{
    color: "green",
    fontSize: "1rem"
  }}>
  ORDEN DEL DÍA
  </h4>
  <ol style={{
   width: "90%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

  }}>
    <li style={{
      padding: "5px",
      margin: "5px",
      width: "40em",
      fontSize: ".9rem",
      textAlign: "start"


    }}>
    Designación de dos asociados para refrendar el Acta.
    </li>
    <li 
    

    style={{
      padding: "5px",
      margin: "5px",
      width: "40em",
      fontSize: ".9rem",
      textAlign: "start"


    }}
   
    >
    Causas por las cuales la convocatoria se realizó fuera de término.
    </li>
    <li 
    style={{
      padding: "5px",
      margin: "5px",
      width: "40em",
      fontSize: ".9rem",
      textAlign: "start"


    }}
>
    Lectura y aprobación del Acta de la Asamblea Ordinaria anterior.
    </li>
   <li 
   style={{
    padding: "5px",
    margin: "5px",
    width: "40em",
    fontSize: ".9rem",
    textAlign: "start"


  }}
    >
    Consideración de la Memoria, Inventario, Balance General, Estado de Recursos y Gastos, Estado de Flujo de Efectivo e informe de la Junta Fiscalizadora correspondiente al Ejercicio 142º finalizado el 30 de abril de 2024.
    </li>
    <li 

style={{
  padding: "5px",
  margin: "5px",
  width: "40em",
  fontSize: ".9rem",
  textAlign: "start"


}}
  >
    Ratificación de las cuotas sociales y aranceles de servicios.
    </li>
    <li

style={{
  padding: "5px",
  margin: "5px",
  width: "40em",
  fontSize: ".9rem",
  textAlign: "start"


}}
>
    Ratificación de las retribuciones para los miembros del Consejo Directivo y de la Junta Fiscalizadora.
    </li>
    <li

style={{
  padding: "5px",
  margin: "5px",
  width: "40em",
  fontSize: ".9rem",
  textAlign: "start"


}}
>
    Elecciones
    </li>
  </ol>
  <h5>
  Ciudad Autónoma de Buenos Aires, 30 de agosto de 2024
  </h5>
  <div>
    <p>
    SERGIO RUBEN CHIACCHIO
CORONEL (R)  
SECRETARIO GENERAL 

    </p>
    <p>
    JOSE LUIS BO
CORONEL (R)
PRESIDENTE
</p>
  </div>

  <h5 style={{
    color: "green",
    fontSize: ".8rem"
  }}>
  ESTATUTO SOCIAL - DISPOSICION VIGENTE:
  </h5>
  <p style={{
    fontSize: ".8rem",
    textAlign: "center",
    margin: "10px",
    padding: "10px"
  }}>
  QUORUM - ARTÍCULO 34: El quórum para cualquier tipo de Asamblea, será de la mitad más uno de los asociados con derecho a participar. En caso de no alcanzar este número a la hora fijada la Asamblea podrá sesionar válidamente treinta minutos después con los asociados presentes, cuyo número no podrá ser menor al de los miembros de los órganos directivo y de fiscalización. 
  </p>
 </section>

 
       
  
      </Modal> 


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inst" element={<Institucional />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/urgencias" element={<Urgencias />} />
        <Route path="/servicios-mob" element={<ServiciosMobile />} />
        <Route path="/nuevo-plan" element={<NuevoPlanSalud />} />
        <Route path="/convenio-gerdanna" element={<ConvenioGerdanna />} />
        <Route path="/sepelios" element={<Sepelios />} />
        <Route path="/panteones-propios" element={<PanteonesPropios />} />
        <Route path="/convenio" element={<Convenio />} />
        <Route path="/subsidio" element={<Subsidio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/preguntas" element={<Preguntas />} />
        <Route path="/asociarse" element={<Asociarse />} />
        <Route path="/sitios-mob" element={<SitiosMobile />} />
        <Route path="/formas-de-pago" element={<FormasDePago />} />
        <Route path="/de-interes-mob" element={<DeInteresMobile />} />
        <Route path="/constancia-de-pago" element={<ConstanciaDePago />} />
        <Route path="/prestadores" element={<Prestadores />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/turismo" element={<Turismo />} />
        <Route path="/visita" element={<Visita />} />
        <Route path="/gerdanna-slides" element={<GerdannaSlides />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
