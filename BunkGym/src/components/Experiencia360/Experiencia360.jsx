import React, { useState } from 'react'
import adorno1 from '../../assets/adorno1.avif'
import adorno2 from '../../assets/adorno2.avif'
import adorno3 from '../../assets/adorno3.png'
import marca from '../../assets/experiencia3.png';
import design from '../../assets/experiencia2.png';
import fabricante from '../../assets/fabricante.png';
import trainer from '../../assets/experiencia1.png';
import './Experiencia360.css'

const Experiencia360 = () => {

    const [flippedCards, setFlippedCards] = useState(new Array(4).fill(false)); // Array to track flip state of each card    
    const cards = [
        {
            frontImage: marca,
            backContent: {
                title: 'somos únicos',
                subtitle: 'Somos una marca',
                content: 'Creada e impulsada por soñadores inconformistas que fusionan la innovación, el reciclaje y el deporte para marcar el camino hacia un estilo de vida más consciente y activo.'
            }
        },
        {
            frontImage: design,
            backContent: {
                title: 'somos creativos',
                subtitle: 'Somos diseñadores',
                content: 'No solo diseñamos gimnasios, sino espacios de entrenamiento extraordinarios. Cada Bunkgym es una pieza única, creada minuciosamente para cada cliente, dónde el diseño se fusiona con la innovación.'
            }
        },
        {
            frontImage: fabricante,
            backContent: {
                title: 'somos creadores',
                subtitle: 'Somos fabricantes',
                content: 'Fabricamos gimnasios, materiales y máquinas fitness con pasión en nuestra fábrica sevillana. Cada pieza es un reflejo de nuestra entrega total a la elaboración, calidad y autenticidad española.'
            }
        },
        {
            frontImage: trainer,
            backContent: {
                title: 'somos deportistas',
                subtitle: 'Somos entrenadores',
                content: 'Cada Bunkgym ha sido diseñado y testado por entrenadores profesionales con +30 años de experiencia en el mundo del fitness. Adaptamos un plan de uso exclusivo 100% para ti.'
            }
        },
    ];
    // IMAGENES QUE SE VOILTEEN Y MUESTREN EL TEXTO SOLO 4 CARDS
    const handleCardClick = (index) => {
        const newFlippedCards = [...flippedCards]; // Create a copy of the flipped cards array
        newFlippedCards[index] = !newFlippedCards[index]; // Toggle the flip state of the clicked card
        setFlippedCards(newFlippedCards); // Update the state with the new array
    };

    return (
        <div className="card-section-360">
            <img src={adorno1} className='card-adorno1 card-adornos' />
            <img src={adorno1} className='card-adorno4 card-adornos' />
            <img src={adorno3} className='card-adorno3 card-adornos' />
            <h2 className='stroke-text-black-title titulo-general'>Experiencia 360</h2>
            <p className='parrafo experiencia-parrafo'>Ofrecemos un servicio integral, somos una marca única y exclusiva, diseñamos cada bunker y máquina, la fabricamos y te mostramos
                cómo sacarle el mejor partido en base a tus condiciones y objetivos físicos & emocionales.</p>
            <div className='card-container-360'>
                {cards.map((card, index) => (
                    <div key={index} className={`card-360 ${flippedCards[index] ? 'is-flipped' : ''}`} onClick={() => handleCardClick(index)}>
                        <div className="card-front">
                            <img src={card.frontImage} alt={`Card Image ${index}`} />
                            <h3 className="card-title-flipped">{card.backContent.subtitle}</h3>
                            
                        </div>
                        <div className="card-back">
                            <h3>{card.backContent.subtitle}</h3>
                            <p>{card.backContent.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experiencia360