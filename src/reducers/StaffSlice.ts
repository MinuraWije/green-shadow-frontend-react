import {Equipment} from "../models/Equipment.ts";
import {createSlice} from "@reduxjs/toolkit";
import {Staff} from "../models/Staff.ts";

const initialState: Staff[] = [];

const staffSlice = createSlice({
    name: "staffs",
    initialState,
    reducers: {
        addStaff: (state, action) => {
            state.push(action.payload);
        },
        updateStaff: (state, action) => {
            return state.map((staff) =>
                staff.id === action.payload.id
                    ? {...staff, ...action.payload}
                    :staff
            );
        },
        deleteStaff: (state, action) => {
            return state.filter((staff) => staff.id !== action.payload.id);
        },
    },
});

export const {addStaff, updateStaff, deleteStaff} = staffSlice.actions;
export default staffSlice.reducer;