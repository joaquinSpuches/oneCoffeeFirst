import React, { useState, useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';


export default function ProductType({dataShop}) {
    const params = useParams()
    const product_type = params.product_id - 1
    if (dataShop && dataShop[product_type]) { 
      
    return(

        <div className="product-home">
             
          {dataShop === false && <p style={{textAlign:'center', fontWeight:'700', paddingTop:'150px'}}>Cargando...</p>}
       
          
          < img className='product-image' alt='product' id={dataShop[product_type].image} src={dataShop[product_type].image_url} />     
          <div className='product-description'>
            <h1>{dataShop[product_type].product_name}</h1>
                <p> {dataShop[product_type].flavor_notes} </p>
                <p> {dataShop[product_type].cuerpo} </p>
                <p> {dataShop[product_type].acidez} </p>
                <p> {dataShop[product_type].tueste} </p>

            </div>         


    </div>
    )
}
};
