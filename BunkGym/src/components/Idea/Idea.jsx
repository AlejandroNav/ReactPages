import React from 'react';
import './Idea.css';
import infographic from '../../assets/infographic.png';
import adorno1 from '../../assets/adorno1.avif';
import adorno2 from '../../assets/adorno2.avif';
import adorno3 from '../../assets/adorno3.png';

const Idea = () => {
    return (
        <div className="idea-container">
            <div className="idea-text" style={{ position: 'relative' }}>
                <h2 className='idea-title'>LA IDEA
                <img src={adorno2} alt="" className='idea-adorno1' />
                <img src={adorno1} alt="" className='idea-adorno2' />
                <img src={adorno3} alt="" className='idea-adorno3' /></h2>
                
                <p className='idea-subtitle'>Bunkgym es la alquimia entre 4 genios: dos deportistas profesionales, un fabricante industrial, y un estratega empresarial. Juntos, convirtieron su sueño en realidad: crear una marca de gimnasios que redefine el mundo del fitness, desafiando lo ordinario y elevando la experiencia de entrenamiento a un nivel excepcional.</p>
            </div>
            <div className="infographic">
                <img src={infographic} alt="Infographic" />
            </div>
        </div>
    );
};

export default Idea;