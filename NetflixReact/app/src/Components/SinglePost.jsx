import React from 'react'
import { useContext, useEffect, useState } from 'react';
import { MoviesContext } from '../Context';
import { useParams } from "react-router-dom";
import "../Css/SinglePost.css"

function SinglePost() {
    const data = useContext(MoviesContext)
    const [movie, setMovie] = useState(null)
    let { name } = useParams();

    useEffect(() => {
        const res = () => {
            for(let i = 0; i < data.length; i++){
                const obj = data[i].movies.find(w=>w.moviesTitle.replace(/[^A-Z0-9]/ig, "") == name)
                if(obj) return obj;
            }

            return null
        }
        
        setMovie(res()) 
    },[])

    return (
        <div className="movie-detail">
            <div className="movie-detail__img">
                <img src={movie?.moviePoster} alt="Poster" />
            </div>
            <div className="movie__subdetail">
                <h1 className="movie-detail__title">{movie?.moviesTitle}</h1>
                <p className="movie__rating"><strong>Rating:</strong> {movie?.movieRating}</p>
                <p className="movie__start"><strong>Stars:</strong> {movie?.movieStars}</p>
                <p className="movie__genre"><strong>genre:</strong> {movie?.movieGenre}</p>
                <p className="movie__overview"><strong>Overview:</strong> {movie?.movieOverview}</p>
            </div>
        </div>
    )
}

export default SinglePost;