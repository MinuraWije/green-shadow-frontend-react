import {Vehicle} from "../models/Vehicle.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../api/api.ts"

//const initialState: Vehicle[] = [];
const initialState = {
    vehicles: [],
}

export const saveVehicle = createAsyncThunk(
    'vehicle/saveVehicle',
    async(vehicle:Vehicle)=>{
        try{
            const response = await api.post('/post/vehicle', vehicle)
            return response.data;
        }catch (error){
            alert("Error saving vehicle! Error: " + error)
        }
    }
)

export const deleteVehicle = createAsyncThunk(
    'vehicle/deleteVehicle',
    async(id:string)=>{
        try{
            const response = await api.delete(`/vehicle/${id}`)
            return response.data;
        }catch (error){
            alert("Error deleting vehicle! Error: " + error)
        }
    }
)

export const updateVehicle = createAsyncThunk(
    'vehicle/updateVehicle',
    async(vehicle:Vehicle)=>{
        try{
            const response = await api.put(`vehicle/${vehicle.code}`,vehicle)
            return response.data;
        }catch (error){
            alert("Error updating vehicle! Error: " + error)
        }
    }
)

export const getAllVehicle = createAsyncThunk(
    'vehicle/getAllVehicle',
    async()=>{
        try{
            const response = await api.get('get/vehicle');
            console.log("Fetched Vehicles:", response.data);
            return response.data;
        }catch (error){
            alert("Error getting all vehicles! Error: " + error)
            return [];
        }
    }
)


const vehicleSlice = createSlice({
    name: "vehicles",
    initialState:initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
            .addCase(saveVehicle.fulfilled,(state,action)=>{
                if(action.payload){
                    state.vehicles.push(action.payload)
                    alert("Vehicle saved successfully")
                }

            })
            .addCase(saveVehicle.pending,(state,action)=>{
                console.log("Save vehicle is pending.")
            })
            .addCase(saveVehicle.rejected,(state,action)=>{
                alert("Vehicle save rejected.")
            })
        builder
            .addCase(updateVehicle.fulfilled,(state, action)=>{
                state.vehicles.push(action.payload)
                alert("Vehicle updated successfully")
            })
            .addCase(updateVehicle.pending,(state, action)=>{
                console.log("Update vehicle is pending.")
            })
            .addCase(updateVehicle.rejected,(state, action)=>{
                alert("Vehicle update rejected")
            })
        builder
            .addCase(deleteVehicle.fulfilled,(state, action)=>{
                state.vehicles = state.vehicles.filter((v:Vehicle)=> v.code !== action.payload.code)
                alert("Vehicle deleted successfully")
            })
            .addCase(deleteVehicle.pending,(state, action)=>{
                console.log("Delete vehicle is pending.")
            })
            .addCase(deleteVehicle.rejected,(state, action)=>{
                alert("Vehicle delete rejected")
            })
        builder
            .addCase(getAllVehicle.fulfilled,(state, action)=>{
                state.vehicles = action.payload.vehicles || [];
                console.log("Get all vehicles successful")
            })
            .addCase(getAllVehicle.pending,(state, action)=>{
                console.log("Get all vehicle is pending.")
            })
            .addCase(getAllVehicle.rejected,(state, action)=>{
                alert("Get all vehicle rejected")
            })
    }
});

//export const {addVehicle, updateVehicle, deleteVehicle} = vehicleSlice.actions;
export default vehicleSlice.reducer;