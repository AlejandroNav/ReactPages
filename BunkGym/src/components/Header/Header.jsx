import React from 'react'
import Logo from '../../assets/BunkgymLogo1-4.avif'
import LogoWhite from '../../assets/bunk-white.avif'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <img src={LogoWhite} alt="" className='logo' />
            <ul className='header-menu'>
                <li>Home</li>
                <li>Quienes somos</li>
                <li>Particulares</li>
                <li>Ayuntamientos</li>
                <li>Empresas</li>
                <li>Comunidades</li>
            </ul>

        </div>
        
    )
}

export default Header