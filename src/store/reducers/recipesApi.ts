import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IRecipe } from '../../models/models'

export const recipesApi = createApi({
    reducerPath: 'product/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/'
    }),
    endpoints: (build) => ({
        searchProducts: build.query<IRecipe[], void>({
            query: () => 'recipes'
        })
    })
})

export const { useSearchProductsQuery } = recipesApi
