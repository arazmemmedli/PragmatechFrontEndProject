import React from 'react'
import { useEffect,useState } from 'react'
import logo from "../images/download.png"
import "./Header.css"
import { Link } from "react-router-dom"

function Header() {
    const [local,setLocal] = useState(null)
    useEffect(() => {
        const locals = JSON.parse(localStorage.getItem("data"));
        setLocal(locals)
    },[])
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__logo">
                    <Link to="/">
                        <img className="netflix__logo" src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="header__register">
                    <Link to="/registration">
                        <span className="header__register__link">{local==null ? "Register" : `Salam ${local.firstName}` }</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;