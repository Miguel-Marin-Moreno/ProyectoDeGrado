import './Home.css'; // Usamos un archivo de estilos para la pantalla principal
import motocicleta from './assets/motocicleta.png';

function Home() {
  return (
    <div className="home-container">
      <h1>U Bike <span className="highlight">Ai</span></h1>
      <div className="description">
        <p>
          Una pagina web que utiliza técnicas avanzadas de Machine Learning para proporcionar recomendaciones objetivas y personalizadas de motocicletas a los usuarios, basándose en sus necesidades y preferencias específicas, y en datos técnicos actualizados sobre los modelos disponibles en el mercado.
        </p>
      </div>
      <div className="image-and-button-container">
        <div className="image-container">
          <img src={motocicleta} alt="Motocicleta" />
        </div>
        <div className="button-container">
          <button className="continue-btn">CONTINUAR</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
