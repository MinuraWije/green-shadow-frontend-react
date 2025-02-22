import {configureStore} from "@reduxjs/toolkit";
import EquipmentSlice from "../reducers/EquipmentSlice.ts";
import VehicleSlice from "../reducers/VehicleSlice.ts";
import StaffSlice from "../reducers/StaffSlice.ts";
import CropSlice from "../reducers/CropSlice.ts";
import LogSlice from "../reducers/LogSlice.ts";
import FieldSlice from "../reducers/FieldSlice.ts";

export const store =configureStore({
    reducer:{
        equipment: EquipmentSlice,
        vehicles: VehicleSlice,
        staff: StaffSlice,
        crop: CropSlice,
        log: LogSlice,
        field: FieldSlice,
    }
})