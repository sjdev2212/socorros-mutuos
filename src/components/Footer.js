import React from "react";
import "../styles/Footer.css";
import google from "../images/google-maps.svg";
import instagram from "../images/insta.svg";
import phone from "../images/phone.svg";
import whats from "../images/whatup.svg";
import face from "../images/facebook.svg";
import mail from "../images/mail.svg";

const Footer = () => {
  return (
    <main className="footer-container">
      <section className="newsletter">
        <h1 className="boletin-h1">Suscríbase a nuestro Boletín</h1>
        <p className="boletin-p">
          Reciba en su correo electrónico todas las novedades de nuestra
          Asociación.
        </p>
        <form className="form">
          <input
            className="input"
            type="email"
            placeholder="Ingrese su correo electrónico"
            required
          />
          <button className="btn-boletin" type="submit">
            Suscribirse
          </button>
        </form>
        <div className="horarios">
            <h3 className="horarios-h3">Horarios de atención:</h3>
            <p  className="horarios-p">Administración: 09.00 a 15.30 hs. </p>
            <p className="horarios-p">Chacarita: 09.00 a 15.00 hs.. </p>

        </div>
      </section>
      <section className="contact">
        <ul>
          <li>
            <div>
              <img className="face" src={face} alt="facebook" />
            </div>
            <p>Facebook</p>
          </li>
          <li className="li-contact">
            <div>
              <img className="phone" src={phone} alt="phone" />
            </div>
            <div className="tel-cont">
              <p className="tel-p">Telefonos:</p>
              <p className="telefonos">4342-6741/7363/7259</p>
            </div>
          </li>
          <li>
            <div>
              <img className="google" src={google} alt="google" />
            </div>
            <p className="direccion">Piedras 77 5to piso "B"- CABA </p>
          </li>
          <li>
            <div>
              <img className="instagram" src={instagram} alt="instagram" />
            </div>
            <p className="contact-insta">Instagram</p>
          </li>
          <li>
            <div>
              <img className="whats" src={whats} alt="whats" />
            </div>
            <p className="contact-whats">Whatsapp</p>
          </li>
          <li>
            <div>
              <img className="mail" src={mail} alt="mail" />
            </div>
            <p className="contact-whats">Correo electrónico</p>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Footer;
