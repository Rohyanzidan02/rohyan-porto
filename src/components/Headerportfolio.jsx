import React, { useState, useEffect } from 'react';
import '../styles/HeaderPortfolio.css';
import desainer from '../assets/Headerporto/desainer.jpg';
import programer from '../assets/Headerporto/programer.jpg';
import hardware from '../assets/Headerporto/hardware.jpg';
import management from '../assets/Headerporto/management.jpg';

const slides = [
  {
    id: 1,
    title: 'Desain Grafis',
    subtitle: '',
    image: desainer,
  },
  {
    id: 2,
    title: 'Web Dev',
    subtitle: '',
    image: programer,
  },
  {
    id: 3,
    title: 'IT Support ',
    subtitle: '',
    image: hardware,
  },
  {
    id: 4,
    title: 'MANAGEMENT',
    subtitle: '', // This can be empty
    image: management,
  },
];

function HeaderPortfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="body">
      <header 
        className="store-header" 
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="header-content">
          <h1 className="store-title">
            {slides[currentSlide].title}
          </h1>
          {slides[currentSlide].subtitle && (
            <h2 className="store-subtitle">
              {slides[currentSlide].subtitle}
            </h2>
          )}
        </div>
      </header>
    </div>
  );
}

export default HeaderPortfolio;