import React from 'react'
import "./Registration.css"

function Step4({packagename,firstName}) {
    return (
        <div className="register__slide__four">
            <p className="register__slide__title">
                Congratulations, <span className="register__slide__title__red" style={{color:"red"}}>{firstName}</span>! <br /> You've registered for the <span className="register__slide__title__red" style={{color:"red"}}>{packagename}</span> plan, <br /> but don't worry, we wont charge you until your trials up.
            </p>
            <a href="/" className="register__slide__btn register__slide__continue">START BROWSING</a>
        </div>
    )
}

export default Step4; 