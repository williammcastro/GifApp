import React, { useState } from 'react';
import PropTypes from 'prop-types';

//este componente es la caja de texto que sirve para agregar una nueva categoria

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue ] = useState('');
    
    const handleInputChange = (e) => {//esto es cuando se presiona cualquier tecla q NO sea enter.
        // console.log(e.target.value);
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {//Esto es cuando se presiona enter en el teclado
        e.preventDefault();
        if( inputValue.trim().length > 2 ){
            //se puede validar q no esten repetidos los valores-react saca un error q el key es igual
            // setCategories(cats => [...cats, inputValue]);//acumula todos
            // setCategories(cats => [ inputValue ]);//saca uno a la vez y borra el resto
            setCategories(cats => [ inputValue, ...cats ]);//saca uno a la vez y borra el resto
            setInputValue('');
            console.log('Submit hecho');
        }
    }

    return (
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    value={ inputValue }
                    onChange={ handleInputChange }  
                />
            </form>
    )
};


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


//inicio modificacion aqui!!!
