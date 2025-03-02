// Import necessary hooks and components from React Router and other libraries
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import '../styles/DetailPortfolio.css';
import { managementList } from '../data/DataManagement';

// Import components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

// Import icons
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaHome } from "react-icons/fa";

function DetailManagement() {
    const { id } = useParams();
    const navigate = useNavigate(); // Initialize useNavigate

    // Find the management data based on the id
    const data = managementList.find((item) => item.id === id);
    
    // Redirect to not found page if data is undefined
    if (!data) {
        return <Navigate to='/page-not-found' />;
    }

    // Find the index of the current item
    const currentIndex = managementList.findIndex((item) => item.id === id);

    // Calculate previous and next indices
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : managementList.length - 1; // Loop to last if at first
    const nextIndex = currentIndex < managementList.length - 1 ? currentIndex + 1 : 0; // Loop to first if at last

    const handleNavigation = (index) => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
        navigate(`/management/${managementList[index].id}`); // Navigate to the selected item
    };

    return (
        <>
            <Navbar />
            <section id='detail-portfolio'>
                <div className="wrapper">
                    <h1>{data.title}</h1>
                    <img src={data.Image} alt={data.title} />
                    <p className="skill"><b></b> {data.skill}</p>
                    <img src={data.Image1}  />
                    <p className="skill"><b></b> {data.skill1}</p>
                    <p className="skill"><b></b> {data.detail}</p>
                    <img src={data.Image2}  />
                    <p className="skill"><b></b> {data.skill2}</p>
                    <p className="skill"><b></b> {data.detai2}</p>

                    {/* Navigation buttons */}
                    <div id="button-porto">
                        <ul>
                            <li>
                                <button onClick={() => handleNavigation(prevIndex)} aria-label="Previous management item">
                                    <MdKeyboardArrowLeft />
                                </button>
                            </li>
                            <li>
                                <button onClick={() => navigate('/certifikat')} aria-label="Back to management list">
                                    <FaHome />
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavigation(nextIndex)} aria-label="Next management item">
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

export default DetailManagement;