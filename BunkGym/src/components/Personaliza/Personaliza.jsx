
import './Personaliza.css'
import downArrow from '../../assets/down.png'


import strongy from '../../assets/strongy.png';
import crossy from '../../assets/crossy.png';
import inco from '../../assets/inco.png';
import bunky from '../../assets/bunky.png';

const items = [
    "Color exterior", "Conectividad","Accesorios de exterior",
    "Color interior",
    "Alarma",
    "Decoración exterior",
    "Serigrafía",
    "Video vigilancia",
    "Iluminación exterior",
    "Rotulación",
    "Energía solar",
    "Ampliación de maquinas",
    "Iluminación interior",
    "Control de accesos",
    "Ampliación de complementos",
    "Climatización",
    "Tipo de altavoces",
    "Ampliación de módulos",
    "Acceso y uso 100% autónomo",
    "Control domótico 360",
    "Sistema de vídeo y voz "
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
                <div className="image-section2">
                    {images.map((image, index) => (
                        <div key={index} className="image-container2 hide-small">
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