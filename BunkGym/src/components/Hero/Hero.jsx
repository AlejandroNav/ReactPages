import React from 'react'
import '../Hero/Hero.css'
import Header from '../Header/Header'
import NumberCounter from '../numberCounter/numberCounter'
import adorno1 from '../../assets/adorno1.avif'
import adorno2 from '../../assets/adorno2.avif'
import LogoWhite from '../../assets/bunk-white.avif'
import calories from '../../assets/calories.avif'
import heart from '../../assets/heart.avif'
import mantrans from '../../assets/man-transparent.png'


const Hero = ({ children, setCurrentPage }) => {
    return (
        <div className="hero">
            <div className="hero-left">
                <div className="hero-ad">
                    <div className='hero-ad-circle'></div>
                    <span>Somos Fuerza. Somos Excelencia. Somos Sostenibilidad. Somos Innovación. Somos Salud.</span>
                </div>
                <div className="hero-text">
                    <div>
                        <span className='stroke-text' >SOMOS BUNKGYM</span> <span >venimos</span>
                    </div>
                    <div>
                        <span>a revolucionar</span> <span className='stroke-text'>el mundo</span>
                    </div>
                    <div>
                        <span>del Deporte</span>
                    </div>
                    <div className='hero-text-p'>
                        <p>Somos una marca de fitness focalizada en diseñar, fabricar e instalar gimnasios portátiles integrados en contenedores de barco.</p>
                    </div>
                </div>
                <div className="hero-figures">
                    <div className="hero-figure">
                        <span>+<NumberCounter endValue={30} /></span>
                        <span>AÑOS EN EL MUNDO DEL FITNESS</span>
                    </div>
                    <div className="hero-figure">
                        <span>+<NumberCounter endValue={20} /></span>
                        <span>AÑOS DISEÑANDO Y FABRICANDO GIMNASIOS</span>
                    </div>
                    <div className="hero-figure">
                        <span>+<NumberCounter endValue={50} /></span>
                        <span>TRABAJADORES</span>
                    </div>
                    <div className="hero-figure">
                        <span>+<NumberCounter endValue={100} /></span>
                        <span>PARTNERS</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <button className="hero-btn">Empieza ahora</button>
                    <button className="hero-btn">Conoce más</button>
                </div>

            </div>
            <div className="hero-right">
                <img src={mantrans} alt="" className='hero-image' />
            </div>

        </div>
    )
}

export default Hero