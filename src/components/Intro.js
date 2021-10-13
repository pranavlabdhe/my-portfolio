import React from 'react'
import styled from 'styled-components'
import '../App.css'
const Intro = () => {
    return (
        <div id="home">
      <Background className="bg-image"></Background>
         <div className="bg-text">
             <h1>Hii,I am Pranav Labdhe</h1>
             <p>I design,develop UI/UX and Web applications</p>
             </div>    
      </div>
    )
}
const Subtitle =styled.h3`
    font-size:2em;
    text-align:center;
    position:relative;
    bottom:3em;
    letter-spacing:2px;
    @media (max-width: 768px) {
        h3{
            font-size:1em;
            font-weight:bold;
            position:relative;
            bottom:-2em;
        }
    }
`
const ImageTitle=styled.h1`
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
`

const Background = styled.section`
    background-size:cover;
    background-position:center;
    margin-top:0em;
    width:100%;
    height:100vh;
    background-image:url("/images/home.jpg");
    @media (max-width: 768px) {
        height:80vh; 
    }
    @media (max-width: 768px) {
        img{
            position:fixed;
            top:10em;
            left:0;
            right:0;
            bottom:0;
            padding-top:3em;
            z-index:-1;
    
        }
    }
`
export default Intro