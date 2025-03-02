
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Statistik from "../components/Statistik" 
import Contact from "../components/Contact"
import Headerportfolio from "../components/Headerportfolio"
import Lamaran from "../components/Lamaran"

// coba
import Iconlamaran from '../Icon/IconLamaran'

// component
import ScrollToTo from "../components/ScrollToTop"

function HomeLamaran() {
  return (
    <>
        <Navbar />
        {/* <Headerportfolio/> */}
        <Lamaran/>
        {/* <Contact /> */}
        <Footer />
        <ScrollToTo/>
        <Iconlamaran/>
        
        {/* <Iconscrool/> */}
    </>
  )
}

export default HomeLamaran