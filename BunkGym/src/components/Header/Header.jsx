import React from 'react'
import Logo from '../../assets/BunkgymLogo1-4.avif'
import LogoWhite from '../../assets/bunk-white.avif'
import './Header.css'
const Header = ({ setCurrentPage }) => {
    return (
        <div className='header' >
            <img src={LogoWhite} alt="" className='logo' />
            <ul className='header-menu'>
                <li onClick={() => setCurrentPage('home')}>Home</li>
                <li onClick={() => setCurrentPage('quienesSomos')}>Quienes somos</li>
                <li onClick={() => setCurrentPage('particulares')}>Particulares</li>
                <li onClick={() => setCurrentPage('ayuntamientos')}>Ayuntamientos</li>
                <li onClick={() => setCurrentPage('empresas')}>Empresas</li>
                <li onClick={() => setCurrentPage('comunidades')}>Comunidades</li>
                
            </ul>
        </div>
    );
};

export default Header;