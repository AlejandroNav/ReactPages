import React from 'react';
import './NuestroEquipo.css';

// Importar las imágenes
import imagenCarlos from '../../assets/fotopersona.png';
import imagenCarlosJr from '../../assets/fotopersona.png';
import imagenJavier from '../../assets/fotopersona.png';
import imagenSevillano from '../../assets/fotopersona.png';
import imagenJorge from '../../assets/fotopersona.png';
import imagenDavid from '../../assets/fotopersona.png';

const NuestroEquipo = () => {
    // Definir los miembros del equipo
    const miembros = [
        { nombre: 'Carlos Asensio', titulo: 'Diseño y entregas', imagen: imagenCarlos },
        { nombre: 'Carlos Asensio Junior', titulo: 'Entrenamientos', imagen: imagenCarlosJr },
        { nombre: 'Javier Álvarez', titulo: 'Estrategia 360', imagen: imagenJavier },
        { nombre: 'Sevillano', titulo: 'Fabricación', imagen: imagenSevillano },
        { nombre: 'Jorge Rivero', titulo: 'Ventas', imagen: imagenJorge },
        { nombre: 'David Tertov', titulo: 'Comunicación', imagen: imagenDavid }
    ];

    return (
        <div className='nuestro-equipo'>
            <div className='nuestro-equipo-container'>
                <h2 className='stroke-text-black-title titulo-general'>NUESTRO EQUIPO</h2>
                <p className=' subtitulo'>Estamos formados por un equipo director del más alto nivel, alineado plenamente para ofreceros la mejor de las experiencias.</p>
            </div>
            <div className='nuestro-equipo-lista'>
                {miembros.map((miembro, index) => (
                    <div key={index} className='nuestro-equipo-card'>
                        <img src={miembro.imagen} alt={miembro.nombre} className='nuestro-equipo-imagen'/>
                        <h3 className='nuestro-equipo-nombre'>{miembro.nombre}</h3>
                        <p className='nuestro-equipo-titulo'>{miembro.titulo}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NuestroEquipo;