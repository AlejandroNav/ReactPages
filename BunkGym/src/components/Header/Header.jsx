import { useState } from 'react';
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
                        <Link to="/crossfit10" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>Crossfit 10'</li>
                        </Link>
                        <Link to="/crossfit" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>Crossfit 20'</li>
                        </Link>
                        <Link to="/360" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>360 20’</li>
                        </Link>
                        <Link to="/strong" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>Strong 20’</li>
                        </Link>
                    </div>
                </div>




                <div className={`special-drop dropdown ${dropdownOpen === 'mas' ? 'open' : ''}`}>
                    <li
                        className='header-menu-item header-menu-item-text'
                        onClick={() => toggleDropdown('mas')}
                    >
                        Mas Productos <span className="submenu-indicator">▼</span>
                    </li>
                    <div className="dropdown-menu">
                        <Link to="/crossfit10" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>Diseño y equipamiento fitness
                                </li>
                        </Link>
                        <Link to="/crossfit" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>Asesoría y soluciones a medida
                            </li>
                        </Link>
                        <Link to="/360" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>Diseños personalizados
                            </li>
                        </Link>
                        <Link to="/strong" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>Impulso de proyectos fitness
                            </li>
                        </Link>
                    </div>
                </div>


                <div className={`special-drop dropdown ${dropdownOpen === 'contacto' ? 'open' : ''}`}>
                    <li
                        className='header-menu-item header-menu-item-text'
                        onClick={() => toggleDropdown('contacto')}
                    >
                        Contacto <span className="submenu-indicator">▼</span>
                    </li>
                    <div className="dropdown-menu">
                        <Link to="/crossfit10" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>Contacto
                                </li>
                        </Link>
                        <Link to="/crossfit" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>Vende Bunkgym

                            </li>
                        </Link>
                        <Link to="/360" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className='header-menu-item header-menu-item-text'>Garantia bunkgym
                            </li>
                        </Link>

                    </div>
                </div>

            </ul>
        </div>
    );
};

export default Header;
