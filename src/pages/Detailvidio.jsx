import { useParams, Navigate, useNavigate } from 'react-router-dom';
import '../styles/DetailPortfolio.css';
import { vidioList } from '../data/DataVidio';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { FaHome } from "react-icons/fa";

function Detailvidio() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    // Find the current video item based on the id
    const data = vidioList.find((item) => item.id === id);
    
    // Redirect to not found page if data is undefined
    if (!data) {
        return <Navigate to='/page-not-found' />;
    }

    // Find the index of the current item
    const currentIndex = vidioList.findIndex((item) => item.id === id);
    
    // Calculate previous and next indices
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : vidioList.length - 1; // Loop to last if at first
    const nextIndex = currentIndex < vidioList.length - 1 ? currentIndex + 1 : 0; // Loop to first if at last

    const handleNavigation = (index) => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
        navigate(`/vidio/${vidioList[index].id}`); // Navigate to the selected item
    };

    return (
        <>
            <Navbar />
            <section id='detail-portfolio'>
                <div className="wrapper">
                    <h1>{data.title}</h1>
                    <img src={data.Image} alt={data.title} />
                    <p className="deskripsi"><b>Description:</b> {data.deskripsi}</p>
                    
                    {/* Embed YouTube video using iframe */}
                    <div className="video-container">
                        <iframe 
                            src={data.videoUrl} // Set the video URL here
                            title="YouTube video player"
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <p className="deskripsi"><b>Description:</b> {data.deskripsi2}</p>
                    {/* vid 2 */}
                    <div className="video-container">
                        <iframe 
                            src={data.videoUrl2} // Set the video URL here
                            title="YouTube video player"
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <p className="deskripsi"><b>Description:</b> {data.deskripsi3}</p>

                    {/* Navigation buttons */}
                    <div id="button-porto">
                        <ul>
                            <li>
                                <button onClick={() => handleNavigation(prevIndex)} >
                                    <MdKeyboardArrowLeft />
                                </button>
                            </li>
                            <li>
                                <button onClick={() => navigate('/certifikat')} aria-label="Back to video list">
                                    <FaHome />
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavigation(nextIndex)} >
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

export default Detailvidio;