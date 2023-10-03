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
</Routes>
<Footer/>

   
    </main>
  );
}

export default App;
