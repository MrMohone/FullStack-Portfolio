import React, { useState, useEffect, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from "./assets/components/Navbar"
import Hero from "./assets/components/Hero"
import Loader from "./assets/components/Loader"

const Stats = lazy(() => import('./assets/components/Stats'));
const About = lazy(() => import('./assets/components/About'));
const Projects = lazy(() => import('./assets/components/Projects'));
const Contact = lazy(() => import('./assets/components/Contact'));
const Footer = lazy(() => import('./assets/components/Footer'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      
      const scrollPos = sessionStorage.getItem('scrollPosition');
      if (scrollPos) {
        setTimeout(() => window.scrollTo(0, parseInt(scrollPos)), 100);
      }
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode='wait'>
        {isLoading && <Loader setLoading={setIsLoading} />}
      </AnimatePresence>
      
      {!isLoading && (
        <div className="app-content">
          <Navbar />
          <Hero />
          
          <Suspense fallback={null}>
            <Stats />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </Suspense>
        </div>
      )}
    </>
  )
}

export default App
