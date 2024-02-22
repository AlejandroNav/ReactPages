import React from 'react'
import '../Hero/Hero.css'
import Header from '../Header/Header'
import NumberCounter from '../numberCounter/numberCounter'
import  adorno1  from '../../assets/adorno1.avif'
import LogoWhite from '../../assets/bunk-white.avif'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <Header />
                <div className="hero-ad">
                    <div className='hero-ad-circle'></div>
                    <span>Tu empresa, tu estilo, tu Bunkgym. </span>
                </div>
                <div className="hero-text">
                    <div>
                        <span className='hero-text-1'>Bunkgym</span> <span >Nacidos para</span>
                    </div>
                    <div>
                        <span>marcar </span> <span className='stroke-text'>la diferencia</span>
                    </div>
                    <div>
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
                <img src={adorno1} alt="" className='hero-adorno' />
            </div>
            <div className="hero-right">
                Derechaaaa
            </div>
        </div>
    )
}

export default Hero