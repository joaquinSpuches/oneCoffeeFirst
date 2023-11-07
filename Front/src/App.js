import React, {useState,useEffect} from 'react';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Recipes from './components/Recipes'; // Importa el componente Recipes
import axios from 'axios';
import Home from './components/Home'; // Importa el componente Home
import NavBar from './components/NavBar';
import Logo from './components/Logo'
import Info from './components/Info';
import Shop from './components/Shop';
import Recipe from './components/Recipe';
import RecipesIndex from './components/RecipesIndex';
import './style.css'


function App() {
  const [logoActivo, setLogoActivo] = useState(false);
  const handleClickInfo = ()=>{
    setLogoActivo(false)
  }
  const [data, setData]=useState([])
  const urlServer = 'http://localhost:3001/recetas_cafe'
  useEffect(() =>{
    axios.get(`${urlServer}`).then((response) =>{
      
      setData(response.data)
    })
    .catch(error=>{
      console.error('error al obtener datos de recetas:', error)
    })
  },[])

  const [navActive, setNavActive] =useState(false)
  return (
    <Router>
      <div  className='container'>
        <Logo navActive={navActive} setNavActive={setNavActive} logoActivo={logoActivo} setLogoActivo={setLogoActivo}  />
        <NavBar navActive={navActive} setNavActive={setNavActive} setLogoActivo={setLogoActivo} logoActivo={logoActivo}/>
        <Info logoActivo={logoActivo} setLogoActivo={setLogoActivo} />

        <Routes>
          <Route index element={<Home/>}/>
          <Route path="recipes" element={<Recipes setNavActive={setNavActive} data={data} />}>
            <Route index element={<RecipesIndex setNavActive={setNavActive} />} />
            <Route path=':recipeId' element={<Recipe data = {data} />}/>
          </Route>
          <Route path="Shop" element={<Shop setNavActive={setNavActive} data={data} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
