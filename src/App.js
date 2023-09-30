import './App.css';
import React from 'react';
import {Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Institucional from './components/Institucional';


function App() {
  return (
    <main className="main-container">

<Navbar/>
<Routes>


<Route path="/" element={<Home/>} />
<Route path="/inst" element={<Institucional/>} />
</Routes>
<Footer/>

   
    </main>
  );
}

export default App;
