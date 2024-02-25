import React from 'react'
import './Planes.css'
import palomita from '../../assets/tick.png'
const Planes = () => {
    return (
        <div className="planes-container">
            <div className="Programs-header" style={{ width: '70%' }} >
                <span className='stroke-text-white'> Preparado
                </span>
                <span className='stroke-text'>Para comenzar
                </span>
                <span className='stroke-text-white'> tu viaje
                </span>
            </div>
            <div className="planes">
                <div className="plan">
                    <h4>DISEÑO Y EQUIPAMIENTO FITNESS</h4>
                    <span className='plan-minortext'>Creamos espacios de entrenamiento de todo tipo y suministramos un material de fabricación propia de última generación.</span>
                    <div className="planes-features">
                        <div>
                            <img src={palomita} alt="" /> <span>ventaja 1</span>
                        </div>
                        <div>
                            <img src={palomita} alt="" /> <span>ventaja 2</span>
                        </div>
                        <div>
                            <img src={palomita} alt="" /> <span>ventaja 1</span>
                        </div>
                        <div>
                            <img src={palomita} alt="" /> <span>ventaja 1</span>
                        </div>
                    </div>
                </div>
                <div className="plan">
                    <h4>ASESORÍA Y SOLUCIONES FITNESS A MEDIDA
                    </h4>
                    <span className='plan-minortext'>Aportamos experiencia y soluciones adaptadas a tu proyecto fitness, asegurando un enfoque personalizado desde la orientación hasta la implementación.</span>
                    <div className="planes-features">
                        <div>
                            <img src={palomita} alt="" /> <span>ventaja 1</span>
                        </div>
                        <div>
                            <img src={palomita} alt="" /> <span>ventaja 2</span>
                        </div>
                        <div>
                            <img src={palomita} alt="" /> <span>ventaja 1</span>
                        </div>
                        <div>
                            <img src={palomita} alt="" /> <span>ventaja 1</span>
                        </div>
                    </div>
                </div>
                <div className="plan">
                    <h4>DISEÑO DE GIMNASIOS PERSONALIZADOS</h4>
                    <span  className='plan-minortext'>Nuestro equipo optimizará el espacio de tu instalación y dará forma a cualquier tipo de gimnasio que tengas en mente.</span>
                    <div className="planes-features">
                        <div>
                            <img src={palomita} alt="" /> <span>ventaja 1</span>
                        </div>
                        <div>
                            <img src={palomita} alt="" /> <span>ventaja 2</span>
                        </div>
                        <div>
                            <img src={palomita} alt="" /> <span>ventaja 1</span>
                        </div>
                        <div>
                            <img src={palomita} alt="" /> <span>ventaja 1</span>
                        </div>
                    </div>
                </div>
                <div className="plan">
                    <h4>IMPULSO DE PROYECTO FITNESS</h4>
                    <span  className='plan-minortext'>Si eres empresario, emprendedor o inversor aceleramos el desarrollo de tu proyecto fitness. Cubriendo todas tus necesidades: asesoramiento,  instalación, interiorismo, equipamiento y marketing.</span>
                    <div className="planes-features">
                        <div>
                            <img src={palomita} alt="" /> <span>veja 1ventaja 1ventaja 1</span>
                        </div>
                        <div>
                            <img src={palomita} alt="" /> <span> ventaja 1ventaja 2</span>
                        </div>
                        <div>
                            <img src={palomita} alt="" /> <span>venventaja 1ventaj1ventaja 1ventaja 1taja 1</span>
                        </div>
                        <div>
                            <img src={palomita} alt="" /> <span>vventaja 1ventaja 1ventaja 1entaja 1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Planes