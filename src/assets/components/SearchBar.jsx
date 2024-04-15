import React from 'react'

const SearchBar = ({searchItems}) => {
    console.log(searchItems)
    const handleSubmit = (event) => {
        event.preventDefault()
    }
  return (
    
    <div>
        <form action="" method="get">
            <input type="search" name="" id="" list='opciones' placeholder='Who want to search?'/>
            <button onClick={handleSubmit} type="submit">Buscar</button>
            <datalist id='opciones'> 
                {
                    searchItems.map(item => (
                        <option key={item.id} value={item.name}/>
                    ))
                }

            </datalist>
        </form>
        <br /><br /><br />

    </div>
  )
}

export default SearchBar
