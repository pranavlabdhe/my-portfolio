import React,{useState} from 'react'
import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link';

import '../App.css'
import Header2 from './Header2'
const MyWork = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
    return (
    <>
    {/* <Header2 /> */}
    <div className="p-4 home_bg2">
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
          <Link to="/"  style={{textDecoration: 'none'}} smooth className="text-white hover:text-gray-300 link">
            About Me
          </Link>
          <Link to="/mywork"  style={{textDecoration: 'none'}} smooth className="text-white hover:text-gray-300 link">
            My Projects
          </Link>
          <Link to="/contact-me"  style={{textDecoration: 'none'}} smooth className="text-white hover:text-gray-300 link">
            Contact Me
          </Link>
          <Link to="/myresume"  style={{textDecoration: 'none'}} className="text-white hover:text-gray-300 link">
            My Resume
          </Link>
        </div>
      </div>
 <section class="my-work"id="mywork">
 {/* https://budgettt.netlify.app/ */}
    <p class="section__subtitle section__subtitle--work p-5">Projects</p>
    <div class="portfolio">
                <a href="https://youtube-thumbnail-downloader-three.vercel.app/" class="portfolio__item"target="_blank">
                <img src="/images/thumbnail_downloader.png" alt="portfolio 2"class="portfolio__img"/>
            </a>
            <a href="https://medium-blog-post.onrender.com/" class="portfolio__item"target="_blank">
                <img src="/images/Medium_blog_post.png" alt="portfolio 3"class="portfolio__img"/>
            </a>
            <a href="https://skycast-weatherapp.netlify.app/" class="portfolio__item"target="_blank">
                <img src="/images/weather-app.png" alt="portfolio 4"class="portfolio__img"/>
            </a>
            <a href="https://task-list-web-app-1.netlify.app/" class="portfolio__item"target="_blank">
                <img src="/images/task_list.png" alt="portfolio 5"class="portfolio__img"/>
            </a>
            {/* <a href="https://quote-generator-app-001.netlify.app/" class="portfolio__item"target="_blank">
                <img src="/images/quote-generator.png" alt="portfolio 5"class="portfolio__img"/>
            </a>
            <a href="https://washndry.co.in/phone-repair/index.php" class="portfolio__item"target="_blank">
                <img src="/images/phone-repair.png" alt="portfolio 5"class="portfolio__img"/>
            </a> */}
    </div>    
    </section>
    </div>
   
    </>
    )
}
const Section = styled.section`
    
`


export default MyWork
