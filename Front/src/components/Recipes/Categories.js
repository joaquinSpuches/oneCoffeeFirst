import React from 'react'
import { Link, useParams } from 'react-router-dom'
export default function Categories({data}) {
    const params = useParams()
    const categoria = params.categoryId
 
    
    return(
        <div>
            {data === false && <p>Cargando...</p>}
            {
                   data.map(recipe =>{
                    if(recipe.categoria === categoria){
                    
                      return   <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
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
                    }
                   }) 
            }
                
           {/* {data.map(recipe=>{
        if(recipe.categoria ===   ){
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
        }
    })} */}
   
        </div>
    )
};
