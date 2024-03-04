import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Reasons from './components/Reasons/Reasons'
import Reasons2 from './components/Reasons2/Reasons2'
import Planes from './components/Planes/Planes'
import Plans from './components/Plans/Plans'
import Testimonials from './components/Testimonials/Testimonials'
import Bunkteam from './components/Bunkteam/Bunkteam';
import ImageSection from './components/ImageSection/ImageSection';
import Experiencia360 from './components/Experiencia360/Experiencia360';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      {currentPage === 'home' && (
        <>
          <Hero />
          <Bunkteam />
          <ImageSection />
          <Experiencia360 />

        </>
      )}
      {currentPage === 'quienesSomos' && (
        <>
          <Hero />
          <Planes />
          <Plans />
          {/* Insert other components you want on the Quienes somos page */}
        </>
      )}
      {currentPage === 'particulares' && (
        <>
          <Planes />
          <Testimonials />
          {/* Insert other components you want on the Particulares page */}
        </>
      )}
      {currentPage === 'crossfit' && (
        <>
          <Programs />
          <Reasons2 />
          <Reasons />
          {/* Insert other components you want on the Ayuntamientos page */}
        </>
      )}
      {currentPage === 'gimnasios' && (
        <>
          <Reasons />
          <Planes />
          {/* Insert other components you want on the Empresas page */}
        </>)}
    </>
  );
}

export default App;