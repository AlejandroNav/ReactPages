import React from 'react'
import './Reasons.css'
import reason1 from '../../assets/reason1.png'
import reason2 from '../../assets/reason2.png'
import reason3 from '../../assets/reason3.png'
import reason4 from '../../assets/reason4.png'
import palomita from '../../assets/tick.png'

const Reasons = () => {
    return (
        <div className='reasonsouter-container'>
            <div className='reasons'>
                <div className="reasons-left">
                    <img src={reason1} alt="" />
                    <img src={reason2} alt="" />
                    <img src={reason3} alt="" />
                    <img src={reason4} alt="" />
                </div>

                <div className='reasons-right'>
                    <section className='reasons-title'>
                        <p>
                            Descubre nuestra</p>
                        <span className='stroke-text'>EXPERIENCIA </span><span > 360</span>
                    </section>
                    <section className='reasons-text'>
                        <ul>
                            <li> <img src={palomita} alt="" />SOMOS UNA MARCA</li>
                            <li><img src={palomita} alt="" />SOMOS DISEÑADORES </li>
                            <li><img src={palomita} alt="" />SOMOS FABRICANTES </li>
                            <li><img src={palomita} alt="" />SOMOS ENTRENADORES</li>
                        </ul>
                        
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Reasons