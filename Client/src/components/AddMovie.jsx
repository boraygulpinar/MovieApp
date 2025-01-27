import React, { useState } from 'react'
import { addMovie } from '../services/MovieAPI'
import '../assets/css/AddMovie.css'
import { useNavigate } from 'react-router-dom';

function AddMovie() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [genre, setGenre] = useState('')
    const [rating, setRating] = useState('')
    const [imageURL, setImageURL] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newMovie = { title, description, genre, rating, imageURL };
        try {
            await addMovie(newMovie);
            alert('Movie Added');
            // Form temizleme
            setTitle('');
            setDescription('');
            setGenre('');
            setRating('');
            setImageURL('');
            //Ana sayfaya yönlendirilebilir
            navigate("/");
        } catch (error) {
            console.error('An error occurred while adding the movie.', error);
        }
    }

    return (
        <div className='add-movie-container'>
            <h2>Add Movie</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Name</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Genre</label>
                    <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Rating</label>
                    <input type="number" step="0.1" min="0" max="10" value={rating} onChange={(e) => setRating(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>ImageURL</label>
                    <input type="url" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
                </div>
                <button className="submit-button" type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddMovie