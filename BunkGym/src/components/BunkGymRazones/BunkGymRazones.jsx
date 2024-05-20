import React, { useState } from 'react';
import './BunkGymRazones.css';
import footermo from '../../assets/footermo.png'
import footerwa from '../../assets/footerwa.png'
import footertre from '../../assets/footertre.png'
import footerhe from '../../assets/footerhe.png'

const BunkGymRazones = () => {
    const [expandedItem, setExpandedItem] = useState(null);
    const items = [
        { title: 'Exclusividad', content: 'Ofrecemos servicios únicos y personalizados que no encontrarás en ningún otro lugar.', icon: footermo },
        { title: 'Calidad', content: 'Nos comprometemos con la más alta calidad en todos nuestros equipos y servicios.', icon: footermo },
        { title: 'Se adapta a ti', content: 'Creamos soluciones que se ajustan perfectamente a tus necesidades y objetivos.', icon: footertre },
        { title: 'Personalización', content: 'Cada aspecto de nuestro servicio se personaliza para que se adapte a tu estilo de vida y preferencias.', icon: footerhe },
        {
            title: 'Llave en mano',
            content: 'Te proporcionamos una solución completa, desde el diseño hasta la instalación y el mantenimiento.', icon: footermo
        },
        {
            title: 'Tu gimnasio en casa',
            content: 'Te ayudamos a construir el gimnasio perfecto en la comodidad de tu hogar.', icon: footermo
        },
        {
            title: 'Diversión',
            content: 'Garantizamos que tu experiencia de entrenamiento sea divertida y motivadora.', icon: footertre
        },
        {
            title: 'Asesoramiento 360',
            content: 'Ofrecemos asesoramiento completo en todos los aspectos de la instalación y gestión del gimnasio.', icon: footerhe
        },
        {
            title: 'Salud',
            content: 'Promovemos un estilo de vida saludable a través de nuestros programas y servicios de fitness.', icon: footermo
        },
        {
            title: 'Comunidad Bunkgym',
            content: 'Únete a nuestra comunidad para encontrar apoyo, motivación y camaradería.', icon: footermo
        },
        {
            title: 'Garantía',
            content: 'Todos nuestros productos y servicios vienen con una garantía de satisfacción.', icon: footertre
        },
        {
            title: 'Inversión y fácil reventa',
            content: 'Invierte en tu salud y bienestar con la seguridad de que nuestros productos mantienen su valor.', icon: footerhe
        }
    ];

    const handleItemClick = (index) => {
        setExpandedItem(index === expandedItem ? null : index);
    };

    return (
        <div>
            <div className="bunkgym-razones-container">
                <h2 className='bunkgym-razones-title titulo-general-blanco'>12 RAZONES POR LAS QUE DEBES ADQUIRIR UN BUNKGYM</h2>
                <div className="doce-razones-columns">
                    {items.map((item, index) => (
                        <div key={index} className="doce-razones-column" onClick={() => handleItemClick(index)}>
                            <div className="doce-razones-item">
                                <p className="doce-razones-item-title">
                                    <img src={item.icon} alt="" className="icon-small" /> {item.title}
                                </p>
                                {expandedItem === index ?
                                    <p className="doce-razones-item-content">{item.content}</p> :
                                    <p className="doce-razones-item-content placeholder">v</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bunkgym-razones-footer">
                <h2>Adaptamos tu bunkgym 100% a ti y a tu familia</h2>
            </div>
        </div>
    );
};

export default BunkGymRazones;