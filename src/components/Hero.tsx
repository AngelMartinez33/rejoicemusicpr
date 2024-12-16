import React from 'react';
import './Hero.css';
import background from '/src/assets/background.jpg'

const Hero = () => {
  return (
    <section className="hero-container">
      <img 
        src={background}
        alt="Background"
        className="hero-image"
      />
      <div className="hero-content">
        <h1 className="hero-title">Rejoice Music</h1>
        <p className="hero-subtitle">Ministerio de Alabanza y Adoración</p>
        <a href='https://youtube.com/@rejoicemusicpr?si=wPofQRi1CuAMVMqr'><button className="hero-cta-button">Ver en YouTube</button></a>
      </div>
    </section>
  );
};

export default Hero;