import React, { useState } from 'react';
import './Caracteristicas.css';
import redCrossfit from '../../assets/redCrossfit.png';

const Caracteristicas = () => {
    // State to manage the visibility of each section's content
    const [visibleSection, setVisibleSection] = useState(null);

    const toggleSection = (section) => {
        setVisibleSection(visibleSection === section ? null : section);
    };

    return (
        <div className='caracteristicas-container'>
            <h1 className='stroke-text-black-title'>CARACTERÍSTICAS</h1>
            <p className='caracteristicas-text'> BUNKGYM CROSSFIT ESTA DISEÑADO Y CONSTRUIDO CON LOS MAYORES ESTANDARES DE CALIDAD, A CONTINUACIÓN OS
                DETALLAMOS TODO LO NECESARIO PARA QUE PUEDAS VALORAR TU ADQUISICIÓN HASTA EL MÁS MINIMO DETALLE</p>
            <div className='caracteristicas-wrapper'>
                <div className='caracteristicas-frame1'>


                    {/* The interactive list */}
                    <ul className="interactive-list">
                        <li>
                            <h3
                                className="item-title"
                                onClick={() => toggleSection('tecnicas')}
                            >
                                TÉCNICAS
                            </h3>
                            {visibleSection === 'tecnicas' && (
                                <div className="item-content">
                                    <p><strong>Dimensiones:</strong></p>
                                    <ul>
                                        <li>6 x 2,4 x 2,8 m<sup>3</sup>.</li>
                                    </ul>
                                    <p><strong>Peso:</strong></p>
                                    <ul>
                                        <li>De 2.800 kgs a 4.670 kgs</li>
                                    </ul>
                                    <p><strong>Materiales:</strong></p>
                                    <ul>
                                        <li>Hierro</li>
                                        <li>Goma</li>
                                        <li>Recubrimiento interior de losas de caucho</li>
                                        <li>Aislamiento de panel de sándwich recado - liso</li>
                                        <li>Iluminación led</li>
                                    </ul>
                                    <p><strong>Preinstalaciones:</strong></p>
                                    <ul>
                                        <li>Energía solar</li>
                                        <li>Enchufes</li>
                                        <li>Domótica</li>
                                        <li>Aire acondicionado</li>
                                        <li>Altavoces</li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <h3
                                className="item-title"
                                onClick={() => toggleSection('maquinas')}
                            >
                                MÁQUINAS Y COMPLEMENTOS
                            </h3>
                            {visibleSection === 'maquinas' && (
                                <div className="item-content">
                                    <p><strong>Cardio:</strong></p>
                                    <ul>
                                        <li>Air bike</li>
                                        <li>Air rower</li>
                                    </ul>
                                    <p><strong>Bancos:</strong></p>
                                    <ul>
                                        <li>Banco GHD Pro</li>
                                        <li>Banco Graduable</li>
                                    </ul>
                                    <p><strong>Barras:</strong></p>
                                    <ul>
                                        <li>Barra Cross 2,20 Ø50 20 kg 8rod. negra hasta 2000lb x3</li>
                                        <li>Barra hexagonal peso muerto 1,60</li>
                                        <li>Barra paseo granjero Ø133x1515mm 23 kg x2</li>
                                    </ul>
                                    <p><strong>Discos Bumper (255Kg):</strong></p>
                                    <ul>
                                        <li>Disco fraccional bumper 2,5 kg rojo x2</li>
                                        <li>Disco goma bumper negro c/gris 5 kg x2</li>
                                        <li>Disco goma bumper negro c/verde 10 kg x2</li>
                                        <li>Disco goma bumper negro c/amarillo 15 kg x2</li>
                                        <li>Disco goma bumper negro c/azul 20 kg x2</li>
                                        <li>Disco goma bumper negro c/rojo 25 kg x6</li>
                                        <li>Soporte vertical para discos</li>
                                    </ul>
                                    <p><strong>Accesorios:</strong></p>
                                    <ul>
                                        <li>Trunk blaster/Remo en punta suelo</li>
                                        <li>Set 3 agarres trunk blaster/Remo rn punta</li>
                                        <li>Escalera agilidad 6 mts</li>
                                        <li>Suspensión trainer (trx)</li>
                                        <li>Trineo fuerza</li>
                                        <li>Césped artificial 10x2m</li>
                                        <li>Cajón para saltos pliométricos de foam "3 en 1" 50x60x75 cm</li>
                                        <li>Cuerda de golpeo Ø38x9000 mm forrada</li>
                                        <li>Cuerda para trepar Ø38 x 6000 mm c/gancho</li>
                                        <li>Anclaje para cuerda</li>
                                        <li>Collarín/Cierres de barra d.50 x2</li>
                                        <li>Reloj cross training 6 dígitos</li>
                                        <li>Mando a distancia para reloj crossfit</li>
                                    </ul>
                                    <p><strong>Pesos:</strong></p>
                                    <ul>
                                        <li>Kit mancuernas regulables de 2 a 32 kg</li>
                                        <li>Kettlebell 6 kg vinilo</li>
                                        <li>Kettlebell 12 kg vinilo</li>
                                        <li>Kettlebell 20 kg vinilo</li>
                                        <li>Power bag 10 kg</li>
                                        <li>Power bag 20 kg</li>
                                        <li>Wall ball 3 kg</li>
                                        <li>Wall ball 5 kg</li>
                                        <li>Wall ball 7 kg</li>
                                        <li>Wall ball 9 kg</li>
                                    </ul>
                                    <p><strong>Estructura de la Jaula:</strong></p>
                                    <ul>
                                        <li>Flying pull up 110 cm</li>
                                        <li>J cups sentadilla x4</li>
                                        <li>Columna cross 2,75 mt 75x75x3 x4</li>
                                        <li>Cross bar 110 cm 75x75x3 para monkey bars x2</li>
                                        <li>Monkey bar Ø32 x 110 cm con pletina de 100 mm</li>
                                        <li>Soporte de seguridad (par)</li>
                                        <li>Soporte para fondos</li>
                                        <li>Trunk blaster jaula</li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <h3
                                className="item-title"
                                onClick={() => toggleSection('extras')}
                            >
                                EXTRAS
                            </h3>
                            {visibleSection === 'extras' && (
                                <div className="item-content">
                                    <p><strong>Extras que se pueden agregar:</strong></p>
                                    <ul>
                                        <li>Elección de color</li>
                                        <li>Serigrafiar las máquinas</li>
                                        <li>Integrar logos e imágenes dentro y fuera del Bunkgym</li>
                                        <li>Cambio de Iluminación interior y exterior</li>
                                        <li>Diferentes tipos de Climatización</li>
                                        <li>Sistema de gimnasio 100% autónomo en cuanto acceso y uso</li>
                                        <li>Sistema autónomo mediante energía fotovoltaica</li>
                                        <li>Sistema de conectividad</li>
                                        <li>Diferentes tipos de altavoces</li>
                                        <li>Sistema de control domótico 360 (accesos, sonido, iluminación, climatización y videovigilancia)</li>
                                        <li>Ampliación de módulos</li>
                                        <li>Ampliación de máquinas y complementos interiores y exteriores</li>
                                        <li>Sistema de vídeo y voz para entrenamientos</li>
                                        <li>Sistema Anti-covid</li>
                                        <li>Detección facial</li>
                                        <li>Desinfección mediante ozono</li>
                                        <li>Decoración interior y exterior</li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <h3
                                className="item-title"
                                onClick={() => toggleSection('certificaciones')}
                            >
                                CERTIFICACIONES
                            </h3>
                            {visibleSection === 'certificaciones' && (
                                <div className="item-content">
                                    <ul>
                                        <li>CE</li>
                                    </ul>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
                <div className='caracteristicas-frame'>
                    <div className='caracteristicas-img-container'>
                        <img src={redCrossfit} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Caracteristicas;
