import React from 'react'
import './Personaliza.css'
const Personaliza = () => {
    return (
        <div className="personaliza-container">
            <h1 className="personaliza-title">PERSONALIZA TU BUNKGYM</h1>
            <p className="personaliza-text">En Bunkgym, nos adaptamos a ti como tu rutina de entrenamiento debería hacerlo.
                A continuación te mostramos las partes de tu Bunkgym
                que puedes personalizar
            </p>
            <ul className="personaliza-list">
                <li className='personaliza-list-li'>Color exterior</li>
                <li className='personaliza-list-li'>Color interior</li>
                <li className='personaliza-list-li' >Máquinas</li>
                <li className='personaliza-list-li'>Personalización de máquinas</li>
                <li className='personaliza-list-li'>Equipo de música</li>
                <li className='personaliza-list-li'>Alarma / Cámaras de seguridad</li>
                <li className='personaliza-list-li'>Color interior: Wifi</li>
                <li className='personaliza-list-li'    >Máquinas: Complementos externos</li>
                <li className='personaliza-list-li'    >Personalización de máquinas: nuevos módulos</li>
                <li className='personaliza-list-li'>Equipo de música: Energía solar</li>
            </ul>
        </div>
    )
}

export default Personaliza