import React from 'react'
import logo from '../images/logo.png'
import Dropdowns from './Dropdown'
import Dropdown from './DropDown2'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'



const Navbar = () => {
  return (
    <main className="navbar-container">
      <section className="navbar-main">
        <div className="navbar-logo">
            <img src={logo} alt="logo" width={75} height={75}/>
        <p style={{
          margin: "0",
        }}>
          <strong>ASOCIACION SOCORROS MUTUOS</strong>  
        </p>
        </div>
        <ul className="navbar-links">
           <li> <Link className="item-list" to="/">Inicio</Link></li>
           <li> <Link className="item-list" >Institucional</Link></li>
           <li className="drop"><Dropdowns/></li>
           <li>  <Link className="item-list">Contactarse</Link></li>
           <li>  <Link className="item-list">Preguntas</Link></li>
           <li>  <Link className="item-list">Sitios de Interes</Link></li>
           <li>  <Link className="item-list" >Como Asociarse</Link></li>
            
           
           <li><Dropdown/></li>
          
</ul>
        </section>
        
        
        </main>
  )
}

export default Navbar