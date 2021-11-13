import { configureStore } from "@reduxjs/toolkit";
import { MessageSlice } from "./reducers/messages";

export default configureStore({
    reducer: {
        messageStore: MessageSlice.reducer
    }
})