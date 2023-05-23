import {createSlice, current, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../../models/models";

const initialState: IProduct[] | null = null

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProducts(state, action: PayloadAction<any>){
            return action.payload
        }
    }
})

export const productActions = productSlice.actions
export const productReducer = productSlice.reducer