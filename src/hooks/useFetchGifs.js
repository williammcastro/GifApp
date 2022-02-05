import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

//custom hook que solicita el fetch y devuelve el estado de si esta cargando

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState( {
        data: [],
        loading: true
    } );

//nunca pueden ser async
    useEffect( () => {   
//es una promesa
        getGifs( category )
            .then( imgs => {

                setTimeout(() => {
                    setState({
                        data: imgs,
                        loading: false,                    
                    });
                }, 500);
            } )
    }, [ category ]);

return state;
    
}