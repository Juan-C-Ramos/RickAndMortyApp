import { useEffect, useState } from 'preact/hooks';
import React from 'react'
import useFetch from '../js/hooks/useFetch';
import Card from "./Card.jsx"

const UbicationPage = () => {
    const [searchs, getSearchs, isLoading, hasError] = useFetch();
    const [busqueda, setBusqueda] = useState("")
    const [nextPage, setNextPage] = useState("")
    const [searchsButton, getSearchsButton, isL, hasErr] = useFetch();
    

    useEffect(() => {
        const url = `https://rickandmortyapi.com/api/location/`;
        getSearchsButton(url); 
  }, []);

    useEffect(() => {
            const url = `https://rickandmortyapi.com/api/location/?name=${busqueda}`;
            getSearchs(url);
            setNextPage(searchs?.info.next)    
      }, [busqueda]);

      
        const handleSubmit = (event) => {
            event.preventDefault()
            const busquedas = document.getElementById("busqueda__input")
            setBusqueda(busquedas.value)
            console.log(busqueda)
        }
  return (
    <>
    <div className='ubication__page'>
        <div className='header'>
        <div className='tittle'>
            <h1>Ubication of Rick and Morty</h1>
        </div>
    </div>

        <div className='busqueda'>
            <form action="" method="get">
                <input type="search" name="" id="busqueda__input" list='opciones' placeholder='Who want to search?'/>
                <button onClick={handleSubmit} type="submit">Search</button>
                <datalist id='opciones'> 
                    {
                        searchsButton?.results.map(item => (
                            <option key={item.id} value={item.name}/>
                        ))
                    }
                </datalist>
            </form>
        </div>

        <br /><br /><br />
        </div>
        <div className='resultados'>
        {
                hasError ?
                <h2 className='error__busqueda'>Location not found</h2>
                : 
                searchs?.results.map((search) => 
                (
                    <Card 
                    key={search.id}
                    searchItem={search}
                    searchType="location"
                    
                    ></Card>
                )
                )}
         
    </div>
  </>
  )
}

export default UbicationPage