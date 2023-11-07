import React, { useEffect } from 'react';
import RecipeFilter from './RecipeFitler';
import { Link, Outlet } from 'react-router-dom';

function Recipes(props) {

  useEffect(()=>{
    props.setNavActive(true);
  })
  if (props.data === false) {
    return <p>Cargando...</p>;
  }else
  return (
    <div className='divcontainer'>
     <Link to='/recipes' > <h1 className='h1Recipe'>RECIPES</h1> </Link>
      <RecipeFilter data={props.data}  />   
      <Outlet/>
      
    
    </div>
  );
}

export default Recipes;
