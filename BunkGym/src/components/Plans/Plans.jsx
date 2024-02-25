import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
    return (
        <div className='plans-container'>
            <div className="programs-header plans-title">
                <span className='stroke-text'>
                    Revisa
                </span>
                <span className='stroke-text-white'>
                    nuestros
                </span>
                <span className='stroke-text'>
                    planes
                </span>
            </div>
            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className='plan-2' key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span> €{plan.price}</span>
                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature" key={i}>
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span> Mas información ➡️</span>
                        </div>
                        <button className='hero-btn' style={{ backgroundColor: 'white', color: 'black' }}>Unete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans