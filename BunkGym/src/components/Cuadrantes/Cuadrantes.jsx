
import './Cuadrantes.css'
import strongy from '../../assets/strongy.png';
import black2 from '../../assets/black2.png';
import crossfit3 from '../../assets/crossfit3.png';
import div5 from '../../assets/div5.png';
import STRONG from '../../assets/STRONG.png';
function Cuadrantes() {
    return (
        <div className="cuadrantes-container">
            <div className="cuadrante-upper">
                <div className="upper-left">
                    <img src={strongy} alt="" />
                </div>
                <div className="upper-right">
                    <div>
                        <p>Bunkgym Crossfit está diseñado para personas que se quieren
                            iniciar en el crossfit, crossifiters amateur, crossfiters profesionales,
                            atletas híbridos y/o deportistas de resistencia que quieran desatar
                            su potencial entrenando en un espacio funcional, combinando
                            ejercicios de fuerza, resistencia, equilibrio y velocidad.</p>
                    </div>
                    <div>
                        <p>
                            Bunkgym Crossfit se adapta a todos los públicos y necesidades:
                        </p>
                        <ul>
                            <li>Ayuntamientos</li>
                            <li>Comunidades de vecinos  </li>
                            <li>Centros deportivos</li>
                            <li>Centros educativos </li>
                            <li>Particulares</li>
                            <li>Empresas</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="cuadrante-lower">
                <div className="lower-left">
                    <ul className='cuadrantes-ul'>
                        <li>Diseño y fabricación Española</li>
                        <li>20 años de garantía</li>
                        <li>100% equipado</li>
                        <li>Focalizado en la economía circular</li>
                        <li>Peso: De 2.800 kgs a 4.670 kgs.</li>
                        <li>Entrenamiento a la vez 20 personas</li>
                        <li>Dimensiones: 6 x 2,4 x 2,8 m<sup>3</sup></li>
                        <li>Revalorización desde su compra, fácil reventa y activo refugio</li>
                    </ul>

                </div>
                <div className="lower-right">
                    <img src={strongy} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Cuadrantes