import React from 'react'
import { useContext } from 'react';
import { Link,useLocation } from 'react-router-dom';
import './Header.css'
import DarkMode from '../context';

function Header() {
    const darkMode = useContext(DarkMode)
    return (
        <div className="header">
            <ul className="header__items">
                <li className="header__items__list">
                    <Link to="/">Home</Link>
                </li>
                <li className="header__items__list">
                    <Link to={{
                        pathname: "/about",
                        state:""
                        
                    }}>About</Link>
                </li>
                <li className="header__items__list">
                    <Link to="/team/araz">Team</Link>
                </li>
            </ul>
            <div className="mode">
                <input type="checkbox" onChange={(e) => {
                    darkMode.setDarkMode(e.target.checked)
                }} />
            </div>
        </div>
    )
}

export default Header;