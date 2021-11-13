import React from 'react'
import shortid from "shortid"
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMessage, setMessageCountP2 } from '../redux/reducers/player2';
import { setMessageCountP1 } from '../redux/reducers/player1';
import { useLocation } from "react-router-dom";
import '../App.css';


const Player2 = () => {
    const location = useLocation();
    const player2 = useRef(null);
    const nameP1 = useSelector((state) => state.player1.name)
    const nameP2 = useSelector((state) => state.player2.name)
    const messageP1 = useSelector((state) => state.player1.message)
    const messageP2 = useSelector((state) => state.player2.message)
    const messageCountP2 = useSelector((state) => state.player2.messageCount)
    const messageCountP1 = useSelector((state) => state.player1.messageCount)

    const dispatch = useDispatch()

    const addPlayer2Message = (e) => {
        e.preventDefault();
        dispatch(setMessage(player2.current.value))
        if (player2.current.value && location.pathname !== "/player-1") {
            dispatch(setMessageCountP1(messageCountP1 + 1))
        } else {
            dispatch(setMessageCountP1(0))
        }
    }

    useEffect(() => {
        if (messageCountP2 > 0) {
            dispatch(setMessageCountP2(0))
        }
    }, [messageCountP2])
    return <>
        <h1 className='text-3xl font-medium'>Player 2</h1>
        <div className="main flex justify-center items-center h-screen">
            <form className='chat__form'>
                <div className="chats__message">
                    {
                        messageP2.map((data) => {
                            return (
                                <p key={shortid.generate()} className='text-red-500 text-xl'>{nameP2 + " : " + " " + data}</p>
                            )
                        })
                    }
                    {
                        messageP1.map((data) => {
                            return (
                                <p key={shortid.generate()} className='text-red-500 text-xl'>{nameP1 + " : " + " " + data}</p>
                            )
                        })
                    }
                </div>
                <input ref={player2} type="text" className='border-2 chat__input h-10 rounded-md border-black' placeholder='Enter...' />
                <button type='submit' onClick={addPlayer2Message} className='bg-green-300 px-4 py-2 block mt-2 rounded-md'> Sent</button>
            </form>
        </div>
    </>
}

export default Player2