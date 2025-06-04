import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <NavBar/>
        <Hero/>
      </div>
      <Services/>
      
    </div>
  );
}

export default App;


