import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Classes from './components/Classes';
import Schedule from './components/Schedule';
import Prices from './components/Coaches';
import Gallery from './components/Gallery.tsx';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Diamond from './components/Diamond';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Diamond />
      <main>
        <Hero />
        <About />
        <Classes />
        <Schedule />
        <Prices />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;