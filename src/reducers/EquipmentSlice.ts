import {Equipment} from "../models/Equipment.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../api/api.ts";

//const initialState: Equipment[] = [];
const initialState={
    equipments:[{}],
}

export const saveEquipment = createAsyncThunk(
    'equipment/saveEquipment',
    async(equipment:Equipment)=>{
        try{
            const response = await api.post('/post/equipment', equipment)
            return response.data;
        }catch (error){
            alert("Error saving equipment! Error: " + error)
        }
    }
)

export const deleteEquipment = createAsyncThunk(
    'equipment/deleteEquipment',
    async(id:string)=>{
        try{
            const response = await api.delete(`/equipment/${id}`)
            return response.data;
        }catch (error){
            alert("Error deleting equipment! Error: " + error)
        }
    }
)

export const updateEquipment = createAsyncThunk(
    'equipment/updateEquipment',
    async(equipment:Equipment)=>{
        try{
            const response = await api.put(`equipment/${equipment.id}`,equipment)
            return response.data;
        }catch (error){
            alert("Error updating equipment! Error: " + error)
        }
    }
)

export const getAllEquipment = createAsyncThunk(
    'equipment/getAllEquipment',
    async()=>{
        try{
            const response = await api.get('get/equipment')
            return response.data;
        }catch (error){
            alert("Error getting all equipments! Error: " + error)
        }
    }
)

const equipmentSlice = createSlice({
    name: "equipments",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
            .addCase(saveEquipment.fulfilled,(state,action)=>{
                state.equipments.push(action.payload)
                alert("Equipment saved successfully")
            })
            .addCase(saveEquipment.pending,(state,action)=>{
                console.log("Save equipment is pending.")
            })
            .addCase(saveEquipment.rejected,(state,action)=>{
                alert("Equipment save rejected.")
            })
        builder
            .addCase(updateEquipment.fulfilled,(state,action)=>{
                state.equipments.push(action.payload)
                alert("Equipment updated successfully")
            })
            .addCase(updateEquipment.pending,(state,action)=>{
                console.log("Update equipment is pending.")
            })
            .addCase(updateEquipment.rejected,(state,action)=>{
                alert("Equipment update rejected")
            })
        builder
            .addCase(deleteEquipment.fulfilled,(state,action)=>{
                state.equipments = state.equipments.filter((e:Equipment)=> e.id !== action.payload.id)
                alert("Equipment deleted successfully")
            })
            .addCase(deleteEquipment.pending,(state,action)=>{
                console.log("Delete equipment is pending.")
            })
            .addCase(deleteEquipment.rejected,(state,action)=>{
                alert("Equipment delete rejected")
            })
        builder
            .addCase(getAllEquipment.fulfilled,(state,action)=>{
                state.equipments = action.payload.equipment || []
                console.log("Get all equipment successful")
            })
            .addCase(getAllEquipment.pending,(state,action)=>{
                console.log("Get all equipment is pending.")
            })
            .addCase(getAllEquipment.rejected,(state,action)=>{
                alert("Get all equipment rejected")
            })
    },
});

//export const {addEquipment, updateEquipment, deleteEquipment} = equipmentSlice.actions;
export default equipmentSlice.reducer;