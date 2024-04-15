import React from 'react'
import { useEffect, useState } from 'preact/hooks';
import useFetch from '../js/hooks/useFetch';
import Card from "./Card.jsx"

const PupulationShows = ({characterPopulation}) => {
    const [searchs, getSearchs, isLoading, hasError] = useFetch();
    useEffect(() => {
        const url = characterPopulation;
        getSearchs(url);
  }, []);
  console.log(searchs)
  return (
    <div className='Ptodiv'>
            {
                searchs?            
                    <Card
                    searchItem={searchs}
                    searchType="character"
                    ></Card>
                    : null
            
            }

    </div>
  )
}

export default PupulationShows
