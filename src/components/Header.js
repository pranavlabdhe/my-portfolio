import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="p-4 home_bg">
      <div className="header_div " >
        <div className="flex title_menu mb-2 md:mb-0">
          <h1 className="text-2xl font-bold text-white animate__animated animate__fadeIn animate__delay-1s">
            PRANAV LABDHE
          </h1>
          <button
            onClick={toggleMenu}
            className=" ml-2 text-white focus:outline-none toggle_menu"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div
          className={`md:flex ${isMenuOpen ? 'mobile_view' : 'hidden laptop_view'}  `}>
          <Link to="/"  className="link_effect">
            About Me
          </Link>
          <Link to="/mywork"  className="link_effect">
            My Projects
          </Link>
          <Link to="/contact-me"  className="link_effect">
            Contact Me
          </Link>
          <Link to="/myresume" className="link_effect">
            My Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
