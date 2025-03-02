import { useEffect, useState } from 'react';
// data
import { certifikatList } from '../data/DataCertifikat';
import { portfoliowebList } from '../data/DataPortfolioWeb';
import { multimediaList} from '../data/DataMultimedia';
import { managementList } from '../data/DataManagement';
import { vidioList } from '../data/DataVidio';

import '../styles/Certifikat.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Iconlamaran from '../Icon/IconLamaran'
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
// component
import Contact from '../components/Contact';
// import Headerportfolio from './Headerportfolio';

// import Statistik from "../components/Statistik" 

function Certifikat() {
    const [isVisible, setIsVisible] = useState(false);
    const [filter, setFilter] = useState('all'); // State for filtering

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsVisible(true);
    }, []);

    // Function to handle filter change
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    // Filtered items based on the selected filter
    const filteredCertifikat = filter === 'all' ? certifikatList : certifikatList.filter(item => item.category === filter);
    const filteredWebDev = filter === 'all' ? portfoliowebList : portfoliowebList.filter(item => item.category === filter);
    const filteredMultimedia = filter === 'all' ? multimediaList : multimediaList.filter(item => item.category === filter);
    const filteredManagement = filter === 'all' ? managementList : managementList.filter(item => item.category === filter);
    const filteredVidio = filter === 'all' ? vidioList : vidioList.filter(item => item.category === filter);

    return (
        <>
            <Navbar />
            
            <section id="portfolio-12">
                <div className="wrapper12">
                    {/* <Statistik/> */}
                    {/* <Headerportfolio/> */}
                    <h3 className='h3-porto'>PORTFOLIO</h3>
                    {/* Horizontal Menu */}
                    <div className="filer-menu">
                    <button onClick={() => handleFilterChange('all')} className={filter === 'all' ? 'active' : ''}>All</button>
                    <button onClick={() => handleFilterChange('Logo')} className={filter === 'Logo' ? 'active' : ''}>Desain Logo</button>
                    <button onClick={() => handleFilterChange('webdev')} className={filter === 'webdev' ? 'active' : ''}>Web Dev</button>
                    <button onClick={() => handleFilterChange('management')} className={filter === 'management' ? 'active' : ''}>management</button>
                    <button onClick={() => handleFilterChange('multimedia')} className={filter === 'multimedia' ? 'active' : ''}>multimedia</button>
                    <button onClick={() => handleFilterChange('vidio')} className={filter === 'vidio' ? 'active' : ''}>vidio</button>
                    </div>
                    <hr />
                    
                    <div className="grid12">
                        {/* Display filtered certifikat items */}
                        {filteredCertifikat.map((item) => (
                            <div className="item" key={item.id}>
                                 <Fade direction='up' delay={200} triggerOnce={true} cascade={false}>
                                <Link to={`/certifikat/${item.id}`}>
                                    <img src={item.Image} alt={item.title} />
                                </Link>
                                </Fade>
                            </div>
                        ))}
                    </div>

                    <div className="web">
                        {/* Display filtered web dev items */}
                        {filteredWebDev.map((item) => (
                            <div className="item" key={item.id}>
                                <Fade direction='up' delay={200} triggerOnce={true} cascade={false}>
                                    <Link to={`/portofolioweb/${item.id}`}>
                                        <img src={item.Image} />
                                    </Link>
                                </Fade>
                            </div>
                        ))}
                    </div>

                {/* multimedia */}
                    <div className="web">
                        {/* Display filtered web dev items */}
                        {filteredMultimedia.map((item) => (
                            <div className="item" key={item.id}>
                                <Fade direction='up' delay={200} triggerOnce={true} cascade={false}>
                                    <Link to={`/multimedia/${item.id}`}>
                                        <img src={item.Image} />
                                    </Link>
                                </Fade>
                            </div>
                        ))}
                    </div>


            {/* management */}
                <div className="web">
                        {/* Display filtered web dev items */}
                        {filteredManagement.map((item) => (
                            <div className="item" key={item.id}>
                                <Fade direction='up' delay={200} triggerOnce={true} cascade={false}>
                                    <Link to={`/management/${item.id}`}>
                                        <img src={item.Image} />
                                    </Link>
                                </Fade>
                            </div>
                        ))}
                    </div>

            {/* vidio */}
                <div className="web">
                        {/* Display filtered web dev items */}
                        {filteredVidio.map((item) => (
                            <div className="item" key={item.id}>
                                <Fade direction='up' delay={200} triggerOnce={true} cascade={false}>
                                    <Link to={`/vidio/${item.id}`}>
                                        <img src={item.Image} />
                                    </Link>
                                </Fade>
                            </div>
                        ))}
                    </div>


                </div>
            </section>
            <Contact />
            <Iconlamaran/>
            <Footer />
            
        </>
    );
}

export default Certifikat;