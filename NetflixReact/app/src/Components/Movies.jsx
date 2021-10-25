import React from 'react';
import { useState, useContext } from 'react';
import shortid from "shortid";
import Trending from './Trending';
import "../Css/Movies.css"
import { MoviesContext } from '../Context';

function Movies() {
    const infos = useContext(MoviesContext);
    const [movies, setMovies] = useState(infos);  

    return (
        <div className="movie__wrapper">
            <div className="movie__sections">
                {
                    movies.map((obj) => {
                        return <Trending key={shortid.generate()} categoryname={obj.name} movies={obj.movies} />;
                    })
                }
            </div>
        </div>
    )
}

export default Movies;