import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Log} from "../models/Log.ts";
import api from "../api/api.ts";

//const initialState: Log[] = [];

const initialState={
    logs:[{}],
}

export const saveLog = createAsyncThunk(
    'log/saveLog',
    async(log:Log)=>{
        try{
            const response = await api.post('/post/log', log)
            return response.data;
        }catch (error){
            alert("Error saving log! Error: " + error)
        }
    }
)

export const deleteLog = createAsyncThunk(
    'log/deleteLog',
    async(id:string)=>{
        try{
            const response = await api.delete(`/log/${id}`)
            return response.data;
        }catch (error){
            alert("Error deleting logd! Error: " + error)
        }
    }
)

export const updateLog = createAsyncThunk(
    'log/updateLog',
    async(log:Log)=>{
        try{
            const response = await api.put(`log/${log.code}`,log)
            return response.data;
        }catch (error){
            alert("Error updating log! Error: " + error)
        }
    }
)

export const getAllLog = createAsyncThunk(
    'log/getAllLog',
    async()=>{
        try{
            const response = await api.get('get/log')
            return response.data;
        }catch (error){
            alert("Error getting all logs! Error: " + error)
        }
    }
)

const logSlice = createSlice({
    name: "logs",
    initialState,
    reducers: {},
    extraReducers:(builder)=> {
        builder
            .addCase(saveLog.fulfilled, (state, action) => {
                state.logs.push(action.payload)
                alert("Log saved successfully")
            })
            .addCase(saveLog.pending, (state, action) => {
                console.log("Save log is pending.")
            })
            .addCase(saveLog.rejected, (state, action) => {
                alert("Log save rejected.")
            })
        builder
            .addCase(updateLog.fulfilled, (state, action) => {
                state.logs.push(action.payload)
                alert("Log updated successfully")
            })
            .addCase(updateLog.pending, (state, action) => {
                console.log("Update log is pending.")
            })
            .addCase(updateLog.rejected, (state, action) => {
                alert("Log update rejected")
            })
        builder
            .addCase(deleteLog.fulfilled, (state, action) => {
                state.logs = state.logs.filter((l: Log) => l.code !== action.payload.code)
                alert("Log deleted successfully")
            })
            .addCase(deleteLog.pending, (state, action) => {
                console.log("Delete log is pending.")
            })
            .addCase(deleteLog.rejected, (state, action) => {
                alert("Log delete rejected")
            })
        builder
            .addCase(getAllLog.fulfilled, (state, action) => {
                state.logs = action.payload.logs || []
                console.log("Get all logs successful")
            })
            .addCase(getAllLog.pending, (state, action) => {
                console.log("Get all log is pending.")
            })
            .addCase(getAllLog.rejected, (state, action) => {
                alert("Get all log rejected")
            })
    }
});

//export const {addLog,updateLog,deleteLog} = logSlice.actions;
export default logSlice.reducer;