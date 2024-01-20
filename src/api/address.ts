import { createApi } from '@reduxjs/toolkit/query/react'

import { fetchBaseQuery } from './utils'

type Country = {
  name: string
  iso2: string
  iso3: string
  unicodeFlag: string
}

type CountriesResponse = {
  data: Country[]
}

type CitiesResponse = {
  data: string[]
}

export const addressApi = createApi({
  reducerPath: 'address',
  baseQuery: fetchBaseQuery,
  tagTypes: ['Countries', 'Cities'],
  endpoints: (builder) => ({
    getCountries: builder.query<Country[], void>({
      query: () => ({
        method: 'GET',
        url: 'https://countriesnow.space/api/v0.1/countries/flag/unicode',
      }),
      providesTags: ['Countries'],
      transformResponse: (response: CountriesResponse) => response.data,
    }),
    getCities: builder.mutation<string[], { country: string }>({
      query: (body) => ({
        method: 'POST',
        url: 'https://countriesnow.space/api/v0.1/countries/cities',
        body,
      }),
      transformResponse: (response: CitiesResponse) => response.data,
    }),
  }),
})

export const { useGetCountriesQuery, useGetCitiesMutation } = addressApi
