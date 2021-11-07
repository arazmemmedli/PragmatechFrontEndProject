import React from 'react'
import shortid from "shortid";
import "..//..//Css/Registration.css"

const boxStyle = {
    backgroundColor: "#e50914"
}

const textStyle = {
    color: "#e50914"
}


function Step2({ onClick, setstate, packages, step }) {
    return (
        <div className="register__slide__two">
            <div className="register__slide__steps">
                <span>STEP </span>
                <strong>2 </strong>
                <span>OF </span>
                <strong>3</strong>
            </div>
            <p className="register__slide__title">
                Choose a plan that's right for you..
            </p>
            <p className="register__slide__desc">
                Downgrade or upgrade at any time
            </p>
            <div className="package__boxes">
                <div className="package__boxes__fill"></div>
                <div className="package__boxes__items">
                    {packages.map((e, i) => <div key={shortid.generate()} style={e.id == step ? boxStyle : null} className="package__boxes__item" onClick={() => setstate(i)}><span>{e.name}</span></div>)}
                </div>
            </div>
            <div className="package__item">
                <div className="package__first__item"><span>Monthly price after free month ends</span></div>
                <div className="package__items">
                    <p className="package__items__basic" style={step == 0 ? textStyle : null}>$7.99</p>
                    <p className="package__items__standart" style={step == 1 ? textStyle : null}>$10.99</p>
                    <p className="package__items__premium" style={step == 2 ? textStyle : null}>$13.99</p>
                </div>
            </div>
            <div className="package__item">
                <div className="package__first__item"><span>HD available</span></div>
                <div className="package__items">
                    <p className="package__items__basic" style={step == 0 ? textStyle : null}>No</p>
                    <p className="package__items__standart" style={step == 1 ? textStyle : null}>Yes</p>
                    <p className="package__items__premium" style={step == 2 ? textStyle : null}>Yes</p>
                </div>
            </div>
            <div className="package__item">
                <div className="package__first__item"><span>Ultra HD available</span></div>
                <div className="package__items">
                    <p className="package__items__basic" style={step == 0 ? textStyle : null}>No</p>
                    <p className="package__items__standart" style={step == 1 ? textStyle : null}>No</p>
                    <p className="package__items__premium" style={step == 2 ? textStyle : null}>Yes</p>
                </div>
            </div>
            <div className="package__item">
                <div className="package__first__item"><span>Screens you can watch on at the same time</span></div>
                <div className="package__items">
                    <p className="package__items__basic" style={step == 0 ? textStyle : null}>1</p>
                    <p className="package__items__standart" style={step == 1 ? textStyle : null}>2</p>
                    <p className="package__items__premium" style={step == 2 ? textStyle : null}>4</p>
                </div>
            </div>
            <div className="package__item">
                <div className="package__first__item"><span>Watch on your laptop, TV, phone and tablet</span></div>
                <div className="package__items">
                    <p className="package__items__basic" style={step == 0 ? textStyle : null}>Yes</p>
                    <p className="package__items__standart" style={step == 1 ? textStyle : null}>Yes</p>
                    <p className="package__items__premium" style={step == 2 ? textStyle : null}>Yes</p>
                </div>
            </div>
            <div className="package__item">
                <div className="package__first__item"><span>Unlimited movies and TV shoes</span></div>
                <div className="package__items">
                    <p className="package__items__basic" style={step == 0 ? textStyle : null}>Yes</p>
                    <p className="package__items__standart" style={step == 1 ? textStyle : null}>Yes</p>
                    <p className="package__items__premium" style={step == 2 ? textStyle : null}>Yes</p>
                </div>
            </div>
            <div className="package__item">
                <div className="package__first__item"><span>Cancel anytime</span></div>
                <div className="package__items">
                    <p className="package__items__basic" style={step == 0 ? textStyle : null}>Yes</p>
                    <p className="package__items__standart" style={step == 1 ? textStyle : null}>Yes</p>
                    <p className="package__items__premium" style={step == 2 ? textStyle : null}>Yes</p>
                </div>
            </div>
            <div className="package__item">
                <div className="package__first__item"><span>First month free</span></div>
                <div className="package__items">
                    <p className="package__items__basic" style={step == 0 ? textStyle : null}>Yes</p>
                    <p className="package__items__standart" style={step == 1 ? textStyle : null}>Yes</p>
                    <p className="package__items__premium" style={step == 2 ? textStyle : null}>Yes</p>
                </div>
            </div>
            <button className="register__slide__btn register__slide__continue" onClick={onClick}>CONTINUE</button>
        </div>
    )
}

export default Step2;