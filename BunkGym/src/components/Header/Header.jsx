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
                <li onClick={() => setCurrentPage('particulares')}>Tipos de Clientes</li>
                <li onClick={() => setCurrentPage('crossfit')}>Bunkgyms</li>
                <li onClick={() => setCurrentPage('gimnasios')}>Mas Bunkgym</li>
                <li onClick={() => setCurrentPage('comunidades')}>Contacto</li>
                
            </ul>
        </div>
    );
};

export default Header;