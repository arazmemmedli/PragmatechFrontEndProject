import React from 'react'
import { useEffect, useState, useCallback } from 'react'
import logo from "../images/download.png"
import "../Css/Header.css"
import { Link } from "react-router-dom"

function Header() {
    const [local, setLocal] = useState(null)

    const LogOut = useCallback(() => {
        if (local !== null) {
            return <span onClick={removeLocal} className="logout">Log Out</span>
        }
    }, [local])

    const removeLocal = useCallback(() => {
        window.localStorage.removeItem("data");
    },[])

    useEffect(() => {
        const locals = JSON.parse(localStorage.getItem("data"));
        setLocal(locals)
    }, [local])

    return (
        <div className="header">
            <div className="header__container">
                <div className="header__logo">
                    <Link to="/">
                        <img className="netflix__logo" src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="header__register">
                    <Link to={{
                        pathname: `${local == null ? "/registration" : "/"}`
                    }}>
                        <span className="header__register__link">{local == null ? "Register" : `Salam ${local.firstName}`}</span>
                    </Link>
                    {LogOut()}
                </div>
            </div>
        </div>
    )
}

export default Header;