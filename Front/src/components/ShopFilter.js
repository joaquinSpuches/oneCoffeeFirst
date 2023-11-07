import React from 'react';

import { Link } from 'react-router-dom';


function ShopFilter({data}) {
//   if (data === false) {
//     return <p>Cargando...</p>;
//   }

// console.log(data);
  return (
    <div   className='recipeFilter'>
        <ul>
        <Link> All</Link>
        <Link> Origin</Link>
        <Link> Blend</Link>
        <Link> Accesories</Link>
        <Link> Coffee Machines</Link>
        </ul>
    </div>
//     <div className='ShopFilter'>
//       <ul>
//       {data == false && <p style={{textAlign:'center', fontWeight:'700', paddingTop:'150px'}}>Cargando...</p>}

// {data.map(data => 
//    <Link  >
//        {data.categoria}
          
//    </Link>)}
//    </ul>
   
//     </div>
  );
}

export default ShopFilter;
