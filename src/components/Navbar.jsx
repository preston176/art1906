import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

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

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={`navbar ${scrolling ? 'scrolling' : ''}`}>
      <div className="navbar__left">
        <Link to="/">
          Art<span>1906</span>_ <br />CREATIVE SHOPS
        </Link>
      </div>
      <div className="navbar__right">
        <ul>
          <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <Link to="/services">Services</Link>
            {showDropdown && (
              <div className="dropdown">
                <ul>
                  <li>SEO and Data analytics</li>
                  <li>SEO Packages and Pricing</li>
                  <li>Events Digital Marketing</li>
                  {/* Add more services as needed */}
                </ul>
              </div>
            )}
          </li>
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
