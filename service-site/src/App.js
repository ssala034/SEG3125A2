import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Value from './components/Value';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <NavBar/>
        <Hero/>
      </div>
      <Services/>
      <Value/>
      <Footer/>
      
    </div>
  );
}

export default App;


