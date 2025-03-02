import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/PageNotFound.css"; 
import {Fade} from 'react-awesome-reveal'

function PageNotFound() {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Update waktu setiap detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Format tanggal dan hari
  const formattedDate = currentTime.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Animasi teks 404
  const render404Animation = () => {
    return (
      <div className="error-container">
        <div className="error-code">404</div>
        <div className="error-glitch"></div>
      </div>
    );
  };

  return (
    <>
      <Navbar />

      <div className="atas">
      <div className="not-found-wrapper">
      <Fade direction='' delay={400} triggerOnce={true} cascade={true}>
        {render404Animation()}
        
        <div className="home-button">
        <div className="time-display">
          <div className="digital-clock">
            {currentTime.toLocaleTimeString()}
          </div>
          <div className="current-date">{formattedDate}</div>
        </div>
        </div>

          <div className="home-button">
        <p className="animated-text">Oops...Halaman yang Kamu tuju tidak ditemukan</p>
        </div>
        </Fade>
      </div>
      </div>
      
      <Footer />
    </>
  );
}

export default PageNotFound;