import React from 'react';
import './Quetipo.css';
import logo1 from '../../assets/icon3.png';

const elementos = [
    { nombre: 'Atletas híbridos', logo: logo1 },
    { nombre: 'Deportistas de resistencia', logo: logo1 },
    { nombre: 'Crossfitters', logo: logo1 },
    { nombre: 'Rehabilitación de lesiones', logo: logo1},
    { nombre: 'Entrenadores personales', logo: logo1},
    { nombre: 'Entrenamiento grupales', logo: logo1 },
    { nombre: 'Circuitos de entrenamiento', logo: logo1 }
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
                            {elemento.nombre}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Quetipo;
