import React, { useEffect, useState } from 'react'
import imdbLogo from '../assets/images/imdbLogo.png'
import '../assets/css/MovieList.css'
import { getMovies } from '../services/MovieAPI'

function MovieList() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getMovies();
            setMovies(data);
            console.log(data)
        }
        fetchMovies();
    }, [])

    return (
        <div className='movie-list-container'>
            <div className='movies'>
                {movies.map(movie => (
                    <div key={movie.id} className='movie'>
                        <h3>{movie.title}</h3>
                        <img src={movie.imageURL} />
                        <div className="description">
                            <p>{movie.description}</p>
                        </div>
                        <p className='genre'>{movie.genre}</p>
                        <p className="rating">
                            <img src={imdbLogo} />
                            {movie.rating}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieList