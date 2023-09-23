import React from 'react'
import logo from '../images/logo.png'
import Dropdowns from './Dropdown'
import Dropdown from './DropDown2'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'


const comoAsoc = { fontWeight: "600",
cursor: "pointer",
textDecoration: "none",
color: "black",
fontSize: "1.2vw",
width: "7vw",
height: "1vw",
display: "flex",
alignItems: "center",
justifyContent: "start",
paddingLeft: "1vw",

}
const Navbar = () => {
  return (
    <main className="navbar-container">
        <div className="navbar-logo">
            <img src={logo} alt="logo" width={75} height={75}/>
        </div>
        <ul className="navbar-links">
           <li> <Link className="item-list" to="/"  >Inicio</Link></li>
           <li> <Link className="item-list" >Institucional</Link></li>
           <li className="drop"><Dropdowns/></li>
           <li style={comoAsoc}>  <Link className="item-list" >Como Asociarse</Link></li>
           <li>  <Link className="item-list">Contactarse</Link></li>
           <li>  <Link className="item-list">Preguntas</Link></li>
           <li>  <Link className="item-list">Enlace</Link></li>
           <li>  <Link className="item-list">CBU Transferencia Bancaria</Link></li>
           <li>  <Link className="item-list">Constancia de Pago</Link></li>
           <li >   <Dropdown/></li>
           <li>  <Link className="item-list">Nuevas formas de pago</Link></li>
</ul>
        
        
        
        </main>
  )
}

export default Navbar