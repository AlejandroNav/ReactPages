import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: 'Misión',
            content: 'Diseñamos, fabricamos e instalamos gimnasios y máquinas fitness que inspiran a las personas a alcanzar sus metas de bienestar y salud, ofreciendo equipos de calidad y soluciones personalizadas con los más altos estándares de excelencia.'
        },
        {
            title: 'Visión',
            content: 'Ser líderes en la industria del diseño y fabricación de gimnasios, reconocidos por nuestra excelencia en calidad, innovación y servicio a cliente, contribuyendo al bienestar y la salud de las comunidades a nivel global.'
        },
        {
            title: 'Valores',
            content: 'Calidad / Transparencia / Pasión / Profesionalidad / Honestidad / Experiencia de cliente'
        }
    ];

    const handlePrev = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    const handleNext = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div className="carousel">
            <div className="carousel-slide-wrapper">
                <h2 className='carousel-title'>{slides[currentSlide].title}</h2>
                <p className='carousel-content'>{slides[currentSlide].content}</p>
            </div>
            <div className='carousel-buttons'>
                <button className="prev" onClick={handlePrev}>{slides[currentSlide === 0 ? slides.length - 1 : currentSlide - 1].title}</button>
                <button className="next" onClick={handleNext}>{slides[currentSlide === slides.length - 1 ? 0 : currentSlide + 1].title}</button>
            </div>
        </div>
    );
};

export default Carousel;