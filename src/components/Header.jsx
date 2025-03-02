import profilePicture from  '../assets/profile-picture.png'
import background from '../assets/background.png'
import '../styles/Header.css'
// icon
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

// animasi muncul 
import {Fade} from 'react-awesome-reveal'

function header() {
  return (

    <>
    <Fade triggerOnce={true}>
    <div id='header'>
    <header>
      <Fade delay={100} triggerOnce={true} cascade={true}>
        <div className="header-jumbotron">
          
            <img src={profilePicture} />
            <h3>Muhammad <br />
               Rohyan Zidan</h3>
           {/* <p>Programer - Desain Grafis 
            <br />Hardware/Software Engginer </p> */}


           <div className="socialMedia">
            <a href=""><FaInstagram /></a>
            <a href="https://github.com/Rohyanzidan02"><FaGithub /> </a>
            <a href="https://www.linkedin.com/in/rohyan-zidan-29b5002ab/"><FaLinkedinIn /></a>
            <a href="Https://wa.me/+6282110173830"><FaWhatsapp /></a>
           </div>
        </div>
        </Fade>
    </header>
    </div>
    </Fade>
    </>
  )
}

export default header