import React from 'react'
import styled from 'styled-components'
import '../App.css'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const Header = () => {
    return (
        <Nav>
          <Link to="/"><Logo src="images/logo.png" /></Link>
            <Title><h1>WEB-GUY</h1></Title>
        <NavMenu>
           <Link  to="/"><span>ABOUT-ME</span></Link>
            <Link to="/mywork"><span>MY-PROJECTS</span></Link>
            <Link to="/contactme"><span>CONTACT-ME</span></Link>
            <Link to="/myresume"><span>MY-RESUME</span></Link>
            </NavMenu>  
        </Nav>
    )
}
const Nav = styled.div`
        display:grid;
        grid-template-columns: 300px 700px 1fr;
        grid-template-rows:auto;
        background:#fefefa;
        border-bottom:2px solid black;
        @media (max-width: 768px) {
            display:grid;
            grid-template-columns:1fr;
            grid-template-rows:auto 70px auto;
            padding-bottom:2em;
        }
        `
const Title = styled.h1`
    text-align:center;
    margin-top:1em;
    font-weight:bold;
    @media (max-width: 768px) {
        display:grid;
        align-self:center;
        font-size:2em;
        padding-bottom:0em;
        padding-top:0em;
        }
`     
const Logo =styled.img`
    width:100px;
    margin-top:1em;
    margin-left:3em;

    @media (max-width: 768px) {
        display:grid;
 
        margin-left:auto;
        margin-right:auto;
    }
    `
    const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left:25px;
    @media (max-width: 768px){
        display:grid;
        grid-template-column:1fr;
        grid-template-row:auto;
        place-self:center;
    }
    @media (max-width: 768px){ 
        a{
       margin-top: 2em;
      }
      }
    a{
        display:flex;
        align-items:center;
        padding:0 12px;
        cursor:pointer;
        text-decoration:none;
        color:black;
        transition: 0.5s;
     
    }
    a:hover{
        color:red;
       
    }
        img{
            height:20px;    
        }
        span{
            font-size:13px;
            letter-spacing:1.42px;
            position:relative;
            font-weight:bold; 
        }
        }
    }
`

export default Header
