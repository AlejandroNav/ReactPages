import React from 'react'
import '../Hero/Hero.css'
import Header from '../Header/Header'

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
            </div>
            <div className="hero-right">
                Derechaaaa
            </div>
        </div>
    )
}

export default Hero