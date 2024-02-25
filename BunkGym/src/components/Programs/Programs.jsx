import React from 'react'
import './Programs.css'
const Programs = () => {
    return (
        <div className='Programs' id='programs'>
            <div className="Programs-header">
                <span className='stroke-text-white'> ¿PARA QUIEN ES BUNKGYM?
                </span>
            </div>
            <div className='program-subtitle'>
                <p>Bunkgym es para los inconformistas, los deportistas, las personas que apuestan por tener un cuerpo saludable, para los que quieren cuidar de sus familias, empleados, alumnos o habitantes de su municipio.
                </p>
                <h3 className='orange'>Bunkgym es para todos. </h3>

            </div>
            <div class="container">
                <div class="card">
                    <h2>AYUNTAMIENTOS </h2>
                    <p>Transformamos municipios a través de la implementación de gimnasios a medida para tod@s los vecin@s, promoviendo la salud y la actividad física para la comunidad.</p>
                </div>
                <div class="card">
                    <h2>EMPRESAS </h2>
                    <p>Forjamos espacios transformadores para empresas, creados para potenciar el rendimiento y la productividad de los empleados.</p>
                </div>
                <div class="card">
                    <h2>PARTICULARES </h2>
                    <p>Faciliatamos a las personas que sean dueñas de su propio gimnasio personal, ofreciéndoles un espacio exclusivo para disfrutar con amigos, familiares o en total privacidad.</p>
                </div>
                <div class="card">
                    <h2>COMUNIDADES DE VECINOS </h2>
                    <p>Elevamos la calidad de vida de los vecinos con espacios deportivos comunitarios, impulsando un estilo de vida activo y sociable.</p>
                </div>
                <div class="card">
                    <h2>CENTROS EDUCATIVOS </h2>
                    <p>Integramos la actividad física en la rutina formativa mediante gimnasios móviles, fomentando el deporte entre los estudiantes.</p>
                </div>
                <div class="card">
                    <h2>CENTROS DEPORTIVOS </h2>
                    <p>Maximizamos la experiencia de los usuarios al añadir valor a las instalaciones deportivas, ofreciendo opciones para un entrenamiento variado y personalizado.</p>
                </div>
            </div>
        </div>
    )
}

export default Programs