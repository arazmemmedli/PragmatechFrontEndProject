import {useState} from 'react'
import Modal from './Modal';
import './News.css'

function Card({ onClick, imgSrc, title, content, category }) {

    return (
        <div className="content">
            <div className="content__img">
                <img src={imgSrc} alt="Image" />
            </div>
            <div className="content__header">
                <h3 className="content__title" onClick = { onClick }>
                    <a href="#">{title}</a>
                </h3>
            </div>
            <div className="content__desc">
                <p className="content__summary">
                    {content}
                </p>

            </div>
            <span className="category__name">
                <a href="#">{category}</a>
            </span>
        </div>
    )
}

export default Card;