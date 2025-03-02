
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Chart from "../components/Chart"
import Portfolio from "../components/Portfolio"
import About from "../components/About"
import Footer from "../components/Footer"
import Statistik from "../components/Statistik" 
import Contact from "../components/Contact"
import Coba from "../components/coba"
import HeaderPortfolio from "../components/Headerportfolio"

import IconNavbar from "../Icon/IconNavbar"

import Lamaran from "../components/Lamaran"



function home() {
  return (
    <>
        <Navbar />
        <Header />
        <Statistik/>
        {/* <Lamaran/> */}
        <Coba />
        <Chart />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
        
        <IconNavbar/>
        {/* <Iconscrool/> */}
    </>
  )
}

export default home