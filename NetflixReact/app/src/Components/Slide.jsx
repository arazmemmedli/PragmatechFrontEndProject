import React from 'react';
import { Link } from "react-router-dom";
import "./Movies.css";

const Slide = ({ style,srcImg, moviesTitle, green, moviesRate, moviesDuration }) => {
    const newTitle = moviesTitle.replace(/[^A-Z0-9]/ig, "");
    return (
        <Link to={{ pathname: `/movies-shows/${newTitle}`}} className="movie__slider__slide" style={style} >
            <div className="movie__slider__slide__overlay"></div>
            <div className="movie__slider__slide__img">
                <img src={srcImg} alt={moviesTitle} />
            </div>
            <div className="movie__slider__slide__details">
                <h3 className="movie__slider__slide__title">{moviesTitle}</h3>
                <div className="movie__slider__slide__subinfo">
                    <p className="movie__green">{green}</p>
                    <p className="movie__rate">{moviesRate}</p>
                    <p className="movie__duration">{moviesDuration}</p>
                </div>
            </div>
        </Link>
    )
}

export default Slide;