import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { updateMessage } from '../redux/reducers/messages';

function MessageList({user}) {
    const location = useLocation();
    const messages = useSelector((state) => state.messageStore.messages);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateMessage())
    },[location.pathname])

    return (
        <div className="flex flex-col">
            {
                messages.map((data) => {
                    return(
                        <div className={data.user === user ? "text-right mb-[2px]" : "text-left mb-[2px]"}><span className={ data.user === user ? "bg-[#056162] py-[8px] text-left px-[9px] rounded-xl inline-block text-white" : "bg-[#262D31] text-white py-[8px] text-left px-[9px] rounded-xl inline-block"}>{data.text}</span></div>
                    )
                })
            }
        </div>
    )
}

export default MessageList;