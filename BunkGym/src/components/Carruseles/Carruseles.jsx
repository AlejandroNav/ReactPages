import React, { useState, useEffect } from 'react';
import './Carruseles.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import adorno from '../../assets/adorno1.avif';
import adorno2 from '../../assets/adorno2.avif';

const Carruseles = ({ data }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % data.slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + data.slides.length) % data.slides.length);
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 8000); // Autoplay slide change every 3000ms (3 seconds)

        return () => clearInterval(slideInterval); // Clear interval on component unmount
    }, [data.slides.length]); // Dependency array includes data.slides.length to handle changes in slide count

    return (
        <div className='outer-container'>
            <div className='carrusel-container'>
                <div className='carrusel-frame'></div>
                <div className='carrusel-frame2'></div>
                <BsArrowLeftShort className='carrusel-arrow arrow-left' onClick={prevSlide} />
                <img src={data.slides[currentSlide].src} alt={data.slides[currentSlide].alt} className='carrusel-img' />
                <BsArrowRightShort className='carrusel-arrow arrow-right' onClick={nextSlide} />
                <span className='carrusel-indicators'>
                    {data.slides.map((_, index) => (
                        <button
                            className={`carrusel-dot ${index === currentSlide ? 'active' : ''}`}
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                        ></button>
                    ))}
                </span>
            </div>
        </div>
    );
};

export default Carruseles;