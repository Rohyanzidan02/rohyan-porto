import React from 'react';
import { HiHome } from "react-icons/hi"; // Import a home icon
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import '../styles/Iconlamaran.css';

function IconBackHome() {
  const navigate = useNavigate(); // Get the navigate function

  const goHome = () => {
    navigate('/home'); // Navigate to the home page
  };

  return (
    <div className="back-home" onClick={goHome}>
      <HiHome className="icon" />
    </div>
  );
}

export default IconBackHome;