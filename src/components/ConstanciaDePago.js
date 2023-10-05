import React from 'react'
import '../styles/ConstanciaDePago.css'
import logo from '../images/logo.png'

const ConstanciaDePago = () => {
  return (
    <main className="constancia-cont">

      <h2>
      Señores Asociados: 
      </h2>
      <div className="constancia-text">
      <span>
<img className="constancia-logo" src={logo} alt="logo" />
      </span>
      <p>
      A partir del 01 Enero de 2019, el recibo enviado por mail será validado como constancia de pago efectuado por medios electrónicos a esta Institución. En caso de requerirse el original será entregado en mano en nuestras oficinas, sita en la calle Piedras 77  5to piso Dpto «B» Ciudad Autónoma de Buenos Aires.
      </p>
    
      </div>
      <p>
        Consejo Directivo
      </p>
    </main>
  )
}

export default ConstanciaDePago