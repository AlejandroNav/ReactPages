import './Quetipo.css';
import logo1 from '../../assets/icon3.png';
import tipos12 from '../../assets/tipos-12.png';
import tipos13 from '../../assets/tipos-13.png';
import tipos14 from '../../assets/tipos-14.png';
import tipos15 from '../../assets/tipos-15.png';
import tipos16 from '../../assets/tipos-16.png';
import tipos17 from '../../assets/tipos-17.png';
import tipos18 from '../../assets/tipos-18.png';
import tipos19 from '../../assets/tipos-19.png';
import tipos20 from '../../assets/tipos-20.png';
import tipos21 from '../../assets/tipos-21.png';
import tipos22 from '../../assets/tipos-22.png';
import tipos23 from '../../assets/tipos-23.png';
import tipos24 from '../../assets/tipos-24.png';


const elementos = [
    { nombre: 'Atletas híbridos', logo: tipos18 },
    { nombre: 'Deportistas de resistencia', logo: tipos19 },
    { nombre: 'Crossfitters', logo: tipos20 },
    { nombre: 'Rehabilitación de lesiones', logo: tipos21},
    { nombre: 'Entrenadores personales', logo: tipos22},
    { nombre: 'Entrenamiento grupales', logo: tipos23 },
    { nombre: 'Circuitos de entrenamiento', logo: tipos24 }
];

const Quetipo = () => {
    return (
        <div className='quetipo-container'>
            <div className='quetipo-title-container stroke-text-black-title'>
                <h1 className='quetipo-title'>¿QUIÉN ENTRENA EN UN BUNKGYM CROSSFIT?</h1>
            </div>
            <div className='quetipo-text-container'>
                <p className='quetipo-text grey-text'>
                    Bunkgym Crossfit está preparado para atletas híbridos y deportistas de resistencia que quieran desatar su potencial entrenando en un espacio funcional,
                    combinando ejercicios de fuerza, resistencia, equilibrio y velocidad.
                </p>
            </div>
            <div className='quetipo-elementos-container'>
                <ul className='quetipo-elementos'>
                    {elementos.map((elemento, index) => (
                        <li key={index}>
                            <img src={elemento.logo} alt={`Logo ${elemento.nombre} -  `} className='quetipo-logo' />
                            <p>{elemento.nombre}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Quetipo;
