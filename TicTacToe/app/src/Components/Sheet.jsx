import { useEffect, useState } from 'react'
import Square from './Square';
import './TicTacToe.css'

function Sheet() {
    const [sheetSguare, setSheetSguare] = useState(Array(9).fill(null));
    const [isNext, setIsNext] = useState(true)

    const Actions = (index) => {
        let sguares = [...sheetSguare];
        if (Winner(sheetSguare) || sguares[index]) {
            return;
        }
        sguares[index] = isNext ? "X" : "O";

        if (sguares.length == 9 && !sguares.includes(null)) {
            alert("Drow")
        }

        setSheetSguare(sguares);
        setIsNext(!isNext);
    }

    const renderSguares = (index) => {
        let color;
        color = isNext ? { color: "#43A7C1" } : { color: "#D55236" }
        return (
            <Square a={isNext} style={color} data={sheetSguare[index]} onClick={() => Actions(index)} />
        )
    }
    const winner = Winner(sheetSguare);

    let message;
    message = winner ? 'Winner: ' + winner : 'Next player: ' + (isNext ? 'X' : 'O');

    const Reset = () => {
        setSheetSguare(Array(9).fill(null));
        setIsNext(true);
    }

    return (
        <>
            <div className="message">{message}</div>
            <div className="ui">
                {renderSguares(0)}
                {renderSguares(1)}
                {renderSguares(2)}
                {renderSguares(3)}
                {renderSguares(4)}
                {renderSguares(5)}
                {renderSguares(6)}
                {renderSguares(7)}
                {renderSguares(8)}
            </div>
            <button className="reset" onClick = { Reset }>Reset</button>
        </>
    )
}


export function Winner(sguares) {
    const movement = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    for (let i = 0; i < movement.length; i++) {
        const [x, y, z] = movement[i];
        if (sguares[x] && sguares[x] === sguares[y] && sguares[y] === sguares[z]) {
            return sguares[x];
        }
    }


    return null;
}


export default Sheet;