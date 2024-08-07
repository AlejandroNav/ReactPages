
import './Personaliza.css'
import downArrow from '../../assets/down.png'


import strongy from '../../assets/strongy.png';
import crossy from '../../assets/crossy.png';
import inco from '../../assets/inco.png';
import bunky from '../../assets/bunky.png';

const items = [
    'Color exterior',
    'Color interior',
    'Máquinas',
    'Personalización de máquinas',
    'Sistema musical',
    'Alarma / Cámaras de seguridad',
    'Sistema de Wifi',
    'Máquinas: Complementos externos',
    'Personalización de máquinas: nuevos módulos',
    'Energía solar'
];
const images = [
    { src: bunky, text: 'BUNKGYM CROSSFIT ' },
    { src: strongy, text: 'BUNKGYM STRONG  ' },
    { src: inco, text: 'BUNKGYM 360 ' },
    { src: crossy, text: 'BUNKGYM INCONFORMISTA  ' },
];

const Personaliza = () => {
    return (
        <div className="personaliza-container">
            <h1 className="stroke-text-black-title">PERSONALIZA TU BUNKGYM</h1>
            <p className="personaliza-text parrafo">En Bunkgym, nos adaptamos a ti como tu rutina de entrenamiento debería hacerlo.
                A continuación te mostramos las partes de tu Bunkgym
                que puedes personalizar
            </p>

            <div className="">
                <div className="image-section">
                    {images.map((image, index) => (
                        <div key={index} className="image-container">
                            <img src={image.src} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className='personaliza-list-container'>
                <ul className="personaliza-list">
                    {items.map((item, index) => (
                        <li key={index} className="personaliza-list-li">
                            <img src={downArrow} alt="Down arrow" className="imgabajo" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Personaliza