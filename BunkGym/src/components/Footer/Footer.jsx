import React from 'react'
import './Footer.css'; // Importamos los estilos CSS del footer

import LogoWhite from '../../assets/bunk-white.avif'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="">
                <div className="footer-container">
                    <div className="">
                        <img src={LogoWhite} alt="Logo de Bunkgym" className="footer-logo" />
                        
                    </div>
                    <p>© 2024 Bunkgym. Todos los derechos reservados.</p>
                    <div className="col">
                        <ul className="footer-menu">
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Servicios</a></li>
                            <li><a href="#">Clases</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer