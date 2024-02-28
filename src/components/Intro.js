import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import "../App.css";
const Intro = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div id="home">
      <div className="p-4 home_bg">
        <div className="header_div ">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div
            className={`md:flex ${
              isMenuOpen ? "mobile_view" : "hidden laptop_view"
            }  `}
          >
            <Link  style={{textDecoration: 'none'}} to="/" smooth className="link">
              About Me
            </Link>
            <Link  style={{textDecoration: 'none'}} to="/mywork" smooth className="link">
              My Projects
            </Link>
            <Link  style={{textDecoration: 'none'}} to="/contact-me" smooth className="link">
              Contact Me
            </Link>
            <Link  style={{textDecoration: 'none'}} to="/myresume" className="link">
              My Resume
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-text">
        <h1>Hii, I am Pranav Labdhe</h1>
        <p style={{fontSize:'18px'}}>"Full-stack MERN/MEAN Web Developer with a passion for crafting high-quality, scalable solutions."</p>
      </div>
    </div>
  );
};
const Subtitle = styled.h3`
  font-size: 2em;
  text-align: center;
  position: relative;
  bottom: 3em;
  letter-spacing: 2px;
  @media (max-width: 768px) {
    h3 {
      font-size: 1em;
      font-weight: bold;
      position: relative;
      bottom: -2em;
    }
  }
`;
const ImageTitle = styled.h1`
    font-size:5em;
    display:grid;
    grid-template-columns:auto;
    grid-template-rows:300px
    align-self:center;
    text-align:center;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
    color:white;
    z-index: 2;
    @media (max-width: 768px) {
        h1{
            font-size:1em;
        }
    }
`;

const Background = styled.section`
  background-size: cover;
  background-position: center;
  margin-top: 0em;
  width: 100%;
  height: 100vh;
  background-image: url("/images/bg-1.jpg");
  @media (max-width: 768px) {
    height: 80vh;
  }
  @media (max-width: 768px) {
    img {
      position: fixed;
      top: 10em;
      left: 0;
      right: 0;
      bottom: 0;
      padding-top: 3em;
      z-index: -1;
    }
  }
`;
export default Intro;
