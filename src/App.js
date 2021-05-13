
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Particles from 'react-particles-js';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from "./components/AboutMe";

import Education from './components/Education';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
function App() {
  return (
    <>
  <Particles
  className="particles-canvas"
  params={{
    particles:{
      number:{
        value:30,
        density:{
          enable:true,
          value_area:900
        }
      },
      shape:{
        type:"circle",
        stroke:{
          width:6,
          color:"#f9ab00"
        }
      }
    }
  }}
  />

<Router>
  <Navbar/>
  <Header/>
  <AboutMe/>
  <Portfolio/>
  <Education/>


 
  <Contact/>

  <Footer/>
  
 

  </Router>
  </>
  );
}

export default App;
