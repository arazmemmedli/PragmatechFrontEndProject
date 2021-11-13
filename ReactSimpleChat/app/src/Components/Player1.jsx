import React from 'react';
import { useRef, useState, useEffect } from 'react';
import shortid from "shortid"
import { useSelector, useDispatch } from 'react-redux';
import { setMessage, setMessageCountP1 } from '../redux/reducers/player1'
import { setMessageCountP2 } from '../redux/reducers/player2'
import { useLocation } from "react-router-dom";
import '../App.css';

const Player1 = () => {
    const player1 = useRef(null)
    const location = useLocation();
    const nameP2 = useSelector((state) => state.player2.name)
    const nameP1 = useSelector((state) => state.player1.name)
    const messageP2 = useSelector((state) => state.player2.message)
    const messageP1 = useSelector((state) => state.player1.message)
    const messageCountP1 = useSelector((state) => state.player1.messageCount)
    const messageCountP2 = useSelector((state) => state.player2.messageCount)
    const dispatch = useDispatch()

    const addMessage = (e) => {
        e.preventDefault();
        dispatch(setMessage(player1.current.value));
        if (player1.current.value && location.pathname !== "/player-2") {
            dispatch(setMessageCountP2(messageCountP2 + 1))
        } else {
            dispatch(setMessageCountP2(0))
        }
    }

    useEffect(() => {
        if (messageCountP1 > 0) {
            dispatch(setMessageCountP1(0))
        }
    }, [messageCountP1])

    return <>
        <h1 className='text-3xl font-medium'>Player 1</h1>
        <div className="main flex justify-center items-center h-screen">
            <form className='chat__form'>
                <div className="chats__message">
                    {
                        messageP1.map((data) => {
                            return (
                                <p key={shortid.generate()} className='text-red-500 text-xl'>{nameP1 + " : " + " " + data}</p>
                            )
                        })
                    }
                    {
                        messageP2.map((data) => {
                            return (
                                <p key={shortid.generate()} className='text-red-500 text-xl'>{nameP2 + " : " + " " + data}</p>
                            )
                        })
                    }
                </div>
                <input ref={player1} type="text" className='border-2 chat__input h-10 rounded-md border-black' placeholder='Enter...' />
                <button onClick={addMessage} type='submit' className='bg-yellow-300 px-4 py-2 block mt-2 rounded-md'> Sent</button>
            </form>
        </div>
    </>
}

export default Player1