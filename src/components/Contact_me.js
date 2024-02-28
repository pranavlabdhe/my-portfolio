import React ,{ useState } from 'react'
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import '../App.css';
import Header2 from './Header2';

const Contact_me = () => {
    const [state, setState] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  
    const [result, setResult] = useState(null);
  
    const sendEmail = event => {
      event.preventDefault();
      axios
        .post('/send', { ...state })
        .then(response => {
          setResult(response.data);
          setState({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        })
        .catch(() => {
          setResult({
            success: false,
            message: 'Something went wrong. Try again later'
          });
        });
    };
  
    const onInputChange = event => {
      const { name, value } = event.target;
  
      setState({
        ...state,
        [name]: value
      });
    };
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
          <Link to="/"  style={{textDecoration: 'none'}} smooth className=" link">
            About Me
          </Link>
          <Link to="/mywork"  style={{textDecoration: 'none'}} smooth className="300 link">
            My Projects
          </Link>
          <Link to="/contact-me"  style={{textDecoration: 'none'}} smooth className=" link">
            Contact Me
          </Link>
          <Link to="/myresume"  style={{textDecoration: 'none'}} className=" link">
            My Resume
          </Link>
        </div>
      </div>
        <section className="contact_me" id="contactme">
        <div className="contact_text">
             <p style={{marginBottom:'0px'}} className='text-white'>Contact Me</p> 
      </div>
    <form target='_blank'  action="https://formsubmit.co/plabdhe224@gmail.com" method="POST" className='form_elem'>
                {/* <label for="name" class="label is-size-4 has-text-weight-light text-white ">
                    Name:
                </label> */}
                <input type="text" class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none w-80 focus:border-blue-500"  name="name" id="name"placeholder="Name"autofocus required />

                {/* <input type="text" name="name" id="name" class="input" placeholder="Name"autofocus required/> */}
      
     
                {/* <label for="email" class="label is-size-4 has-text-weight-light">
                    Email:
                </label> */}
                <input type="email" name="email" id="email" class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none w-80 focus:border-blue-500"placeholder="Email" required/>
    
            <input type="hidden" name="_next" value="https://thankyoufromweb-guy.netlify.app/"></input>

                {/* <label for="message" class="label is-size-4 has-text-weight-light">
                    Message:
                </label> */}
                <textarea name="message" id="message" rows="5" placeholder="Message" class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none w-80 focus:border-blue-500" required></textarea>
            <button type="submit" class="submit_button is-success is-size-5 mx-auto mt-2">Submit</button>
        </form>
       
             </section>
             </div>
        </>
    )
}
export default Contact_me;
