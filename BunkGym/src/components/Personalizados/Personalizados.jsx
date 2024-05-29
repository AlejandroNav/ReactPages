import React from "react";
import "./Personalizados.css";
const Personaliza = () => {
    return (
        <div className="personalizados-container">
            <h1 className="personalizados-title titulo-general">
                PERSONALIZA TU BUNKGYM
            </h1>
            <p className="personalizados-text parrafo">
                En Bunkgym, nos adaptamos a ti como tu rutina de entrenamiento debería
                hacerlo. A continuación te mostramos las partes de tu Bunkgym que puedes
                personalizar
            </p>
            <div className="personalizados-sections">
                <div className="personalizados-img-container">
                <div className='personalizados-imgs'>
                <div id="personalizados-div1"></div>
                <div id="personalizados-div2"></div>
                <div id="personalizados-div3"></div>
                <div id="personalizados-div4"></div>
                <div id="personalizados-div5"></div>
                <div id="personalizados-div6"></div>
                <div id="personalizados-div7"></div>
                
            </div>
                </div>
                <ul className="personalizados-list">
                    <li className="personaliza-list-elemento">Color exterior</li>
                    <li className="personaliza-list-elemento">Color interior</li>
                    <li className="personaliza-list-elemento">Máquinas</li>
                    <li className="personaliza-list-elemento">
                        Personalización de máquinas
                    </li>
                    <li className="personaliza-list-elemento">Equipo de música</li>
                    <li className="personaliza-list-elemento">
                        Alarma / Cámaras de seguridad
                    </li>
                    <li className="personaliza-list-elemento">Color interior: Wifi</li>
                    <li className="personaliza-list-elemento">
                        Máquinas: Complementos externos
                    </li>
                    <li className="personaliza-list-elemento">
                        Personalización de máquinas: nuevos módulos
                    </li>
                    <li className="personaliza-list-elemento">
                        Equipo de música: Energía solar
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Personaliza;
