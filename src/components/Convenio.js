import React from 'react'
import '../styles/Convenio.css'

const Convenio = () => {
  return (
   <main className="convenio-container">
<h1>
    Convenios
</h1>
<h3>
Coberturas médicas (Contratación previa con descuento)
</h3>
<div className="div-int">
    <h5>
    CENTRO MEDICO PUEYRREDON
    </h5>
<p>
Pueyrredon 1341
</p>
<p>
Tel.: 4827-8277
</p>

</div >
<div className="div-int" >
    <h5>
    SANATORIO GUEMES -HOMINIS-
    </h5>
<p>
Asesoramiento en la Sede de la Asociación
</p>
</div>
<div className="div-int">
    <h5>
    VITTAL y EMERGENCIAS MEDICAS
    </h5>
    <p>
    Asesoramiento en la Mutual
    </p>
    <p>
    Plan optativo para asociados y sus familiares no asociados
    </p>
    <p>
    Emergencias (sin cargo) Asistencia domiciliaria (co-seguro) en todo el país
    </p>
</div>

    </main>
  )
}

export default Convenio