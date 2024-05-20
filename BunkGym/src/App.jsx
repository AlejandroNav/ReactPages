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
import Bunkgreen from './components/Bunkgreen/Bunkgreen';
import Quienes from './components/Quienes/Quienes';
import Carousel from './components/Carousel/Carousel';
import Idea from './components/Idea/Idea';
import Hacemos from './components/Hacemos/Hacemos';
import Clientes from './components/Clientes/Clientes';
import NuestraFabrica from './components/NuestraFabrica/NuestraFabrica';
import NuestroEquipo from './components/NuestroEquipo/NuestroEquipo';
import Particular from './components/Particular/Particular';
import Elige from './components/Elige/Elige';
import BunkGymRazones from './components/BunkGymRazones/BunkGymRazones';
import ClientesParticular from './components/ClientesParticular/ClientesParticular';
import Ayunta from './components/Ayunta/Ayunta';
import Personaliza from './components/Personaliza/Personaliza';
import Alargado from './components/alargado/alargado';
import Mosaico from './components/Mosaico/Mosaico';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienesSomos" element={<QuienesSomos />} />
          <Route path="/particulares" element={<Particulares />} />
          <Route path="/ayuntamientos" element={<Ayuntamientos />} />
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
      <Alargado />
      <Bunkteam />
      <ImageSection />
      <Experiencia360 />
      <Mosaico />
      <Paraquien />
      <Reasons />
      <Bunkgreen />
      <Call />
    </>
  );
}

function QuienesSomos() {
  return (
    <>
      <Quienes />
      <Bunkteam />
      <Carousel />
      <Mosaico />
      <Idea />
      <Hacemos />
      <Clientes />
      <NuestraFabrica />
      <NuestroEquipo />
      <Bunkgreen />
      <Call />
    </>
  );
}

function Particulares() {
  return (
    <>
      <Particular />
      <ImageSection />
      <Personaliza />
      <BunkGymRazones />
      <Reasons />
      <Bunkgreen />
      <Call />
      <Clientes />
    </>
  );
}

function Ayuntamientos() {
  return (
    <>
      <Ayunta />
      <Bunkgreen />
    </>
  );
}

function Crossfit() {
  return (
    <>

    </>
  );
}

function Gimnasios() {
  return (
    <>
      <Planes />
      <Programs />
      <Reasons2 />
      <Planes />
      <Planes />

      <Testimonials />
    </>
  );
}

export default App;