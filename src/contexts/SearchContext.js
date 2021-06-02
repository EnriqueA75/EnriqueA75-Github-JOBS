import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

export const SearchContext = createContext()

const SearchProvider = (props) => {

    //state de la busqueda
    const [lenguaje, setLenguaje] = useState('')
    const [jobsList, setJobsList] = useState([])

    //llamado al API
    useEffect(() =>{
        
        const obtenerTrabajos = async () =>{
            //evita ejecución al iniciar la app
            if(lenguaje === '') return

            //llamado al api con axios
            const gitURL = `https://jobs.github.com/positions.json?description=${lenguaje}`
            const url = `https://api.allorigins.win/get?url=${ encodeURIComponent(gitURL)}`
            const jobs = await axios.get(url)
            setJobsList(JSON.parse(jobs.data.contents))
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