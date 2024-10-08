import React from 'react';
import './Informacion.css';
import icono1 from './assets/icono1.png'; // Reemplaza por los íconos que tengas
import icono2 from './assets/icono2.png'; // Asegúrate de tener las imágenes correctas
import icono3 from './assets/icono3.png';
import icono4 from './assets/icono4.png';

function Informacion() {
  return (
    <div className="informacion-container">
      <h1>Utilizamos las siguientes tecnologías</h1>
      <div className="informacion-content">
        <div className="tecnologia-item">
          <img src={icono1} alt="Icono Cuentas Seguras" />
          <div>
            <h2>Cuentas seguras</h2>
            <p>Utilizamos servidores con servicios de seguridad de alto nivel.</p>
          </div>
        </div>

        <div className="tecnologia-item">
          <img src={icono2} alt="Icono Machine Learning" />
          <div>
            <h2>Machine Learning</h2>
            <p>Tus datos siempre estarán seguros gracias a la encriptación de todas las transferencias.</p>
          </div>
        </div>

        <div className="tecnologia-item">
          <img src={icono3} alt="Icono WebScraping" />
          <div>
            <h2>WebScraping</h2>
            <p>Utilizamos tecnologías basadas en estándares que se actualizan continuamente añadiendo mejoras de seguridad.</p>
          </div>
        </div>

        <div className="tecnologia-item">
          <img src={icono4} alt="Icono Atención personalizada" />
          <div>
            <h2>Atención personalizada</h2>
            <p>Te ofrecemos una atención totalmente personal para solucionar cualquier duda o consulta.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Informacion;
