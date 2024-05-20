import React from 'react'
import gymrender from '../../assets/gymrender.avif';
import grisGym from '../../assets/grisGym.jpeg';
import amarilloGym from '../../assets/amarilloGym.jpeg';
import blancoGym from '../../assets/blancoGym.jpeg';

import CROSSFIT from '../../assets/CROSSFIT.png';
import STRONG from '../../assets/STRONG.png';
import BUNK360 from '../../assets/360.png';
import INCONFORMISTA from '../../assets/INCONFORMISTA.png';

import './ImageSection.css'

const ImageSection = () => {
    // Array of image objects
    const images = [
        { src: CROSSFIT, text: 'BUNKGYM CROSSFIT ' },
        { src: STRONG, text: 'BUNKGYM STRONG  ' },
        { src: BUNK360, text: 'BUNKGYM 360 ' },
        { src: INCONFORMISTA, text: 'BUNKGYM INCONFORMISTA  ' },
    ];

    return (
        <div className="image-section-container">
            <h2 className='image-section-title titulo-general-blanco'>NUESTROS BUNKGYMS</h2>
            <p className='image-section-text'>Hemos diseñado 4 tipos de BUNKGYM para 4 tipos de necesidades y de grupos de personas. </p>
            <p className='image-section-text'>Haz clic en el bunkgym que más se adapte a tus necesidades y descubre sus características.</p>
            <div className="image-section">
                {images.map((image, index) => (
                    <div key={index} className="image-container">
                        <img src={image.src} alt={`Image ${index + 1}`} />
                        <div className="back-text">{image.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default ImageSection