import React from 'react';
import Typewriter from 'typewriter-effect';
import './ServicesHome.css';


function ServicesHome() {
  return (
    <div className='wrapper'>
      <video src="/home.mp4" autoPlay loop muted className='home__video' />
      <div className='home'>
        <h2>
          <Typewriter
          
            options={{
              strings: 'Request A Quote',
              autoStart: true,
              loop: false,
            }}
          />
        </h2>
      </div>
      <div className="home__socials">
        {/* Add your Social Icons component here */}
      </div>
      <div className="home__consult">
      <a href="#contact">
        <button>
          REQUEST A CONSULTATION
          
        </button>
        </a>
      </div>
    </div>
  );
}

export default ServicesHome;
