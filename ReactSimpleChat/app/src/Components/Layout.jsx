import React from 'react'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../redux/reducers/messages';
import { useLocation } from 'react-router';

const Layout = (props) => {
    const inputValue = useRef(null);
    const location = useLocation();
    const dispatch = useDispatch()
    const addMessages = (e) => {
        dispatch(addMessage({
            text: inputValue.current.value,
            user: location.pathname === "/" ? "player1" : "player2",
            read: false
        }))
    }

    return (
        <div className="h-full container my-0 mx-auto grid grid-rows-[90%,10%] py-5 px-5">
            <main>
                {props.children}
            </main>
            <div className="grid grid-cols-[95%,5%] gap-x-4">
                <input onKeyDown={(e) => {
                    if(e.key==="Enter") {
                        addMessages();
                    }
                }} ref={inputValue} className="border-2 border-black bg-[#33383B] py-[11px] px-3 outline-none rounded-3xl border-opacity-60" type="text" placeholder="Bir mesaj yazin" />
                <button className="bg-gray-500 rounded-xl" onClick={addMessages}><i className="uil uil-message text-[28px]"></i></button>
            </div>
        </div>
    )
}

export default Layout