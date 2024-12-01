import React from 'react'
import './Paraquien.css'
import paraquien1 from '../../assets/paraquien1.png'
import paraquien2 from '../../assets/paraquien2.png'
import paraquien3 from '../../assets/paraquien3.png'
import paraquien4 from '../../assets/paraquien4.png'
import paraquien5 from '../../assets/paraquien5.png'
import paraquien6 from '../../assets/paraquien6.png'

const Paraquien = () => {

    const images = [
        { src: paraquien1, text: 'AYUNTAMIENTOS' },
        { src: paraquien2, text: 'EMPRESAS' },
        { src: paraquien3, text: 'PARTICULARES' },
        { src: paraquien4, text: 'CENTROS DEPORTIVOS' },
        { src: paraquien5, text: 'CENTROS EDUCATIVOS' },
        { src: paraquien6, text: 'COMUNIDADES DE VECINOS' },
    ];

    return (
        <div>
            <div className="paraquien-container">
                <h2 className=' stroke-text  paraquien-title'>¿Para quién es BUNKGYM?</h2>
                <p className='paraquien-text parrafo2'>Bunkgym es para los inconformistas, los deportistas, las personas que apuestan por tener un cuerpo saludable,
                    para los que quieren cuidar de sus familias, alumnos o habitantes de su municipio.</p>
                <p className='paraquien-text parrafo2'>Si quieres saber más: clica en la imagen que se relacione contigo o tu proyecto y descubre lo que tenemos para ti. </p>

                <ul className="paraquien-img-container">
                    {images.map((image, index) => (
                        <li key={index} className="image-wrapper">
                            <p className='hover-text'>{image.text}</p>
                            <img src={image.src} alt={`Para quien ${image.text}`} className='paraquien-img' />
                            <div className=""></div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='inspiracional-section'>
                <h2 className="inspiracional-text">SOMOS ESPECIALISTAS EN CONSTRUIR GIMNASIOS MÓVILES EN
                    CONTENEDORES MARITIMOS
                </h2>
            </div>
        </div>
    );
}

export default Paraquien;
