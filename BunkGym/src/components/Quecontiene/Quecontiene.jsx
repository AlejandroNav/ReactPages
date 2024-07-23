import React from 'react';
import './Quecontiene.css';
import greycheck from '../../assets/greycheck.png';

const Quecontiene = ({ title, text, elementos }) => {
    return (
        <div className='quecontiene-container'>
            <div className='quecontiene-title-container stroke-text-white-title'>
                <h1 className='quecontiene-title'>{title}</h1>
            </div>
            <div className='quecontiene-text-container'>
                <p className='quecontiene-text white-text'>
                    {text}
                </p>
            </div>
            <div className='quecontiene-elementos-container'>
                <ul className='quecontiene-elementos'>
                    {elementos.map((elemento, index) => (
                        <li key={index} className='quecontiene-elemento'>
                            <img src={greycheck} alt='Paloma' className='quecontiene-logo' />
                            <p className='white-text quecontine-texto'>{elemento}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Quecontiene;
