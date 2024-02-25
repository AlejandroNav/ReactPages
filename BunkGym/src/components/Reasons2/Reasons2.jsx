import React from 'react'
import './Reasons2.css'
import photo11 from '../../assets/11.png'
import photo12 from '../../assets/12.png'
import reason1 from '../../assets/reason1.png'

const Reasons2 = () => {
    return (
        <div className='Programs' id='programs'>
            <div className="Programs-header">
                <span className='stroke-text-white'> EXPERIENCIA 360 </span>
                <span className='orange'>  EXPERIENCIA 360 </span>
                <span className='stroke-text-white'> EXPERIENCIA 360</span>
            </div>
            <div class="container">
                <div class="card">
                    <h2>Somos una marca </h2>
                    <p>Creada e impulsada por soñadores inconformistas que fusionan la innovación, el reciclaje y el deporte para marcar el camino hacia un estilo de vida más consciente y activo.</p>
                </div>
                <div class="card">
                    <h2 className='orange'>Somos diseñadores</h2>
                    <p>No solo diseñamos gimnasios, sino espacios de entrenamiento extraordinarios. Cada Bunkgym es una pieza única, creada minuciosamente para cada cliente, dónde el diseño se fusiona con la innovación.</p>
                </div>
                <div class="card">
                    <h2 >Somos fabricantes</h2>
                    <p>Fabricamos gimnasios, materiales y máquinas fitness con pasión en nuestra fábrica sevillana. Cada pieza es un reflejo de nuestra entrega total a la elaboración, calidad y autenticidad española.</p>
                </div>
                <div class="card">  
                    <img src={photo12} alt="" className='reason2-img' />
                </div>
                <div class="card">
                    <h2 className='orange'>Somos entrenadores </h2>
                    <p>Cada Bunkgym ha sido diseñado y testado por entrenadores profesionales con +30 años de experiencia en el mundo del fitness. Adaptamos un plan de uso exclusivo 100% para ti.</p>
                </div>

                <div class="card">
                    <img className='reason2-img' src={photo11} alt=""  />
                    
                </div>


            </div>
        </div>
    )
}

export default Reasons2