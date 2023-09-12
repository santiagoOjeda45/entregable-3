import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNum from './utils/getRandomNum'
import LocationInfo from './components/LocationInfo'
import ResidentsInfo from './components/ResidentsInfo'
137126
function App() {

  const [inputValue, setInputValue] = useState(getRandomNum(126))

  const url = `https://rickandmortyapi.com/api/location/${inputValue || 'hola' }`

  const [locations, getLocations, hasError] = useFetch(url)

  useEffect(() => {
    getLocations()
  }, [inputValue])

  const inputSearch = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim())
  }

  return (
    <div className='app'>
      <header className='header'>
        <div className="content">
          <h1 className='main-title'>Rick and Morty App</h1>
        </div>
      </header>
        <form className='search-bar' onSubmit={handleSubmit}>
          <input className='search-input' ref={inputSearch} type="text" />
          <button className='button'>Search</button>
        </form>
      <div className='main-container'>
        {
          hasError
            ? <h2>😬 Uh oh! You must provde an id from 1 up to 126</h2>
            : (
              <>
                <div className='locations-container'>
                  <LocationInfo locations={locations}/>
                </div>
                <div className='residents-container'>
                  {
                    locations?.residents.map(url => (
                      <ResidentsInfo 
                        key={url}
                        url={url}
                      />
                    ))
                  }
                </div>
              </>
            )
        }
      </div>
    </div>
  )
}

export default App
