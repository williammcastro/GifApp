import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//App principal llamada en index.js
//categories y setCategories son para las categorias que se van a buscar en la api

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['friends']);

    return( 
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            <ol>
                {
                    categories.map( category => (
                        
                        <GifGrid
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>

        </>
    )
};


