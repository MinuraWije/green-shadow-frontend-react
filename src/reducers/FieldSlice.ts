import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Field} from "../models/Field.ts";
import api from "../api/api.ts";

//const initialState: Field[] = [];

const initialState = {
    fields: [{}],
}

export const saveField = createAsyncThunk(
    'field/saveField',
    async(field:Field)=>{
        try{
            const response = await api.post('/post/field', field)
            return response.data;
        }catch (error){
            alert("Error saving field! Error: " + error)
        }
    }
)

export const deleteField = createAsyncThunk(
    'field/deleteField',
    async(id:string)=>{
        try{
            const response = await api.delete(`/field/${id}`)
            return response.data;
        }catch (error){
            alert("Error deleting field! Error: " + error)
        }
    }
)

export const updateField = createAsyncThunk(
    'field/updateField',
    async(field:Field)=>{
        try{
            const response = await api.put(`field/${field.code}`,field)
            return response.data;
        }catch (error){
            alert("Error updating field! Error: " + error)
        }
    }
)

export const getAllField = createAsyncThunk(
    'field/getAllField',
    async()=>{
        try{
            const response = await api.get('get/field')
            return response.data;
        }catch (error){
            alert("Error getting all fields! Error: " + error)
        }
    }
)

const fieldSlice = createSlice({
    name: "fields",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
            .addCase(saveField.fulfilled,(state,action)=>{
                state.fields.push(action.payload)
                alert("Field saved successfully")
            })
            .addCase(saveField.pending,(state,action)=>{
                console.log("Save field is pending.")
            })
            .addCase(saveField.rejected,(state,action)=>{
                alert("Field save rejected.")
            })
        builder
            .addCase(updateField.fulfilled,(state, action)=>{
                state.fields.push(action.payload)
                alert("Field updated successfully")
            })
            .addCase(updateField.pending,(state, action)=>{
                console.log("Update field is pending.")
            })
            .addCase(updateField.rejected,(state, action)=>{
                alert("Field update rejected")
            })
        builder
            .addCase(deleteField.fulfilled,(state, action)=>{
                state.fields = state.fields.filter((f:Field)=> f.code !== action.payload.code)
                alert("Field deleted successfully")
            })
            .addCase(deleteField.pending,(state, action)=>{
                console.log("Delete field is pending.")
            })
            .addCase(deleteField.rejected,(state, action)=>{
                alert("Field delete rejected")
            })
        builder
            .addCase(getAllField.fulfilled,(state, action)=>{
                state.fields = action.payload.fields || []
                console.log("Get all fields successful")
            })
            .addCase(getAllField.pending,(state, action)=>{
                console.log("Get all field is pending.")
            })
            .addCase(getAllField.rejected,(state, action)=>{
                alert("Get all field rejected")
            })
    }
});

//export const {addField,updateField,deleteField} = fieldSlice.actions;
export default fieldSlice.reducer;