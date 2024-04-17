import React from 'react'
import './Footer.css'; // Importamos los estilos CSS del footer


import LogoWhite from '../../assets/bunk-white.avif'
import footermo from '../../assets/footermo.png'
import footerwa from '../../assets/footerwa.png'
import footertre from '../../assets/footertre.png'
import footerhe from '../../assets/footerhe.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div class="mini-footer">
                <div class="mini-footer-container">
                    <div class="mini-footer-section">
                        <div class="mini-footer-logo">
                            <img src={footermo} class="footermo" alt="" srcset="" />
                        </div>
                        <div>
                            <h4 class="mini-footer-title">SIN INTERMEDIARIOS</h4>
                            <p class="mini-footer-text">Precios directos de fábrica</p>
                        </div>
                    </div>
                    <div class="mini-footer-section">
                        <div class="mini-footer-logo">
                            <img src={footerhe} class="footermo" alt="" srcset="" />
                        </div>
                        <div>
                            <h4 class="mini-footer-title">TE ASESORAMOS</h4>
                            <p class="mini-footer-text">Servicio 100% personalizado</p>
                        </div>
                    </div>
                    <div class="mini-footer-section">
                        <div class="mini-footer-logo">
                            <img src={footerwa} class="footermo" alt="" srcset="" />
                        </div>
                        <div>
                            <h4 class="mini-footer-title">GARANTÍA</h4>
                            <p class="mini-footer-text">Garantizamos nuestros productos</p>
                        </div>
                    </div>
                    <div class="mini-footer-section">
                        <div class="mini-footer-logo">
                            <img src={footertre} class="footermo" alt="" srcset="" />
                        </div>
                        <div>
                            <h4 class="mini-footer-title">PROYECTOS 360</h4>
                            <p class="mini-footer-text">Nos ocupamos de todo tu proyecto</p>
                        </div>
                    </div>
                </div>
            </div>




            <div className='footer-wrapper'>
                <div className="footer-container">
                    <div className="">
                        <img src={LogoWhite} alt="Logo de Bunkgym" className="footer-logo" />
                    </div>
                    <p><span className='span-telefono'>Telefono: </span><span>(+55) 555-555-5555</span></p>
                    <p><span className='span-telefono'>Email: </span>ZK2p2@example.com</p>
                    <p>© 2024 Bunkgym. Todos los derechos reservados.</p>
                </div>
                <div className="footer-frame">
                    <div className="footer-section">
                        <h3 className='footer-title'>Servicio al cliente</h3>
                        <ul className='footer-ul'>
                            <li><a href="#contacto">Contacto</a></li>
                            <li><a href="#financiacion">Financiación</a></li>
                            <li><a href="#garantias">Garantías</a></li>
                            <li><a href="#envios">Envíos</a></li>
                            <li><a href="#devoluciones">Devoluciones</a></li>
                            <li><a href="#terminos-condiciones">Términos y condiciones</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 className='footer-title'>Nosotros</h3>
                        <ul className='footer-ul'>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#particulares">Particulares</a></li>
                            <li><a href="#ayuntamientos">Ayuntamientos</a></li>
                            <li><a href="#empresas">Empresas</a></li>
                            <li><a href="#comunidades-vecinos">Comunidades de vecinos</a></li>
                            <li><a href="#centros-educativos">Centros educativos</a></li>
                            <li><a href="#centros-deportivos">Centros deportivos</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 className='footer-title'>Legal</h3>
                        <ul className='footer-ul'>
                            <li><a href="#aviso-legal">Aviso legal</a></li>
                            <li><a href="#terminos-condiciones">Términos y condiciones</a></li>
                            <li><a href="#politica-privacidad">Política de privacidad</a></li>
                            <li><a href="#cookies">Cookies</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 className='footer-title'>Novedades y descuentos<br></br> exclusivos</h3>
                        <p>Ingresa tu correo electrónico</p>
                        <button className='footer-button'>Suscribirme?</button>
                        <h3 className='footer-title'>Siguenos</h3>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer