import React, { useEffect, useState } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from  'axios';

function RecipeFilter() {
  


  return (
    <div className='recipeFilter'>
      <ul>
        <Link>All</Link>
        <Link>Aeropress</Link>
        <Link>Espresso</Link>
        <Link>Moka Pot</Link>
        <Link>French Press</Link>
        <Link>V60</Link>
        <Link>Filter</Link>
        
        

      </ul>
   
    </div>
  );
}

export default RecipeFilter;
