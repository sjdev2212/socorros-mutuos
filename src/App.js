import './App.css';
import { useState, useEffect } from 'react';
import {Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Historia from './components/Historia';
import Urgencias from './components/Urgencias';
import Footer from './components/Footer';
import Institucional from './components/Institucional';
import ServiciosMobile from './components/ServiciosMobile';
import NuevoPlanSalud from './components/NuevoPlanSalud';
import ConvenioGerdanna from './components/ConvenioGerdanna';
import Sepelios from './components/Sepelios';
import PanteonesPropios from './components/PanteonesPropios';
import Convenio from './components/Convenio';
import Subsidio from './components/Subsidio';
import Contacto from './components/Contacto';
import Preguntas from './components/Preguntas';
import Asociarse from './components/Asociarse';
import SitiosMobile from './components/SitiosMobile';
import FormasDePago from './components/FormasDePago';
import DeInteresMobile from './components/DeInteresMobile';
import ConstanciaDePago from './components/ConstanciaDePago';
import Prestadores from './components/Prestadores';
import Novedades from './components/Novedades';
import Turismo from './components/Turismo';
import Visita from './components/Visita';
import GerdannaSlides from './components/GerdannaSlides';
import ScrollToTop from './components/ScrollToTop';
import Modal from 'react-modal';



function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
  openModal()
  }, [])  


  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: '#383838',
    },
  };
  return (
    <main className="main-container">

<Navbar/>
<ScrollToTop/>
<Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>El próximo 8 de Febrero la Mutual permanecerá cerrada por celebrarse el día de Utedyc.</h2>
        <button style={
          {
            backgroundColor: 'green',
            color: 'white',
            padding: '10px',
            borderRadius: '10px',
            cursor: 'pointer',
            border: 'none',
            marginTop: '10px'
          }
        } onClick={closeModal}>Cerrar</button>
          </Modal>

<Routes>


<Route path="/" element={<Home/>} />
<Route path="/inst" element={<Institucional/>} />
<Route path="/historia" element={<Historia/>} />
<Route path="/urgencias" element={<Urgencias/>} />
<Route path="/servicios-mob" element={<ServiciosMobile/>} />
<Route path="/nuevo-plan" element={<NuevoPlanSalud/>} />
<Route path="/convenio-gerdanna" element={<ConvenioGerdanna/>} />
<Route path="/sepelios" element={<Sepelios/>} />
<Route path="/panteones-propios" element={<PanteonesPropios/>} />
<Route path="/convenio" element={<Convenio/>} />
<Route path="/subsidio" element={<Subsidio/>} />
<Route path="/contacto" element={<Contacto/>} />
<Route path="/preguntas" element={<Preguntas/>} />
<Route path="/asociarse" element={<Asociarse/>} />
<Route path="/sitios-mob" element={<SitiosMobile/>} />
<Route path="/formas-de-pago" element={<FormasDePago/>} />
<Route path="/de-interes-mob" element={<DeInteresMobile/>} />
<Route path="/constancia-de-pago" element={<ConstanciaDePago/>} />
<Route path="/prestadores" element={<Prestadores/>} />
<Route path="/novedades" element={<Novedades/>} />
<Route path="/turismo" element={<Turismo/>} />
<Route path="/visita" element={<Visita/>} />
<Route path="/gerdanna-slides" element={<GerdannaSlides/>} />



</Routes>
<Footer/>

   
    </main>
  );
}

export default App;
