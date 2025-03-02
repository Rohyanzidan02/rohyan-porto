import React from 'react';
import { SiAffinitydesigner } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa"; // Contoh ikon lain
import { MdGraphicEq } from "react-icons/md"; // Contoh ikon lain
import { AiOutlineDesktop } from "react-icons/ai";
import { AiFillAppstore } from "react-icons/ai";
import {Fade} from 'react-awesome-reveal'

import '../styles/Coba.css';

const Coba = () => {
  const cards = [
    { title: "Desain Grafis", 
        detail: "hhh",
         icon: <SiAffinitydesigner /> 
    },

    { title: "Frontend Devloper", detail:
         "lorem ipsum grade hjhjhjh", 
         icon: <FaCode /> 
    },

    { title: "Staff Administratif",
         detail: "lorem ipsum grade hjhjhjh", 
         icon: <AiFillAppstore /> 
    },

    { title: "IT Support ", detail:
         "lorem ipsum grade hjhjhjh",
          icon: <AiOutlineDesktop />
   }
  ];

  return (
    <div className="container-1">
      <section className="card-section">
      <Fade direction='up' delay={0} triggerOnce={true} cascade={false}>
        {cards.map((card, index) => (
          <div 
            key={index}
            className="card"
            style={{ "--color": "white" }}
          >
            <i className="card-icon">{card.icon}</i>
            <h3 className="card-title1">{card.title}</h3>
            {/* <p className="card-detail">{card.detail}</p> */}
          </div>
        ))}
        </Fade>
      </section>
      
    </div>
  );
}

export default Coba;