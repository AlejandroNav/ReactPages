import strongy from '../../assets/blackStrong.png';
import crossy from '../../assets/redCrossfit.png';
import inco from '../../assets/inco.png';
import bunky from '../../assets/yellow360.png';
import { Link } from 'react-router-dom';

import './ImageSection.css'

const ImageSection = () => {
    // Array of image objects with corresponding links
    const images = [
        { src: crossy, text: 'BUNKGYM CROSSFIT', link: '/crossfit' },
        { src: strongy, text: 'BUNKGYM STRONG', link: '/strong' },
        { src: bunky, text: 'BUNKGYM 360', link: '/360' },
        { src: inco, text: 'BUNKGYM INCONFORMISTA', link: '/inconformista' },
    ];

    return (
        <div className="image-section-container">
            <h2 className='image-section-title titulo-general-blanco'>NUESTROS BUNKGYMS</h2>
            <p className='image-section-text'>Hemos diseñado 4 tipos de BUNKGYM para 4 tipos de necesidades y de grupos de personas. </p>
            <p className='image-section-text'>Haz clic en el bunkgym que más se adapte a tus necesidades y descubre sus características.</p>
            <div className="image-section">
                {images.map((image, index) => (
                    <div key={index} className="image-container">
                        <Link to={image.link}>
                            <img src={image.src} alt={`Image ${index + 1}`} />
                            <div className="back-text">{image.text}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageSection;
