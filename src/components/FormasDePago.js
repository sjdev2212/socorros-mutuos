import React from 'react'
import whatup from '../images/whatup.svg'
import '../styles/FormasDePago.css'

const FormasDePago = () => {

    const emailAddress = 'info@socorrosmutos.com.ar'; 
    const corporativo = '+1126577262'; 
    const stellaMaris = '+1176264021';

  const handleEmailClick = () => {
    // Create a mailto link with the email address
    const mailtoLink = `mailto:${emailAddress}`;

    // Open the user's email client with the mailto link
    window.location.href = mailtoLink;
  };
  return (
    <main className="forma-container">

        <h1>
            Formas de pago
        </h1>
    <ul>
        <li>
            <h3>
                Pago presencial en la sede de la Asociación
            </h3>
            <p>
            CALLE PIEDRAS 77 5 “B” será atendido los días Jueves y Viernes de 09:00 a 12:00 hs previamente coordine por  <span> <a href="www"  onClick={handleEmailClick}> <strong>correo electronico </strong></a> </span>
            </p>
        </li>
        <li>
            <h3>
                Pago por transferencia bancaria
            </h3>
            <p>
            A LA CUENTA CORRIENTE NRO 0006419010 CBU NRO 0110 0037 2000 0064 1901 03, una vez efectuado el envíe el comprobante al correo info@socorrosmutuos.com.ar
            </p>
        </li>
        <li>
            <h3>
            Pago en su domicilio:
            </h3>
            <p>
            Si usted opta por esta modalidad de pago, un comisionista de la entidad se acercará a su domicilio coordine detalles con Secretaría al mail info@socorrosmutuos.com.ar
            </p>
        </li>
        <li>
            <h3>
            Pago con tarjeta de crédito o débito
            </h3>
            </li>
         

    </ul>
    <div className="forma-footer">
        <h3>
        SI TIENE DUDAS COMUNIQUESE A LOS SIGUIENTES TELÉFONOS
        </h3>
            <div className="whatup-div">
        <p>
        Whatsapp corporativo
        <a href={`https://wa.me/${corporativo}`} target="_blank" rel="noopener noreferrer">
        <img className="whatup" src={whatup} alt='whatsapp-logo'></img>
        </a>
        </p>
        <p>
        Whatsapp  Sra Stella Maris
        <a href={`https://wa.me/${stellaMaris}`} target="_blank" rel="noopener noreferrer">
        <img className="whatup" src={whatup} alt='whatsapp-logo'></img>
        </a>
        </p>
        </div>

    </div>


    </main>
  )
}

export default FormasDePago