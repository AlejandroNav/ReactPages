import React from 'react';
import LogoWhite from '../../assets/bunk-white.avif';
import './Header.css';

const Header = () => {
    const navigateTo = (path) => {
        window.location.href = path; // Navigate to the specified path
    };

    return (
        <div className='header'>
            <div className="logo-link" onClick={() => navigateTo('/')}>
                <img src={LogoWhite} alt="Bunkgym Logo" className="logo" />
            </div>
            <ul className='header-menu'>
                <li className='header-menu-item' onClick={() => navigateTo('/')}>Home</li>
                <li className='header-menu-item' onClick={() => navigateTo('/quienesSomos')}>Quienes somos</li>
                <li className='header-menu-item' onClick={() => navigateTo('/particulares')}>Tipos de Clientes</li>
                <li className='header-menu-item' onClick={() => navigateTo('/crossfit')}>Bunkgyms</li>
                <li className='header-menu-item' onClick={() => navigateTo('/gimnasios')}>Mas Bunkgym</li>
                <li className='header-menu-item' onClick={() => navigateTo('/comunidades')}><p className='header-menu-item-text'>Comunidades</p></li>
            </ul>
        </div>
    );
};

export default Header;