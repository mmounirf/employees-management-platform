import { createFormContext } from '@mantine/form'

import { EditEmployeePayload } from '../../../api'

export const [EmployeeFormProvider, useEmployeeFormContext, useEmployeeForm] = createFormContext<EditEmployeePayload>()
