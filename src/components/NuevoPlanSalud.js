import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NuevoPlanSalud.css'

const NuevoPlanSalud = () => {
  return (
    <main className="nuevo-plan-cont">
        <div className="title-div">
       <h1>Nuevo Plan de Salud</h1>
       </div>
       <div className="nuevo-plan-text">
        <p>
        La  <strong>ASOCIACION SOCORROS MUTUOS “FUERZAS ARMADAS” </strong>le anuncia que el 1° de noviembre de 2015 lanzó su NUEVO PLAN de SALUD con el sistema de consultorios periféricos para distintas especialidades.
        </p>
<p>
¿En qué consiste este Plan?
</p>
<p>
Los asociados con derecho a este <strong>Plan de Salud  </strong>podrán acceder a la atención en distintos consultorios periféricos, ubicados estratégicamente con un listado de profesionales de altísima jerarquía que cubren las áreas de salud en Medicina, Odontología, Kinesiología y Ecografías. Este listado se irá incrementando y ampliando progresivamente conforme con las necesidades de los asociados. Sus actualizaciones se publicarán periódicamente.
</p>
<p>
¿Quiénes tienen derecho a usar este Plan?
</p>
<p>
La Asociación Socorros Mutuos está realizando un reempadronamiento  y una inscripción de nuevos asociados para permitir acceder a este PLAN DE SALUD.
</p>
<p> 
¿Cómo me puedo informar a qué y cómo tengo acceso?
</p>
<p>
Los profesionales atenderán mediante un turno solicitado previamente y deberán presentarse con la Credencial de la Asociación que los habilita y su Documento de Identidad. El derecho de asistencia es INTRANSFERIBLE.
</p>

<p>
¿Dónde puedo realizar consultas sobre este PLAN de SALUD?
</p>
<p>
En la Sede de la Mutual o Telefónicamente a los Nros 4342-6741 / 7363 / 7259
</p>
<p>
Las sugerencias se recibirán en <strong>info@socorrosmutuos.com.ar</strong>
</p>
<p>
  <Link  to="/prestadores">
  haga click aquí para ver: Médicos Periféricos 2021
  </Link>
</p>

       </div>
        
        </main>
  )
}

export default NuevoPlanSalud