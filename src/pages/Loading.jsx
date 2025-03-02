import '../styles/Loading.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import {Fade} from 'react-awesome-reveal'


function Loading() {
    return (

        <>
        <div className="pembungkus">
        <div className="loading-container">
            <div className="container">
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="ring"></div>
                <span className="welcome typing">Hello...</span> {/* Add the typing class here */}
            </div>
            <div className="my">
                <h1 className="portfolio-title">WELCOME TO MY PORTFOLIO</h1>
            </div>

            <Fade direction='' delay={400} triggerOnce={true} cascade={false}>
            <Link to="Home" className="home-button">Touch Me</Link> {/* Add the Link component */}
            </Fade>
            </div>
            </div>
            <Footer />
            </>
            
    );
}

export default Loading;