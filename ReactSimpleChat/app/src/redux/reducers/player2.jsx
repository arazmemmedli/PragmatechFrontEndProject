import { createSlice } from "@reduxjs/toolkit";

const state = {
    name: "Player2",
    message:[],
    messageCount:0
}

const player2 = createSlice({
    name:'Player1',
    initialState: state,
    reducers:{
        setMessage:(state,action) => {
            state.message.push(action.payload)
        },
        setMessageCountP2:(state,action) => {
            state.messageCount = action.payload
        },
        
    }
})

export const { setMessage,setMessageCountP2 } = player2.actions;

export default player2.reducer;