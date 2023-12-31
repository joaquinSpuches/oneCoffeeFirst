import React from 'react'
import { Link } from 'react-router-dom'



function NavBar({ setLogoActivo, logoActivo, setNavActive, navActive }) {
  const handleClickInfo = () => {
    setLogoActivo(true); // Cambia el estado en el componente superior
  };
  const handleClickNav = () =>{
    setNavActive(true) // Al clickear elementos del nav que no sean info, nav desactivado
  }
  
  const classMenu  = logoActivo || navActive ? 'hidemenu' : '' 
  
    return(
        <nav  className={classMenu} >
        <ul>
          <li>
            <Link onClick={handleClickNav} to="/recipes" className='nav-marcado'aria-label="Recipes" >RECIPES</Link>
          </li>
          
          <li>
            <Link onClick={handleClickNav} to="/Shop" aria-label='Shop' >SHOP</Link>
          </li>
          <li>
            <Link onClick={handleClickInfo} to="/" aria-label='Info'>INFO</Link>
          </li>
          <li>
            <Link to="/contact" className='nav-marcado' aria-label='Contact'> CONTACT</Link>
          </li>
        </ul>
      </nav>
    )
    
}

export default NavBar;
