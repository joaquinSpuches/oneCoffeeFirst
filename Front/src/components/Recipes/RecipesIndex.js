import React from "react"
import { useState,useEffect, } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
export default function RecipesIndex({setNavActive}) {
   
  const [data, setData]=useState([])
  const urlServer = 'http://192.168.0.10:3001/recetas_cafe'
   
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
    
    return(
        <div className="recipeIndex">
{data == false && <p style={{textAlign:'center', fontWeight:'700', paddingTop:'150px'}}>Cargando...</p>}

{data.map(recipe => 
  <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
  <div className='recipeItem'>
    <div className='recipeinfo' style={{ paddingLeft: '30px' }}>
      <p style={{fontFamily:'steiner-light', fontSize:'1.25em'}} key={recipe.nombre}>{recipe.nombre}</p>
      <p className='descripicionRecipe' key={recipe.descripcion}>{recipe.descripcion}</p>
    </div>
    <p style={{ paddingRight: '30px' }} key={recipe.dificultad}>
      {recipe.dificultad}
    </p>
  </div>
</Link>
   )}
</div>
    )
};
