import { Link } from "react-router-dom";

export default function ShopIndex({dataShop}) {
    
    
    return(
        <div className="shopIndex">
          {dataShop == false && <p style={{textAlign:'center', fontWeight:'700', paddingTop:'150px'}}>Cargando...</p>}
          {dataShop.map (data=>
        <Link style={{width:'50%',padding:'10px',boxSizing:'border-box'}}> 
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
            </Link>
          )}
         
        </div>
    )
    
};
