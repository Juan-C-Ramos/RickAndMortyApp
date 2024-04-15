import React from 'react'
import useFetch from '../js/hooks/useFetch.js';
import { useEffect } from 'preact/hooks';
import "./PupulationCard.css"
import PupulationShows from './PupulationShows.jsx';

const PopulationCard = ({id}) => {
    const [searchs, getSearchs, isLoading, hasError] = useFetch();


    useEffect(() => {
        const url = `https://rickandmortyapi.com/api/location/${id}`;
        getSearchs(url);
  }, []);
  console.log(searchs?.residents);
  return (
    <div className='population_card' >
        {
            isLoading ?
            null
            :
            <div className='residents__Result'>
                {
                    searchs?.residents.map((resident) => {
                        return (
                            <div className='resultados'> 
                                <PupulationShows
                                characterPopulation = {resident}
                                ></PupulationShows>
                            
                            </div>
                            
                        )
                    })
                }
            </div>
        }
    </div>
  )
}

export default PopulationCard