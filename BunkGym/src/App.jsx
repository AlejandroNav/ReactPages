import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Bunkteam from './components/Bunkteam/Bunkteam';
import ImageSection from './components/ImageSection/ImageSection';
import Experiencia360 from './components/Experiencia360/Experiencia360';
import Paraquien from './components/Paraquien/Paraquien';
import Call from './components/Call/Call';
import Footer from './components/Footer/Footer';
import Planes from './components/Planes/Planes';
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
import BunkGymRazones from './components/BunkGymRazones/BunkGymRazones';
import Ayunta from './components/Ayunta/Ayunta';
import Personaliza from './components/Personaliza/Personaliza';
import Personalizados from './components/Personalizados/Personalizados';
import Alargado from './components/alargado/alargado';
import Mosaico from './components/Mosaico/Mosaico';
import CrossTitle from './components/CrossTitle/CrossTitle';
import CarruselLargo from './components/CarruselLargo/CarruselLargo';
import Quetipo from './components/Quetipo/Quetipo';
import Quecontiene from './components/Quecontiene/Quecontiene';
import Quienpuede from './components/Quienpuede/Quienpuede';
import { elementosGimnasio1, elementosGimnasio2, titles, texts } from '../src/data/queContieneData.js';
import { otroData } from '../src/data/otroData.js';import Otros from './components/Otros/Otros.jsx';
import ScrollToTop from './scrollToTop';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienesSomos" element={<QuienesSomos />} />
          <Route path="/particulares" element={<Particulares />} />
          <Route path="/ayuntamientos" element={<Ayuntamientos />} />
          <Route path="/crossfit" element={<Crossfit />} />
          <Route path="/gimnasios" element={<Gimnasios />} />
          <Route path="/360" element={<Crossfit360 />} />
          <Route path="/strong" element={<Strong />} />
          <Route path="/inconformista" element={<Inconformista />} />
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
      <Mosaico />
      <ImageSection />
      <Personalizados />
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
      <Call />
      <Clientes />
    </>
  );
}

function Crossfit() {
  return (
      <>
          <CrossTitle />
          <CarruselLargo />
          <Quetipo />
          <Quecontiene
              title={otroData[0].title}
              text={otroData[0].text}
              elementos={elementosGimnasio1}
          />
          <Personaliza />
          <Quienpuede />
          <Otros data={otroData} currentIndex={0} />
          <Bunkgreen />
          <Call />
      </>
  );
}

function Crossfit360() {
  return (
      <>
          <Quetipo />
          <Quecontiene
              title={otroData[1].title}
              text={otroData[1].text}
              elementos={elementosGimnasio2}
          />
          <Personaliza />
          <Quienpuede />
          <Otros data={otroData} currentIndex={1} />
          <Call />
      </>
  );
}
function Strong() {
  return (
    <>
      <Quecontiene
        title={titles[2]}
        text={texts[2]}
        elementos={elementosGimnasio1}
      />
      <Personaliza />
      <Quienpuede />
      <Otros data={otroData} currentIndex={2} />
      <Call />
    </>
  );
}
function Inconformista() {
  return (
    <>
      <Quecontiene
        title={titles[3]}
        text={texts[3]}
        elementos={elementosGimnasio2}
      />
      <Personaliza />
      <Quienpuede />
      <Otros data={otroData} currentIndex={3} />
      <Call />
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