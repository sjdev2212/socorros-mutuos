import './App.css';
import React from 'react';
import {Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Historia from './components/Historia';
import Footer from './components/Footer';
import Institucional from './components/Institucional';


function App() {
  return (
    <main className="main-container">

<Navbar/>
<Routes>


<Route path="/" element={<Home/>} />
<Route path="/inst" element={<Institucional/>} />
<Route path="/historia" element={<Historia/>} />
</Routes>
<Footer/>

   
    </main>
  );
}

export default App;
