import './BunkGymRazones.css';
import footermo from '../../assets/greycheck.png';
import footertre from '../../assets/greycheck.png';
import footerhe from '../../assets/greycheck.png';

const BunkGymRazones = ({
    gymTitle = 'Gym en casa',
    gymContent = 'Te ayudamos a construir el gimnasio perfecto en la comodidad de tu hogar.',
    footerText = 'Adaptamos tu bunkgym 100% a ti y a tu familia',
}) => {
    const items = [
        { title: 'Exclusividad', content: 'Ofrecemos servicios únicos y personalizados que no encontrarás en ningún otro lugar.', icon: footermo },
        { title: 'Calidad', content: 'Nos comprometemos con la más alta calidad en todos nuestros equipos y servicios.', icon: footermo },
        { title: 'Se adapta a ti', content: 'Creamos soluciones que se ajustan perfectamente a tus necesidades y objetivos.', icon: footertre },
        { title: 'Personalización', content: 'Cada aspecto de nuestro servicio se personaliza para que se adapte a tu estilo de vida y preferencias.', icon: footerhe },
        { title: 'Llave en mano', content: 'Te proporcionamos una solución completa, desde el diseño hasta la instalación y el mantenimiento.', icon: footermo },
        { title: gymTitle, content: gymContent, icon: footermo },
        { title: 'Diversión', content: 'Garantizamos que tu experiencia de entrenamiento sea divertida y motivadora.', icon: footertre },
        { title: 'Asesoría 360', content: 'Ofrecemos asesoramiento completo en todos los aspectos de la instalación y gestión del gimnasio.', icon: footerhe },
        { title: 'Salud', content: 'Promovemos un estilo de vida saludable a través de nuestros programas y servicios de fitness.', icon: footermo },
        { title: 'Comunidad', content: 'Únete a nuestra comunidad para encontrar apoyo, motivación y camaradería.', icon: footermo },
        { title: 'Garantía', content: 'Todos nuestros productos y servicios vienen con una garantía de satisfacción.', icon: footertre },
        { title: 'Inversión', content: 'Bunkgym es una inversión, se revaloriza año tras año, y el proceso de reventa es sencillo, ya que se vende en bloque.', icon: footerhe }
    ];

    return (
        <div>
            <div className="bunkgym-razones-container">
                <h2 className='bunkgym-razones-title titulo-general-blanco'>12 RAZONES POR LAS QUE DEBES ADQUIRIR UN BUNKGYM</h2>
                <div className="doce-razones-columns">
                    {items.map((item, index) => (
                        <div key={index} className="doce-razones-column">
                            <div className="doce-razones-item">
                                <p className="doce-razones-item-title">
                                    <img src={item.icon} alt="" className="icon-small" /> {item.title}
                                </p>
                                <p className="doce-razones-item-content">{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bunkgym-razones-footer">
                <h2>{footerText}</h2>
            </div>
        </div>
    );
};

export default BunkGymRazones;
