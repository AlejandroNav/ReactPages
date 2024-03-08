import React from 'react';
import './Idea.css';
import infographic from '../../assets/infographic.png';

const Idea = () => {
    return (
        <div className="idea-container">
            <div className="idea-text">
                <h2 className='idea-title'>LA IDEA</h2>
                <p className='idea-subtitle'>Bunkgym es la alquimia entre 4 genios: dos deportistas profesionales, un fabricante industrial, y un estratega empresarial. Juntos, convirtieron su sueño en realidad: crear una marca de gimnasios que redefine el mundo del fitness, desafiando lo ordinario y elevando la experiencia de entrenamiento a un nivel excepcional.</p>
            </div>
            <div className="infographic">
                <img src={infographic} alt="Infographic" />
            </div>
        </div>
    );
};

export default Idea;