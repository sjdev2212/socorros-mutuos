import {useState , useEffect } from 'react'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import aerea from '../images/aerea.jpg'
import ejercito from '../images/ejercito.jpg'
import marina from '../images/marina.jpg'
import tanques from '../images/tanques.jpg'
import '../styles/Historia.css'

import { Link } from 'react-router-dom';


const Historia = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);



    const divStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundSize: windowWidth > 768 ? "100vw 32vw" : "100vw 110vw",
        backgroundRepeat: "no-repeat",
        height: windowWidth > 768 ? "31vw" : "110vw",
        width: "100vw",
        margin: "0 auto",
        border: "2px solid black",
        borderRadius: "10px",
      };
    
 
  
    
      const slideImages = [
        {
          url: ejercito,
          
        },
        {
          url: aerea,
        
        },
        {
          url: marina,
       
        },
        {
            url: tanques,
      },
      ];

      useEffect(() => {
        const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);


  return (
    <main className="historia-cont" >
           <div className="slide-container-desk">
        <Slide 
            duration={3000}
            transitionDuration={1000}
            infinite={true}
            indicators={false}
            arrows={false}
            pauseOnHover={true}
        >
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                className="slide-mob"
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
           
                
              </div>
            </div>
          ))}
        </Slide>

      </div>
      <section className="historia-detalle"> 
        <h1>Historia de la Creación          
             </h1>
             <p>
             En una fría y lluviosa mañana de 1810 – el 25 de mayo – nacía la Patria. Cuatro días después por un Decreto de la Primera Junta, los siete batallones de infantería de milicias se transformaron en regimientos, llegando a 1116 plazas.  Había nacido El Ejercito Nacional.
             </p>
             <p>
             Ejercito Libertador  que ofreció la vida de sus mejores hombres para consolidar las libertades que se iban consiguiendo, en los distintos países de la América Hispana.  Este Ejercito estaba formado por hombres que provenían de todos los rincones de la Patria, cruzo cordilleras, se metió en las selvas y llevo triunfante la bandera hasta los confines geográficos de la tierra Americana. No se adueñó de un solo metro más allá de nuestras fronteras. Fue comandado por soldados formados en la austeridad y el desinterés, algunos como el General San Martín tenían formación militar, otros como el General Belgrano, venían de la vida civil y se tuvieron que improvisar comandantes; pero todos ellos le dieron la impronta de austeridad y transmitieron la mística de la libertad a quienes con el correr de los años fueron sucediéndolos.
             </p>
             <p>
             Terminadas las guerras de la Independencia, llego el momento de consolidar nuestras fronteras y allí estaban los soldados fortineros que fueron celosos custodios de nuestras fronteras. Las interiores eran el límite entre la civilización y el desierto, desde donde venia el malón. Allí se libró una fuerte y ruda lucha contra los primitivos dueños de la tierra, y se fueron ganando suelos fértiles para darlas a la producción ganadera y/o cerealera que fueron los grandes pilares de nuestro crecimiento y desarrollo como País.
             </p>
             <p>
             Comenzó entonces otra de las grandes tareas de nuestro Ejercito, el de instruir a los habitantes de esas tierras, que si bien ahora pertenecían a la civilización por extraña paradoja estaban muy lejos de ella, además las puertas de nuestra Patria se habían abierto para todos los hombres del mundo que quisieran habitar el suelo argentino y comenzaron a llegar inmigrantes de Europa de distintas culturas y lenguas en busca de mejores horizontes.
             </p>
             <p>
             El Ejército, comenzó a educar a esos hombres y mujeres llegados de lejanos países, a fundar pueblos, medir las grandes extensiones de tierras y así saber cuantos kilómetros teníamos de largo y de ancho, hizo caminos, construyó escuelas, etc.
             </p>
             <p>
             Después de tantas luchas y sacrificios la mayoría de sus Oficiales y Soldados murieron pobres, habían dado todo a la Patria y no le reclamaban nada.
             </p>
             <p>
             Terminadas las guerras civiles, el País comienza  a organizarse, este proceso de lo que se dio en llamar de la Organización Nacional, culmina con la llegada del General Julio Argentino Roca, a la presidencia de la Nación.
             </p>
             <p>


En esas épocas y ante un hecho fortuito un grupo de oficiales, a cuyo frente se encontraba el Coronel Baldomero Fluguerto Sotelo concurre al velatorio de un camarada fallecido, y allí pueden comprobar el estado de pobreza en que vivían los oficiales que fallecían habiendo luchado para engrandecer a la Patria.
             </p>
             <p>
             El 27 de diciembre de 1881, un grupo de 22 oficiales convocados por el Coronel Baldomero Fluguerto Sotelo, deciden comenzar a juntar fondos para  así poder dar cristiana sepultura a los fallecidos;  la primera denominación que recibe es la de Sociedad Panteón Militar.
             </p>
             <p>
             Numerosos inconvenientes se les plantearon a estos Oficiales, para llevar adelante su objetivo.
             </p>
             <p>
             Debemos señalar que la primera solución se alcanzo mediante el préstamo de una bóveda en el cementerio de la Recoleta, a pesar de la búsqueda exhaustiva que se realizo en los archivos del mencionado cementerio no se ha podido encontrar el nombre del generoso propietario que les facilito la bóveda, estos fueron los comienzos y le permitieron ganar tiempo para reunir el dinero necesario para comprar otra bóveda a fin de ampliar la capacidad de nichos. Esta compra se efectúa en el año 1884, y se pagó con dinero de las cuotas mensuales de los escasos socios de esa época, dinero que fue sabia y honestamente administrado.
             </p>
             <p>
             Una constante a todo lo largo de la historia de la Sociedad fue la de ampliar las escasas disponibilidades en prestaciones con que contaba. Corría el año 1886, y se logra un acuerdo con las empresas de pompas fúnebres para lograr una rebaja en el costo de los sepelios.
             </p>
             <p>
             El 2 de julio de 1888, se aprueba la construcción del primer panteón en el cementerio de la Recoleta, comenzada la construcción de la obra, hasta su finalización la Comisión tuvo una gran tarea llevándola a adoptar una serie de medidas, al no cumplir la firma contratista con los plazos establecidos en los pliegos de la licitación.
             </p>
             <p>
             La financiación de la obra fue por medio de un subsidio, de $ 25.000. = m/n que le fue otorgado por la Ley 2351, es de destacar, que solamente se utilizaron $15.800. = m/n devolviéndose el sobrante a la Contaduría General de la Nación.  Luego de una serie de avatares se logra vender el 8/5/1890, la bóveda del Cementerio de la Recoleta, a pesar de que en fecha 25 de febrero de 1888, se le entrega la posesión a perpetuidad de la sección 20, donde se encontraba ubicada ante la falta de nichos, se decide transferir el dominio y concretar el proyecto de erigirlo en el Cementerio de la Chacarita, donde la Municipalidad le había cedido un lote amplio y muy bien ubicado.
             </p>
             <p>
             El 17 de diciembre de 1905, se firma el contrato con la empresa que había resultado adjudicataria de la obra, Garibaldi y Galli, el monto que ascendía el contrato era de $22.350. = m/n. Ante la falta de dinero y dada la situación apremiante que se vivía, se decide vender la sede social, de la calle Larrea 1032, vender la otra bóveda del cementerio de la Recoleta y/o solicitar un préstamo al Banco Hipotecario Nacional. Ante el fracaso de los proyectos, se llegó a un acuerdo con el Banco «El Hogar Argentino» por medio del cual la Sociedad recibió un préstamo de $20.000. = m/n pagadero a 30 años. Es de destacar que este préstamo fue cancelado en la mitad del tiempo acordado, debido al buen manejo de los recursos y a la contribución voluntaria de $50. =m/n que hicieron muchos asociados.
             </p>
             <p>
             El 24 de febrero de 1907, se dio por finalizada la obra y se disponía de nichos para ataúd.  «El edificio es de una gran pureza de estilo arquitectónico, en sus líneas y formas estrictamente clásicas; su altura máxima es de 25 metros sobre el nivel de la vereda y su profundidad de 7 metros; el exterior es de imitación piedra con zócalo de granito picado a la martelina; el interior consta de una gran capilla hecha de estuco francés, y de tres criptas, con una capacidad de 1.341, nichos para ataúdes y urnas de restos reducidos y 3.400, casilleros para cenizas, o sea un total de 4.741 nichos y casilleros».
             </p>
             <p>
             Para finalizar diremos que entre sus muros descansan, soldados que lucharon por hacer grande a la Patria de los Argentinos, como ejemplo podemos citar al coronel Francisco Uzal, que peleó en la Reconquista en 1806/1807, y formo parte del los Ejércitos Libertadores.
             </p>
             <p>
             Guerreros del Paraguay, entre otros citaremos al Teniente General Adolfo Arana, etc.
             </p>
             <p>
             En un lugar de privilegio y dentro de la capilla, depositadas en una urna de bronce, descansan las cenizas del infatigable luchador, fundador de la Sociedad de Socorros Mutuos Coronel Baldomero Fluguerto Sotelo.
             </p>
             <h4>ACTA CONSTITUTIVA</h4>
             <ul className="primera-lista">
                <li>
                Cnl Baldomero Fluguerto Sotelo
                </li>
                <li>
                Tcnl José M. Lamas
                </li>
                <li>
                Tcnl Manuel F. Oro
                </li>
                <li>
                Tcnl Manuel Sosa
                </li>
                <li>
                Tcnl Rudecindo de la Barra
                </li>
                <li>
                Tcnl Guillermo Kleine
                </li>
                <li>
                Sargento My Luis Chouciño
                </li>
                <li>
                Sargento My Alejo Belaunde
                </li>
                <li>
                Sargento My Juan Martínez
                </li>
                <li>  
                Sargento My Máximo Diana
                </li>
                <li>
                Sargento My Antonio Quiroga
                </li>
                <li>
                Sargento My Francisco Ribeiro
                </li>
                <li>
                Sargento My José M. García
                </li>
                <li>
                Capitán Pedro Arriola
                </li>
                <li>
                Capitán Salvador Figueroa
                </li>
                <li>
                Capitán José L. Rodríguez
                </li>
                <li>
                Capitán José Avalos
                </li>
                <li>    
                Ayudante My Napoleón Narreondo
                </li>
                <li>
                Tte 1º Juan B. Garibaldi
                </li>
                <li>
                Tte 1º Domingo Amoretti
                </li>
                <li>
                Tte1º José P. Fernández 
                </li>
                <li>
                Tte 1º Gerardo G. Caula
                </li>        
             </ul>
             <p>
             «En la ciudad de Buenos Aires veintisiete de Diciembre de mil ochocientos ochenta y uno. Reunidos los señores Jefes y Oficiales que suscriben, en Salón de la Comandancia General de Armas, bajo la Presidencia interina del Ayudante General el señor Coronel D. Baldomero F. Sotelo, con el propósito de cambiar ideas sobre los medios que deberían adoptarse para la adquisición de un terreno en el Cementerio Norte, a objeto de construir un sepulcro, con capacidad suficiente para depositar los restos de los S. Socios y familia, ha resuelto de común acuerdo, constituirse en sociedad con carácter permanente, por ahora darse la denominación de «Sociedad Panteón Militar» y nombrar la Comisión Directiva provisoria que deba propender a la realización de tan benéfico pensamiento; al efecto se propone aquella confeccionar un reglamento que sirva de norma para su régimen y administración, resultando electos por unanimidad los siguientes S.S.:
             </p>
             <ul className="primera-lista">
              <li>
              Presidente: Cnl D. BALDOMERO F. SOTELO
              </li>
                <li>
                Vicepresidente: Tcnl D. RUDECINDO DE LA BARRA
                </li>
                <li>  
                Tesorero: Sargento My D. FRANCISCO RIBEIRO
                </li>
                <li>
                Secretario: Sargento My D. JOSÉ M. GARCÍA
                </li>
                <li>
                Vocales: Tcnl D. FEDERICO BARBARA
                </li>
                <li>
                Sargento My D. LUIS CHOUCIÑO
                </li>
                <li>
                Sargento My D. RAMÓN ÁLVAREZ    
                </li>

             </ul>
             <p className="ultimo-p">
             quienes se ha impuesto el deber de presentar en la próxima sesión, sus trabajos, sin perjuicio de los que espontáneamente pueden someter a la discusión de los demás socios, señalándose al efecto el día 5 de enero de 1882 a las 9.30 a.m. en dicho local.»
             </p>
             <div className="divisor">
                
             </div>

             <p>
             Compilado desde el Archivo Histórico de la Asociación Socorros Mutuos «Fuerzas Armadas» por el señor Prof. Vicente Lencioni
             </p>

             <button className="btn-historia">
                <Link to="/inst" className="link">
               Volver
                </Link>
                </button>



      </section>
        </main>
  
  )
}

export default Historia