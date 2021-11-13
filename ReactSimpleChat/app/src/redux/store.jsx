import { configureStore } from "@reduxjs/toolkit";
import player2 from "./reducers/player2";
import player1 from "./reducers/player1";

export default configureStore({
    reducer: {
        player1: player1,
        player2: player2
    }
})