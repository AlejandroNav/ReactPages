import React, { useState } from 'react'
import './ClientesParticular.css'
import paraquien1 from '../../assets/clientegobierno.jpg'
import paraquien2 from '../../assets/clienteempresas.avif'
import paraquien3 from '../../assets/clientesParticulares.avif'
import paraquien4 from '../../assets/clientesGym.jpg'
import paraquien5 from '../../assets/clientesEducativos.jpg'
import paraquien6 from '../../assets/gym6.jpg'
import adorno from '../../assets/adorno1.avif'
import adorno2 from '../../assets/adorno2.avif'

const ClientesParticular = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    const images = [
        { src: paraquien1, text: 'AYUNTAMIENTOS' },
        { src: paraquien2, text: 'EMPRESAS' },
        { src: paraquien4, text: 'CENTROS DEPORTIVOS' },
        { src: paraquien5, text: 'CENTROS EDUCATIVOS' },
        { src: paraquien6, text: 'PERSONAL TRAINERS' },
    ];

    return (
        <div className="clientes-container">
            <img src={adorno} className="adorno1" alt="" />
            <img src={adorno} className="adorno2" alt="" />
            <img src={adorno} className="adorno3" alt="" />
            <h2 className='clientes-title'>OTRAS SECCIONES DE TU INTERÉS</h2>
            <p className='clientes-text'>Nuestros clientes son una amplia variedad de personas y organizaciones comprometidas con la promoción de un estilo activo y saludable.</p>

            <ul className="clientes-particular-img">
                {images.map((image, index) => (
                    <li key={index}
                        onMouseEnter={() => setHoveredImage(index)}
                        onMouseLeave={() => setHoveredImage(null)}
                        className="clientes-wrapper">
                        <div className="image-overlay">
                            <p className='overlay-text'>{image.text}</p>
                        </div>
                        <img src={image.src} alt={image.text} style={{
                            width: hoveredImage === index ? '450px' : '300px',
                            transition: 'width 0.3s ease',
                            height: '450px',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ClientesParticular