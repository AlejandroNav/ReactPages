import React from 'react';
import './NuestraFabrica.css';
import paraquien3 from '../../assets/clientesParticulares.avif'
import paraquien4 from '../../assets/clientesGym.jpg'
import fabrica1 from '../../assets/favrica1.jpg'
import fabrica2 from '../../assets/fabrica2.jpg'
// Example images - replace these URLs with your actual image paths
const images = [
    paraquien4,
    paraquien3,
];

const NuestraFabrica = () => {
    return (
        <div className="fabrica-container">
            <h1 className="fabrica-title">NUESTRA FABRICA</h1>
            <p className="fabrica-text">
                Fabricamos gimnasios, materiales y máquinas fitness con pasión, dedicación y profesionalidad en nuestra fábrica sevillana. Cada pieza es un reflejo de nuestra entrega total a la elaboración, calidad y autenticidad española.
            </p>
            <div className="fabrica-img-wrapper">
                <div className="fabrica-img-container">
                    <img src={fabrica1} alt="Soldadura Image" className="fabrica-img" />
                    <div className='fabrica-frame'></div>
                    <div className='fabrica-frame2'></div>
                </div>
                <div className="fabrica-img-container">
                    <img src={fabrica2} alt="Fabrica Image" className="fabrica-img" />
                    <div className='fabrica-frame'></div>
                    <div className='fabrica-frame2'></div>
                </div>
            </div>
        </div>
    );
};

export default NuestraFabrica;