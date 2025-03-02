import '../styles/Footer.css'
// icon
import { GiCampCookingPot } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { FaBook } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";


function Footer() {
  return (
    <footer>
        
        <div>
          <h1>ADDRES</h1>
          <p>Pademangan, Barat, Jakarta Utara
            <br />
            <br />indonesia </p>
          
        </div>

        <div>
          <h1>CONTACT</h1>
          <p>Email : rohyanzidan02@gmail.com</p>
          <p>Phone : +6282110173830</p>
        </div>
        <div className="hobi">
            <h1>Hobby</h1>
            <div className="icon-hobi">
          <ul>
                <li><GiCampCookingPot /></li>
                <li>Cooking</li>
          </ul>
          <ul>
                <li><CgGym /></li>
                <li>Sport</li>
          </ul>
          <ul>
                 <li><FaBook /></li>
                 <li>Reading</li>
          </ul>
          <ul>
                  <li><MdLocalMovies /></li>
                  <li>Movies</li>
          </ul>
          </div>
        </div>

        <div id='copy'>
        <p>&copy;Muhammad Rohyan Zidan 2025</p> 
        </div>
    </footer>
  )
}

export default Footer

            
            