import React, { useEffect, useState } from 'react';
import imdbLogo from '../assets/images/imdbLogo.png';
import '../assets/css/MovieList.css';
import { getMovies } from '../services/MovieAPI';

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getMovies();
            setMovies(data);
        };
        fetchMovies();
    }, []);

    const filteredMovies = movies.filter(
        (movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase()) &&
            (selectedGenre === '' ||
                movie.genre.toLowerCase().includes(selectedGenre.toLowerCase()))
    );

    return (
        <div className="movie-list-container">
            <input
                type="text"
                placeholder="Search for a movie..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
                <option value="">All genres</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Comedy">Comedy</option>
                <option value="Crime">Crime</option>
                <option value="Drama">Drama</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Mystery">Mystery</option>
                <option value="Romance">Romance</option>
                <option value="Thriller">Thriller</option>
            </select>
            <div className="movies">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map((movie) => (
                        <div key={movie.id} className="movie">
                            <div className='movie-title'>
                                <h3>{movie.title}</h3>
                            </div>
                            <div className='movie-image'>
                                <img src={movie.imageURL} alt={movie.title} />
                            </div>
                            <div className="movie-description">
                                <p>{movie.description}</p>
                            </div>
                            <div className='movie-genre'>
                                <p className="genre">{movie.genre}</p>
                            </div>
                            <div className='movie-rating'>
                                <p className="rating">
                                    <img src={imdbLogo} alt="IMDb logo" />
                                    {movie.rating}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-results">No movies found. Try a different filter!</p>
                )}
            </div>
        </div>
    );
}

export default MovieList;
