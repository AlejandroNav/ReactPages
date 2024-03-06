import React, { useState } from 'react';
import './MasBunkgym.css';
import plus1 from '../../assets/plus1.png';
import plus2 from '../../assets/plus2.png';
import plus3 from '../../assets/plus3.png';


const MasBunkgym = () => {
    const [expandedItem, setExpandedItem] = useState(null);

    const handleItemClick = (index) => {
        setExpandedItem(index === expandedItem ? null : index);
    };
    return (
        <div className="mas-bunkgym-container">
            <h2 className='stroke-text-black-title'> MÁS BUNGYM</h2>
            <p className='paraquien-text'>No solo hacemos gimnasios en contenedores de barco. Ofrecemos todas las soluciones fitness desde un mismo lugar.</p>

            <div className='mas-bunkgym-list'>
                <h3 className='mas-bunkgym-item' onClick={() => handleItemClick(0)}> <img src={plus3} className='mas-bunkgym-plus' />DISEÑO Y EQUIPAMIENTO FITNESS</h3>

                {expandedItem === 0 && (
                    <p className='paraquien-text'>Creamos espacios de entrenamiento de todo tipo y suministramos un material de fabricación propia de última generación.</p>
                )}

                <h3 className='mas-bunkgym-item' onClick={() => handleItemClick(1)}><img src={plus3} className='mas-bunkgym-plus' />ASESORÍA Y SOLUCIONES FITNESS A MEDIDA</h3>
                {expandedItem === 1 && (
                    <p className='paraquien-text'>Aportamos experiencia y soluciones adaptadas a tu proyecto fitness, asegurando un enfoque personalizado desde la orientación hasta la implementación.</p>
                )}

                <h3 className='mas-bunkgym-item' onClick={() => handleItemClick(2)}><img src={plus3} className='mas-bunkgym-plus' />DISEÑO DE GIMNASIOS PERSONALIZADOS</h3>
                {expandedItem === 2 && (
                    <p className='paraquien-text'>Nuestro equipo optimizará el espacio de tu instalación y dará forma a cualquier tipo de gimnasio que tengas en mente.</p>
                )}

                <h3 className='mas-bunkgym-item' onClick={() => handleItemClick(3)}><img src={plus3} className='mas-bunkgym-plus' />IMPULSO DE PROYECTO FITNESS</h3>
                {expandedItem === 3 && (
                    <p className='paraquien-text'>Si eres empresario, emprendedor o inversor aceleramos el desarrollo de tu proyecto fitness. Cubriendo todas tus necesidades: asesoramiento, instalación, interiorismo, equipamiento y marketing.</p>
                )}
            </div>
        </div>
    );
}

export default MasBunkgym;