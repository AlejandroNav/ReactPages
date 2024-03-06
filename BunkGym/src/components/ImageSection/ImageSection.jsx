import React from 'react'
import image1 from '../../assets/gym1.avif';
import image2 from '../../assets/gym2.avif';
import image3 from '../../assets/gym3.avif';
import image4 from '../../assets/gym4.avif';
import image5 from '../../assets/gym5.avif';
import image6 from '../../assets/gym6.avif';
import './ImageSection.css'

const ImageSection = () => {
    // Array of image objects
    const images = [
        { src: image1, text: 'Image 1' },
        { src: image2, text: 'Image 2' },
        { src: image3, text: 'Image 3' },
        { src: image4, text: 'Image 4' },
    ];

    return (
        <div className="image-section-container">
            <div className="image-section">
                {images.map((image, index) => (
                    <div key={index} className="image-container">
                        <img src={image.src} alt={`Image ${index + 1}`} />
                        <div className="back-text">{image.text}</div>
                    </div>
                ))}

            </div>
            <div className="image-section-2">
                <div className="image-container2">
                    <img src={image5} />
                    <div className="back-text">Image 5</div>
                </div>
                <div className="image-container2">
                    <img src={image6} />
                    <div className="back-text">Image 6</div>
                </div>

            </div>
        </div>
    );
}


export default ImageSection