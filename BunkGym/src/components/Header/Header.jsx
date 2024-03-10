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
                <Link to="/"  style={{ textDecoration: 'none', color: 'inherit' }}>
                    <li className='header-menu-item header-menu-item-text' >Home</li>
                </Link>
                <Link to="/quienesSomos"  style={{ textDecoration: 'none', color: 'inherit' }}>
                    <li className='header-menu-item header-menu-item-text'>Nosotros</li>
                </Link>
                <Link to="/particulares"  style={{ textDecoration: 'none', color: 'inherit' }}>
                    <li className='header-menu-item  header-menu-item-text'>Clientes</li>
                </Link>
                <Link to="/crossfit"  style={{ textDecoration: 'none', color: 'inherit' }}>
                    <li className='header-menu-item  header-menu-item-text'>Crossfit</li>
                </Link>
                <Link to="/gimnasios"  style={{ textDecoration: 'none', color: 'inherit' }}>
                    <li className='header-menu-item  header-menu-item-text'>Gimnasios</li>
                </Link>
                <Link to="/comunidades"  style={{ textDecoration: 'none', color: 'inherit' }}>
                    <li className='header-menu-item header-menu-item-text'>Comunidades</li>
                </Link>
            </ul>
        </div>
    );
};

export default Header;