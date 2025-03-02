import React, { useState, useEffect } from 'react';
import { HiChevronDoubleUp } from "react-icons/hi";
import '../styles/Iconscrool.css';

function Iconscrool() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  return (
    showScroll && (
      <div className="scroll-to-top" onClick={scrollTop}>
        <HiChevronDoubleUp />
      </div>
    )
  );
}

export default Iconscrool;