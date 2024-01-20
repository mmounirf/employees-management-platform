import { createApi } from '@reduxjs/toolkit/query/react'

import { type DataResponse } from './types'
import { fetchBaseQuery } from './utils'

export type UploadFileResponse = DataResponse<{ fileId: string; fileName: string }>

export const documentsApi = createApi({
  reducerPath: 'documents',
  baseQuery: fetchBaseQuery,
  endpoints: (builder) => ({
    uploadDocument: builder.mutation<UploadFileResponse, FormData>({
      query: (body) => ({
        method: 'POST',
        url: '/documents',
        body,
      }),
    }),
    getDocument: builder.query<UploadFileResponse, { id: string }>({
      query: ({ id }) => ({
        method: 'GET',
        url: `/files/${id}`,
      }),
    }),
  }),
})

export const { useUploadDocumentMutation, useGetDocumentQuery } = documentsApi
