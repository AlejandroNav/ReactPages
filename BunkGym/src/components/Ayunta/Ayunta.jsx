import React from 'react';
import './Ayunta.css';

const Ayunta = ({ title, outlineTitle, backgroundImage }) => {
  return (
    <div 
      className='ayunta-container' 
      style={{ backgroundImage: `url(${backgroundImage})` }} // Use the image URL passed from props
    >
      <div className='ayunta-title-container'>
        <h1 className='ayunta-title'>{title}</h1>
        <h1 className='ayunta-title-outline'>{outlineTitle}</h1>
      </div>
    </div>
  );
}

export default Ayunta;
