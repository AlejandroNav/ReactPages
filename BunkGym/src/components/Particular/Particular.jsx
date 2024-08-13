
import Carruseles from '../Carruseles/Carruseles'
import outside2 from '../../assets/particularhero.png';
import particulargym1 from '../../assets/blackStrong.png';
import particulargym2 from '../../assets/div9.png';
import particulargym3 from '../../assets/div4.png';
import div7 from '../../assets/div7.png';
import strong from '../../assets/redCrossfit.png';
import crossfit from '../../assets/yellow360.png';
import whiteCrossfit2 from '../../assets/whiteCrossfit.png';
import './Particular.css'
const Particular = () => {

    const carouselData2 = {
        "slides": [
            {
                "src": particulargym1,
                "alt": "Image 1 for carousel"
            },
            {
                "src": particulargym2,
                "alt": "Image 2 for carousel"
            },
            {
                "src": particulargym3,
                "alt": "Image 3 for carousel"
            },
            {
                "src": div7,
                "alt": "Image 3 for carousel"
            }
            ,
            {
                "src": strong,
                "alt": "Image 3 for carousel"
            }
            ,
            {
                "src": crossfit,
                "alt": "Image 3 for carousel"
            },
            {
                "src": whiteCrossfit2,
                "alt": "Image 3 for carousel"
            }
        ]
    };
    return (
        <div className='particular'>
            <div className='particular-container'>
                <div className='particular-title-container' style={{ backgroundImage: `url(${outside2})` }}>
                    <p className='particular-subtitle2'>¿Imaginas tener tu gimnasio en casa 100% personalizado y adaptado a ti y a tu familia?</p>
                    <p className=' titulo-general-blanco'>Bunkgym lo hace posible.</p>
                </div>
                <section className='particular-section2'>

                </section>
                <section><p className='particular-text-title'> invierte en ti, date el capricho que mereces.</p></section>
                <section className='particular-section'>

                    <div className='particular-text-container'>

                        <p className='particular-text'>Se dueño de tu propio gimnasio, creado por tus propias reglas. No tendrás que lidiar con gimnasios convencionales abarrotados de gente, aguantando el ambiente sudoroso y asfixiante y preocupándote por las medidas sanitarias del espacio.  </p>
                        <p className='particular-text'> Te presentamos una nueva forma de entrenar, disfrutar y vivir, en la que serás propietario de un espacio exclusivo, donde tanto tú como tus familiares y amigos podréis compartir un momento divertido a la vez de tomar el control de su bienestar.
                        </p>
                    </div>
                    <div className='particular-img-container'>
                        <Carruseles data={carouselData2} />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Particular