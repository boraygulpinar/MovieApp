import axios from 'axios';

const API_URL = "https://localhost:7021/api/"

export const getMovies = async () => {
    const response = await axios.get(API_URL + "Movie");
    return response.data;
}

export const addMovie = async (movie) => {
    const response = await axios.post(API_URL + "Movie", movie);
    return response.data;
}

export const deleteMovie = async (id) => {
    const response = await axios.delete(API_URL + "Movie/" + id);
    return response.data;
}

export const updateMovie = async (id, updatedMovie) => {
    const response = await axios.put(API_URL + "Movie/" + id, updatedMovie);
    return response.data;
}