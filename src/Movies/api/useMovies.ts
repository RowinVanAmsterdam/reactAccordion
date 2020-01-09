import { useState, useEffect } from 'react';
import { PaginatedResponse } from '../types/PaginatedResponse';
import { Film } from '../types/Film';

export const useMovies = () => {
    const [movies, setMovies] = useState<PaginatedResponse<Film>>();

    const fetchMovieData = async () => {
        try {
            const movieDataResponse = await fetch('https://swapi.co/api/films/');
            const movieData = await movieDataResponse.json();
            setMovies(movieData);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchMovieData();
    }, []);

    return movies;
};