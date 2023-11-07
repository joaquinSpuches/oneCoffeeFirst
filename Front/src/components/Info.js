import React from 'react'
import { Link } from 'react-router-dom'



    export default function Info({logoActivo,setLogoActivo}) {
        const claseLogo = logoActivo ? '' : 'hidden'
     
        const handleClickInfo = ()=>{
            setLogoActivo(false)
        }

     
        return(
            <div  onClick={handleClickInfo} className={`info ${claseLogo}`}  >
               <Link onClick={handleClickInfo} style={{width:'100%'}} to={'/'}> <div  className='arrow'></div>
               </Link>
                <p onClick={handleClickInfo} className={claseLogo}>
                This web page is directed to coffee lovers like me, who make coffee their way of life,
                who love coffee from the moment it is a coffee bean until it is served in the cup and 
                fills our soul with vitality. For those who cannot go a day without thinking about what new
                recipe or what new coffee they are going to try next. For you, who make coffee your lifestyle! 
                </p>
            </div>
        )
    };
