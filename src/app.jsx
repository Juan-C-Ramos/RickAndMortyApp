import { useEffect, useState } from 'preact/hooks'
import './app.css'
import useFetch from './assets/js/hooks/useFetch'
import SelectionPage from './assets/components/SelectionPage.jsx'

export function App() {  
  //Declaracion de estados
  const [searchValue, setSearchValue] = useState("location")
  const [busqueda, setBusqueda] = useState("character")
  const [page, setPage] = useState("")
  const [id, setId] = useState("")
  const [searchs, getSearchs, isLoading, hasError] = useFetch();

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/${searchValue}/${page}${id}`;
    getSearchs(url);
  }, [searchValue]);

  console.log(searchs);

  return (
    <>
      <div className='app'>
        
        {
          //Pantalla de carga
          isLoading ?
            <div>
              loading....
            </div>

          //pantalla de Error
          : hasError ?
            <div>
              Error
            </div>
          
          //Pantalla de resultados
          :
          <SelectionPage></SelectionPage>
                  
        }
      </div>
    </>
  )
}
