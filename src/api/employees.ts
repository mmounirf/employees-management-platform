import { createApi } from '@reduxjs/toolkit/query/react'

import { DataResponse, EmployeePayload, EmployeeType, PaginatedResponse, QueryParams } from './types'
import { fetchBaseQuery } from './utils'

export type EmployeeMutationPayload = EmployeePayload & { id: string }
export type EmployeesResponse = DataResponse<{ id: string }>
export type GetEmployeesResponse = PaginatedResponse<{ data: EmployeeType[] }>

export const employeesApi = createApi({
  reducerPath: 'employees',
  baseQuery: fetchBaseQuery,
  tagTypes: ['Employees', 'Employee'],
  endpoints: (builder) => ({
    editEmployee: builder.mutation<{ data: { id: string } }, EmployeeMutationPayload>({
      query: ({ id, ...body }) => ({
        method: 'PATCH',
        url: `/employees/${id}`,
        body,
      }),
      invalidatesTags: (result) => (result ? [{ type: 'Employee', id: result.data.id }] : [{ type: 'Employee' }]),
    }),
    addEmployee: builder.mutation<{ data: { id: string } }, Partial<EmployeePayload>>({
      query: (body) => ({
        method: 'POST',
        url: '/employees',
        body,
      }),
      invalidatesTags: (result) => (result ? [{ type: 'Employees', id: result.data.id }] : [{ type: 'Employees' }]),
    }),
    getEmployees: builder.query<GetEmployeesResponse, Partial<QueryParams> | undefined>({
      query: (params) => ({
        method: 'GET',
        url: '/employees',
        params,
      }),
      providesTags: ['Employees'],
    }),
    getEmployee: builder.query<DataResponse<EmployeeType>, { id: string }>({
      query: ({ id }) => ({
        method: 'GET',
        url: `/employees/${id}`,
      }),
      providesTags: (arg) => (arg ? [{ type: 'Employee', id: arg.data.id }] : [{ type: 'Employee' }]),
    }),
  }),
})

export const {
  useAddEmployeeMutation,
  useGetEmployeesQuery,
  useLazyGetEmployeesQuery,
  useGetEmployeeQuery,
  useEditEmployeeMutation,
} = employeesApi
