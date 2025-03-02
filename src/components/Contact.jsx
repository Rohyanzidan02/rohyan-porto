import '../styles/Contact.css';
import Swal from 'sweetalert2'

// animasi 
import {Fade} from 'react-awesome-reveal'
// icon
import { FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { IoMdSchool } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";;


function Contact() { 
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "59e1d735-1dd9-43a2-8288-fdbf712ef068");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Succes",
                text: "Message sent successfully",
                icon: "success"
              });
        }
      };
  return (
    <>
    <section id='contact'>
      <section className="contact1">
        <div className="contact-container">
          <form onSubmit={onSubmit}>
          <Fade direction='left' delay={100} triggerOnce={true}  >
            <h2>Contact Form</h2> 
            <div className="input-box">
              <label>Full Name</label>
              <input type="text" className="field" placeholder='Enter your name'
              name='name' required />
            </div>
            <div className="input-box">
              <label>Email Address</label>
              <input type="email" className="field" placeholder='Enter your email' name='email' required />
            </div>
            <div className="input-box">
              <label>Your Message</label>
              <textarea name="message" className="field mess" placeholder='Enter your message' required > </textarea>
            </div>
            <button className='inputd' type="submit">Send Message</button>
            </Fade>
          </form>

          {/* Divider */}
          <div className="divider"></div>

          {/* Social Media */}
          <div className="social-container">
          <div className="social-media">
          <Fade direction='right'  triggerOnce={true} cascade={true}>
            <h2>Follow Me</h2>
            <p>Connect with My class:</p>
            <ul>
              <li><a href="https://www.youtube.com/@coursecode-coding"><FaYoutube /></a></li>
              <li><a href="https://www.tiktok.com/@coursecode02?is_from_webapp=1&sender_device=pc"><AiFillTikTok /></a></li>
              <li><a href="#"><IoMdSchool /></a></li>
              <li><a href="#"><SiYoutubeshorts /></a></li>
              <li><a href="https://instagram.com/course.code"><RiInstagramFill /></a></li>

            </ul>
            </Fade>
          </div>
        </div>
        </div>
      </section>
      </section>
    </>
  );
}

export default Contact;