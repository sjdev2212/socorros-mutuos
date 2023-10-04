import './App.css';
import React from 'react';
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


function App() {
  return (
    <main className="main-container">

<Navbar/>
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


</Routes>
<Footer/>

   
    </main>
  );
}

export default App;
