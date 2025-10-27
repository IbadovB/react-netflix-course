import "../../App.css";
import { useState, useMemo, useCallback } from 'react'
import { useDebounce } from "../../hooks/useDebounce";
import  MovieCard from './MovieCard'
import { MOVIES } from "./movies.data";
import { useTheme } from "../../hooks/useTheme";



function App() {
  const { theme, toggleTheme } = useTheme()

  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)

  const movies = useMemo(() => {
    return MOVIES.filter(movie =>
    movie.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  )
}, [debouncedSearch])

  return (
    <div>    
   
      <header className='mb-10 flex items-center justify-between' >
        <img
          src="/netflix-logo.png"
          alt="Netflix"
          className='h-40 w-auto'          
        />

        <div className="flex gap-2">
          <input
            type="search"
            value={searchTerm}
            onChange={e => {setSearchTerm(e.target.value)

            }}
            placeholder="Search ..."
            className='border border-black/15 dark:border-white/15 px-2 py-4 rounded outline-0 h-9'
          />

          <button
            onClick={toggleTheme}
            className=' searchButton text-sm  flex justify-center items-center bg-red
            rounded border border-white/20
            dark:border-white/10 body-black
           hover:bg-white hover:text-black 
           dark:hover:bg-white/10 transition w-30 h-9'>
            {theme === 'dark'?'☀️ Light':'🌙 Dark'}
          </button>
        </div>
      </header>

      <main className='flex justify-center align-center gap-20'>
        {movies.length ? (
          movies.map(movie => (
            <MovieCard 
              key={movie.name}
              image={movie.image}
              rating={movie.rating}
              traillerYoutubeId={movie.trailerYoutubeId}
            />
          ))
        ) : (
          <p>Movies not found!</p>
        )}
      </main>
    </div>
  )
}

export default App
