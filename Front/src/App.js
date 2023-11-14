import React, {useState,useEffect} from 'react';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Recipes from './components/Recipes/Recipes'; // Importa el componente Recipes
import axios from 'axios';
import Home from './components/Home'; // Importa el componente Home
import NavBar from './components/NavBar';
import Logo from './components/Logo'
import Info from './components/Info';
import Shop from './components/Shop/Shop';
import ShopIndex from './components/Shop/ShopIndex';
import ProductType from './components/Shop/ProductType';
import Recipe from './components/Recipes/Recipe';
import Categories from './components/Recipes/Categories'
import RecipesIndex from './components/Recipes/RecipesIndex';
import './style.css'



function App() {
  const [logoActivo, setLogoActivo] = useState(false);
  const handleClickInfo = ()=>{
    setLogoActivo(false)
  }
  const [data, setData]=useState([])
  const urlServer = 'http://192.168.0.10:3001/recetas_cafe'
  const urlServerShop = 'http://192.168.0.10:3001/shop'
  useEffect(() =>{
    axios.get(`${urlServer}`).then((response) =>{
      
      setData(response.data)
    })
    .catch(error=>{
      console.error('error al obtener datos de recetas:', error)
    })
  },[])

  const [dataShop, setDataShop] = useState ([]);    
  useEffect(() =>{
    axios.get(`${urlServerShop}`).then((response) =>{
      
      setDataShop(response.data)
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
        <Route index element={<Home setLogoActivo={setLogoActivo} setNavActive={setNavActive} />}/>
          <Route path="recipes" element={<Recipes setNavActive={setNavActive} data={data} />}>
            <Route index element={<RecipesIndex setNavActive={setNavActive} />} />
            <Route path=':recipeId' element={<Recipe data = {data} />}/>
            <Route path='category/:categoryId' element={<Categories data={data} />}/>
          </Route>
          <Route path="shop" element={<Shop dataShop={dataShop} setNavActive={setNavActive} data={data} />} >
            <Route index element={<ShopIndex dataShop={dataShop}/>}/>
            <Route path='products/:product_id' element={<ProductType dataShop ={dataShop}/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
