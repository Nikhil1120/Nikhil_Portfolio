import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Connect from './components/Connect';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Internships />
      <Projects />
      <Contact />
      <Resume />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
