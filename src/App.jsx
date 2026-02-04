import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
          <Navigation />
          <main>
            <Hero />
            <About />
            <Products />
            <WhyUs />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
