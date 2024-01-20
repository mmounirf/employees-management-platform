import { Card, Flex, NumberInput, Select, SimpleGrid, Stack, TextInput } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { memo } from 'react'

import { FileField } from '../../components/FileField'
import { RepeatableDependentField } from '../../components/RepeatableDependentField'
import { useAddNewEmployeeFormContext } from '../AddNewEmployeeFormContext'

export const MedicalInsurance = memo(() => {
  const addNewEmployeeForm = useAddNewEmployeeFormContext()
  const { getInputProps, setFieldValue } = addNewEmployeeForm

  return (
    <Stack>
      <Card withBorder radius="md" p="md">
        <Flex gap="md" mb="sm">
          <TextInput
            w="100%"
            label="Full Name"
            placeholder="Full Name"
            {...getInputProps('medicalInsurance.fullName')}
          />
          <NumberInput
            min={0}
            w="100%"
            label="Cost"
            placeholder="Cost"
            {...getInputProps('medicalInsurance.medicalCost')}
          />
          <TextInput
            w="100%"
            label="Card Number"
            placeholder="Card Number"
            {...getInputProps('medicalInsurance.cardIdNumber')}
          />
          <TextInput
            w="100%"
            label="Certificate Number"
            placeholder="Certificate Number"
            {...getInputProps('medicalInsurance.certificationNumber')}
          />
        </Flex>
        <SimpleGrid cols={4}>
          <DateInput
            w="100%"
            valueFormat="DD-MM-YYYY"
            popoverProps={{ withinPortal: true }}
            hideOutsideDates
            clearable
            label="Date of Birth"
            placeholder="Date of Birth"
            {...getInputProps('medicalInsurance.dob')}
          />
          <DateInput
            w="100%"
            valueFormat="DD-MM-YYYY"
            popoverProps={{ withinPortal: true }}
            hideOutsideDates
            clearable
            label="Start Date"
            placeholder="Start Date"
            {...getInputProps('medicalInsurance.startDate')}
          />
          <DateInput
            w="100%"
            valueFormat="DD-MM-YYYY"
            popoverProps={{ withinPortal: true }}
            hideOutsideDates
            clearable
            label="Issue Date"
            placeholder="Issue Date"
            {...getInputProps('medicalInsurance.issueDate')}
          />
          <DateInput
            w="100%"
            valueFormat="DD-MM-YYYY"
            popoverProps={{ withinPortal: true }}
            hideOutsideDates
            clearable
            label="End Date"
            placeholder="End Date"
            {...getInputProps('medicalInsurance.endDate')}
          />
          <DateInput
            w="100%"
            valueFormat="DD-MM-YYYY"
            popoverProps={{ withinPortal: true }}
            hideOutsideDates
            clearable
            label="Activiation Date"
            placeholder="Activiation Date"
            {...getInputProps('medicalInsurance.activationDate')}
          />
          <DateInput
            w="100%"
            valueFormat="DD-MM-YYYY"
            popoverProps={{ withinPortal: true }}
            hideOutsideDates
            clearable
            label="Delete Date"
            placeholder="Delete Date"
            {...getInputProps('medicalInsurance.deleteDate')}
          />
          <DateInput
            w="100%"
            valueFormat="DD-MM-YYYY"
            popoverProps={{ withinPortal: true }}
            hideOutsideDates
            clearable
            label="Re-Issue Date"
            placeholder="Re-Issue Date"
            {...getInputProps('medicalInsurance.reIssueDate')}
          />
          <Select data={['male', 'female']} clearable label="Gender" placeholder="Gender" />
          <FileField label="Picture" onChange={(fileName) => setFieldValue('medicalInsurance.picture', fileName)} />
        </SimpleGrid>
        <RepeatableDependentField onChange={(dependents) => setFieldValue('medicalInsurance.dependents', dependents)} />
      </Card>
    </Stack>
  )
})
