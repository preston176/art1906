import React from 'react'
import Typewriter from 'typewriter-effect';
import './home.css'

function Home() {
  return (
    <div className='wrapper'>
    <div className='home'>
        
        <h2><Typewriter
  options={{
    strings: ['We are Identity Authors', 'We are social media Gurus', 'We are Advertising Wizards', 'We are Web Nerds', 'We are Art1906'],
    autoStart: true,
    loop: true,
  }}
/></h2>
     
    </div>
    <div className="home__socials">
        Social Icons
    </div>
    <div className="home__consult">
        <button>
            REQUEST A CONSULTATION
        </button>
    </div>
    </div>
  )
}

export default Home