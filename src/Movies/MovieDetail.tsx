import React from 'react';
// import { PaginatedResponse } from './types/PaginatedResponse';

export const MovieDetail = (props: any) => {
    console.log(props);
    console.log(props.location.state);
    const movie = props.location.state;

    return (
        <>
            <h1>Movie: {movie.title}</h1>
            <p>Director: {movie.director}</p>
            <p>Producer: {movie.producer}</p>
        </>
    );
};
