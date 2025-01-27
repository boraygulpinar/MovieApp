import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMovies, deleteMovie, updateMovie } from '../services/MovieAPI';
import '../assets/css/ManageMovie.css';

function ManageMovie() {
    const [movies, setMovies] = useState([]);
    const [selectedMovieId, setSelectedMovieId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');
    const [imageURL, setImageURL] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getMovies();
            setMovies(data);
        };
        fetchMovies();
    }, []);

    const handleMovieSelect = (e) => {
        const movieId = e.target.value;
        setSelectedMovieId(movieId);
        const selectedMovie = movies.find(movie => movie.id === parseInt(movieId));
        if (selectedMovie) {
            setTitle(selectedMovie.title);
            setDescription(selectedMovie.description);
            setGenre(selectedMovie.genre);
            setRating(selectedMovie.rating);
            setImageURL(selectedMovie.imageURL);
        }
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await deleteMovie(selectedMovieId);
            alert('Movie successfully deleted!');

            setSelectedMovieId('');
            setTitle('');
            setDescription('');
            setGenre('');
            setImageURL('');
            setRating('');

            // Ana sayfaya yönlendir
            navigate('/');
        } catch (error) {
            console.error('An error occurred while deleting the movie.', error);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedMovie = { id: selectedMovieId, title, description, genre, rating: parseFloat(rating), imageURL };
        try {
            await updateMovie(selectedMovieId, updatedMovie);
            alert('Movie updated successfully!');

            setSelectedMovieId('');
            setTitle('');
            setDescription('');
            setGenre('');
            setImageURL('');
            setRating('');

            // Ana sayfaya yönlendir
            navigate('/');
        } catch (error) {
            console.error('An error occurred while updating the movie.', error);
        }
    };

    return (
        <div className="manage-movie-container">
            <h1>Manage Movie</h1>
            <div className="form-group">
                <label htmlFor="movieSelect">Select Movie:</label>
                <select id="movieSelect" value={selectedMovieId} onChange={handleMovieSelect} required>
                    <option value="">Select Movie</option>
                    {movies.map(movie => (
                        <option key={movie.id} value={movie.id}>
                            {movie.title}
                        </option>
                    ))}
                </select>
            </div>

            {selectedMovieId && (
                <form onSubmit={handleUpdate}>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="genre">Genre:</label>
                        <input
                            type="text"
                            id="genre"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="rating">Rating:</label>
                        <input
                            type="number"
                            id="rating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            step="0.1"
                            max="10"
                            min="0"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="imageURL">Image URL:</label>
                        <input
                            type="text"
                            id="imageURL"
                            value={imageURL}
                            onChange={(e) => setImageURL(e.target.value)}
                        />
                    </div>

                    <div className="button-group">
                        <button type="submit" className="update-button">
                            Update Movie
                        </button>
                        <button type="button" className="delete-button" onClick={handleDelete}>
                            Delete Movie
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default ManageMovie;