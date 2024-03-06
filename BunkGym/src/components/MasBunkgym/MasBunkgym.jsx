import React, { useState } from 'react';
import './MasBunkgym.css';
import plus1 from '../../assets/plus1.png';
import plus2 from '../../assets/plus2.png';
import plus3 from '../../assets/plus3.png';
import gymrender from '../../assets/gymrender.avif';
const MasBunkgym = () => {
    const [expandedItem, setExpandedItem] = useState(null);

    const items = [
        {
            title: 'DISEÑO Y EQUIPAMIENTO FITNESS',
            content: 'Creamos espacios de entrenamiento de todo tipo y suministramos un material de fabricación propia de última generación.'
        },
        {
            title: 'ASESORÍA Y SOLUCIONES FITNESS A MEDIDA',
            content: 'Aportamos experiencia y soluciones adaptadas a tu proyecto fitness, asegurando un enfoque personalizado desde la orientación hasta la implementación.'
        },
        {
            title: 'DISEÑO DE GIMNASIOS PERSONALIZADOS',
            content: 'Nuestro equipo optimizará el espacio de tu instalación y dará forma a cualquier tipo de gimnasio que tengas en mente.'
        },
        {
            title: 'IMPULSO DE PROYECTO FITNESS',
            content: 'Si eres empresario, emprendedor o inversor aceleramos el desarrollo de tu proyecto fitness. Cubriendo todas tus necesidades: asesoramiento, instalación, interiorismo, equipamiento y marketing.'
        }
    ];

    const handleItemClick = (index) => {
        setExpandedItem(index === expandedItem ? null : index);
    };

    return (
        <div className="mas-bunkgym-container">
            <h2 className='stroke-text-black-title'> MÁS BUNGYM</h2>
            <p className='paraquien-text'>No solo hacemos gimnasios en contenedores de barco. Ofrecemos todas las soluciones fitness desde un mismo lugar.</p>

            <div className='mas-bunkgym-wrapper'>
                <img src={gymrender} className='mas-bunkgym-img' />
                <div className='mas-bunkgym-list'>
                    {items.map((item, index) => (
                        <React.Fragment key={index}>
                            <h3 className='mas-bunkgym-item' onClick={() => handleItemClick(index)}>
                                <img src={plus3} className='mas-bunkgym-plus' />
                                {item.title}
                            </h3>
                            {expandedItem === index && (
                                <p className='paraquien-text'>{item.content} </p>

                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MasBunkgym;