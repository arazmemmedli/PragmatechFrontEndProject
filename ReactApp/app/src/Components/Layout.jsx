import React from 'react'
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Layout({ children }) {
    let router = useHistory();
    let location = useLocation();

    return (
        <div>
            {children}
            {
                !(location.pathname === "/") ? <button onClick={() => {
                    router.push({
                        pathname: "/"
                    })
                }}>Back Home Page</button> : <div></div>
            }
        </div>
    )
}


export default Layout;