import React from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

export default function Recipe({ data }) {
  const params = useParams();
  const id = params.recipeId - 1;

  const formatInstructions = (instructions) => {
    const sanitizedInstructions = instructions.replace(/(\d+)\./g, '</br><strong>step $1</strong></br>');
    const cleanHTML = DOMPurify.sanitize(sanitizedInstructions);

    return { __html: cleanHTML };
  };

  if (data === false) {
    return <p>Cargando...</p>;
  }

  if (data && data[id]) {
    return (
      <div className="recipe">
        <h1>{data[id].nombre}</h1>
        <div className="recipe1">
          <p>Categoría: {data[id].categoria}</p>
          <p>Dificultad: {data[id].dificultad}</p>
          <p>Gramos de café: {data[id].gramos_de_cafe}</p>
          <p>Tiempo de preparación: {data[id].tiempo_preparacion}</p>
          <p>Ingredientes: {data[id].ingredientes}</p>
        </div>
        <div className="instrucciones">
          <p> {data[id].descripcion} </p>
    
          <div className="pre"
            dangerouslySetInnerHTML={formatInstructions(data[id].instrucciones)}
          />
          <p>Tipo de molienda: {data[id].tipo_molienda}</p>
        </div>
      </div>
    );
  }
}

  




















// import React, { useEffect, useState } from 'react';
// import axios from  'axios';
// import RecipeFilter from './RecipeFitler';
// import { Link, useParams } from 'react-router-dom';

// function Recipe({}) {
//   const [data, setData]=useState([])
//   const urlServer = 'http://localhost:3001/recetas_cafe'
//   // useEffect(() =>{
//   //   axios.get(`${urlServer}`).then((response) =>{
      
//   //     setData(response.data)
  
//   //   })
//   //   .catch(error=>{
//   //     console.error('error al obtener datos de recetas:', error)
//   //   })
//   // },[])
//   const {recipeId} = useParams()
//   console.log(recipeId );
  
//   console.log(data);


//     return (
//     <div className="recipe">
//       {data == false && <p>Cargando...</p>}
//       {/* <h2>{data[recipeId].nombre}</h2>
//       <p>Ingredientes: {data[recipeId].ingredientes}</p>
//       <p>Instrucciones: {data[recipeId].instrucciones}</p>
//       <img src={data[recipeId].imagen} alt={data[recipeId].nombre} />
//       <p>Tiempo de preparación: {data[recipeId].tiempo_preparacion}</p>
//       <p>Dificultad: {data[recipeId].dificultad}</p>
//       <p>Categoría: {data[recipeId].categoria}</p>
//       <p>Temperatura de agua: {data[recipeId].temperatura_agua}</p>
//       <p>Temperatura de leche: {data[recipeId].temperatura_leche}</p>
//       <p>Tipo de molienda: {data[recipeId].tipo_molienda}</p>
//       <p>Gramos de café: {data[recipeId].gramos_de_cafe}</p> */}
//     </div>
//   );
// }

// export default Recipe;
