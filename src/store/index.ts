import {configureStore} from "@reduxjs/toolkit";
import {productApi} from "./reducers/productApi";
import {productReducer} from "./reducers/productSlice";


export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        products: productReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>