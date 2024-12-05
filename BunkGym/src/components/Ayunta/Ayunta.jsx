import React from 'react';
import './Ayunta.css';
import Carruseles from '../Carruseles/Carruseles'

import outside2 from '../../assets/particularhero.png';
import particulargym1 from '../../assets/blackStrong.png';
import particulargym2 from '../../assets/div9.png';
import particulargym3 from '../../assets/div4.png';
import div7 from '../../assets/div7.png';
import strong from '../../assets/redCrossfit.png';
import crossfit from '../../assets/yellow360.png';
import whiteCrossfit2 from '../../assets/whiteCrossfit.png';

const Ayunta = ({ title, outlineTitle, backgroundImage }) => {
  const carouselData2 = {
    "slides": [
      {
        "src": particulargym1,
        "alt": "Image 1 for carousel"
      },
      {
        "src": particulargym2,
        "alt": "Image 2 for carousel"
      },
      {
        "src": particulargym3,
        "alt": "Image 3 for carousel"
      },
      {
        "src": div7,
        "alt": "Image 3 for carousel"
      }
      ,
      {
        "src": strong,
        "alt": "Image 3 for carousel"
      }
      ,
      {
        "src": crossfit,
        "alt": "Image 3 for carousel"
      },
      {
        "src": whiteCrossfit2,
        "alt": "Image 3 for carousel"
      }
    ]
  };
  return (
    <div>
      <div
        className='ayunta-container'
        style={{ backgroundImage: `url(${backgroundImage})` }} // Use the image URL passed from props
      >
        <div className='ayunta-title-container'>
          <h1 className='ayunta-title'>{title}</h1>
          <h1 className='ayunta-title-outline'>{outlineTitle}</h1>
        </div>

      </div>
      <div>
        <section className='particular-section'>

          <div className='particular-text-container'>

            <p className='particular-text'>En Bunkgym ayudamos a ayuntamientos a promover el bienestar y la actividad física para sus habitantes. Transformando plazas, parques y espacios comunes en puntos de encuentro donde la comunidad se conecta a través del ejercicio y aportandoles todos los medios físicos y humanos para poder cumplir esos objetivos a todos y cada uno de los habitantes. 
            </p>
            <p className='particular-text'> Unamos fuerzas para crear un municipio más saludable, inclusivo y unido.

            </p>
          </div>
          <div className='particular-img-container'>
            <Carruseles data={carouselData2} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Ayunta;
