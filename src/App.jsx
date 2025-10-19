// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import { useDebounce } from './hooks/useDebounce'
import { MovieCard } from './MovieCard'
import { MOVIES } from './movies.data'


function App() {
  const { theme, toggleTheme } = useTheme()

  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)
  const movies = MOVIES.filter(movie =>
    movie.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  )

  return (
    <div className='min-h-screen 
    w-full bg-white dark:bg-black text-black dark:text-white px-6 py-5'>
      <header className='mb-10 flex items-center justify-between'>
        <img
          src="/netflix-logo.png"
          alt="Netflix"
          className='h-8 w-auto'
        />

        <div>
          <input
            type="search"
            value={searchTerm}
            onChange={e => {
              setSearchTerm(e.target.value)
            }}
            placeholder="Search ..."
            className='border border-black/15 dark:border-white/15 px-2 py-1 rounded outline-0'
          />

          <button
            onClick={toggleTheme}
            className='text-sm px-3 py-1 rounded border border-white/20
          dark:border-white/10 hover:bg-white hover:text-black dark:hover:bg-white/10 transition w-20'>
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </header>

      <main className='flex gap-6'>

        {movies.length ? (
          movies.map(movie => (
            <MovieCard
              key={movie.name}
              image={movie.image}
              rating={movie.rating}
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
