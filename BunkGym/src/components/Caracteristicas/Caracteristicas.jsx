import  { useState } from 'react';
import './Caracteristicas.css';
import whiteCrossfit from '../../assets/whiteCrossfit.png';



const Caracteristicas = () => {
    const [visibleSection, setVisibleSection] = useState(null);

    const toggleSection = (section) => {
        setVisibleSection(visibleSection === section ? null : section);
    };

    const sections = [
        {
            title: 'TÉCNICAS',
            content: [
                { heading: 'Dimensiones:', items: ['6 x 2,4 x 2,8 m³.'] },
                { heading: 'Peso:', items: ['De 2.800 kgs a 4.670 kgs'] },
                { heading: 'Materiales:', items: ['Hierro', 'Goma', 'Recubrimiento interior de losas de caucho', 'Aislamiento de panel de sándwich recado - liso', 'Iluminación led'] },

                { heading: 'Preinstalaciones:', items: ['Energía solar', 'Enchufes', 'Domótica', 'Aire acondicionado', 'Altavoces'] },
                { heading: 'Certificaciones:', items: ['CE', 'ISO 9001', 'ETC'] },

            ],
        },
        {
            title: 'MÁQUINAS Y COMPLEMENTOS',
            content: [
                { heading: 'Cardio:', items: ['Air bike', 'Air rower'] },
                { heading: 'Bancos:', items: ['Banco GHD Pro', 'Banco Graduable'] },
                { heading: 'Barras:', items: ['Barra Cross 2,20 Ø50 20 kg 8rod. negra hasta 2000lb x3', 'Barra hexagonal peso muerto 1,60', 'Barra paseo granjero Ø133x1515mm 23 kg x2'] },
                { heading: 'Discos Bumper (255Kg):', items: ['Disco fraccional bumper 2,5 kg rojo x2', 'Disco goma bumper negro c/gris 5 kg x2', 'Disco goma bumper negro c/verde 10 kg x2', 'Disco goma bumper negro c/amarillo 15 kg x2', 'Disco goma bumper negro c/azul 20 kg x2', 'Disco goma bumper negro c/rojo 25 kg x6', 'Soporte vertical para discos'] },
                { heading: 'Accesorios:', items: ['Trunk blaster/Remo en punta suelo', 'Set 3 agarres trunk blaster/Remo rn punta', 'Escalera agilidad 6 mts', 'Suspensión trainer (trx)', 'Trineo fuerza', 'Césped artificial 10x2m', 'Cajón para saltos pliométricos de foam "3 en 1" 50x60x75 cm', 'Cuerda de golpeo Ø38x9000 mm forrada', 'Cuerda para trepar Ø38 x 6000 mm c/gancho', 'Anclaje para cuerda', 'Collarín/Cierres de barra d.50 x2', 'Reloj cross training 6 dígitos', 'Mando a distancia para reloj crossfit'] },
                { heading: 'Pesos:', items: ['Kit mancuernas regulables de 2 a 32 kg', 'Kettlebell 6 kg vinilo', 'Kettlebell 12 kg vinilo', 'Kettlebell 20 kg vinilo', 'Power bag 10 kg', 'Power bag 20 kg', 'Wall ball 3 kg', 'Wall ball 5 kg', 'Wall ball 7 kg', 'Wall ball 9 kg'] },
                { heading: 'Estructura de la Jaula:', items: ['Flying pull up 110 cm', 'J cups sentadilla x4', 'Columna cross 2,75 mt 75x75x3 x4', 'Cross bar 110 cm 75x75x3 para monkey bars x2', 'Monkey bar Ø32 x 110 cm con pletina de 100 mm', 'Soporte de seguridad (par)', 'Soporte para fondos', 'Trunk blaster jaula'] },
            ],
        },
        {
            title: 'EXTRAS',
            content: [
                { heading: 'Extras que se pueden agregar:', items: ['Elección de color', 'Serigrafiar las máquinas', 'Integrar logos e imágenes dentro y fuera del Bunkgym', 'Cambio de Iluminación interior y exterior', 'Diferentes tipos de Climatización', 'Sistema de gimnasio 100% autónomo en cuanto acceso y uso', 'Sistema autónomo mediante energía fotovoltaica', 'Sistema de conectividad', 'Diferentes tipos de altavoces', 'Sistema de control domótico 360 (accesos, sonido, iluminación, climatización y videovigilancia)', 'Ampliación de módulos', 'Ampliación de máquinas y complementos interiores y exteriores', 'Sistema de vídeo y voz para entrenamientos', 'Sistema Anti-covid', 'Detección facial', 'Desinfección mediante ozono', 'Decoración interior y exterior'] },
            ],
        },
    ];

    return (
        <div className='caracteristicas-container'>
            <h1 className='stroke-text-black-title'>CARACTERÍSTICAS</h1>
            <p className='caracteristicas-text'> BUNKGYM CROSSFIT ESTA DISEÑADO Y CONSTRUIDO CON LOS MAYORES ESTANDARES DE CALIDAD, A CONTINUACIÓN OS
                DETALLAMOS TODO LO NECESARIO PARA QUE PUEDAS VALORAR TU ADQUISICIÓN HASTA EL MÁS MINIMO DETALLE</p>
            <div className='caracteristicas-wrapper'>
                <div className='caracteristicas-frame1'>
                    <ul className="interactive-list">
                        {sections.map((section, index) => (
                            <li key={index}>
                                <h3
                                    className="item-title"
                                    onClick={() => toggleSection(section.title)}
                                >
                                    <span className="toggle-sign">
                                        {visibleSection === section.title ? '-' : '+'}
                                    </span> {section.title}
                                </h3>
                                {visibleSection === section.title && (
                                    <div className="item-content">
                                        {section.content.map((item, idx) => (
                                            <div key={idx}>
                                                <p><strong>{item.heading}</strong></p>
                                                <ul>
                                                    {item.items.map((subItem, subIdx) => (
                                                        <li key={subIdx}>{subItem}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='caracteristicas-frame'>
                    <div className='caracteristicas-img-container'>
                        <img src={whiteCrossfit} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Caracteristicas;
