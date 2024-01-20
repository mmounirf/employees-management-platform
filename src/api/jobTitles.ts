import { createApi } from '@reduxjs/toolkit/query/react'

import { fetchBaseQuery } from './utils'

import type { DataResponse } from './types'

export type JobTitleType = {
  en: string
  ar: string
}

export type EditJobTitlePayload = JobTitleType & { id: string }

export type JobTitleResponse = DataResponse<{ id: string }>
export type GetJobTitlesResponse = DataResponse<EditJobTitlePayload[]>

export const jobTitlesApi = createApi({
  reducerPath: 'jobTitles',
  baseQuery: fetchBaseQuery,
  tagTypes: ['JobTitles'],
  endpoints: (builder) => ({
    getJobTitles: builder.query<GetJobTitlesResponse, void>({
      query: () => ({
        method: 'GET',
        url: `/employees/jobTitles`,
      }),
      providesTags: ['JobTitles'],
    }),
    addJobTitle: builder.mutation<JobTitleResponse, JobTitleType>({
      query: (body) => ({
        method: 'POST',
        url: '/employees/jobTitles',
        body,
      }),
      invalidatesTags: ['JobTitles'],
    }),
  }),
})

export const { useGetJobTitlesQuery, useAddJobTitleMutation } = jobTitlesApi
