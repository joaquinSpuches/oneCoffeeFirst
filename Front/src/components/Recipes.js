import React, { useEffect, useState } from 'react';
import axios from  'axios';
import RecipeFilter from './RecipeFitler';
import { Link } from 'react-router-dom';

function Recipes({setNavActive}) {
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

  useEffect(()=>{
    setNavActive(true);
  })
  console.log(data)
  


  return (
    <div className='divcontainer'>
      <h1 className='h1Recipe'>RECIPES</h1>
      <RecipeFilter />   
      <Link>
      {data.map(recipe => 
         <div className='recipe'>
          <div style={{paddingLeft:'55px'}}> <p key={recipe.id}>{recipe.nombre}</p>
          <p className='descripicionRecipe' key={recipe.descripcion}>{recipe.descripcion}</p></div>
          <p style={{paddingRight:'27.5px'}} key={recipe.dificultad}>{recipe.dificultad} </p>
         </div>
         )}
      </Link>
    </div>
  );
}

export default Recipes;
