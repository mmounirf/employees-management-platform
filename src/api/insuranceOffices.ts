import { createApi } from '@reduxjs/toolkit/query/react'

import { DataResponse, PaginatedResponse, QueryParams, TranslatedValue } from './types'
import { fetchBaseQuery } from './utils'

export type InsuranceOfficeType = {
  name: TranslatedValue
  address: {
    address1: string
    address2: string
    city: string
    state: string
  }
}

export type EditInsuranceOfficePayload = InsuranceOfficeType & { id: string }

export type InsuranceOfficeResponse = DataResponse<{ id: string }>
export type GetInsuranceOfficesResponse = PaginatedResponse<{ data: EditInsuranceOfficePayload[] }>

export const insuranceOfficesApi = createApi({
  reducerPath: 'insuranceOffices',
  baseQuery: fetchBaseQuery,
  tagTypes: ['InsuranceOffices'],
  endpoints: (builder) => ({
    getInsuranceOffices: builder.query<GetInsuranceOfficesResponse, Partial<QueryParams> | undefined>({
      query: (params) => ({
        method: 'GET',
        url: '/insuranceOfficess',
        params,
      }),
      providesTags: ['InsuranceOffices'],
    }),
    addInsuranceOffice: builder.mutation<InsuranceOfficeResponse, InsuranceOfficeType>({
      query: (body) => ({
        method: 'POST',
        url: '/insuranceOffices',
        body,
      }),
      invalidatesTags: ['InsuranceOffices'],
    }),
    editInsuranceOffice: builder.mutation<InsuranceOfficeResponse, EditInsuranceOfficePayload>({
      query: ({ id, ...body }) => ({
        method: 'PATCH',
        url: `/insuranceOffices/${id}`,
        body,
      }),
      invalidatesTags: ['InsuranceOffices'],
    }),
  }),
})

export const {
  useGetInsuranceOfficesQuery,
  useAddInsuranceOfficeMutation,
  useEditInsuranceOfficeMutation,
  useLazyGetInsuranceOfficesQuery,
} = insuranceOfficesApi
