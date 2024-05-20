import React from 'react';
import { Link } from 'react-router-dom';
import LogoWhite from '../../assets/bunk-white.avif';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Link to="/" className="logo-link">
                <img src={LogoWhite} alt="Bunkgym Logo" className="logo" />
            </Link>
            <ul className='header-menu'>
                <div className="dropdown">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <li className='header-menu-item header-menu-item-text'>Home</li>
                    </Link>
                </div>
                <div className="dropdown">
                    <Link to="/quienesSomos" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <li className='header-menu-item header-menu-item-text'>Nosotros</li>
                    </Link>
                </div>
                <div className="dropdown">
                    <Link to="/particulares" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <li className='header-menu-item header-menu-item-text'>Clientes</li>
                    </Link>
                    <div className="dropdown-menu">
                        <Link to="/particulares" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>Particulares</li>
                        </Link>
                        <Link to="/ayuntamientos" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>Ayuntamientos</li>
                        </Link>
                        <Link to="/empresas" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>Empresas</li>
                        </Link>
                        <Link to="/comunidadesVecinos" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>Comunidades de vecinos</li>
                        </Link>
                        <Link to="/centrosEducativos" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>Centros educativos</li>
                        </Link>
                        <Link to="/centrosDeportivos" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>Centros deportivos</li>
                        </Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to="/crossfit" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <li className='header-menu-item header-menu-item-text'>Bunkgyms</li>
                    </Link>
                    <div className="dropdown-menu">
                        <Link to="/crossfit" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>Crossfit</li>
                        </Link>
                        <Link to="/360" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>360</li>
                        </Link>
                        <Link to="/strong" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>Strong</li>
                        </Link>
                        <Link to="/inconformista" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>Inconformista</li>
                        </Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to="/productos" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <li className='header-menu-item header-menu-item-text'>+ Productos</li>
                    </Link>
                    <div className="dropdown-menu">
                        <Link to="/disenoEquipamiento" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>Diseño y equipamiento fitness</li>
                        </Link>
                        <Link to="/asesoriaSoluciones" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>Asesoría y soluciones fitness a medida</li>
                        </Link>
                        <Link to="/disenoGimnasios" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>Diseño de gimnasios personalizados</li>
                        </Link>
                        <Link to="/impulsoProyectos" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>Impulso de proyectos fitness</li>
                        </Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to="/contacto" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <li className='header-menu-item header-menu-item-text'>Contacto</li>
                    </Link>
                </div>
            </ul>
        </div>
    );
};

export default Header;