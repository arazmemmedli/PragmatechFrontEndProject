import { createSlice } from "@reduxjs/toolkit";



const state = {
    name: "Player1",
    message: [],
    messageCount:0
}

const player1 = createSlice({
    name: 'Player2',
    initialState: state,
    reducers: {
        setMessage: (state, action) => {
            state.message.push(action.payload)
        },
        setMessageCountP1:(state,action) => {
            state.messageCount = action.payload
        },  
        
    }
})

export const { setMessage,setMessageCountP1 } = player1.actions;

export default player1.reducer;