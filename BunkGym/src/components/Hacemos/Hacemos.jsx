import React from 'react';
import './Hacemos.css';
import ContainerIcon from '../../assets/icon1.png'
import ConstructionIcon from '../../assets/icon2.png'
import DistributionIcon from '../../assets/icon3.png'

const Hacemos = () => {
    return (
        <div className="hacemos-container">
            <h2 className='hacemos-title'>¿QUÉ HACEMOS?</h2>
            <p className='hacemos-text'>BUNKGYM va más allá del fitness convencional, aportamos una experiencia 360 a nuestros clientes ofreciéndoles la mejor de las experiencias y un servicio 100% profesional y personalizado. A continuación os presentamos nuestras 3 líneas de negocio principales.</p>
            <div className="lineas-negocio">
                <div className="linea">
                    <img src={ContainerIcon} alt="linea Icon" className='linea-icon' />
                    <p>Diseño y fabricación de gimnasios en contenedores marítimos a medida.</p>
                </div>
                <div className="linea">
                    <img src={ConstructionIcon} alt="Construction Icon"  className='linea-icon'/>
                    <p>Construcción e instalación de gimnasios personalizados.</p>
                </div>
                <div className="linea">
                    <img src={DistributionIcon} alt="Distribution Icon"  className='linea-icon'/>
                    <p>Distribución y venta de materiales y máquinas fitness.</p>
                </div>
            </div>
        </div>
    );
};

export default Hacemos;