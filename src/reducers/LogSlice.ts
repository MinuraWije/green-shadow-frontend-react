import {createSlice} from "@reduxjs/toolkit";
import {Log, Staff} from "../models/Log.ts";

const initialState: Staff[] = [];

const logSlice = createSlice({
    name: "logs",
    initialState,
    reducers: {
        addLog: (state, action) => {
            state.push(action.payload);
        },
        updateLog: (state, action) => {
            return state.map((log:Log) =>
                log.code === action.payload.code
                    ? {...log, ...action.payload}
                    :log
            );
        },
        deleteLog: (state, action) => {
            return state.filter((log:Log) => log.code !== action.payload.code);
        },
    },
});

export const {addLog,updateLog,deleteLog} = logSlice.actions;
export default logSlice.reducer;