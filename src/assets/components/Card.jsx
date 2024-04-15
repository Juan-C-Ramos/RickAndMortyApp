import React from 'react'
import useFetch from '../js/hooks/useFetch';
import { useEffect, useState } from 'preact/hooks';
import "./Card.css"
import PopulationCard from './PopulationCard.jsx';

const CharacterCard = ({searchItem, searchType}) => {
  //console.log(searchItem)

  const [showResidents, setShowResidents] = useState(false)


  const handleShowResidents = () => {
    setShowResidents(!showResidents)
    console.log(showResidents)
  }
  return (
  <>
    {      
      searchType === "character" ?
      <div className='character__card__component'>
        <div className='status'>
          <div className={searchItem?.status + " circle"}></div><span>{searchItem.status}</span>
        </div>
        <figure>
          <img src={searchItem.image} alt="characer img" />
        </figure>
        <div className='info'>
          <h2 className='name'>{searchItem.name}</h2> <br />
          <ul>
            <li><span className='info__tittle'>Species: </span><br />     <span className='info'>{searchItem.species}</span></li>
           <li><span className='info__tittle' >Origin: </span><br />     <span className='info'>{searchItem.origin.name}</span></li>
           <li><span className='info__tittle'>Episodes where appear: </span><br />     <span className='info'>{(searchItem.episode).length}</span></li>
        </ul>

        </div>

      </div>
      

      : searchType === "location" ?
        <div className='location__card__component'>
          <div className='container__name'>
            <button onClick={handleShowResidents} className='name'>{searchItem.name}</button>
          </div>
          <div className='location__results'>
            <ul>
              <li><span>Dimension: <span></span>{searchItem.dimension}</span></li>
              <li><span>Residentes: <span></span> {searchItem.residents.length}</span></li>
              <li><span>Tipo: <span></span>{searchItem.type}</span></li>
            </ul>

          </div>
        </div>

        :
        <ul>
          <li><span>ni character ni location</span></li>
        </ul>
    }
    {
      showResidents?
      <div className='difuminado'>
        <button  onClick={handleShowResidents} className='backButton populationButton'> &lt;&lt;Back</button>
        <PopulationCard
        id = {searchItem.id}>
        </PopulationCard>
      </div>
      :
      <></>
    }

  </>
  )
}

export default CharacterCard
