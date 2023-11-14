import React, { useEffect } from 'react';
import ShopFilter from './ShopFilter';
import { Outlet } from 'react-router-dom';
import ShopIndex from './ShopIndex';

function Shop({dataShop, setNavActive}) {
  useEffect(()=>{
    setNavActive(true)
  })
  
  

  return (
    <div className='divcontainer'>
      <h1 className='h1Recipe'>SHOP</h1>
      <ShopFilter dataShop={dataShop} />   
      <Outlet/> 
    </div>
  );
}

export default Shop;
