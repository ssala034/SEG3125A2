import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Value from './components/Value';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
// import Pricing from './pages/pricing';
import PricingSection from './components/pricing';
import Appoint from './pages/Appointment';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        
        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <>
              <div className="white-gradient"/>
              <Hero />
              <Services />
              <Value/>
            </>
          } />

          {/* Other Routes */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricings" element={<PricingSection />} />
          <Route path="/appointment" element={<Appoint />} />
          <Route path="/about" element={<About/>} />
          
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
