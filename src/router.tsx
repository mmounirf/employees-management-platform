import { startNavigationProgress } from '@mantine/nprogress'
import * as Sentry from '@sentry/react'
import { createBrowserRouter, redirect } from 'react-router-dom'

import { employeesApi } from './api'
import { DashboardShell } from './components'
import {
  AddNewEmployeePage,
  BranchesPage,
  DashboardPage,
  DepartmentsPage,
  EditEmployeePage,
  EmployeesPage,
  InsuranceOfficesPage,
  LoginPage,
  ViewEmployeeDetails,
} from './pages'
import store from './store'

const sentryCreateBrowserRouter = Sentry.wrapCreateBrowserRouter(createBrowserRouter)

export const router = sentryCreateBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <DashboardShell />,
    children: [
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/employees', element: <EmployeesPage /> },
      { path: '/employees/new', element: <AddNewEmployeePage /> },
      {
        path: '/employees/:id/edit',
        element: <EditEmployeePage />,
        loader: async ({ params }: { params: { id: string } }) => {
          startNavigationProgress()
          const query = store.dispatch(employeesApi.endpoints.getEmployee.initiate({ id: params.id }))

          try {
            const response = await query.unwrap()
            return response
          } catch (e) {
            redirect(`/employees/${params.id}`)
            return null
          } finally {
            query.unsubscribe()
          }
        },
      },
      { path: '/employees/:id', element: <ViewEmployeeDetails /> },
      { path: '/departments', element: <DepartmentsPage /> },
      { path: '/branches', element: <BranchesPage /> },
      { path: '/insurance-offices', element: <InsuranceOfficesPage /> },
    ],
  },
])
