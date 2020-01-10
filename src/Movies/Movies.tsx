import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { useMovies } from './api/useMovies';
import { MovieDetail } from './MovieDetail';

export const Movies = () => {
    const movies = useMovies();

    return (
        <div>
            <h1>Movies</h1>
            <h2>Select a movie:</h2>
            {movies &&
                (
                    <ul>
                        {console.log(movies)}
                        {movies.results.map((movie, index) => {
                            return (
                                <li key={index}>
                                    <Link to={`/movie/${index + 1}`}>{movie.title}</Link>
                                </li>
                            );
                        })
                        }
                    </ul>
                )
            }
            <Switch>
                <Route path="/movie/:id" component={MovieDetail} {...movies}/>
            </Switch>
        </div>
    );
};
