import { Card, NumberInput, SimpleGrid, Stack } from '@mantine/core'
import { memo } from 'react'

import { RepeatableBankAccountField } from '../../components/RepeatableBankAccountField'
import { useAddNewEmployeeFormContext } from '../AddNewEmployeeFormContext'

export const SalaryInformation = memo(() => {
  const addNewEmployeeForm = useAddNewEmployeeFormContext()
  const { getInputProps, setFieldValue } = addNewEmployeeForm

  return (
    <Stack>
      <Card withBorder radius="md" p="md">
        <Stack spacing="md">
          <SimpleGrid cols={2}>
            <NumberInput
              w="100%"
              label="Gross Salary"
              placeholder="Gross Salary"
              {...getInputProps('salary.grossSalary')}
              min={0}
            />
            <NumberInput
              w="100%"
              label="Net Salary"
              placeholder="Net Salary"
              {...getInputProps('salary.netSalary')}
              min={0}
            />
          </SimpleGrid>
          <RepeatableBankAccountField onChange={(bankAccounts) => setFieldValue('bankAccounts', bankAccounts)} />
        </Stack>
      </Card>
    </Stack>
  )
})
