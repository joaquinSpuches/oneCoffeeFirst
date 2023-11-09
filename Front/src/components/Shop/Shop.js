import React, { useEffect } from 'react';
import ShopFilter from './ShopFilter';



function Shop(props) {
  useEffect(()=>{
    props.setNavActive(true)
  })
  

  return (
    <div>
      <h1 className='h1Recipe'>SHOP</h1>
      <ShopFilter />    
    </div>
  );
}

export default Shop;
