import { useParams, Navigate, useNavigate } from 'react-router-dom';
import '../styles/DetailPortfolio.css';
import { certifikatList } from '../data/DataCertifikat';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

// icon next
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdArrowBack } from "react-icons/md"; // Import back icon
import { FaHome } from "react-icons/fa";

function DetailSertifikat() {
    const { id } = useParams();
    const navigate = useNavigate(); // Initialize useNavigate

    // Find the data based on the id
    const data = certifikatList.find((item) => item.id === id);

    // Redirect to not found page if data is undefined
    if (!data) {
        return <Navigate to='/page-not-found' />;
    }

    // Find the index of the current item
    const currentIndex = certifikatList.findIndex((item) => item.id === id);

    // Calculate previous and next indices
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : certifikatList.length - 1; // Loop to last if at first
    const nextIndex = currentIndex < certifikatList.length - 1 ? currentIndex + 1 : 0; // Loop to first if at last

    const handleNavigation = (index) => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
        navigate(`/certifikat/${certifikatList[index].id}`); // Navigate to the selected item
    };

    return (
        <>
            <Navbar />
            <section id='detail-portfolio'>
                <div className="wrapper">
                    <h1>{data.title}</h1>
                    <img src={data.Image} alt={data.title} />
                    <img src={data.Image2} />
                    <p className="deskripsi"><b></b> {data.skill}</p>
                    
                    <p className="deskripsi"><b></b> {data.skill2}</p>

                    {/* Navigation buttons */}
                    <div id="button-porto">
                        <ul>
                            <li>
                                <button onClick={() => handleNavigation(prevIndex)} aria-label="Previous certificate">
                                    <MdKeyboardArrowLeft />
                                </button>
                            </li>
                            <li>
                                <button onClick={() => navigate('/certifikat')} aria-label="Back to certificates">
                                    <FaHome /> 
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavigation(nextIndex)} aria-label="Next certificate">
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

export default DetailSertifikat;