import React from 'react'
import urgencias from '..//images/urgencias.jpeg'
import '../styles/Urgencias.css'

const Urgencias = () => {
  return (
   <main className="cont-urgencias">
        <h1>Servicio de Urgencias</h1>
        <div className="divisor-urg">
            </div>
        <section className="second-cont-urg">
            <div className="left-urg">
              <div className="urg-ps">
         <p>
         Se presta a través de la empresa Ayuda Médica, dentro del radio de 40km., a partir del Congreso Nacional («kilómetro cero»), para aquellos asociados (Participantes y Adherentes) que no tienen la cobertura mediante su obra social.
         </p>
         <p>
         El servicio es sin cargo para el caso de urgencias o emergencias y con un copago para el caso de visita médica domiciliaria.
         </p>
         </div>
         <ul>
<li>
<strong> Emergencias médicas:</strong> Riesgo de vida. La gravedad requiere rápida asistencia. (Ejemplo: pérdida de conocimiento, convulsiones, etc.)
</li>
<li>
<strong>Urgencias médicas: </strong>Son aquellas afecciones en las que no peligra la vida del paciente. Pueden atenderse en forma ambulatoria o requerir internación. (Ejemplo: cólico renal, fracturas simples, etc.)
</li>
<li>
<strong> Visitas médicas domiciliarias:</strong> Para pacientes imposibilitados de trasladarse al consultorio.
</li>

         </ul>
                      
            </div>
            <div className="right-urg">
<div className="ambulancia-cont">
<img src={urgencias}  className="ambulancia" alt="ambulancia"  ></img>
</div>
            
            </div>

            </section>  
        </main>
  )
}

export default Urgencias