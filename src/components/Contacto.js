import React from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { useRef } from "react";
import "../styles/Contacto.css";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      form.current.user_name.value === "" ||
      form.current.user_email.value === "" ||
      form.current.message.value === ""
    ) {
      toast.error("LLene todos los campos");
      return;
    }

    emailjs
      .sendForm(
        "service_xedip1o",
        "template_t0z9cfi",
        form.current,
        "vvsATdb4z4kkoYGOa"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Mensaje enviado");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <main className="contacto-cont">
      <Toaster
        position="top-center"
        reverseOrder={false}
        autoClose={6000}
        toastOptions={{
          style: {
            background: "green",
            borderRadius: "10px",
            color: "whitesmoke",
            height: "8vw",
          },
        }}
        className="tosti"
      />
      <section className="contacto-left">
        <h2>Contáctenos</h2>

        <form ref={form} onSubmit={sendEmail}>
          <input placeholder="nombre" type="text" name="user_name" />

          <input
            placeholder="correo electronico"
            type="email"
            name="user_email"
          />

          <textarea placeholder="mensaje" name="message" />
          <button type="submit" value="Send">
            {" "}
            Enviar{" "}
          </button>
        </form>
      </section>
      <section className="contacto-right">
        <div className="divider">
          <p className="comun">Direccion:</p>
          <p className="resaltado">Piedras 77 5to "B" CABA CP 1070 </p>
        </div>
        <div className="divider">
          <p className="comun">Conmutador:</p>
          <p className="resaltado">
            4342-6741 / 7363 / 7259 (Líneas rotativas)
          </p>
        </div>
        <div className="divider">
          <p className="comun">Administración de Panteones:</p>
          <p className="resaltado">Int. 206 / 207</p>
        </div>
        <div className="divider">
          <p className="comun">Cobranzas:</p>
          <p className="resaltado"> Int. 208</p>
        </div>
        <div className="divider">
          <p className="comun">Prestaciones Varias:</p>
          <p className="resaltado">Int. 32</p>
        </div>
        <div className="divider">
          <p className="comun">Relaciones Públicas y Promoción:</p>
          <p className="resaltado">Int. 33</p>
        </div>
        <div className="divider">
          <p className="comun">Secretaría:</p>
          <p className="resaltado">Int. 304 y 305</p>
        </div>
        <div className="divider">
          <p className="comun">
            Servicio de Urgencias- Emergencias – Atención Médica Domiciliaria:
          </p>
          <p className="resaltado">
            4959-9595 para el interior del país: 0810-666-6350
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contacto;
