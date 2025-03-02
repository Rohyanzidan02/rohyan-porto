// import hook react router dom
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import '../styles/DetailPortfolio.css';
import { portfolioList } from '../data/DataPortfolio';

import { HashLink } from 'react-router-hash-link';

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

// import components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';

import ScrollToTop from '../components/ScrollToTop';

function DetailPortfolio() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    // Find the current portfolio item based on the id
    const data = portfolioList.find((item) => item.id === id);
    
    // Redirect to not found page if data is undefined
    if (data === undefined) {
        return <Navigate to='/page-not-found' />;
    }

    // Find the index of the current item
    const currentIndex = portfolioList.findIndex((item) => item.id === id);
    
    // Calculate previous and next indices
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : portfolioList.length - 1; // Loop to last if at first
    const nextIndex = currentIndex < portfolioList.length - 1 ? currentIndex + 1 : 0; // Loop to first if at last

    const handleNavigation = (index) => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
        navigate(`/portfolio/${portfolioList[index].id}`); // Navigate to the selected item
    };

    return (
        <>
            <Navbar />

            <section id='detail-portfolio'>
                <div className="wrapper">
                    <h1>{data.title || "Title Not Available"}</h1>
                    {data.Image ? (
                        <img src={data.Image} alt={data.title} />
                    ) : (
                        <p>No image available</p>
                    )}
                    {data.image2 ? (
                        <img src={data.image2} alt={data.title} />
                    ) : (
                        <p></p>
                    )}
                    <p className="skill"> {data.skill || "No skills listed"}</p>
                    <p className="deskripsi">{data.deskripsi || "No description available."}</p>
                    {/* Navigation buttons */}
                    <div id="button-porto">
                        <ul>
                            <li>
                                <button onClick={() => handleNavigation(prevIndex)}>
                                    <MdKeyboardArrowLeft />
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavigation(nextIndex)}>
                                    <MdKeyboardArrowRight />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
            <ScrollToTop />
        </>
    );
}

export default DetailPortfolio;