import React from 'react';
import './Hacemos.css'; // Ensure this CSS is updated for the new structure
import ContainerIcon from '../../assets/12.png';
import ConstructionIcon from '../../assets/ConstructionIcon.png';
import DistributionIcon from '../../assets/DistributionIcon.png';

const Hacemos = () => {
    // Array of line of business objects
    const linesOfBusiness = [
        { icon: ContainerIcon, text: 'Diseño y fabricación de gimnasios en contenedores marítimos a medida.' },
        { icon: ConstructionIcon, text: 'Construcción e instalación de gimnasios personalizados.' },
        { icon: DistributionIcon, text: 'Distribución y venta de materiales y máquinas fitness.' },
    ];

    return (
        <div className="hacemos-container">
            <h2 className='hacemos-title'>¿QUÉ HACEMOS?</h2>
            <p className='hacemos-text'>BUNKGYM va más allá del fitness convencional, aportamos una experiencia 360 a nuestros clientes ofreciéndoles la mejor de las experiencias y un servicio 100% profesional y personalizado. A continuación os presentamos nuestras 3 líneas de negocio principales.</p>
            <div className="lineas-negocio">
                {linesOfBusiness.map((line, index) => (
                    <div key={index} className="linea">
                        <img src={line.icon} alt={`linea ${index + 1} Icon`} className='linea-icon' />
                        <p>{line.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hacemos;