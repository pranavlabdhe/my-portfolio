import React, { Fragment } from 'react'
import Header from './components/Header'
import {Route,Switch,Router} from 'react-router-dom'
import Intro from './components/Intro'
import MyWork from './components/MyWork'
import Contact_me from './components/Contact_me'
import Test from './components/Test'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import {BrowserRouter} from 'react-router-dom'/* Browser Router will wrap all the router when you push the routes from "Home" to "About" etc,Browser Router knows the application state which route to render ,the path name etc */
import MainRouter from './MainRouter'

 const App = () => {
    return (
        <>
        <BrowserRouter>
        <MainRouter/>
        </BrowserRouter>
     </>
    )
}
export default App;