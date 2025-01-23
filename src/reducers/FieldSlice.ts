import {createSlice} from "@reduxjs/toolkit";
import {Field} from "../models/Field.ts";

const initialState: Field[] = [];

const fieldSlice = createSlice({
    name: "fields",
    initialState,
    reducers: {
        addField: (state, action) => {
            state.push(action.payload);
        },
        updateField: (state, action) => {
            return state.map((field) =>
                field.code === action.payload.code
                    ? {...field, ...action.payload}
                    :field
            );
        },
        deleteField: (state, action) => {
            return state.filter((field) => field.code !== action.payload.code);
        },
    },
});

export const {addField,updateField,deleteField} = fieldSlice.actions;
export default fieldSlice.reducer;