import React from 'react'
import logoTwo from "../../images/download2.png"
import "./Registration.css"

function Step1({onClick}) {
    return (
        <div className="register__slide">
            <div className="register__slide__img">
                <img src={logoTwo} alt="Register Logo" />
            </div>
            <div className="register__slide__steps">
                <span>STEP </span>
                <strong>1 </strong>
                <span>OF </span>
                <strong>3</strong>
            </div>
            <p className="register__slide__title">
                Choose Your Plan.
            </p>
            <p className="register__slide__desc">
                Choose from any of our three plans,
                <br />
                and you won't be charged until after
                <br />
                your free month ends.
            </p>
            <button onClick = {onClick} className="register__slide__btn">SEE THE PLANS</button>
        </div>
    )
}

export default Step1;