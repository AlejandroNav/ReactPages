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
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % razones.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 2 + razones.length) % razones.length);
    };

    return (
        <div className="bunkgym-razones-container">
            <h2 className='bunkgym-razones-title'>12 RAZONES POR LAS QUE DEBES ADQUIRIR UN BUNKGYM</h2>
            <div className="carrusel">
                <button onClick={prevSlide}>{"<"}</button>
                <div className="razones-columns">
                    <div className='razones'>{razones[currentIndex]}</div>
                    <div className='razones'>{razones[(currentIndex + 1) % razones.length]}</div>
                </div>
                <button onClick={nextSlide}>{">"}</button>
            </div>
        </div>
    );
};

export default BunkGymRazones;
