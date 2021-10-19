import React from 'react'
import './Modal.css'

function Modal({ title, imgSrc, content, category, closeOpen}) {
    const closeModal = () => {
        closeOpen(false)
    }
    return (
        <div className="modal">
            <div className="modal__body">
                <div className="modal__content">
                    <div className="modal__close">
                        <button className="modal__close__btn" onClick = { closeModal }>x</button>
                    </div>
                    <div className="modal__content__img">
                        <img src={imgSrc} alt="Image 1" />
                    </div>
                </div>
                <div className="modal__info">
                    <h3 className="modal__info__title">{title}</h3>
                    <p className="modal__info__summary">{content}</p>
                    <span className="category__name"><a href="#">{category}</a></span>
                </div>
            </div>
        </div>
    )
}

export default Modal;