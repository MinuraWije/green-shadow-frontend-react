import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Crop} from "../models/Crop.ts";
import api from "../api/api.ts";

//const initialState: Crop[] = [];

const initialState = {
    crops:[{}],
}

export const saveCrop = createAsyncThunk(
    'crop/saveCrop',
    async(crop:Crop)=>{
        try{
            const response = await api.post('/post/crop', crop)
            return response.data;
        }catch (error){
            alert("Error saving crop! Error: " + error)
        }
    }
)

export const deleteCrop = createAsyncThunk(
    'crop/deleteCrop',
    async(id:string)=>{
        try{
            const response = await api.delete(`/crop/${id}`)
            return response.data;
        }catch (error){
            alert("Error deleting crop! Error: " + error)
        }
    }
)

export const updateCrop = createAsyncThunk(
    'crop/updateCrop',
    async(crop:Crop)=>{
        try{
            const response = await api.put(`crop/${crop.code}`,crop)
            return response.data;
        }catch (error){
            alert("Error updating crop! Error: " + error)
        }
    }
)

export const getAllCrop = createAsyncThunk(
    'crop/getAllCrop',
    async()=>{
        try{
            const response = await api.get('get/crop')
            return response.data;
        }catch (error){
            alert("Error getting all crops! Error: " + error)
        }
    }
)


const cropSlice = createSlice({
    name: "crop",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
            .addCase(saveCrop.fulfilled,(state,action)=>{
                state.crops.push(action.payload)
                alert("Crop saved successfully")
            })
            .addCase(saveCrop.pending,(state,action)=>{
                console.log("Save crop is pending.")
            })
            .addCase(saveCrop.rejected,(state,action)=>{
                alert("Crop save rejected.")
            })
        builder
            .addCase(updateCrop.fulfilled,(state, action)=>{
                state.crops.push(action.payload)
                alert("Crop updated successfully")
            })
            .addCase(updateCrop.pending,(state, action)=>{
                console.log("Update crop is pending.")
            })
            .addCase(updateCrop.rejected,(state, action)=>{
                alert("Crop update rejected")
            })
        builder
            .addCase(deleteCrop.fulfilled,(state, action)=>{
                state.crops = state.crops.filter((c:Crop)=> c.code !== action.payload.code)
                alert("Crop deleted successfully")
            })
            .addCase(deleteCrop.pending,(state, action)=>{
                console.log("Delete crop is pending.")
            })
            .addCase(deleteCrop.rejected,(state, action)=>{
                alert("Crop delete rejected")
            })
        builder
            .addCase(getAllCrop.fulfilled,(state, action)=>{
                state.crops = action.payload.crops || []
                console.log("Get all crops successful")
            })
            .addCase(getAllCrop.pending,(state, action)=>{
                console.log("Get all crop is pending.")
            })
            .addCase(getAllCrop.rejected,(state, action)=>{
                alert("Get all crop rejected")
            })
    }
});

//export const {addCrop,updateCrop,deleteCrop} = cropSlice.actions;
export default cropSlice.reducer;