import React from 'react'
import './Elige.css'
import eligecrossfit from '../../assets/eligecrossfit.avif';
import elige360 from '../../assets/elige360.avif';
import eligeinconformista from '../../assets/eligeinconformista.avif';
import eligestrong from '../../assets/eligestrong.avif';


const Elige = () => {
    const bunkgyms = [
        { image: eligecrossfit, name: 'BUNKGYM CROSSFIT' },
        { image: eligestrong, name: 'BUNKGYM STRONG' },
        { image: elige360, name: 'BUNKGYM 360' },
        { image: eligeinconformista, name: 'BUNKGYM INCONFORMISTA' }
    ];
    return (
        <div className='elige-container'>
            <h2 className='elige-title'>ELIGE TU BUNKGYM</h2>
            <p className='elige-text'>Hemos diseñado 4 bunkgyms que se adaptan a todas las personas: Deportistas, Parejas, Familias, Jubilados, Mujeres, Hombres, Adolescentes, Grupos de amigos, Empresarios, emprendedores…
                Bunkgym se adapta a todos los estilos de personalidad, técnica deportiva y edad. Te los mostramos. </p>
            <div className='elige-options'>
                {bunkgyms.map((bunkgym, index) => (
                    <div key={index} className='elige-option'>
                        <img src={bunkgym.image} alt={bunkgym.name} className='elige-image' />
                        <div className='elige-overlay'>
                            <span className='elige-name'>{bunkgym.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Elige