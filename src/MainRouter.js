import React from 'react'
import {Route,Switch} from 'react-router-dom'
import MyWork from './components/MyWork'
import Contact_me from './components/Contact_me'
import Header from './components/Header'
import Intro from './components/Intro'
import Footer from './components/Footer'
import MyResume from './components/MyResume'
import styled from 'styled-components'

const MainRouter = ()=> {
    const currentPath = window.location.pathname

    return (
        <div>
        {currentPath.includes('/') ? <>
        <Switch>
        <Route exact path="/" component={Intro}/>     
        <Route exact path="/mywork" component={MyWork}/> 
        <Route exact path="/contact-me" component={Contact_me}/>
        <Route exact path="/myresume" component={MyResume}/>
        </Switch></>:
        <Switch>
        <Route exact path="/" component={Intro}/>     
        <Route exact path="/mywork" component={MyWork}/> 
        <Route exact path="/contact-me" component={Contact_me}/>
        <Route exact path="/myresume" component={MyResume}/>
        </Switch> }
        {/* <Background className="bg-image"></Background> */}
        
        <Footer/>
    </div>
    )
}
const Background = styled.section`
    background-size:cover;
    background-position:center;
    margin-top:0em;
    width:100%;
    height:100vh;
    background-image:url("/images/bg-1.jpg");
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
export default MainRouter