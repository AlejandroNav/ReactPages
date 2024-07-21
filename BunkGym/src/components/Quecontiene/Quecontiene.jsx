import './Quecontiene.css'
import down from '../../assets/down.png'

const Quecontiene = () => {
    const elementosGimnasio = [
        'Bench Press',
        'Peck Deck',
        'Poleas',
        'Mancuernas',
        'Barra Olímpica',
        'Cajones de Salto',
        'Remos',
        'Cuerdas de Batalla',
        'Kettlebells',
        'Anillas','Bench Press',
        'Peck Deck',
        'Poleas',
        'Mancuernas',
        'Barra Olímpica',
        'Cajones de Salto',
        'Remos',
        'Cuerdas de Batalla',
        'Kettlebells',
        'Anillas'
    ];



    return (
        <div className='quecontiene-container'>

            <div className='quecontiene-title-container stroke-text-white-title'>
                <h1 className='quecontiene-title'>¿QUÉ CONTIENE BUNKGYM CROSSFIT?</h1>
            </div>

            <div className='quecontiene-text-container'>
                <p className='quecontiene-text white-text'>
                    Bunkgym Crossfit tiene todo lo necesario para realizar tus entrenamientos en excelencia con todo el equipamiento de un box de crossfit.
                </p>
            </div>

            <div className='quecontiene-elementos-container'>
                <ul className='quecontiene-elementos'>
                    {elementosGimnasio.map((elemento, index) => (
                        <li key={index} className='quecontiene-elemento'>
                            <img src= {down} alt='Paloma' className='quecontiene-logo' />
                            <p className='white-text'>{elemento}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Quecontiene