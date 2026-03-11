// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


  /* <Modal
          isOpen={modalIsOpen}
           contentLabel="Modal"
          style={{
            overlay: {
              backgroundColor: "var(--modal-overlay)",
              
            },
            content: {
           
              width: "60%",
              height: "70%",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              border: "2px solid var(--modal-border)",
              padding: "20px",
              position: "relative",
              top: "9vw",
              backgroundColor: "var(--modal-bg)",
              color: "var(--text-primary)",
          
          
            },
          }}
        >


 <section style={
    {
      display: "flex",
  flexDirection: "column",
      textAlign: "center",
      width: "100%",
      height: "100%",
      overflowY: "scroll",
      overflowX: "hidden",
      padding: "20px"
    }
 }>

<section>
  <h3>INORMACION DE INTERÉS PARA EL ASOCIADO</h3>
  <p>
    El 05 Feb de 2025, la Sede Central permanecerá cerrada por celebrarse el día de UTEDYC.
  </p>
  <p>Los panteones se abrirán normalmente</p>
  <p>   Consejo Directivo</p>

</section>


 </section>
<div>
  <button onClick={closeModal} style={{
    padding: "10px",
    margin: "10px",
    backgroundColor: "var(--button-primary)",
    color: "var(--button-primary-text)",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }}>
    Cerrar
  </button>
</div>
 
       
  
      </Modal> */
        

      import Modal from "react-modal";


       const [modalIsOpen, setIsOpen] = useState(false);
        
      
        function openModal() {
          setIsOpen(true);
        }
        
        function closeModal() {
          setIsOpen(false);
        }
      