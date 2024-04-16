import React, { useState } from 'react';
import './BunkGymRazones.css';

const razones = [
    "Exclusividad",
    "Calidad",
    "Se adapta a ti",
    "Personalización",
    "Llave en mano",
    "Tu gimnasio en casa",
    "Diversión",
    "Asesoramiento 360",
    "Salud",
    "Comunidad Bunkgym",
    "Garantía",
    "Inversión y fácil reventa"
];

const BunkGymRazones = () => {
    const [expandedItem, setExpandedItem] = useState(null);
    const items = [
        {
            title: 'Exclusividad',
            content: 'Ofrecemos servicios únicos y personalizados que no encontrarás en ningún otro lugar.'
        },
        {
            title: 'Calidad',
            content: 'Nos comprometemos con la más alta calidad en todos nuestros equipos y servicios.'
        },
        {
            title: 'Se adapta a ti',
            content: 'Creamos soluciones que se ajustan perfectamente a tus necesidades y objetivos.'
        },
        {
            title: 'Personalización',
            content: 'Cada aspecto de nuestro servicio se personaliza para que se adapte a tu estilo de vida y preferencias.'
        },
        {
            title: 'Llave en mano',
            content: 'Te proporcionamos una solución completa, desde el diseño hasta la instalación y el mantenimiento.'
        },
        {
            title: 'Tu gimnasio en casa',
            content: 'Te ayudamos a construir el gimnasio perfecto en la comodidad de tu hogar.'
        },
        {
            title: 'Diversión',
            content: 'Garantizamos que tu experiencia de entrenamiento sea divertida y motivadora.'
        },
        {
            title: 'Asesoramiento 360',
            content: 'Ofrecemos asesoramiento completo en todos los aspectos de la instalación y gestión del gimnasio.'
        },
        {
            title: 'Salud',
            content: 'Promovemos un estilo de vida saludable a través de nuestros programas y servicios de fitness.'
        },
        {
            title: 'Comunidad Bunkgym',
            content: 'Únete a nuestra comunidad para encontrar apoyo, motivación y camaradería.'
        },
        {
            title: 'Garantía',
            content: 'Todos nuestros productos y servicios vienen con una garantía de satisfacción.'
        },
        {
            title: 'Inversión y fácil reventa',
            content: 'Invierte en tu salud y bienestar con la seguridad de que nuestros productos mantienen su valor.'
        }
    ];

    const handleItemClick = (index) => {
        setExpandedItem(index === expandedItem ? null : index);
    };

    return (
        <div className="bunkgym-razones-container">
            <h2 className='bunkgym-razones-title titulo-general-blanco'>12 RAZONES POR LAS QUE DEBES ADQUIRIR UN BUNKGYM</h2>


            <div className="doce-razones-columns">
                <div className="doce-razones-column">
                    {items.slice(0, 6).map((item, index) => (
                        <div key={index} onClick={() => handleItemClick(index)} className="doce-razones-item">
                            <p className="doce-razones-item-title">{item.title}</p>
                            {expandedItem === index && <p className="doce-razones-item-content">{item.content}</p>}
                        </div>
                    ))}
                </div>
                <div className="doce-razones-column">
                    {items.slice(6).map((item, index) => (
                        <div key={index + 6} onClick={() => handleItemClick(index + 6)} className="doce-razones-item">
                            <p className="doce-razones-item-title">{item.title}</p>
                            {expandedItem === index + 6 && <p className="doce-razones-item-content">{item.content}</p>}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default BunkGymRazones;
