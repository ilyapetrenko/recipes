import {configureStore} from "@reduxjs/toolkit";
import {recipesApi} from "./reducers/recipesApi";
import {productReducer} from "./reducers/recipesSlice";


export const store = configureStore({
    reducer: {
        [recipesApi.reducerPath]: recipesApi.reducer,
        products: productReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(recipesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>