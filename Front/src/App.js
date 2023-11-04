import React, {useState} from 'react';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Recipes from './components/Recipes'; // Importa el componente Recipes
import Home from './components/Home'; // Importa el componente Home
import NavBar from './components/NavBar';
import Logo from './components/Logo'
import Info from './components/Info';
import Shop from './components/Shop';
import './style.css'


function App() {
  const [logoActivo, setLogoActivo] = useState(false);
  const handleClickInfo = ()=>{
    setLogoActivo(false)
  }
  const [navActive, setNavActive] =useState(true)
  return (
    <Router>
      <div  className='container'>
        <Logo navActive={navActive} setNavActive={setNavActive} logoActivo={logoActivo} setLogoActivo={setLogoActivo}  />
        <NavBar navActive={navActive} setNavActive={setNavActive} setLogoActivo={setLogoActivo} logoActivo={logoActivo}/>
        <Info logoActivo={logoActivo} setLogoActivo={setLogoActivo} />

        <Routes>
          <Route path="/recipes/" element={<Recipes />} />
          <Route path="/Shop/" element={<Shop />} />

        
          <Route path="/recipes/:terminoBusqueda" element={<Recipes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
