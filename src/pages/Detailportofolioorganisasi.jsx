// import hook react router dom
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import '../styles/DetailPortfolio.css';
import { portfolioorganisasiList } from '../data/DataPortofolioOrganisasi';

// import components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

function DetailPortfolioorganisasi() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    // Find the current portfolio item based on the id
    const data = portfolioorganisasiList.find((item) => item.id === id);
    
    // Redirect to not found page if data is undefined
    if (data === undefined) {
        return <Navigate to='/page-not-found' />;
    }

    // Find the index of the current item
    const currentIndex = portfolioorganisasiList.findIndex((item) => item.id === id);
    
    // Calculate previous and next indices
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : portfolioorganisasiList.length - 1; // Loop to last if at first
    const nextIndex = currentIndex < portfolioorganisasiList.length - 1 ? currentIndex + 1 : 0; // Loop to first if at last

    const handleNavigation = (index) => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
        navigate(`/portofolioorganisasi/${portfolioorganisasiList[index].id}`); // Navigate to the selected item
    };

    return (
        <>
            <Navbar />

            <section id='detail-portfolio'>
                <div className="wrapper">
                    <h1>{data.title}</h1>
                    <img src={data.Image} alt={data.title} />
                    <p className="skill"> {data.skill}</p>
                    <p className="deskripsi"> {data.deskripsi}</p>
                    
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

export default DetailPortfolioorganisasi;