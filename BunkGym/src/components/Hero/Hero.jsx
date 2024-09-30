
import '../Hero/Hero.css'
import mantrans from '../../assets/man-transparent.png'
import { motion } from 'framer-motion'

const Hero = ({  setCurrentPage }) => {
    const transition = { duration: 2, type: 'spring' }

    return (
        <div className="hero">
            <div className=' hero-blur'></div>
            <div className=' hero-blur2'></div>
            <div className="hero-left">
                <div className="hero-ad">
                    <motion.div
                        initial={{ left: '91%' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    >

                    </motion.div >
                    <span>Somos Fuerza. Somos Excelencia. Somos Sostenibilidad. Somos Innovación. Somos Salud.</span>
                </div>
                <div className="hero-text">
                    <div>
                        <span className='stroke-text' >SOMOS BUNKGYM,</span> <span > y venimos</span>
                    </div>
                    <div>
                        <span>a revolucionar</span> <span className='stroke-text'>el mundo</span>
                    </div>
                    <div>
                        <span> del
                        </span><span className='stroke-text'> fitness.
                        </span>
                    </div>
                    <div className='hero-text-p'>
                    </div>
                </div>


            </div>

            <motion.div
                className="hero-right"
                initial={{ opacity: 0.2, x: 100 }} // Animación inicial
                animate={{ opacity: 1, x: 0 }} // Animación al cargar
                transition={{ duration: 1.5 }} // Duración de la animación
            >
                <img src={mantrans} alt="" className='hero-image' />
            </motion.div>

        </div>
    )
}

export default Hero