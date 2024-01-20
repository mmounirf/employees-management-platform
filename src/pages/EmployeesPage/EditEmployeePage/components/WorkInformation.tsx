import { Card, SimpleGrid, Stack } from '@mantine/core'
import { memo } from 'react'

import { BranchField } from '../../components/BranchField'
import { DepartmentField } from '../../components/DepartmentField'
import { JobTitleField } from '../../components/JobTitleField'
import { useEditEmployeeFormContext } from '../EditEmployeeFormContext'

export const WorkInformation = memo(() => {
  const editEmployeeForm = useEditEmployeeFormContext()
  const { setFieldValue, errors, values } = editEmployeeForm

  return (
    <Card withBorder radius="md" p="md">
      <Stack spacing="md">
        <SimpleGrid cols={2}>
          <DepartmentField
            value={values.department}
            onChange={(value) => setFieldValue('department', value)}
            error={errors.department}
          />

          <JobTitleField value={values.jobTitle} onChange={(jobTitle) => setFieldValue('jobTitle', jobTitle)} />
          <BranchField value={values.workLocation} onChange={(value) => setFieldValue('workLocation', value)} />
        </SimpleGrid>
      </Stack>
    </Card>
  )
})
