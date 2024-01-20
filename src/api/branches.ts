import { createApi } from '@reduxjs/toolkit/query/react'

import { DataResponse, PaginatedResponse, QueryParams, TranslatedValue } from './types'
import { fetchBaseQuery } from './utils'

export type BranchType = {
  name: TranslatedValue
  address: {
    address1: string
    address2: string
    city: string
    state: string
  }
}

export type EditBranchPayload = BranchType & { id: string }

export type BranchResponse = DataResponse<{ id: string }>
export type GetBranchesResponse = PaginatedResponse<{ data: EditBranchPayload[] }>

export const branchesApi = createApi({
  reducerPath: 'branches',
  baseQuery: fetchBaseQuery,
  tagTypes: ['Branches'],
  endpoints: (builder) => ({
    getBranches: builder.query<GetBranchesResponse, Partial<QueryParams> | undefined>({
      query: (params) => ({
        method: 'GET',
        url: '/branches',
        params,
      }),
      providesTags: ['Branches'],
    }),
    addBranch: builder.mutation<BranchResponse, BranchType>({
      query: (body) => ({
        method: 'POST',
        url: '/branches',
        body,
      }),
      invalidatesTags: ['Branches'],
    }),
    editBranch: builder.mutation<BranchResponse, EditBranchPayload>({
      query: ({ id, ...body }) => ({
        method: 'PATCH',
        url: `/branches/${id}`,
        body,
      }),
      invalidatesTags: ['Branches'],
    }),
  }),
})

export const { useGetBranchesQuery, useAddBranchMutation, useEditBranchMutation, useLazyGetBranchesQuery } = branchesApi
