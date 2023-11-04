import React from 'react'
import logo from '../logo.png'
import { Link } from 'react-router-dom'

export default function Logo({logoActivo, setLogoActivo, setNavActive, navActive}) {
    const claseLogo = logoActivo ||navActive ? 'logoinfo' : 'logo'
    const handleClickInfo = () => {
        setLogoActivo(false);
        setNavActive(false) // Cambia el estado en el componente superior
      };
    return(
        <Link to="/" className='nav-marcado'>
        < img id='logo'className={claseLogo} onClick={handleClickInfo } src={logo}/>
        </Link>
    )
};
