import React, { useState, useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';


export default function ProductType({dataShop}) {
    const params = useParams()
    const product_type = params.product_id

    return(
        <div className="shopIndex">
        {dataShop === false && <p>Cargando...</p>}
        {
               dataShop.map(data =>{
                if(data.product_type === product_type){
                
                  return   ( 
                  <Link  key={data.id} to={`/datas/${data.id}`} style={{width:'50%',padding:'10px',boxSizing:'border-box'}}> 
            <div className="product" >
                 < img alt='product' id={dataShop.image} src={data.image_url} />
                <div className="productInfo">
                <h1> {data.product_name} </h1>
                <div style={{display:'flex',alignContent:'center',justifyContent:'center'}}> 
                    <h1>{data.price} € -</h1>
                    <h1>{data.weight} g</h1>
                </div>
              
                    </div>

                
            </div>
            </Link>)
            
                }
               }) 
        }


    </div>
    )
    
};
