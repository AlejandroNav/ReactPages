import React from 'react'
import Carruseles from '../Carruseles/Carruseles'
import grisGym from '../../assets/grisGym.jpeg';
import amarilloGym from '../../assets/amarilloGym.jpeg';

import blanco from '../../assets/blancoGym.jpeg';
import imagen11 from '../../assets/11.png';
import imagen12 from '../../assets/12.png';
import gymrender from '../../assets/marca.png';
import outside2 from '../../assets/outside2.avif';

import './Particular.css'
const Particular = () => {
    const carouselData = {
        "slides": [
            {
                "src": grisGym,
                "alt": "Image 1 for carousel"
            },
            {
                "src": amarilloGym,
                "alt": "Image 2 for carousel"
            },
            {
                "src": blanco,
                "alt": "Image 3 for carousel"
            }
        ]
    };
    const carouselData2 = {
        "slides": [
            {
                "src": imagen11,
                "alt": "Image 1 for carousel"
            },
            {
                "src": imagen12,
                "alt": "Image 2 for carousel"
            },
            {
                "src": gymrender,
                "alt": "Image 3 for carousel"
            }
        ]
    };
    return (
        <div className='particular'>
            <div className='particular-container'>
                <div className='particular-title-container' style={{ backgroundImage: `url(${outside2})` }}>
                    <h1>Particular</h1>

                    <div className='particular-text-container1'>
                        <p className='particular-text1'>¿Imaginas tener tu gimnasio en casa 100% personalizado y adaptado a ti y a tu familia?</p>

                    </div>
                    <p className='particular-subtitle2'>Bunkgym lo hace posible.</p>
                </div>

                <div className='particular-text-container'>
                    <p className='particular-text'>Se dueño de tu propio gimnasio, creado por tus propias reglas. No tendrás que lidiar con gimnasios convencionales abarrotados de gente, aguantando el ambiente sudoroso y asfixiante y preocupándote por las medidas sanitarias del espacio.  </p>
                </div>
            </div>
            {/* Carrusel simple con Flexbox */}
            <div className='simple-carrusel'>
                <img className='simple-image' src={grisGym} alt="Gris Gym" />
                <img className='simple-image' src={amarilloGym} alt="Amarillo Gym" />
                <img className='simple-image' src={blanco} alt="Blanco" />
            </div>
            <div className='particular-container'>
                <div className='particular-text-container'>
                    <p className='particular-text'> Te presentamos una nueva forma de entrenar, disfrutar y vivir, en la que serás propietario de un espacio exclusivo, donde tanto tú como tus familiares y amigos podréis compartir un momento divertido a la vez de tomar el control de su bienestar.
                    </p>
                </div>
            </div>
            <Carruseles data={carouselData2} />
        </div>
    )
}

export default Particular