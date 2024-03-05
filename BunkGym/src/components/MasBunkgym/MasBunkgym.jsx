import React from 'react'
import './MasBunkgym.css'

const MasBunkgym = () => {
    return (
        <div className="mas-bunkgym-container">
            <h2 className='mas-bunkgym-title'>MÁS BUNGYM</h2>
            <p className='mas-bunkgym-subtitle'>No solo hacemos gimnasios en contenedores de barco. Ofrecemos todas las soluciones fitness desde un mismo lugar.</p>

            <div className='mas-bunkgym-list'>
                <h3 className='mas-bunkgym-item'>DISEÑO Y EQUIPAMIENTO FITNESS</h3>
                <p>Creamos espacios de entrenamiento de todo tipo y suministramos un material de fabricación propia de última generación.</p>

                <h3 className='mas-bunkgym-item'>ASESORÍA Y SOLUCIONES FITNESS A MEDIDA</h3>
                <p>Aportamos experiencia y soluciones adaptadas a tu proyecto fitness, asegurando un enfoque personalizado desde la orientación hasta la implementación.</p>

                <h3 className='mas-bunkgym-item'>DISEÑO DE GIMNASIOS PERSONALIZADOS</h3>
                <p>Nuestro equipo optimizará el espacio de tu instalación y dará forma a cualquier tipo de gimnasio que tengas en mente.</p>

                <h3 className='mas-bunkgym-item'>IMPULSO DE PROYECTO FITNESS</h3>
                <p>Si eres empresario, emprendedor o inversor aceleramos el desarrollo de tu proyecto fitness. Cubriendo todas tus necesidades: asesoramiento, instalación, interiorismo, equipamiento y marketing.</p>
            </div>
        </div>
    );
}

export default MasBunkgym;