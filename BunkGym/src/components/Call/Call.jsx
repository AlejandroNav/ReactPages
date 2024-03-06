import React from 'react'
import './Call.css'
const Call = () => {
    return (
        <div className='call-container'>
            <div className='call-text-container'>
                <h1 className='call-title stroke-text'>
                    ESCRIBENOS
                </h1>
                <h3 className='paraquien-text'>QUEREMOS DARTE LA MEJOR DE LAS EXPERIENCIAS.
                </h3>
                <p className='paraquien-text call-text'>RESERVA AHORA TU CONSULTORÍA CON NUESTRO EQUIPO Y OBTÉN UN PLAN DETALLADO PARA HACER REALIDAD TU GIMNASIO IDEAL. </p>
            </div>
            <button className='call-button'>CONTACTANOS</button>
        </div>
    )
}

export default Call