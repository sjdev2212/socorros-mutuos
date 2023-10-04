import React from "react";
import norte from "../images/sepelios.png";
import lujan from "../images/lujan.jpeg";
import pilar from "../images/pilar.jpeg";
import otra from "../images/laotra.jpeg";
import "../styles/Sepelios.css";

const Sepelios = () => {
  return (
    <main className="main-sep">
      <section className="sepelios-cont">
        <section className="sepelios-left">
          <h3>Sepelios</h3>
          <p>
             A partir del 1O de octubre 2020, el Servicio de SEPELIOS será brindado por
            la EMPRESA VEL DEL NORTE
          </p>
          <p>El servicio abarca:</p>
          <ol>
            <li>
              ATAUD: será de madera color caoba, nogal o natural, con o sin caja
              interior metálica, válvula para formol, soldadura, mortaja de
              tafetina, herrajes en imitación plata vieja, con ocho manijas. El
              mismo será forrado con blondas de tafetina y placa identificatoria
              para tierra, nicho, panteón, o bóveda, según el caso.
            </li>
            <li>
              SERVICIO DE CALLE: Desde el velatorio hasta el cementerio para la
              inhumación con coche fúnebre, un coche porta corona, y auto de
              acompañamiento.
            </li>
            <li>
              SERVICIO DE ATENCION: colaboración solidaria con los deudos,
              facilitando una correcta información en todo lo relativo al
              servicio que se presta. Servicio de Control y Asesoramiento.
            </li>
            <li>
              TRASLADO: Cubre el traslado del fallecido dentro del TERRITORIO
              NACIONAL, a su lugar de domicilio, previa justificación y
              constancia de ello.
            </li>
            <li>
              LIMITES DE LA PRESTACION: tomando como punto de referencia el
              domicilio de la EMPRESA, los traslados y trámites se prestarán sin
              cobro adicional dentro de las áreas que seguidamente se detallan:
            </li>
            <ol className="lista-int">
              <li>Ciudad Autónoma de Buenos Aires: radio Urbano,</li>
              <li>Gran Buenos Aires: ámbito del partido.</li>
              <li>
                Resto del país: para retiro del extinto hasta 30 km y traslado a
                lugar de inhumación hasta 20 km.
              </li>
            </ol>
            <li>
              VELATORIO: Sala velatoria o capilla ardiente con símbolos
              religiosos, velas artificiales eléctricas o a gas y atriles para
              coronas en cantidad necesaria
            </li>
            <li>
              TRAMITES: del Registro Civil, incluyendo los instrumentos legales
              de inhumación, dos copias del Acta de defunción. Los derechos
              correspondientes a la inhumación quedarán en todos los cargos a
              cargo de los deudos. Los relacionados con rendición de honores, de
              corresponder se realizará previa comunicación a la MUTUAL.
            </li>
            <li>
              MENORES: desde el año hasta los siete años de edad, el servicio
              será de las mismas características que para los mayores, con ataúd
              de igual calidad provisto de cuatro a seis manijas según el tamaño
            </li>
            <li>
              ANGELITO: los nacidos hasta el año de vida, el servicio será
              directo al cementerio en ambulancia o coche de duelo.
            </li>
            <li>
              AMBITO DE PRESTACION DEL SERVICIO: la prestación se extiende a
              todo el territorio nacional, a través de las empresas fúnebres
              prestatarias especialmente designadas por la SOCIEDAD / EMPRESA.
              Su prestación será adecuada a la idiosincrasia particular de la
              zona en que se realice
            </li>
          </ol>
          <p>
            La EMPRESA pone a disposición de los asociados el número telefónico{" "}
            <strong style={{color: "green"}}>47717771 ó 0800888 3356</strong> durante las 24
            horas los 365 días del año para realizar todo tipo de consultas
            información y modo de proceder ante un eventual siniestro
          </p>
        </section>
        <section className="sepelios-right">
            <img className="norte" src={norte} alt="norte" />
        </section>
      </section>
      <section className="panteones">
        <div className="panteones-title">
        <h3 >INHUMACION DE RESTOS EN PANTEONES PROPIOS EN EL CEMENTERIO DE LA CHACARITA
</h3>
</div>
<h4 className="panteones-h4" >
Nuestra Asociación cuenta con tres Panteones habilitados en el Cementerio de la Chacarita, 
</h4>
<ul>
    <li className="lista-left">
        
      <div className="text-cont-left-solo">
        
        <h3 className="left-h3">
        PANTEÓN “A” (Nuestra Señora del Pilar)
        </h3>
        </div>
        <div className="img-left">
        <img className="pilar" src={pilar} alt="pilar"></img>
        </div>

    </li>
    <li className="lista-right">
      <div className="img-right">
    <img className="lujan" src={lujan} alt="lujan"></img>
    </div>
    <div className="text-cont-right">
    <h3 className="right-h3">
    PANTEON “B” (Nuestra Señora de Luján) 
    </h3>
    <p className="texto-right">
    Que cuenta con una hermosa Capilla y que en consideración a sus

características histórico testimoniales, estético arquitectónicas, así como también paisajístico-ambientales, el Gobierno de la Ciudad de Buenos Aires viabilizó su protección legal.
    </p>
    </div>
    </li>
    <li className="lista-right-mobile">
    
    <div className="text-cont-right">
    <h3 className="right-h3">
    PANTEON “B” (Nuestra Señora de Luján) 
    </h3>
    <p className="texto-right">
    Que cuenta con una hermosa Capilla y que en consideración a sus

características histórico testimoniales, estético arquitectónicas, así como también paisajístico-ambientales, el Gobierno de la Ciudad de Buenos Aires viabilizó su protección legal.
    </p>
    </div>
    <div className="img-right">
    <img className="lujan" src={lujan} alt="lujan"></img>
    </div>
    </li>
    <li  className="lista-left">
      <div className="text-cont-left"> 
        <h3 className="left-h3">
        PANTEON “C” (Nuestra Señora del Carmen)
        </h3>

        <p className="texto-left">
        Recientemente remodelado, que cuenta con una Oficina de atención al público. El ingreso a los mismos es un derecho fundamental de nuestros asociados.
        </p>
        </div>
        <div className="img-left">
        <img className="otra" src={otra} alt="otra"></img>
        </div>

    </li>
    <li>

    </li>
</ul>
        </section>
    </main>
  );
};

export default Sepelios;
