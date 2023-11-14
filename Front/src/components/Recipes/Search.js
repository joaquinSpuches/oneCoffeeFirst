import React, { useState, useEffect } from 'react';

export default function Search({data}) {
    
    return(
        <div className='searchBar'>
            <input style={{position:'fixed'}} type='search' placeholder='Search...'></input>
        </div>
    )
    
};
