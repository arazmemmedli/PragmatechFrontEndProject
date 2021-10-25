import React from 'react'
import { useRef } from 'react';
import "..//..//Css/Registration.css"


function Step3({ onClick, setFirstName }) {

    const firstName = useRef(null);
    const lastName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const formSubmit = (event) => {
        event.preventDefault();
        const error = []
        const data = {
            firstName: firstName.current.value,
            lastname: lastName.current.value,
            email: email.current.value,
            password: password.current.value
        }


        if (data.firstName.length < 3) {
            error.push("First Name must be at least 3 characters")
        } else if (data.lastname.length < 3) {
            error.push("Last Name must be at least 3 characters")
        } else if (data.password.length < 6) {
            error.push("Password must be at least 6 characters")
        }
        if (error.length !== 0)
            alert(error);
        else {
            onClick()
            window.localStorage.setItem("data", JSON.stringify(data))
            setFirstName(data.firstName)
        }

    }



    return (
        <div className="register__slide__three">
            <div className="register__slide__steps">
                <span>STEP </span>
                <strong>3 </strong>
                <span>OF </span>
                <strong>3</strong>
            </div>
            <p className="register__slide__title">
                Choose a plan that's right for you..
            </p>
            <p className="register__slide__desc register__slide__three__desc">
                Downgrade or upgrade at any time
            </p>

            <form action="" onSubmit={formSubmit}>
                <div className="register__form__group">
                    <input ref={firstName} type="text" name="firstname" id="firstname" className="register__form__control" placeholder="First Name" />
                </div>
                <div className="register__form__group">
                    <input ref={lastName} type="text" name="lastname" id="lastname" className="register__form__control" placeholder="Last Name" />
                </div>
                <div className="register__form__group">
                    <input ref={email} type="email" name="email" id="email" className="register__form__control" placeholder="Email" />
                </div>
                <div className="register__form__group">
                    <input ref={password} type="password" name="password" id="password" className="register__form__control" placeholder="Password" />
                </div>
                <button type="submit" className="register__slide__btn register__slide__continue">CONFIRM</button>
            </form>
        </div>
    )
}

export default Step3;