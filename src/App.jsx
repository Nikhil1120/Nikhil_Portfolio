import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/App.css';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Connect from './components/Connect';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <main>
          <Home />
          <About />
          <Skills />
          <Experience />
          <Internships />
          <Projects />
          <Contact />
          <Connect />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
