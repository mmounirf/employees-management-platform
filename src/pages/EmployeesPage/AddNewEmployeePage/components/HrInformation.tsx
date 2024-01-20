import { Card, Flex, PasswordInput, Select, SimpleGrid, Stack, TextInput } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { memo } from 'react'

import { useAddNewEmployeeFormContext } from '../AddNewEmployeeFormContext'

const statusData = [
  { value: 'OnTheJob', label: 'On the job' },
  { value: 'NewCommer', label: 'New commer ' },
  { value: 'Resigned', label: 'Resigned' },
]

export const HrInformation = memo(() => {
  const addNewEmployeeForm = useAddNewEmployeeFormContext()
  const { getInputProps } = addNewEmployeeForm

  return (
    <Stack>
      <Card withBorder radius="md" p="md">
        <Stack spacing="md">
          <SimpleGrid cols={2}>
            <Select
              label="Status"
              placeholder="Select status"
              data={statusData}
              searchable
              {...getInputProps('status')}
            />
            <Flex gap="md">
              <TextInput w="100%" label="HR Code" placeholder="HR Code" {...getInputProps('hrCode')} />
              <TextInput w="100%" label="Staff ID" placeholder="Staff ID" {...getInputProps('staffId')} />
            </Flex>

            <TextInput
              type="email"
              w="100%"
              label="Work Email"
              placeholder="Work Email"
              {...getInputProps('workEmail')}
            />
            <PasswordInput w="100%" label="Password" placeholder="Password" {...getInputProps('password')} />

            <DateInput
              w="100%"
              valueFormat="DD-MM-YYYY"
              popoverProps={{ withinPortal: true }}
              hideOutsideDates
              clearable
              label="Start Date"
              placeholder="Start Date"
              {...getInputProps('startDate')}
            />
            <DateInput
              w="100%"
              valueFormat="DD-MM-YYYY"
              popoverProps={{ withinPortal: true }}
              hideOutsideDates
              clearable
              label="End Date"
              placeholder="End Date"
              {...getInputProps('endDate')}
            />
            <DateInput
              w="100%"
              valueFormat="DD-MM-YYYY"
              popoverProps={{ withinPortal: true }}
              hideOutsideDates
              clearable
              label="Documents Delivery Date"
              placeholder="Documents Delivery Date"
              {...getInputProps('documentDeliveryDate')}
            />
          </SimpleGrid>
        </Stack>
      </Card>
    </Stack>
  )
})
