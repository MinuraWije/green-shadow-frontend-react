import CustomerSlice from "../reducers/CustomerSlice";
import {configureStore} from "@reduxjs/toolkit";
import EquipmentSlice from "../reducers/EquipmentSlice.ts";

export const store =configureStore({
    reducer:{
        equipments: EquipmentSlice,
        customer: CustomerSlice
    }
})