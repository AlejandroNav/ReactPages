import React from 'react'

import NumberCounter from '../numberCounter/numberCounter'
import "./Bunkteam.css"

const Bunkteam = () => {
    return (
        <div className='bunkteam-container'>
            <h2 className='bunkteam-title'>Bunkgym Team</h2>
            <p className='bunkteam-subtitle'>Hemos llegado para dar solución a los problemas de los gimnasios convencionales,
                mediante una experiencia más emocionante, flexible, personalizada, que ofrece la
                libertad de entrenar en cualquier lugar siendo cualquier tipo de persona</p>
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
                <button className="bunkteam-button">Empieza ahora</button>
                <button className="bunkteam-button">Conoce más</button>
            </div>
        </div>
    )
}

export default Bunkteam