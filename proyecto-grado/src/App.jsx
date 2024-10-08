import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Home from './Home'; // Importa tu componente principal de inicio
import Contacto from './Contacto'; // Importa el componente de contacto
import Informacion from './Informacion'; // Importa el nuevo componente de información
import './App.css'; // Estilos globales

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <header>
          <nav className="navbar">
            <div className="logo">
              <img src="./assets/logo.png" alt="Logo" /> {/* Logo del navbar */}
              <span>U Bike <span className="highlight">Ai</span></span> {/* Marca o logo del navbar */}
            </div>
            <ul className="nav-links">
              <li><Link to="/">INICIO</Link></li>
              <li><Link to="/contacto">CONTACTO</Link></li>
              <li><Link to="/informacion">INFORMACION</Link></li> {/* Enlace a la nueva página de Información */}
            </ul>
            {/* Solo mostrar los botones de iniciar sesión y registro en la página de inicio */}
            <Routes>
              <Route path="/" element={
                <div className="auth-buttons">
                  <button className="login-btn">INICIAR SESIÓN</button>
                  <button className="register-btn">REGISTRO</button>
                </div>
              } />
            </Routes>
          </nav>
        </header>

        {/* Rutas para las diferentes páginas */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Página de Inicio */}
          <Route path="/contacto" element={<Contacto />} /> {/* Página de Contacto */}
          <Route path="/informacion" element={<Informacion />} /> {/* Página de Información */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;





