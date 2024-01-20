import { createFormContext } from '@mantine/form'

import { EmployeePayload } from '../../../api/types'

export const [AddNewEmployeeFormProvider, useAddNewEmployeeFormContext, useAddNewEmployeeForm] =
  createFormContext<EmployeePayload>()
