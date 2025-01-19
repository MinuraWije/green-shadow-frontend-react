import {Vehicle} from "../models/Vehicle.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: Vehicle[] = [];

const vehicleSlice = createSlice({
    name: "vehicles",
    initialState,
    reducers: {
        addVehicle: (state, action) => {
            state.push(action.payload);
        },
        updateVehicle: (state, action) => {
            return state.map((vehicle) =>
                vehicle.code === action.payload.code
                    ? {...vehicle, ...action.payload}
                    :vehicle
            );
        },
        deleteVehicle: (state, action) => {
            return state.filter((vehicle) => vehicle.code !== action.payload.code);
        },
    },
});

export const {addVehicle, updateVehicle, deleteVehicle} = vehicleSlice.actions;
export default vehicleSlice.reducer;