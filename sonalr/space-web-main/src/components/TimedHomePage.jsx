import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero.jsx';
import HeroCard from './HeroCard/HeroCard.jsx';
import Rapidscat from './Rapidscat/Rapidscat.jsx';
import Satelite from './Satelite/Satelite.jsx';
import Cloud from './Cloud/Cloud.jsx';
import Footer from './Footer/Footer.jsx';
import BgVideo from '../assets/sat.mp4';

function TimedHomePage() {
  const navigate = useNavigate();
  const timerRef = useRef(null);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    
    if (!token) {
      // User is not logged in - start the 10 second timer
      
      // Countdown display timer (updates every second)
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Main redirect timer (redirects after 10 seconds)
      timerRef.current = setTimeout(() => {
        navigate('/login');
      }, 10000);

      // Cleanup function
      return () => {
        clearTimeout(timerRef.current);
        clearInterval(countdownInterval);
      };
    }
  }, [navigate]);

  return (
    <div className="">
      {/* Show notification banner only if not logged in */}
      {!localStorage.getItem('token') && countdown > 0 && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '15px 30px',
          borderRadius: '10px',
          zIndex: 1000,
          textAlign: 'center',
          fontSize: '16px'
        }}>
          Please login to continue. Redirecting in {countdown} seconds...
        </div>
      )}

      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>
      <HeroCard />
      <Rapidscat />
      <Satelite />
      <Cloud />
      <Footer />
    </div>
  );
}

export default TimedHomePage;
