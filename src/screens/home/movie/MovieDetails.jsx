import { lazy, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { MOVIES } from '../movies.data'

const LazyMovieComments = lazy(() =>
     import('./MovieComments').then(c => ({
    default: c.MovieComments
}))
)

export function MovieDetails() {
    const { id } = useParams()

    const movie = useMemo(() => {
        return MOVIES.find(movie => movie.trailerYoutubeId === id)
    }, [id])

    if (!movie) {
        return <p className='text-center mt-10 text-gray-400'>Movie not found 😢</p>
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row gap-10 items-start">
                <img
                    src={movie.image}
                    alt={movie.name}
                    className='w-3/2 md:w-1/3 rounded-xl 
                    shadow-lg object-cover'
                />
                <div className="flex-1" space-y-4>
                    <h1 className='text-4xl font-bold'>{movie.name}</h1>
                    <p className='text-sm text-gray-400'>IMDb: {movie.rating}</p>

                    <p className='text-gray-300 text-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <Suspense fallback={<div>Loading...</div>}>
                          <LazyMovieComments />
                    </Suspense>
                  
                </div>
            </div>
        </div>
    )
}
