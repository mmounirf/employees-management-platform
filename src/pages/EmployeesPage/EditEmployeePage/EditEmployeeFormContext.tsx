import { createFormContext } from '@mantine/form'

import { type EmployeeMutationPayload } from '../../../api/employees'

export const [EditEmployeeFormProvider, useEditEmployeeFormContext, useEditEmployeeForm] =
  createFormContext<EmployeeMutationPayload>()
