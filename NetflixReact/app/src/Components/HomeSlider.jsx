import React, { Component } from 'react';
import shortid from "shortid";
import "../Css/Slider.css"

const style = {
    width:"1200px"
}

class HomeSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    titleOne: "Interstellar", titleTwo: "96% Match 2014 PG-13",
                    overviewOne: "With Humanity Teetering on the bring of extinction, a group of astronauts travels through a wormhole in search of another inhabitable planet.",
                    overviewTwo: "Starring: Mathew McConaughey, Anne Hathaway, Jessica Chastain",
                    overviewThree: "Genre: Sci-fi, Fantasy, Mystery",
                    imgSrc: "https://kevinallen4325.github.io/netflix-react/static/media/intertellar.5fc9d0d2.jpg"
                },
                {
                    titleOne: "Step Brothers", titleTwo: "92% Match 2008 R",
                    overviewOne: "Brennan and Dale might be grown men, but that doesn't stop a childish sibling rivalry from erupting after Brennan's mom marries Dale's dad.",
                    overviewTwo: "Starring: Will Ferrell, John C. Reilly, Mary Steenburgen",
                    overviewThree: "Genre: Comedy, Late Night Comedies, Slapstick Comedy",
                    imgSrc: "https://kevinallen4325.github.io/netflix-react/static/media/stepbrothers.d6301d7a.jpg"
                },
                {
                    titleOne: "Stargate Universe", titleTwo: "99% Match 2009-2011 2 Seasons",
                    overviewOne: "Trapped on an Ancient spaceship billions of light-years from home, a group of soldiers and civilians struggle to survive and find their way back to Earth.",
                    overviewTwo: "Starring: Robert Carlyle, Louis Ferreira Reilly, Brian J. Smith",
                    overviewThree: "Genre: Sci-fi, Fantasy, Drama",
                    imgSrc: "https://kevinallen4325.github.io/netflix-react/static/media/stargate.6af5cff1.jpg"
                },
            ],
            currentIndex: 0,
            translateValue: 0
        }
    }

    sliderPrev = () => {
        if (this.state.currentIndex === 0)
            return;

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + parseFloat(style.width)
        }))
    }

    sliderNext = () => {
        if (this.state.currentIndex === this.state.items.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(parseFloat(style.width))
        }));
    }

    render() {
        const { items } = this.state;
        return (
            <div className="main">
                <div className="main__container">
                    <div className="carousel">
                        <div className="carousel__slider" style={{
                            transform: `translateX(${this.state.translateValue}px)`,
                            transition: 'transform ease-out 0.45s'
                        }}>
                            {
                                items.map((item) => {
                                    return (
                                        <Slide key={shortid.generate()} {...item} />
                                    )
                                })
                            }
                        </div>
                        <button className="carousel__control carousel__control__prev" onClick={this.sliderPrev}>
                            <span className="carousel__control__icon">
                                <i className="fas fa-caret-left"></i>
                            </span>
                        </button>
                        <button className="carousel__control carousel__control__next" onClick={this.sliderNext}>
                            <span className="carousel__control__icon">
                                <i className="fas fa-caret-right"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


const Slide = ({ titleOne, titleTwo, overviewOne, overviewTwo, overviewThree, imgSrc }) => {
    return (
        <div className="carousel__slide" style={style}>
            <div className="carousel__slide__content">
                <div className="carousel__slide__content__item">
                    <div className="carousel__slide__info">
                        <h2 className="carousel__slide__info__title carousel__slide__info__one__title">{titleOne}</h2>
                        <h3 className="carousel__slide__info__title">{titleTwo}</h3>
                        <p className="carousel__slide__info__summary">
                            {overviewOne}
                        </p>
                        <div className="carousel__slide__updown">
                            <i className="far fa-thumbs-up"></i>
                            <i className="far fa-thumbs-down"></i>
                        </div>
                        <p className="carousel__slide__info__summary">{overviewTwo}</p>
                        <p className="carousel__slide__info__summary carousel__slide__info__last__summary">{overviewThree}</p>
                    </div>
                </div>
                <div className="carousel__slide__img" style={{ backgroundImage: `url(${imgSrc})` }}></div>
            </div>
        </div>
    )
}

export default HomeSlider;