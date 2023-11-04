import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import axios from  'axios';
import RecipeFilter from './RecipeFitler';

function Recipes() {
  


  return (
    <div>
      <h1 className='h1Recipe'>RECIPES</h1>
      <RecipeFilter />    
    </div>
  );
}

export default Recipes;
