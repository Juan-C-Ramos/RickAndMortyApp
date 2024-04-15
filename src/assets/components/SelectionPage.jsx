import React from 'react'
import "./SelectionPage.css"
import CharacterPage from './CharacterPage'
import UbicationPage from './UbicationPage'
import { useEffect, useState } from 'preact/hooks'

const SelectionPage = () => {
    const [option, setOption] = useState("0")

    const handleOptionChangeNombre = () => {
        const options = document.getElementById("options__nombre")
        console.log(options.value)
        setOption(options.value)
        console.log(option)
    }
    const handleOptionChangeUbicacion = () => {
        const options = document.getElementById("options__ubicacion")
        console.log(options.value)
        setOption(options.value)
        console.log(option)
    }
    const handleBackButton = () => {
        setOption("0")
    }

  
    
  return (
    <div>
        {
            option === "1"?
            <div>
                <button onClick={handleBackButton} className='backButton'>&lt;&lt;Back</button>
                <CharacterPage></CharacterPage>
            </div>

            : option === "2"?
            <div>
                <button onClick={handleBackButton} className='backButton'>&lt;&lt;Back</button>
            <UbicationPage></UbicationPage>
            </div>
            :
                <div className="selection__page">
                    <button className='busqueda__nombre' onClick={handleOptionChangeNombre} id='options__nombre' type='summit' value={"1"}>Busqueda por nombre de personaje</button>
                    <button className='busqueda__ubicacion' onClick={handleOptionChangeUbicacion} id='options__ubicacion' type='summit' value={"2"}>Busqueda por ubicacion</button>
                </div>

        }

    </div>
  )
}

export default SelectionPage
