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
                    <img src={adorno} alt="adorno" className='adorno-equipo3' />
                    <img src={adorno} alt="adorno" className='adorno-equipo4' />
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
            <div className='nuestro-equipo-footer'>
                <h2 className='nuestro-equipo-footer-frase'>"Empieza tu viaje hacia un tú más fuerte hoy."</h2>
            </div>
        </div>
    );
}

export default NuestroEquipo;