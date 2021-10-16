
// import logo from './logo.svg';
import './app.css';
import Banner from './components/Banner';
import About from './components/About';
import Skills from './components/Skills';
import Skillscontent from './components/Skillscontent';
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Banner/>
      <About/>
      {/* <Skills/> */}
      <Skillscontent/>
    </div>
  );
}

export default App;
