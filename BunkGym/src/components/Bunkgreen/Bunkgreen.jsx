import React from 'react'
import './Bunkgreen.css'
import green5 from '../../assets/bunkgreen1.png'
import green6 from '../../assets/bunkgreen2.png'
import green7 from '../../assets/bunkgreen3.png'
import green8 from '../../assets/bunkgreen4.png'

const Bunkgreen = () => {
    return (

        <div className='bunkgreen'>
            <div className="bunkgreen-container">
                <h2 className='bunkgreen-title'>BUNKGREEN</h2>
                <h3 className='bunkgreen-subtitle'>SOMOS UNA EMPRESA <span className='green-accent'>RESPONSABLE</span> </h3>
                <p className='bunkgreen-content parrafo'>Bunkgreen es el departamento de RSC de Bunkgym, con el cual abrazamos la <span className='green-accent'>sostenibilidad</span>.
                    Ofreciendo una alternativa de fitness más <span className='green-accent'>ecológico </span>
                    y amigable con el medio ambiente que reduce la huella ambiental en comparación con los gimnasios convencionales.
                </p>
                <div className='adorno-verde'></div>
            </div>
            <div className='bunkgreen-img-container'>
                <div className="bunkgreen-img-wrapper">
                    <img src={green5} alt="bunkgreen" className='bunkgreen-img' />
                    <p className="bunkgreen-text">Construimos gimnasios ecológicos</p>
                </div>
                <div className="bunkgreen-img-wrapper">
                    <img src={green6} alt="bunkgreen" className='bunkgreen-img' />
                    <p className="bunkgreen-text">Minimizamos los residuos en nuestra cadena de producción</p>
                </div>
                <div className="bunkgreen-img-wrapper">
                    <img src={green7} alt="bunkgreen" className='bunkgreen-img' />
                    <p className="bunkgreen-text">100% sostenibles a través de energía solar</p>
                </div>
                <div className="bunkgreen-img-wrapper">
                    <img src={green8} alt="bunkgreen" className='bunkgreen-img' />
                    <p className="bunkgreen-text">Por cada Bunkgym que fabricamos plantamos 1&nbsp;árbol</p>
                </div>
            </div>
        </div>
    )
}

export default Bunkgreen