import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoWhite from '../../assets/bunk-white.avif';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDropdown = (menu) => {
        setDropdownOpen((prevMenu) => (prevMenu === menu ? null : menu));
    };

    return (
        <div className='header'>
            <Link to="/" className="logo-link">
                <img src={LogoWhite} alt="Bunkgym Logo" className="logo" />
            </Link>

            {/* Hamburger Menu Icon for smaller screens */}
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Apply 'show' class when menuOpen is true */}
            <ul className={`header-menu ${menuOpen ? 'show' : ''}`}>
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

                <div className={`special-drop dropdown ${dropdownOpen === 'clientes' ? 'open' : ''}`}>
                    <li
                        className='header-menu-item header-menu-item-text'
                        onClick={() => toggleDropdown('clientes')}
                    >
                       Clientes <span className="submenu-indicator">▼</span>
                    </li>
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
                <div className={`special-drop dropdown ${dropdownOpen === 'bunkgyms' ? 'open' : ''}`}>
                    <li
                        className='header-menu-item header-menu-item-text'
                        onClick={() => toggleDropdown('bunkgyms')}
                    >
                       Bunkgyms <span className="submenu-indicator">▼</span>
                    </li>
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
                    <Link to="/contacto" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <li className='header-menu-item header-menu-item-text'>Contacto</li>
                    </Link>
                </div>
            </ul>
        </div>
    );
};

export default Header;
