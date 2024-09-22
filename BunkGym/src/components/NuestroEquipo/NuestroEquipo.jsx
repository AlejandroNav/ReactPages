import React from 'react';
import './NuestroEquipo.css';

// Importar las imágenes
import imagenCarlos from '../../assets/fotopersona.png';
import imagenCarlosJr from '../../assets/fotopersona.png';
import imagenJavier from '../../assets/fotopersona.png';
import imagenSevillano from '../../assets/fotopersona.png';
import imagenJorge from '../../assets/fotopersona.png';
import imagenDavid from '../../assets/fotopersona.png';
import exampleimage from '../../assets/27.png';
import adorno from '../../assets/adorno1.avif';


import logolift from '../../assets/logolift.png';
import logolift2 from '../../assets/logolift2.png';
import personalift from '../../assets/persona.png';
import personalift2 from '../../assets/persona2.png';

const NuestroEquipo = () => {
    // Definir los miembros del equipo
    const miembros = [
        { nombre: 'Carlos Asensio', titulo: 'Diseño y entregas', imagen: exampleimage },
        { nombre: 'Carlos Asensio Jr', titulo: 'Entrenamientos', imagen: exampleimage },
        { nombre: 'Javier Álvarez', titulo: 'Estrategia 360', imagen: exampleimage },
        { nombre: 'Sevillano', titulo: 'Fabricación', imagen: exampleimage },
        { nombre: 'Jorge Rivero', titulo: 'Ventas', imagen: exampleimage },
        { nombre: 'David Tertov', titulo: 'Comunicación', imagen: exampleimage }
    ];

    return (
        <div>
            <div className='nuestro-equipo'>
                <div className='nuestro-equipo-container'>
                    <h2 className='stroke-text-black-title titulo-general'>NUESTRO EQUIPO</h2>
                    <img src={adorno} alt="adorno" className='adorno-equipo1' />
                    <img src={adorno} alt="adorno" className='adorno-equipo2' />
                    <p className='parrafo nuestro-equipo-subtitulo'>
                        Estamos formados por un equipo director del más alto nivel, alineado plenamente para ofreceros la mejor de las experiencias.
                    </p>
                </div>
                <div className='nuestro-equipo-lista'>
                    {miembros.map((miembro, index) => (
                        <div key={index} className='nuestro-equipo-card'>
                            <div className='imagen-container'>
                                <img src={miembro.imagen} alt={miembro.nombre} className='nuestro-equipo-imagen' />
                                <div className='imagen-frame'></div>
                                <div className='imagen-frame2'></div>
                            </div>
                            <h3 className='nuestro-equipo-nombre'>{miembro.nombre}</h3>
                            <p className='nuestro-equipo-titulo'>{miembro.titulo}</p>
                        </div>
                    ))}
                </div>

            </div>

            <div className='nuestros-personas'>
                <h2 className='stroke-text-black-title titulo-general equipo-Titulo-Menor'>Diseño, asesoramiento y apoyo de campeones para campeones </h2>

                <div className='personas-fila'>
                    <div className='persona-imagen-container'>
                        <img src={personalift} alt="carlos" className='persona-imagen-img' />
                    </div>
                    <div className='persona-text-container'>
                        <h2 className='persona-text-container-h2'>Carlos Asensio </h2>

                        <ul className='persona-ul'>

                            <li>  ●   Campeón España Powerlifting AEP (4 Veces)</li>
                            <li>  ●   Campeón España Press de Banco AEP (2 Veces)</li>
                            <li>  ●   Campeón España Culturismo IFBB</li>
                            <li>  ●   Campeón del Mundo Culturismo IFBB</li>
                            <li>  ●   Carnet Profesional de la IFBB (IFBBPro)</li>

                        </ul>
                    </div>
                    <div className='persona-imagen-container'>
                        <img src={logolift2} alt="carlos" className='persona-imagen-img' />
                    </div>
                </div>
                <div className='personas-fila'>
                    <div className='persona-imagen-container'>
                        <img src={logolift} alt="carlos" className='persona-imagen-img' />
                    </div>
                    <div className='persona-text-container'>
                        <h2 className='persona-text-container-h2'>Carlos Asensio Jr </h2>
                        <ul className='persona-ul'>
                            <li>  ●  Campeón del Mundo Powerlifting WPC (Subjunior -100Kg) </li>
                            <li>  ●  Récord de España Powerlifting de total (Subjunior -100Kg) </li>
                        </ul>
                    </div>
                    <div className='persona-imagen-container'>
                        <img src={personalift2} alt="carlos" className='persona-imagen-img' />
                    </div>
                </div>
                <div className='nuestro-equipo-footer'>
                    <h2 className='nuestro-equipo-footer-frase'>HEMOS NACIDO POR Y PARA MEJORAR E INNOVAR EN EL
                        MUNDO DEL FITNESS
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default NuestroEquipo;