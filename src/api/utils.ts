import { showNotification } from '@mantine/notifications'
import { completeNavigationProgress, startNavigationProgress } from '@mantine/nprogress'
import {
  fetchBaseQuery as RtkFetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'

export type ValidationError = {
  message: string
  status: number
  textCode: string
  type: string
  validations: {
    fieldName: string
    message: string
    constraints: Array<string>
  }[]
}

type ApiError = {
  status: number
  textCode: string
  type: string
  message: string
}

export function isValidationError(data: unknown): data is ValidationError {
  return typeof data === 'object' && data != null && 'validations' in data
}

export function isApiError(response: unknown): response is ApiError {
  return typeof response === 'object' && response != null && 'message' in response
}

export const baseQuery = RtkFetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  // prepareHeaders: (headers, { getState, endpoint }) => {
  //   const state = getState() as RootState

  //   if (endpoint !== 'login') {
  //     headers.set('Authorization', `Bearer ${state.user.token}`)
  //   }
  // },
})

export const fetchBaseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  try {
    startNavigationProgress()
    const result = await baseQuery(args, api, extraOptions)
    completeNavigationProgress()
    if ('error' in result) {
      if (isApiError(result.error?.data)) {
        showNotification({
          title: `${result.error?.data.type ?? ''}`,
          message: `${result.error?.data.message ?? ''}.`,
          color: 'red',
          autoClose: false,
        })
      }

      if (isValidationError(result.error?.data)) {
        result.error?.data.validations.forEach((error) => {
          showNotification({
            title: `Error in ${error.fieldName}`,
            message: `${error.constraints[0]}`,
            color: 'red',
            autoClose: false,
          })
        })
      }
    }
    return result
  } catch (err) {
    const argsMethod = typeof args !== 'string' ? args.method ?? '' : ''
    const argsUrl = typeof args !== 'string' ? args.url : ''

    showNotification({
      title: `${api.endpoint}`,
      message: `Error while requesting ${argsMethod} "${argsUrl}"`,
      color: 'red',
    })
    completeNavigationProgress()
    throw err
  }
}
