
import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolling ? 'scrolling' : ''}`}>
      <div className="navbar__left">
        <a href="">
          Art<span>1906</span>_ <br />CREATIVE SHOPS
        </a>
      </div>
      <div className="navbar__right">
        <ul>
          <li><a href="/services">Services</a></li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li>Meet the Team</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
