import React, { useState } from 'react';
import './Reasons.css'
import reason1 from '../../assets/reason1.png'
import reason2 from '../../assets/reason2.png'
import reason3 from '../../assets/reason3.png'
import reason4 from '../../assets/reason4.png'
import palomita2 from '../../assets/tick2.png'

const Reasons = () => {
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
        <div className='reasonsouter-container'>
            <h1 className="reasons-big-title titulo-general-blanco">MÁS BUNKGYM </h1>
            <p className='parrafo2'>Si Bunkgym no se adapta a ti, por precio, falta de espacio o características, tenemos más opciones.</p>
            <div className='reasons'>
                <div className='reasons-left-container'>
                    <div className="reasons-left">
                        <img src={reason1} alt="" />
                        <img src={reason2} alt="" />
                        <img src={reason3} alt="" />
                        <img src={reason4} alt="" />
                    </div>
                </div>

                <div className='reasons-right'>
                    <section className='reasons-title'>
                        <p className='reasons-title-text '>Si tienes una habitación, garaje o espacio, podemos crearte tu gimnasio en casa, totalmente a medida o aportarte la máquina que necesitas para que el deporte forme parte de tu estilo de vida..</p>
                        <p className='reasons-title-text '>Todas las soluciones fitness desde un mismo lugar. </p>
                    </section>
                    <section className='reasons-text'>
                        <ul>
                            {items.map((item, index) => (
                                <li key={index} className="reasons-item" onClick={() => handleItemClick(index)}>
                                    <div className="reasons-item-header">
                                        <img src={palomita2} alt="" className="tick-icon" />
                                        <p>{item.title}</p>
                                    </div>
                                    {expandedItem === index && (
                                        <div className="reasons-item-content">
                                            <p className="content-text">{item.content}</p>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Reasons