import React from 'react';
import { useState } from 'react';
import shortid from "shortid";
import Slide from './Slide';
import "../Css/Movies.css";

const css = {
    width:"280px"
}

function Trending({categoryname, movies}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);

    const prevSlider = () => {
        if (currentIndex === 0) {
            return;
        } else {
            setCurrentIndex(currentIndex - 1);
            setTranslateValue(translateValue - -(parseInt(css.width)))
        }

    }

    const nextSlider = () => {
        if (currentIndex === movies.length - 1) {
            setCurrentIndex(0);
            setTranslateValue(0);
        } else {
            setCurrentIndex(currentIndex + 1);
            setTranslateValue(translateValue + -(parseInt(css.width)));
        }

    }

    return (
        <div className="movie__section">
            <div className="movie__slider__controls">
                <span className="movie__slider__prev__control" onClick={prevSlider} >
                    <i className="fas fa-angle-left"></i>
                </span>
                <span className="movie__slider__next__control" onClick={nextSlider} >
                    <i className="fas fa-angle-right"></i>
                </span>
            </div>
            <div className="movie__header">
                <h3 className="movie__title">{categoryname}</h3>
            </div>
            <div className="movie__slider">
                <div className="movie__slider__wrapper" style={{
                    transform: `translateX(${translateValue}px)`,
                    transition: 'transform ease-out 0.45s'
                }}>
                    {
                        movies.map((item) => {
                            return (
                                <Slide key={shortid.generate()} style={css} {...item} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Trending;