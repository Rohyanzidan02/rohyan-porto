
import '../styles/About.css';
// animasi turun
import {Fade} from 'react-awesome-reveal'
// icon
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";

import { SiCoreldraw } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

import { SiGooglecolab } from "react-icons/si";
// import { PiMicrosoftExcelLogo } from "react-icons/pi";
// import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
// import { PiMicrosoftWordLogo } from "react-icons/pi";
import { LiaMicrosoft } from "react-icons/lia";
import { Link } from 'react-router-dom';

function about() {
  return (

    <section id='about'>
    <div className="wrapper">
        <h3>about</h3>
        <Fade direction='up' delay={200} triggerOnce={true} cascade={false}>
        <p>Saya adalah individu yang bertanggung jawab, disiplin, dan memiliki komitmen tinggi dalam dalam 
          menyelesaikan setiap tugas dengan profesional.
        </p>
        <p>Saya memiliki kemempuan untuk bekerja sendiri maupun dalam tim
            serta senantiasa berorientasi pada hasil.
            dengan semangat belajar dan 
            rasa ingin tahu yang tinggi, saya terus mengembangkan diri 
            baik dalam aspek teknis maupun interpersional </p>
            </Fade>
            {/* profile */}
            <div id="profile">
              <Fade delay={500} triggerOnce={true}>
              <ul>
                  <li>
                      <button>
                          <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>Biodata Lengkap</Link>
                      </button>
                  </li>
              </ul>
              </Fade>
          </div>

            {/* sofyhware and tools */}
            <h4>SOFTHWARE AND TOOLS</h4>
            <Fade delay={200} cascade={true} triggerOnce={true} >
            <div className="skills">
            <FaHtml5 />
            <FaCss3Alt />
            <DiJavascript />
            <FaReact />
            </div>

            {/* <h4>Desain Grafis Tools</h4> */}
            <div className="skills">
            <SiCoreldraw />
            <SiAdobephotoshop />
            <SiCanva />
            <FaFigma />

            </div>

            {/* <h4>Management & Data</h4> */}
            <div className="skills">
            <SiGooglecolab />
            {/* <PiMicrosoftExcelLogo />
            <PiMicrosoftPowerpointLogo />
            <PiMicrosoftWordLogo /> */}
            <LiaMicrosoft />
            </div>
            </Fade>
    </div>
    </section>
  )
}

export default about