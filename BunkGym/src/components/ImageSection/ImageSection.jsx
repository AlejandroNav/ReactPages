import React from 'react'
import image1 from '../../assets/gym1.avif';
import image2 from '../../assets/gym2.avif';
import image3 from '../../assets/gym3.avif';
import image4 from '../../assets/gym4.avif';
import gymrender from '../../assets/gymrender.avif';
import grisGym from '../../assets/grisGym.jpeg';
import amarilloGym from '../../assets/amarilloGym.jpeg';
import blancoGym from '../../assets/blancoGym.jpeg';
import './ImageSection.css'

const ImageSection = () => {
    // Array of image objects
    const images = [
        { src: gymrender, text: 'BUNKGYM CROSSFIT ' },
        { src: grisGym, text: 'BUNKGYM STRONG  ' },
        { src: amarilloGym, text: 'BUNKGYM 360 ' },
        { src: blancoGym, text: 'BUNKGYM INCONFORMISTA  ' },
    ];

    return (
        <div className="image-section-container">
            <h2 className='image-section-title'>te presentamos nuestros BUNKGYMS</h2>
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