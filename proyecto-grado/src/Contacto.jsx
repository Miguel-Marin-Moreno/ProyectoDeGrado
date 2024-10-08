import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contacto.css';

function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Reemplaza los IDs con los obtenidos en EmailJS
    emailjs.sendForm('service_twqfgzd', 'template_laehvnc', form.current, '85oE5NF-L0ft0PiS8')
      .then((result) => {
          console.log(result.text);
          alert('Mensaje enviado con éxito');
      }, (error) => {
          console.log(error.text);
          alert('Error al enviar el mensaje');
      });

    // Limpiar el formulario después de enviar
    e.target.reset();
  };

  return (
    <div className="contacto-container">
      <h1>Contacto</h1>
      <p className="descripcion">por si necesitas mejor atención, o reportar algún error o bug que hayas identificado</p>
      
      <div className="contacto-content">
        <div className="contacto-info">
          <p>Utiliza las siguientes vías de contacto, o rellena el formulario.</p>
          <p><strong>Vía E-mail</strong></p>
          <a href="mailto:miguelsantiago2329@gmail.com" className="email">miguelsantiago2329@gmail.com</a>
        </div>

        {/* Formulario de contacto */}
        <form ref={form} onSubmit={sendEmail} className="contacto-form">
          <input type="text" name="user_name" placeholder="Escribe tu nombre" required />
          <input type="email" name="user_email" placeholder="Escribe tu e-mail" required />
          <input type="tel" name="user_phone" placeholder="Escribe tu teléfono (Opcional)" />
          <textarea name="message" placeholder="Escribe tu mensaje" required></textarea>
          <button type="submit" className="btn-enviar">ENVIAR MENSAJE</button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;



