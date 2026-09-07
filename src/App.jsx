import Bg from './components/Bg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experiences'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificate from './components/Certificate'
import Contact from './components/Contact'
import Footer from './components/Footer'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
    window.addEventListener('load', AOS.refresh);
  }, []);

  return (
    <>
    
    <Bg />
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Certificate />
    <Contact />
    <Footer />
    </>
  )
}

export default App
