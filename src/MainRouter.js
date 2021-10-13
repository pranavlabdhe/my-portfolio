import React from 'react'
import {Route,Switch} from 'react-router-dom'
import MyWork from './components/MyWork'
import Contact_me from './components/Contact_me'
import Header from './components/Header'
import Intro from './components/Intro'
import Footer from './components/Footer'
import MyResume from './components/MyResume'
const MainRouter=()=>(
    <div>
        <Header/>
        <Switch>
        <Route exact path="/" component={Intro}/>     
        <Route exact path="/mywork" component={MyWork}/> 
        <Route exact path="/contactme" component={Contact_me}/>
        <Route exact path="/myresume" component={MyResume}/>
        </Switch>
        <Footer/>
    </div>
)
export default MainRouter