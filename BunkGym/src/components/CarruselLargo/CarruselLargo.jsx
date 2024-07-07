import Carruseles from '../Carruseles/Carruseles'
import particulargym1 from '../../assets/div5.png';
import particulargym2 from '../../assets/div2.png';
import particulargym3 from '../../assets/div4.png';
import div7 from '../../assets/div7 (copy).png';
import div6largo from '../../assets/div6largo.png';
import alargada5 from '../../assets/5alargada.png';
import './CarruselLargo.css'
const CarruselLargo = () => {

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
        "alt": "Image 4 for carousel"
      }
      ,
      {
        "src": div6largo,
        "alt": "Image 5 for carousel"
      }
      ,
      {
        "src": alargada5,
        "alt": "Image 6 for carousel"
      }
    ]
  };
  return (
    <div className='crossfit-container-carru'>
      <div className='crossfit-img-container'>
      <Carruseles data={carouselData2} />
    </div>
    </div>
  )
}

export default CarruselLargo