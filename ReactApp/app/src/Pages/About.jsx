import React from 'react'
import { useEffect } from 'react';
import { useLocation, useParams } from "react-router";
function About() {

    const status = useLocation()


    return (
        <div className="about">
            {
                !(status.state == "") ? <div>Bu yazı SPA prinsipinə məxsus olmayan yollarla girilib</div> : <div>Bu yazı link üzrə yaranıb</div>
            }
        </div>
    )
}

export default About;