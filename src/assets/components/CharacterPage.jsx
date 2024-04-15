import { useEffect, useState } from 'preact/hooks';
import useFetch from '../js/hooks/useFetch';
import React from 'react'
import Card from "./Card.jsx"
import "./CharacterPage.css"

const CharacterPage = () => {
    const [searchs, getSearchs, isLoading, hasError] = useFetch();
    const [busqueda, setBusqueda] = useState("")
    const [nextPage, setNextPage] = useState("")
    const [searchsButton, getSearchsButton, isL, hasErr] = useFetch();

    useEffect(() => {
        const url = `https://rickandmortyapi.com/api/character/?page=2`;
        getSearchsButton(url);
  }, []);

    useEffect(() => {
            const url = `https://rickandmortyapi.com/api/character/?name=${busqueda}`;
            getSearchs(url);
            setNextPage(searchs?.info.next)    
      }, [busqueda]);

      
        const handleSubmit = (event) => {
            event.preventDefault()
            const busquedas = document.getElementById("busqueda__input")
            setBusqueda(busquedas.value)
        }
  return (
    <>
    <div className='character__page'>
       
    <div className='header'>
        <div className='tittle'>
            <h1>Characters of Rick and Morty</h1>
        </div>
    </div>

        <div className='busqueda'>
            <form action="" method="get">
                <input type="search" name="" id="busqueda__input" list='opciones' placeholder='Search here'/>
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

        <div className='resultados'>
            {
                hasError ?
                <h2 className='error__busqueda'>Character not found</h2>
                : 
                searchs?.results.map((search) => 
                (
                    <Card 
                    key={search.id}
                    searchItem={search}
                    searchType="character"
                    
                    ></Card>
                )
                )}

        </div>
         
    </div>
  </>
  )
}

export default CharacterPage
