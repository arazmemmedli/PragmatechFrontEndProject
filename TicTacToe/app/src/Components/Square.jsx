import React from 'react'
import './TicTacToe.css'

function Square({data,onClick,style}) {
    return (
        <>
            <div onClick = { onClick } className="sguare" style = {style}>{ data }</div>
        </>
    )
}

export default Square;