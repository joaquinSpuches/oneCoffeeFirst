import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import axios from  'axios';
import RecipeFilter from './RecipeFitler';

function Shop() {
  


  return (
    <div>
      <h1 className='h1Recipe'>SHOP</h1>
      <RecipeFilter />    
    </div>
  );
}

export default Shop;
