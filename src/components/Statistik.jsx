
import '../styles/Statistik.css';
import { Fade } from 'react-awesome-reveal';
import cv from '../assets/berkas/cv1.pdf'; // Import the CV directly
import { useNavigate } from 'react-router-dom';

function Statistik() {
  const fullText = "Saya Muhammad Rohyan Zidan, seorang Desain Grafis soft/hard engineering, Frontend dev, Administratif. Saya sangat antusias untuk bergabung dengan perusahaan yang memiliki visi dan nilai yang sejalan dengan saya. Portfolio ini menggambarkan karya-karya yang saya buat dengan penuh dedikasi. Terima kasih telah mengunjungi. Saya berharap bisa berdiskusi lebih lanjut mengenai bagaimana saya bisa memberikan kontribusi di posisi yang tersedia.";

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cv; // Use the imported cv variable
    link.download = 'CV_Muhammad_Rohyan_Zidan.pdf';
    link.click();
  };
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/lamaran'); // Mengarahkan ke halaman Lamaran
  };

  return (
    <section id="statistik" className="statistik-section">
      <Fade direction='up' delay={300} triggerOnce={true} cascade={true}>
        <div className="statistik-container">
          <h2 className="statistik-title">PORTOFOLIO SAYA</h2>
          <div className="statistik-content">
            <p className="typing-text">{fullText}</p>
            <div className="button-container">
              <button 
                className="cv-download-button"
                onClick={downloadCV}
              >
                Unduh CV
              </button>
              <button 
              className="cv-download-button"
              onClick={handleButtonClick}>Unduh surat lamaran</button>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Statistik;