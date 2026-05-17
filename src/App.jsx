import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Internships from './components/Internships';
import Projects from './components/Projects';
import ContactAvailability from './components/ContactAvailability';
import Contact from './components/Contact';
// import Resume from './components/Resume';
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
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Internships />
      <Projects />
      <ContactAvailability />
      <Contact />
      {/* <Resume /> */}
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
