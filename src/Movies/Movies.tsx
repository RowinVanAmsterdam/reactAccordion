import React from 'react';
import { Link } from 'react-router-dom';
import { useMovies } from './api/useMovies';
// import { MovieDetail } from './MovieDetail';

export const Movies = () => {
    const movies = useMovies();

    return (
        <div>
            <h1>Movies</h1>
            <h2>Select a movie:</h2>
            {movies &&
                (
                    <ul>
                        {movies.results.map((movie, index) => {
                            return (
                                <li key={index}>
                                    <Link to={{ pathname: `/movies/${movie.title}`, state: movie }}>{movie.title}</Link>
                                    {/* <Link to={`/movies/${movie.title}`} {...movie}>{movie.title}</Link> */}
                                </li>
                            );
                        })
                        }
                    </ul>
                )
            }
        </div>
    );
};
