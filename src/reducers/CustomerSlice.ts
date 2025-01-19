import { createSlice } from '@reduxjs/toolkit';
import { Customer } from '../models/Customer';

const initialState: Customer[] = [];

const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        addCustomer(state, action) {
            state.push(action.payload);
        },
        updateCustomer(state, action) {
            return state.map((customer) =>
                customer.email === action.payload.email
                    ? { ...customer, ...action.payload }
                    : customer
            );
        },
        deleteCustomer(state, action) {
            return state.filter((customer) => customer.email !== action.payload.email);
        },
    },
});

export const { addCustomer, updateCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;