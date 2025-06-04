import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';


function App() {
  return (
    //   <Router>
    //
    //
    // <div className="App">
    //   <div>
    //     <div className="white-gradient"/>
    //     <NavBar/>
    //     <Hero/>
    //   </div>
    //   <Services/>
    //
    // </div>
    //   </Router>



      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={
              <>
                <div className="white-gradient" />
                <Hero />
                <Services />
              </>
            } />

            <Route path="/contact" element={
                <Contact />
            } />


          </Routes>
        </div>
      </Router>
  );
}

export default App;


