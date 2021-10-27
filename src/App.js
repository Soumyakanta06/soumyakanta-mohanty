import React from 'react'
// import logo from './logo.svg';
import './app.css';
import Banner from './components/Banner';
import About from './components/About';
import Skills from './components/Skills';
import Skillscontent from './components/Skillscontent';
import Education from './components/Education'
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Banner/>
      <About/>
      {/* <Skills/> */}
      <Skillscontent/>
      <Education/>
    </div>
  );
}

export default App;
