import React from 'react';
import { Route, useParams, Link, Switch } from 'react-router-dom';
import { GetMovies } from './api/GetMovies';

const GetParams = () => {
    let { id } = useParams();
    return <p>{id}</p>;
};

export const Movies =  () => {
    // const data = await GetMovies;
    let { id } = useParams();

    return (
        <div>
            <GetMovies />
            <h1>Movies</h1>
            <h2>Selected movie: {id}</h2>
            <h2>Select a movie:</h2>
            <ul>
                <li>
                    <Link to="/movies/1">Movie 1 </Link>
                </li>
                <li>
                    <Link to="/movies/2">Movie 2 </Link>
                </li>
                <li>
                    <Link to="/movies/3">Movie 3 </Link>
                </li>
            </ul>
            <Switch>
                <Route path="/movies/:id" component={GetParams} />
            </Switch>
        </div>
    );
};
