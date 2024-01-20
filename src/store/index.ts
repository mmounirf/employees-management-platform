import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import {
  addressApi,
  branchesApi,
  departmentsApi,
  documentsApi,
  employeesApi,
  insuranceOfficesApi,
  jobTitlesApi,
} from '../api'

import { employeeSchemaSlice } from './employeeSchema.slice'
import { userSlice } from './user.slice'

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    employeeSchema: employeeSchemaSlice.reducer,
    [employeesApi.reducerPath]: employeesApi.reducer,
    [departmentsApi.reducerPath]: departmentsApi.reducer,
    [documentsApi.reducerPath]: documentsApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
    [branchesApi.reducerPath]: branchesApi.reducer,
    [jobTitlesApi.reducerPath]: jobTitlesApi.reducer,
    [jobTitlesApi.reducerPath]: jobTitlesApi.reducer,
    [insuranceOfficesApi.reducerPath]: insuranceOfficesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      employeesApi.middleware,
      departmentsApi.middleware,
      documentsApi.middleware,
      addressApi.middleware,
      branchesApi.middleware,
      jobTitlesApi.middleware,
      insuranceOfficesApi.middleware,
    ),
  devTools: import.meta.env.MODE !== 'production',
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
