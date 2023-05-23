import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../../models/models'

export const productApi = createApi({
    reducerPath: 'product/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/'
    }),
    endpoints: (build) => ({
        searchProducts: build.query<IProduct[], void>({
            query: () => 'products' // Обратите внимание, что здесь используется 'products' вместо 'db'
        })
    })
})

export const { useSearchProductsQuery } = productApi
