import React from 'react'
import '../styles/Turismo.css'

const Turismo = () => {
  const emailAddress = "info@turismomil.com.ar"
  return (
    <main className="turismo-cont"> 
    <h1>
        Turismo
    </h1>
    <p className="primer-p">
        Nuestra Asociación cuenta con convenios en Turismo a traves de la empresa TURISMO MIL
    </p>
    <p className="segundo-p">
        Brindando los siguientes beneficios:
    </p>
    <ul>
        <li>
        Tarifas más ventajosas para nuestros asociados
        </li>
        <li>
        Atención Personalizada con especialistas por destinos.
        </li>   
        <li>
        Financiación con y sin tarjetas de crédito. (Sujeto a condiciones)
        </li>
        <li>
        Entrega de pasajes y documentación en mano o a domicilio en Capital Federal.
        </li>
        <li>
        Cupos aéreos y reserva de hoteles confirmados.
        </li>
        <li>
        Salidas garantizadas de tours en fechas pactadas.
        </li>
        <li>
            
        Descuentos importantes para pagos anticipados.

        </li>
 </ul>
<section className="pastillas">
    <div className="pastilla">
      <p>
      Informes: <span>
        <a href="http://www.turismomil.com.ar" target="_blank" rel="noopener noreferrer">www.turismomil.com.ar</a>
      </span>
      </p>
      <p>
        Dirección: Uruguay 654 2º piso Of. 206 / 207 - C.A.B.A.
        </p>
     
     </div>
      <div className="pastilla">
        <p>
        Teléfono: 54 11 4371-7209 / 11 4371-2400 int. 305
        </p>
        <p>
          <span>
          
Email:
          <a href={`mailto:${emailAddress}`}> info@turismomil.com.ar</a>.


    
          </span>
      </p>
       
      </div>
     </section>
  
    </main>
  )
}

export default Turismo