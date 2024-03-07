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
                <li className='header-menu-item'><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} >Home</Link></li>
                <li className='header-menu-item'><Link to="/quienesSomos" style={{ textDecoration: 'none', color: 'inherit' }}>Quienes somos</Link></li>
                <li className='header-menu-item'><Link to="/particulares" style={{ textDecoration: 'none', color: 'inherit' }}>Particulares</Link></li>
                <li className='header-menu-item'><Link to="/crossfit" style={{ textDecoration: 'none', color: 'inherit' }}>Crossfit</Link></li>
                <li className='header-menu-item'><Link to="/gimnasios" style={{ textDecoration: 'none', color: 'inherit' }}>Gimnasios</Link></li>
                <li className='header-menu-item'><Link to="/comunidades" style={{ textDecoration: 'none', color: 'inherit' }}>Comunidades</Link></li>
            </ul>
        </div>
    );
};

export default Header;