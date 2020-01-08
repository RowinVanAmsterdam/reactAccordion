import React, { useState, useEffect } from 'react';

export const GetMovies = () => {
    const [movies, setMovies] = useState();

    const fetchMovieData = async () => {
        try {
            const movieDataResponse = await fetch('https://swapi.co/api/films/');
            const movieData = await movieDataResponse.json();
            // return movieData;
            setMovies(movieData);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchMovieData();
    });

    // return movies;
    console.log(movies);
    return (
        <div>
            <p>{JSON.stringify(movies)}</p>
        </div>
    );
};