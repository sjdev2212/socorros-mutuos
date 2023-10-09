import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import google from "../images/google.png";
import instagram from "../images/insta.svg";
import phone from "../images/phone.svg";
import whats from "../images/whatup.svg";
import face from "../images/facebook.svg";
import mail from "../images/mail.svg";

const Footer = () => {
  const watup = '+1126577262';
  const emailAddress = 'info@socorrosmutos.com.ar'; 

  const handleEmailClick = () => {
    // Create a mailto link with the email address
    const mailtoLink = `mailto:${emailAddress}`;

    // Open the user's email client with the mailto link
    window.location.href = mailtoLink;
  };
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
              <Link to="https://www.facebook.com/socorros.mutuos.547?mibextid=ZbWKwL" target="_blank">
              <img className="face" src={face} alt="facebook" />
              </Link>
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
              <Link to="https://www.google.com/maps/@-34.6090162,-58.3777777,3a,75y,237.78h,91.9t/data=!3m7!1e1!3m5!1syXk1sZUC48eqZsx-0tcqhg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DyXk1sZUC48eqZsx-0tcqhg%26cb_client%3Dsearch.gws-prod.gps%26w%3D86%26h%3D86%26yaw%3D205.25864%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu" target="_blank">
              <img className="google" src={google} alt="google" />
              </Link>
            </div>
            <p className="direccion">Piedras 77 5to piso "B"- CABA </p>
          </li>
          <li>
 
            <div>
            <Link style={{
              textDecoration: "none",
              color: "whitesmoke",
              fontSize : "1.45vw",
            }}  to="https://instagram.com/ac.socorros.mutuos?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank">
              <img className="instagram" src={instagram} alt="instagram" />
            </Link>
            </div>
       
            <p className="contact-insta">Instagram</p>
          </li>
          <li>
            <div>
          <Link to={`https://wa.me/${watup}`} target="_blank" rel="noopener noreferrer">
              <img className="whats" src={whats} alt="whats" />
            </Link>
            </div>
            <p className="contact-whats">
         
          Whatsapp
            </p>
          </li>
          <li>
            <div>
              <Link onClick={handleEmailClick} target="_blank" rel="noopener noreferrer">
              <img className="mail" src={mail} alt="mail" />
              </Link>
            </div>
            <p className="contact-whats">Correo electrónico</p>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Footer;
