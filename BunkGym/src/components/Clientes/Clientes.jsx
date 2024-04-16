import React, { useState } from 'react'
import './Clientes.css'
import paraquien1 from '../../assets/paraquien1.png'
import paraquien2 from '../../assets/paraquien2.png'
import paraquien3 from '../../assets/paraquien3.png'
import paraquien4 from '../../assets/paraquien4.png'
import paraquien5 from '../../assets/paraquien5.png'
import paraquien6 from '../../assets/paraquien6.png'
import adorno from '../../assets/adorno1.avif'
import adorno2 from '../../assets/adorno2.avif'

const Clientes = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    const images = [
        { src: paraquien1, text: 'AYUNTAMIENTOS' },
        { src: paraquien2, text: 'EMPRESAS' },
        { src: paraquien3, text: 'PARTICULARES' },
        { src: paraquien4, text: 'CENTROS DEPORTIVOS' },
        { src: paraquien6, text: 'COMUNIDADES DE VECINOS' },
        { src: paraquien5, text: 'CENTROS EDUCATIVOS' },
    ];

    return (
        <div className="clientes-container">
            <img src={adorno} className="adorno1" alt="" />
            <img src={adorno} className="adorno2" alt="" />
            <img src={adorno} className="adorno3" alt="" />
            <h2 className='clientes-title titulo-general'>NUESTROS CLIENTES</h2>
            <p className='clientes-text parrafo'>Nuestros clientes son una amplia variedad de personas y organizaciones comprometidas con la promoción de un estilo activo y saludable.</p>
            <p className='clientes-text parrafo'>A continuación os presentamos los grupos de clientes principales con los que hemos trabajado hasta ahora.</p>

            <ul className="clientes-img-container">
                {images.map((image, index) => (
                    <li key={index}
                        onMouseEnter={() => setHoveredImage(index)}
                        onMouseLeave={() => setHoveredImage(null)}
                        className="clientes-wrapper">
                        <div className="image-overlay">
                            <p className='overlay-text'>{image.text}</p>
                        </div>
                        <img src={image.src} alt={image.text} style={{
                            width: hoveredImage === index ? '400px' : '200px',
                            transition: 'width 0.3s ease',
                            height: '600px',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Clientes