import {createSlice} from "@reduxjs/toolkit";
import {Crop} from "../models/Crop.ts";

const initialState: Crop[] = [];

const cropSlice = createSlice({
    name: "crop",
    initialState,
    reducers: {
        addCrop: (state, action) => {
            state.push(action.payload);
        },
        updateCrop: (state, action) => {
            return state.map((crop) =>
                crop.code === action.payload.code
                    ? {...crop, ...action.payload}
                    :crop
            );
        },
        deleteCrop: (state, action) => {
            return state.filter((crop) => crop.code !== action.payload.code);
        },
    },
});

export const {addCrop,updateCrop,deleteCrop} = cropSlice.actions;
export default cropSlice.reducer;