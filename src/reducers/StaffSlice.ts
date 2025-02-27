import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Staff} from "../models/Staff.ts";
import api from "../api/api.ts";

//const initialState: Staff[] = [];

const initialState={
    staffs:[{}],
}

export const saveStaff = createAsyncThunk(
    'staff/saveStaff',
    async(staff:Staff)=>{
        try{
            const response = await api.post('/post/staff', staff)
            return response.data;
        }catch (error){
            alert("Error saving staff! Error: " + error)
        }
    }
)

export const deleteStaff = createAsyncThunk(
    'staff/deleteStaff',
    async(id:string)=>{
        try{
            const response = await api.delete(`/staff/${id}`)
            return response.data;
        }catch (error){
            alert("Error deleting staff! Error: " + error)
        }
    }
)

export const updateStaff = createAsyncThunk(
    'staff/updateStaff',
    async(staff:Staff)=>{
        try{
            const response = await api.put(`staff/${staff.id}`,staff)
            return response.data;
        }catch (error){
            alert("Error updating staff! Error: " + error)
        }
    }
)

export const getAllStaff = createAsyncThunk(
    'staff/getAllStaff',
    async()=>{
        try{
            const response = await api.get('get/staff')
            return response.data;
        }catch (error){
            alert("Error getting all staffs! Error: " + error)
        }
    }
)

const staffSlice = createSlice({
    name: "staffs",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
            .addCase(saveStaff.fulfilled,(state,action)=>{
                state.staffs.push(action.payload)
                alert("Staff saved successfully")
            })
            .addCase(saveStaff.pending,(state,action)=>{
                console.log("Save staff is pending.")
            })
            .addCase(saveStaff.rejected,(state,action)=>{
                alert("Staff save rejected.")
            })
        builder
            .addCase(updateStaff.fulfilled,(state, action)=>{
                state.staffs.push(action.payload)
                alert("Staff updated successfully")
            })
            .addCase(updateStaff.pending,(state, action)=>{
                console.log("Update staff is pending.")
            })
            .addCase(updateStaff.rejected,(state, action)=>{
                alert("Staff update rejected")
            })
        builder
            .addCase(deleteStaff.fulfilled,(state, action)=>{
                state.staffs = state.staffs.filter((s:Staff)=> s.id !== action.payload.id)
                alert("Staff deleted successfully")
            })
            .addCase(deleteStaff.pending,(state, action)=>{
                console.log("Delete staff is pending.")
            })
            .addCase(deleteStaff.rejected,(state, action)=>{
                alert("Staff delete rejected")
            })
        builder
            .addCase(getAllStaff.fulfilled,(state, action)=>{
                state.staffs = action.payload
                console.log("Get all staffs successful")
            })
            .addCase(getAllStaff.pending,(state, action)=>{
                console.log("Get all staff is pending.")
            })
            .addCase(getAllStaff.rejected,(state, action)=>{
                alert("Get all staff rejected")
            })
    }
});

//export const {addStaff, updateStaff, deleteStaff} = staffSlice.actions;
export default staffSlice.reducer;