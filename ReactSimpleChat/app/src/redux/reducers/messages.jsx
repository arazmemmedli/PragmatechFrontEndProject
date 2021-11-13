import { createSlice } from "@reduxjs/toolkit";

const state = {
    messages:[]
}

export const MessageSlice = createSlice({
    name:"Message",
    initialState:state,
    reducers: {
        addMessage: (state,action) => {
            state.messages.push(action.payload)
        },
        updateMessage: (state,action) => {
            state.messages.filter((w)=> !w.read).forEach((w) => w.read = true)
        }
    }
})

export const {addMessage,updateMessage} = MessageSlice.actions;