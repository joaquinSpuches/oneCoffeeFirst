import React from 'react';
import { Link } from 'react-router-dom';


function RecipeFilter({data}) {
  if (data === false) {
    return <p>Cargando...</p>;
  }


  return (
    <div className='recipeFilter'>
      <ul>
      {data === false && <p style={{textAlign:'center', fontWeight:'700', paddingTop:'150px'}}>Cargando...</p>}

{data.map(data => 
   <Link key={data.id}  >
       {data.categoria}
          
   </Link>)}
   </ul>
   
    </div>
  );
}

export default RecipeFilter;
