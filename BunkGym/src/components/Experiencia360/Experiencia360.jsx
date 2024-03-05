import React from 'react'
import image1 from '../../assets/gym1.avif';
import image2 from '../../assets/gym2.avif';
import image3 from '../../assets/gym3.avif';
import image4 from '../../assets/gym4.avif';
import image5 from '../../assets/gym5.avif';
import image6 from '../../assets/gym6.avif';
import './Experiencia360.css'

const Experiencia360 = () => {
    // Define the card content
    const cards = [
        {
            type: 'text',
            title: 'Card 1',
            subtitle: 'Somos una marca',
            content: 'Creada e impulsada por soñadores inconformistas que fusionan la innovación, el reciclaje y el deporte para marcar el camino hacia un estilo de vida más consciente y activo.'
        }, {
            type: 'text',
            title: 'Card 2',
            subtitle: 'Somos diseñadores',
            specialStyle: 'dark-background',
            content: 'No solo diseñamos gimnasios, sino espacios de entrenamiento extraordinarios. Cada Bunkgym es una pieza única, creada minuciosamente para cada cliente, dónde el diseño se fusiona con la innovación.'
        },
        {
            type: 'text',
            title: 'Card 3',
            subtitle: 'Somos fabricantes',
            content: 'Fabricamos gimnasios, materiales y máquinas fitness con pasión en nuestra fábrica sevillana. Cada pieza es un reflejo de nuestra entrega total a la elaboración, calidad y autenticidad española.'
        }, { type: 'image', image: image3, specialStyle: 'dark-background' },
        {
            type: 'text',
            title: 'Card 5',
            subtitle: 'Somos entrenadores',
            content: 'Cada Bunkgym ha sido diseñado y testado por entrenadores profesionales con +30 años de experiencia en el mundo del fitness. Adaptamos un plan de uso exclusivo 100% para ti.'
        }, { type: 'image', image: image5, specialStyle: 'dark-background' },
    ];

    return (
        <div className="card-section-360">
            <h2 className=' cardTitle-360'>Experiencia 360</h2>
            <div className='card-container-360'>
                {cards.map((card, index) => (
                    <div key={index} className={`card-360
                     ${card.specialStyle || ''}`}>
                        {card.type === 'text' ? (
                            <>
                                <h3>{card.subtitle}</h3>
                                <p>{card.content}</p>
                            </>
                        ) : (
                            <img src={card.image} alt={`Card Image ${index}`} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experiencia360