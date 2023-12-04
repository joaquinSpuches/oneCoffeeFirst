import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';


function ShopFilter({dataShop}) {

  const [data,setData] = useState()
useEffect(() => {
  axios.get('http://192.168.0.10:3001/categorias_shop').then((response)=>{
    setData(response.data)
  })
  .catch(e=>{
    console.error('error al obtener datos de categorias:',e);;
  })
}, [])
  if (data === undefined) {
  
    return <p>Cargando...</p>;
  }else{
  return (
    <div className='recipeFilter'>
      <ul>
    
      <Link to='/shop'>All</Link>
      {data.map(data => 
      <Link key={data.categori_id} to={`category/${data.nombre_categoria}`} >
       {data.nombre_categoria}
          
      </Link>)}
   </ul>
   
    </div>
  );}
}

export default ShopFilter