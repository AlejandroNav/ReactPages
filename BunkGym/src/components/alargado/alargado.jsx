import React from 'react';
import './alargado.css'; // Import the CSS file
import AlargadoTrans from '../../assets/alargadotrans.png';
import AlargadoTrans2 from '../../assets/alargadotrans2.png';
const Alargado = () => {
    return (
        <div className="alargado-section">
            <img src={AlargadoTrans2} alt="Alargado" className="alargado-image" />
        </div>
    );
}

export default Alargado;