import {Equipment, Log} from "../models/Equipment.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: Log[] = [];

const equipmentSlice = createSlice({
    name: "equipments",
    initialState,
    reducers: {
        addEquipment: (state, action) => {
            state.push(action.payload);
        },
        updateEquipment: (state, action) => {
            return state.map((equipment:Equipment) =>
                equipment.id === action.payload.id
                    ? {...equipment, ...action.payload}
                    :equipment
            );
        },
        deleteEquipment: (state, action) => {
            return state.filter((equipment:Equipment) => equipment.id !== action.payload.id);
        },
    },
});

export const {addEquipment, updateEquipment, deleteEquipment} = equipmentSlice.actions;
export default equipmentSlice.reducer;