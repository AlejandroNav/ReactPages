
import './Cuadrantes.css'
import redCrossfit from '../../assets/strongy.png';
import whiteCrossfit from '../../assets/whiteCrossfit.png';
import crossyellow1 from '../../assets/crossyellow1.png';
import whiteCrossfitAvif from '../../assets/whiteCrossfit.avif';

function Cuadrantes() {
    return (
        <div className="cuadrantes-container">
            <div className="cuadrante-upper">
                <div className="upper-left">
                    <img src={whiteCrossfit} alt="" />
                </div>
                <div className="upper-right">
                    <div>
                        <p className='texto-cuadrantes'>Bunkgym Crossfit está diseñado para personas que se quieren
                            iniciar en el crossfit, crossifiters amateur, crossfiters profesionales,
                            atletas híbridos y/o deportistas de resistencia que quieran desatar
                            su potencial entrenando en un espacio funcional, combinando
                            ejercicios de fuerza, resistencia, equilibrio y velocidad.</p>
                    </div>

                </div>

            </div>
            <div className="cuadrante-lower">
                <div className="lower-left">
                    
                    <div>
                        
                        <ul><li>
                            <p className='texto-cuadrantes-negrita'>Bunkgym Crossfit es ideal para:</p>
                        </li>
                            <li className='texto-cuadrantes-elementos'>• Ayuntamientos</li>
                            <li className='texto-cuadrantes-elementos'>• Comunidades de vecinos  </li>
                            <li className='texto-cuadrantes-elementos'>• Centros deportivos</li>
                            <li className='texto-cuadrantes-elementos'>• Centros educativos </li>
                            <li className='texto-cuadrantes-elementos'>• Particulares</li>
                            <li className='texto-cuadrantes-elementos'>• Empresas</li>
                        </ul>
                    </div>


                </div>
                <div className="lower-right">
                    <img src={redCrossfit} alt="" />
                </div>

            </div>
            {/* New Quadrants */}
            <div className="cuadrante-upper">
                <div className="upper-left">
                    <img src={crossyellow1} alt="" />
                </div>
                <div className="upper-right">
                    <ul className='cuadrantes-ul'>
                        <li className='texto-cuadrantes-elementos'>• Diseño y fabricación Española</li>
                        <li className='texto-cuadrantes-elementos'>• 20 años de garantía</li>
                        <li className='texto-cuadrantes-elementos'>• 100% equipado</li>
                        <li className='texto-cuadrantes-elementos'>• Focalizado en la economía circular</li>
                        <li className='texto-cuadrantes-elementos'>• Peso: De 2.800 kgs a 4.670 kgs.</li>
                        <li className='texto-cuadrantes-elementos'>• Entrenamiento a la vez 20 personas</li>
                        <li className='texto-cuadrantes-elementos'>• Dimensiones: 6 x 2,4 x 2,8 m<sup>3</sup></li>
                        <li className='texto-cuadrantes-elementos'>• Revalorización desde su compra, fácil reventa y activo refugio</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cuadrantes