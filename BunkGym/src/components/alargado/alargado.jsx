import React from 'react';
import './alargado.css'; // Import the CSS file
import AlargadoImage from '../../assets/alargadonegro.png'; // Ensure you have the correct path to your image
import AlargadoTrans from '../../assets/alargadotrans.png';

const Alargado = () => {
    return (
        <div className="alargado-section">
            <img src={AlargadoTrans} alt="Alargado" className="alargado-image" />
        </div>
    );
}

export default Alargado;