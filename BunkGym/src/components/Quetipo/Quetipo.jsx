// src/components/Quetipo.js

import './Quetipo.css';

const Quetipo = ({ title, elementos ,info}) => {
    return (
        <div className='quetipo-container'>
            <div className='quetipo-title-container stroke-text-black-title'>

                <h1 className='quetipo-title'>¿QUIÉN ENTRENA EN UN BUNKGYM {title.toUpperCase()}?</h1>
            </div>
            <div className='quetipo-text-container'>
                <p className='quetipo-text grey-text'>
                    {info}
                </p>
            </div>
            <div className='quetipo-elementos-container'>
                <ul className='quetipo-elementos'>
                    {elementos.map((elemento, index) => (
                        <li key={index}>
                            <img src={elemento.logo} alt={`Logo ${elemento.nombre}`} className='quetipo-logo' />
                            <p>{elemento.nombre}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Quetipo;
