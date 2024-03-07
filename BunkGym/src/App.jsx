import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Bunkteam from './components/Bunkteam/Bunkteam';
import ImageSection from './components/ImageSection/ImageSection';
import Experiencia360 from './components/Experiencia360/Experiencia360';
import Paraquien from './components/Paraquien/Paraquien';
import MasBunkgym from './components/MasBunkgym/MasBunkgym';
import Call from './components/Call/Call';
import Footer from './components/Footer/Footer';
import Planes from './components/Planes/Planes';
import Plans from './components/Plans/Plans';
import Testimonials from './components/Testimonials/Testimonials';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Reasons2 from './components/Reasons2/Reasons2';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienesSomos" element={<QuienesSomos />} />
          <Route path="/particulares" element={<Particulares />} />
          <Route path="/crossfit" element={<Crossfit />} />
          <Route path="/gimnasios" element={<Gimnasios />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Bunkteam />
      <ImageSection />
      <Experiencia360 />
      <Paraquien />
      <MasBunkgym />
      <Call />
    </>
  );
}

function QuienesSomos() {
  return (
    <>
      <Hero />
      <Planes />
      <Plans />
    </>
  );
}

function Particulares() {
  return (
    <>
      <Planes />
      <Testimonials />
    </>
  );
}

function Crossfit() {
  return (
    <>
      <Programs />
      <Reasons2 />
      <Reasons />
    </>
  );
}

function Gimnasios() {
  return (
    <>
      <Reasons />
      <Planes />
    </>
  );
}

export default App;