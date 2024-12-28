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
  <p style={{
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "black",
    padding: "20px",
    textAlign: "left"

  }}>Desde el 16 Dic 2024 al 16 Mar 2025 la asociación Socorros Mutuos Fuerzas Armadas, realizará tareas desde las 0900 hs hasta las 1300 hs en Sede Central y de 0900 hs a 1500 hs en panteones de Chacarita</p>
  <p>
  Consejo Directivo
  </p>
 </section>
<div>
  <button onClick={closeModal} style={{
    padding: "10px",
    margin: "10px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }}>
    Cerrar
  </button>
</div>
 
       
  
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
