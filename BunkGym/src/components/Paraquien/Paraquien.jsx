import React, { useState } from 'react'
import './Paraquien.css'
import paraquien1 from '../../assets/3.png'
import paraquien2 from '../../assets/4.png'
import paraquien3 from '../../assets/5.png'
import paraquien4 from '../../assets/6.png'
import paraquien5 from '../../assets/7.png'
import paraquien6 from '../../assets/9.png'

const Paraquien = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    const images = [
        { src: paraquien1, text: 'AYUNTAMIENTOS' },
        { src: paraquien4, text: 'EMPRESAS' },
        { src: paraquien3, text: 'PARTICULARES' },
        { src: paraquien5, text: 'CENTROS DEPORTIVOS' },
        { src: paraquien6, text: 'CENTROS EDUCATIVOS' },
        { src: paraquien2, text: 'COMUNIDADES DE VECINOS' },
    ];

    return (
        <div className="paraquien-container">
            <h2 className='paraquien-title stroke-text'>¿PARA QUIEN ES BUNKGYM?</h2>
            <p className='paraquien-text'>Bunkgym es para los inconformistas, los deportistas, las personas que apuestan por tener un cuerpo saludable,
                para los que quieren cuidar de sus familias, alumnos o habitantes de su municipio.</p>
            <p className='paraquien-text'>Si quieres saber más: clica en la imagen que se relacione contigo o tu proyecto y descubre lo que tenemos para ti. </p>

            <ul className="paraquien-img-container">
                {images.map((image, index) => (
                    <li key={index}

                        onMouseEnter={() => setHoveredImage(index)}
                        onMouseLeave={() => setHoveredImage(null)}
                        className="image-wrapper">
                        <p className='hover-text'>{image.text}</p>
                        <img src={image.src} alt="" style={{
                            width: hoveredImage === index ? '280px' : '200px',
                            transition: 'width 0.3s ease'
                        }} />
                        <div className=""></div>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default Paraquien