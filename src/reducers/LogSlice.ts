import {createSlice} from "@reduxjs/toolkit";
import {Log} from "../models/Log.ts";

const initialState: Log[] = [];

const logSlice = createSlice({
    name: "logs",
    initialState,
    reducers: {
        addLog: (state, action) => {
            state.push(action.payload);
        },
        updateLog: (state, action) => {
            return state.map((log) =>
                log.code === action.payload.code
                    ? {...log, ...action.payload}
                    :log
            );
        },
        deleteLog: (state, action) => {
            return state.filter((log) => log.code !== action.payload.code);
        },
    },
});

export const {addLog,updateLog,deleteLog} = logSlice.actions;
export default logSlice.reducer;