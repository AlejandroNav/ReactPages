import React from 'react';
import './Quienpuede.css';
import checkmark from '../../assets/greycheck.png'; // Asegúrate de tener la imagen en la ruta correcta

import tipo12 from '../../assets/tipos-12.png';
import tipo13 from '../../assets/tipos-13.png';
import tipo14 from '../../assets/tipos-14.png';
import tipo15 from '../../assets/tipos-15.png';
import tipo16 from '../../assets/tipos-16.png';
import tipo17 from '../../assets/tipos-17.png';

const Quienpuede = () => {
    const clientes = [
        { nombre: 'Ayuntamientos', imagen: tipo13 },
        { nombre: 'Empresas', imagen: tipo12 },
        { nombre: 'Particulares', imagen: tipo14 },
        { nombre: 'Comunidades de vecinos', imagen: tipo15 },
        { nombre: 'Centros deportivos', imagen: tipo16 },
        { nombre: 'Centros educativos', imagen: tipo17 }
    ];

    return (
        <div className='quienpuede-container'>
            <div className='quienpuede-title-container stroke-text-black-title'>
                <h1 className='quienpuede-title'>¿QUIÉN PUEDE ADQUIRIR UN BUNKGYM?</h1>
            </div>
            <div className='quienpuede-text-container'>
                <p className='quienpuede-text grey-text'>
                    Bunkgym es para deportistas principiantes, avanzados y de élite. Bunkgym es para todos los que apuesten por el deporte, la salud y cuidar de su cuerpo.
                </p>
            </div>
            <div className='quienpuede-text-container'>
                <p className='quienpuede-text grey-text'>
                    ¿Con qué sector te identificas?

                </p>
            </div>
            <div className='quienpuede-elementos-container'>
                <ul className='quienpuede-elementos'>
                    {clientes.map((cliente, index) => (
                        <li key={index} className='quienpuede-elemento'>
                            <img src={cliente.imagen} alt={cliente.nombre} className='quienpuede-logo' />
                            <p className='grey-text'>{cliente.nombre}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='quienpuede-text-container-black'>
                <p className='quienpuede-text white-text'>HEMOS NACIDO POR Y PARA MEJORAR E INNOVAR EN EL MUNDO DEL FITNESS
                </p>
            </div>
        </div>
    );
}

export default Quienpuede;
