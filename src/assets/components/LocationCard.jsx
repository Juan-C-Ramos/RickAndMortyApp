import React from 'react'

const LocationCard = ({location}) => {
  return (
    <div>
      <h2>{location.name}</h2>
      <p>{location.type}</p>
      <p>{location.dimension}</p>
    </div>
  )
}

export default LocationCard
