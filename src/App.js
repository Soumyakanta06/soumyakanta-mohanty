import React from 'react'
// import logo from './logo.svg';
import './app.css';
import Banner from './components/Banner';
import About from './components/About';

import Skillscontent from './components/Skillscontent';
import Education from './components/Education';
import Projects from './components/Projects';
import { Link } from "react-router-dom";
import { Route,Routes } from "react-router-dom";


// import  {
// BrowserRouter as Router,
// Route,
// Link
// } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Routes>
      <Route exact path="/" element={<Banner/>} /> 
      


    <Route path="/About" element={<About/>} />
      
      <Route path="/Skillscontent" element={<Skillscontent/>} />
      <Route path="/Education" element={<Education/>} />
      <Route path="/Projects" element={<Projects/>} />
       </Routes> */}
       <Banner/>
       <About/>
       <Skillscontent/>
       <Education/>
       <Projects/>
    </div>
  );
}

export default App;
