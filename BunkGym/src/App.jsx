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
import Alargado from './components/alargado/alargado';
import Mosaico from './components/Mosaico/Mosaico';
import CrossTitle from './components/CrossTitle/CrossTitle';
import CarruselLargo from './components/CarruselLargo/CarruselLargo';
import Quetipo from './components/Quetipo/Quetipo';
import Quecontiene from './components/Quecontiene/Quecontiene';
import { elementosGimnasio1, elementosGimnasio2, titles, texts } from '../src/data/queContieneData.js';
import { otroData } from '../src/data/otroData.js'; import Otros from './components/Otros/Otros.jsx';
import { elementos360, elementosInconforme, elementosStrong } from './data/quienesData';

import ScrollToTop from './scrollToTop';
import Cr360title from './components/Cr360title/Cr360title.jsx';
import Cuadrantes from './components/Cuadrantes/Cuadrantes.jsx';
import Caracteristicas from './components/Caracteristicas/Caracteristicas.jsx';
import ayuntamientoImage from './assets/ayuntamiento.avif';
import empresasImage from './assets/empresas.avif';
import vecinosImage from './assets/vecinos.avif';
import educativosImage from './assets/educativos.avif';
import deportivosImage from './assets/deportivos.avif';

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
          <Route path="/Empresas" element={<Empresas />} />
          <Route path="/crossfit" element={<Crossfit />} />
          <Route path="/comunidadesVecinos" element={<Vecinos />} />
          <Route path="/centrosEducativos" element={<Educativos />} />
          <Route path="/centrosDeportivos" element={<Deportivos />} />
          <Route path="/crossfit2" element={<Crossfit2 />} />
          <Route path="/gimnasios" element={<Gimnasios />} />
          <Route path="/360" element={<Crossfit360 />} />
          <Route path="/strong" element={<Strong />} />
          <Route path="/crossfit10" element={<Inconformista />} />
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
        <Ayunta 
        title="Transforma espacios públicos en gimnasios modernos"
        outlineTitle="Bunkgym, diseñado para tu comunidad"
        backgroundImage={ayuntamientoImage} // Pass the imported image as a prop
      />
      <Mosaico />
      <ImageSection />
      <Personaliza />
      <BunkGymRazones
        gymTitle="Tu Gimnasio Personalizado"
        gymContent="Construimos el gimnasio ideal adaptado a tus necesidades."
        footerText="Creamos experiencias fitness únicas para tu ayuntamiento."
      />
      <Reasons />
      <Bunkgreen />
      <Call />
      <Clientes />
    </>
  );
}
function Empresas() {
  return (
    <>
      <Ayunta 
        title="Transforma espacios empresariales en gimnasios modernos"
        outlineTitle="Bunkgym, creado para tu empresa"
        backgroundImage={empresasImage} // Pass the imported image as a prop
      />
      <Mosaico />
      <ImageSection />
      <Personaliza />
      <BunkGymRazones
        gymTitle="Tu Gimnasio Personalizado"
        gymContent="Construimos el gimnasio perfecto para tu empresa."
        footerText="Creamos experiencias fitness únicas para tu empresa."
      />
      <Reasons />
      <Bunkgreen />
      <Call />
      <Clientes />
    </>
  );
}

function Vecinos() {
  return (
    <>
      <Ayunta 
        title="Revoluciona los espacios vecinales con gimnasios modernos"
        outlineTitle="Bunkgym, creado para la comunidad"
        backgroundImage={vecinosImage} // Pass the imported image as a prop
      />
      <Mosaico />
      <ImageSection />
      <Personaliza />
      <BunkGymRazones
        gymTitle="El Gimnasio Ideal para tu comunidad"
        gymContent="Construimos el gimnasio ideal adaptado a tus necesidades."
        footerText="Creamos experiencias fitness únicas para tu comunidad."
      />
      <Reasons />
      <Bunkgreen />
      <Call />
      <Clientes />
    </>
  );
}

function Educativos() {
  return (
    <>
      <Ayunta 
        title="Transforma espacios educativos en gimnasios modernos"
        outlineTitle="Bunkgym, ideal para tu escuela"
        backgroundImage={educativosImage} // Pass the imported image as a prop
      />
      <Mosaico />
      <ImageSection />
      <Personaliza />
      <BunkGymRazones
        gymTitle="El Gimnasio Ideal para tu escuela"
        gymContent="Construimos el gimnasio ideal adaptado a tus necesidades."
        footerText="Creamos experiencias fitness únicas para tu centro educativo."
      />
      <Reasons />
      <Bunkgreen />
      <Call />
      <Clientes />
    </>
  );
}

function Deportivos() {
  return (
    <>
      <Ayunta 
        title="Adquiere un gimnasio moderno para tu Centro Deportivo"
        outlineTitle="Bunkgym, ideal para tus necesidades"
        backgroundImage={deportivosImage} // Pass the imported image as a prop
      />
      <Mosaico />
      <ImageSection />
      <Personaliza />
      <BunkGymRazones
        gymTitle="Tu Gimnasio Personalizado"
        gymContent="Construimos el gimnasio ideal adaptado a tus necesidades."
        footerText="Creamos experiencias fitness únicas para tu centro deportivo."
      />
      <Reasons />
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
      <Cuadrantes />
      <Caracteristicas />
      <Personaliza />
      <Otros data={otroData} currentIndex={0} />
      <Bunkgreen />
      <Call />
    </>
  );
}
function Crossfit2() {
  return (
    <>
      <CrossTitle />
      <Cuadrantes />
      <Caracteristicas />
      <Personaliza />
      <Otros data={otroData} currentIndex={0} />
      <Bunkgreen />
      <Call />
    </>
  );
}
function Crossfit360() {
  return (
    <>
      <Cr360title />
      <CarruselLargo />
      <Quetipo
        elementos={elementos360}
        title="360"
        info="Bunkgym 360 es el gimnasio más polivalente que se adapta a todo tipo de perfiles, cubriendo todas las necesidades que una persona que quiere practicar deporte puede necesitar combinando musculación y cardio en un mismo espacio." />
      <Quecontiene
        title={otroData[1].title}
        text={otroData[1].text}
        elementos={elementosGimnasio2}
      />
      <Personaliza />
      <Otros data={otroData} currentIndex={1} />
      <Bunkgreen />
      <Call />
    </>
  );
}
function Strong() {
  return (
    <><CarruselLargo />
      <Quetipo
        elementos={elementosStrong}
        title="Strong"
        info="Bunkgym Strong es para aquellos que van a todo o nada, que entrenan al fallo y se enfocan en maximizar su fuerza a través del entrenamiento de powerlifting con entrenamientos pesados que te llevarán al límite." />
      <Quecontiene
        title={titles[2]}
        text={texts[2]}
        elementos={elementosGimnasio1}
      />
      <Personaliza />
      <Otros data={otroData} currentIndex={2} />
      <Bunkgreen />
      <Call />
    </>
  );
}
function Inconformista() {
  return (
    <><CarruselLargo />
      <Quetipo
        elementos={elementosInconforme}
        title="Crossfit 10’"
        info="Bunkgym Crossfit 10’ es para aquellos que no solamente les vale con entrenar, sino que quieren tener un espacio único y a su medida para lograr su mejor versión entrenando en un lugar creado para ellos." />

      <Quecontiene
        title={titles[3]}
        text={texts[3]}
        elementos={elementosGimnasio2}
      />
      <Personaliza />
      <Otros data={otroData} currentIndex={3} />
      <Bunkgreen />
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