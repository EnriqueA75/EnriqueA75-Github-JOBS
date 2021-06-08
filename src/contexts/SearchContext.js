import React, { createContext, useState, useEffect } from 'react';
import { data } from '../../data'

export const SearchContext = createContext()

const SearchProvider = (props) => {

    //state de la busqueda
    const [lenguaje, setLenguaje] = useState('')
    const [jobsList, setJobsList] = useState(data)

    //llamado al API
    useEffect(() =>{
        const obtenerTrabajos = () =>{
            // let resultado = jobsList.filter( function(element) {
            //     return element.title == 'Developer'
            // })
            let resultado = data.filter((element) => element.title == 'Developer') //console.log(element)) //
            console.log(resultado)
        }
        obtenerTrabajos()
    }, [lenguaje])

    return ( 
        <SearchContext.Provider
            value={{
                lenguaje,
                setLenguaje,
                jobsList
            }}
        >
            {props.children}
        </SearchContext.Provider>
     );
}

export default SearchProvider;