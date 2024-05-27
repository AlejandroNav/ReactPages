import React from 'react';
import './alargado.css'; // Import the CSS file
import AlargadoTrans from '../../assets/alargadotrans.png';

const Alargado = () => {
    return (
        <div className="alargado-section">
            <img src={AlargadoTrans} alt="Alargado" className="alargado-image" />
        </div>
    );
}

export default Alargado;