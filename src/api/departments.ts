import { createApi } from '@reduxjs/toolkit/query/react'

import { DataResponse, PaginatedResponse, QueryParams, TranslatedValue } from './types'
import { fetchBaseQuery } from './utils'

export type DepartmentType = {
  name: TranslatedValue
}

export type EditDepartmentPayload = DepartmentType & { id: string }

export type DepartmentResponse = DataResponse<{ id: string }>
export type GetDepartmentsResponse = PaginatedResponse<{ data: EditDepartmentPayload[] }>

export const departmentsApi = createApi({
  reducerPath: 'departments',
  baseQuery: fetchBaseQuery,
  tagTypes: ['Departments'],
  endpoints: (builder) => ({
    getDepartments: builder.query<GetDepartmentsResponse, Partial<QueryParams> | undefined>({
      query: (params) => ({
        method: 'GET',
        url: '/departments',
        params,
      }),
      providesTags: ['Departments'],
    }),
    addDepartment: builder.mutation<DepartmentResponse, DepartmentType>({
      query: (body) => ({
        method: 'POST',
        url: '/departments',
        body,
      }),
      invalidatesTags: ['Departments'],
    }),
    editDepartment: builder.mutation<DepartmentResponse, EditDepartmentPayload>({
      query: ({ id, ...body }) => ({
        method: 'PATCH',
        url: `/departments/${id}`,
        body,
      }),
      invalidatesTags: ['Departments'],
    }),
  }),
})

export const {
  useAddDepartmentMutation,
  useGetDepartmentsQuery,
  useLazyGetDepartmentsQuery,
  useEditDepartmentMutation,
} = departmentsApi
