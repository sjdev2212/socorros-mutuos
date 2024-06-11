import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Historia from "./components/Historia";
import Urgencias from "./components/Urgencias";
import Footer from "./components/Footer";
import Institucional from "./components/Institucional";
import ServiciosMobile from "./components/ServiciosMobile";
import NuevoPlanSalud from "./components/NuevoPlanSalud";
import ConvenioGerdanna from "./components/ConvenioGerdanna";
import Sepelios from "./components/Sepelios";
import PanteonesPropios from "./components/PanteonesPropios";
import Convenio from "./components/Convenio";
import Subsidio from "./components/Subsidio";
import Contacto from "./components/Contacto";
import Preguntas from "./components/Preguntas";
import Asociarse from "./components/Asociarse";
import SitiosMobile from "./components/SitiosMobile";
import FormasDePago from "./components/FormasDePago";
import DeInteresMobile from "./components/DeInteresMobile";
import ConstanciaDePago from "./components/ConstanciaDePago";
import Prestadores from "./components/Prestadores";
import Novedades from "./components/Novedades";
import Turismo from "./components/Turismo";
import Visita from "./components/Visita";
import GerdannaSlides from "./components/GerdannaSlides";
import ScrollToTop from "./components/ScrollToTop";
import Modal from "react-modal";
import logo from "./images/logo.png";
import misa from "./images/misa.jpeg";

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    openModal();

    setTimeout(() => {
      closeModal();
    }
    , 10000);
  }, []);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "#383838",
    },
  };

  const customStyles2 = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "#383838",
      backgroundColor : "rgb(12 151 7)",
      height : "35vw",
      

    },
  };
  return (
    <main className="main-container">
      <Navbar />
      <ScrollToTop />
      <Modal
        isOpen={modalIsOpen}
        style={customStyles2}
        contentLabel="Example Modal"
      >
     <section className="popup">
<img src={misa} alt="misa" style={{width: "65%",
  height: "28vw"
}}/>  
      </section>
     </Modal>
     
{/*      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <section className="popup">
          <div className="pop-title">
            <img src={logo} alt="logo" style={{ width: "75px" }} />
            <h2 className="pop-h2">
              Asociación Socorros Mutuos Fuerzas Armadas
            </h2>
          </div>
          <div>
            <h5>
              INAES CF 78
              <br />
              Convocatoria a elecciones y calendario electoral año 2024
              <br />
              Renovación parcial del Consejo Directivo y Total de la Junta
              Fiscalizadora
            </h5>
          </div>
          <div className="content">
            <h5 className="subtitulo">Señoras y Señores Asociados Activos:</h5>
            <p className="parrafo-1">
              En cumplimiento con las dispociciones estatutarias y
              reglamentarias en vigencia, el Consejo Directivo de la Asociación
              Socorros Mutuos Fuerzas Armadas, convoca a las Señoras y Señores
              Asociados Activos habilitadas/os a intervenir, a partir del 15 de
              MAR 2024, en el proceso eleccionario para la renovación de
              autoridades de la Institución, de acuerdo con las siguientes
              pautas:
            </p>
            <ol>
              <li className="items">
                <p className="lista">
                La elección de los miembros del Consejo Directivo y de la Junta
                Fiscalizadora se efectuará por voto secreto en forma personal o
                por correo, para cubrir los siguientes cargos, cuyos candidatos
                deberán satisfacer las exigencias del ART. 14 del Estatuto
                Social:
                </p>
              </li>
              <div>
                <p className="lista">
                  <strong>Consejo Directivo:</strong>
                  <br></br>3 Vocales Titulares{" "}
                  <span style={{ color: "green" }}> 2024/2028</span>
                  <br></br>1 Vocal Suplente{" "}
                  <span style={{ color: "green" }}> 2024/2028</span>
                  <br></br>
                  <br></br>
                  <strong>Junta Fiscalizadora:</strong>
                  <br></br>3 Miembros Titulares{" "}
                  <span style={{ color: "green" }}> 2024/2026</span>
                  <br></br>2 Miembros Suplentes{" "}
                  <span style={{ color: "green" }}> 2024/2026</span>
                </p>
              </div>
              <li>
                <p className="lista">
                El Calendario Electoral queda determinado de la siguiente
                manera:
                </p>
             
              </li>
              <div className="pares">
                <p className="lista">
                  <strong>15 de MAR 24:</strong>
                </p>
                <p className="lista">
                  La secretaría de Lunes a Viernes de 10hs a 14hs, tendrá a
                  disposición de los interesados acreditados: normas
                  estatutarias y reglamentarias vigentes. Formularios
                  específicos(para los representates de las LISTAS de
                  candidatos) que avalan el proceder a seguir. Padrón electoral
                  para consultas.
                </p>
              </div>
              <div className="pares">
                <p className="lista">
                  <strong>15 de ABR 24:</strong>
                </p>
                <p className="lista">
                  Vence a las 14:00 horas la presentación de la documentación y
                  nómina de los candidatos.
                </p>
              </div>
              <div className="pares">
                <p className="lista">
                  <strong>30 de ABR 24:</strong>
                </p>
                <p className="lista">
                  El Consejo Directivo, informará por escrito, a los
                  Representates, las observaciones formuladas a sus
                  presentaciones de propuesta de candidatos.
                </p>
              </div>
              <div className="pares">
                <p className="lista">
                  <strong>7 de MAY 24:</strong>
                </p>
                <p className="lista">
                  Plazo máximo disponible por los REPRESENTATES, para la nueva
                  elevación a la Secretaría General, habiendo considerado las
                  objeciones e introducido las modificaciones.
                </p>
              </div>
              <div className="pares">
                <p className="lista">
                  <strong>09 de MAY 24:</strong>
                </p>
                <p className="lista">
                  Reunión Extraordinaria del Consejo Directivo, con la
                  asistencia de los respectivos Representates, para OFICIALIZAR
                  las listas que satisfagan las condiciones exigidas.
                  Desiganción de la Junta Electoral.
                </p>
              </div>
              <div className="pares">
                <p className="lista">
                  <strong>03 de JUN 24:</strong>
                </p>
                <p className="lista">
                  Impresión de listas oficializadas y documentación electoral
                </p>
              </div>
              <div className="pares">
                <p className="lista">
                  <strong>15 de JUL 24:</strong>
                </p>
                <p className="lista">
                  Habilitación de un apartado postal en correo, para uso
                  exclusivo de la recepción de votos, distribución de la
                  documentación electoral a los asociados en condiciones de
                  participar.
                </p>
              </div>
              <div className="pares">
                <p className="lista">
                  <strong>Mes asamblea</strong>
                </p>
                <p className="lista">
                  Primer día hábil de la segunda quincena: Habilitación de urnas
                  de 10:00 a 14:00 horas para quienes emitan su voto
                  personalmente.
                  <br></br>
                  Inicio del retiro de sobres del apartado postal.
                </p>
              </div>
              <div className="pares">
                <p className="lista">
                  <strong>Asamblea</strong>
                </p>
                <p className="lista">
                  La recepción de votos finalizará una hora antes del inicio de
                  la Asamblea. Una vez comenzada oficialmente, se dará inicio al
                  escrutinio.
                  <br></br>
                  El Presidente proclamará la lista ganadora.
                </p>
              </div>
              <li>
                <p className="lista">
                Pueden votar los Asociados Activos que cumplan los requisitos
                establecidos en el ART. 34 del Estatuto Social.
                </p>
              
              </li>
              <li>
                <p className="lista">
                La Junta Electoral, cumplirá con sus funciones conforme lo
                determinado en el ART. 43 del Estatuto Social y los artículos 25
                al 35 de la Reglamentación de Elecciones.
                </p>
              </li>
              <li>
                <p className="lista">
                El Proceso Eleccionario quedará interrumpido si al cumplirse el
                plazo establecido(15 ABR 24 - 14:00 hs) solamente se ha
                presentado una lista, la que oficializada por el Consejo
                Directivo, será PROCLAMADA directamente en la próxima Asamblea
                Ordinaria.
                </p>
              </li>
            </ol>
          </div>
          <div>
            <p className="fecha">Ciudad Autónoma de Buenos Aires, 28 de Febrero de 2024</p>
          </div>
          <div className="directivos">
            <p>
              <strong>Sergio Rubén Chiacchio</strong>
              <br />
              <strong>Coronel(R)</strong>
              <br />
              <strong>Secretario General</strong>
            </p>
            <p>
              <strong>José Luis Bo</strong>
              <br />
              <strong>Coronel(R)</strong>
              <br />
              <strong>Presidente</strong>
            </p>
          </div>
        </section>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            cursor: "pointer",
            border: "none",
            marginTop: "10px",
            position: "relative",
            top: "80vw",
            width: "100px",
          }}
          onClick={closeModal}
        >
          Cerrar
        </button>
      </Modal> */}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inst" element={<Institucional />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/urgencias" element={<Urgencias />} />
        <Route path="/servicios-mob" element={<ServiciosMobile />} />
        <Route path="/nuevo-plan" element={<NuevoPlanSalud />} />
        <Route path="/convenio-gerdanna" element={<ConvenioGerdanna />} />
        <Route path="/sepelios" element={<Sepelios />} />
        <Route path="/panteones-propios" element={<PanteonesPropios />} />
        <Route path="/convenio" element={<Convenio />} />
        <Route path="/subsidio" element={<Subsidio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/preguntas" element={<Preguntas />} />
        <Route path="/asociarse" element={<Asociarse />} />
        <Route path="/sitios-mob" element={<SitiosMobile />} />
        <Route path="/formas-de-pago" element={<FormasDePago />} />
        <Route path="/de-interes-mob" element={<DeInteresMobile />} />
        <Route path="/constancia-de-pago" element={<ConstanciaDePago />} />
        <Route path="/prestadores" element={<Prestadores />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/turismo" element={<Turismo />} />
        <Route path="/visita" element={<Visita />} />
        <Route path="/gerdanna-slides" element={<GerdannaSlides />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
