import React from 'react';

function Recipe({ receta }) {
  return (
    <div className="recipe">
      <h2>{receta.nombre}</h2>
      <p>Ingredientes: {receta.ingredientes}</p>
      <p>Instrucciones: {receta.instrucciones}</p>
      <img src={receta.imagen} alt={receta.nombre} />
      <p>Tiempo de preparación: {receta.tiempo_preparacion}</p>
      <p>Dificultad: {receta.dificultad}</p>
      <p>Categoría: {receta.categoria}</p>
      <p>Temperatura de agua: {receta.temperatura_agua}</p>
      <p>Temperatura de leche: {receta.temperatura_leche}</p>
      <p>Tipo de molienda: {receta.tipo_molienda}</p>
      <p>Gramos de café: {receta.gramos_de_cafe}</p>
    </div>
  );
}

export default Recipe;
