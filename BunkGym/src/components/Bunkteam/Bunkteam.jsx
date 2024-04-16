import React from 'react'

import NumberCounter from '../numberCounter/numberCounter'
import "./Bunkteam.css"
import adorno1 from '../../assets/adorno1.avif'
import adorno2 from '../../assets/adorno2.avif'
import adorno3 from '../../assets/adorno3.png'

const Bunkteam = () => {
    return (
        <div className='bunkteam-container '>

            <h2 className='bunkteam-title titulo-general '>
                BUNKGYM TEAM
                <img src={adorno2} alt="" className='bunkteam-adorno1' />
                <img src={adorno1} alt="" className='bunkteam-adorno2' />
                <img src={adorno3} alt="" className='bunkteam-adorno3' />
            </h2>
            <p className='bunkteam-subtitle'>Somos una marca de fitness focalizada en diseñar, fabricar e instalar máquinas fitness y
                gimnasios portátiles integrados en contenedores de barco.</p>

            <p className='bunkteam-subtitle'>Hemos llegado para dar solución a los problemas de los gimnasios convencionales,
                mediante una experiencia más emocionante, flexible, personalizada, que ofrece la
                libertad de entrenar en cualquier lugar siendo cualquier tipo de persona.
                <div className='bunkteam-blur'></div></p>

            <div className="bunkteam-figures">
                <div className="bunkteam-figure">
                    <span>+<NumberCounter endValue={30} /></span>
                    <span>AÑOS EN EL MUNDO DEL FITNESS</span>
                </div>
                <div className="bunkteam-figure">
                    <span>+<NumberCounter endValue={20} /></span>
                    <span>AÑOS DISEÑANDO Y FABRICANDO GIMNASIOS</span>
                </div>
                <div className="bunkteam-figure">
                    <span>+<NumberCounter endValue={50} /></span>
                    <span>TRABAJADORES</span>
                </div>
                <div className="bunkteam-figure">
                    <span>+<NumberCounter endValue={100} /></span>
                    <span>PARTNERS</span>
                </div>
            </div>
            <div className="bunkteam-buttons">
                <button className="bunkteam-button">Conocenos más</button>
            </div>
        </div>
    )
}

export default Bunkteam