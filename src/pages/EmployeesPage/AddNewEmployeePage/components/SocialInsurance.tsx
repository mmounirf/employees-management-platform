import { Card, Flex, NumberInput, SimpleGrid, Stack } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { memo } from 'react'

import { InsuranceOfficeField } from '../../components/InsuranceOfficeField'
import { useAddNewEmployeeFormContext } from '../AddNewEmployeeFormContext'

export const SocialInsurance = memo(() => {
  const addNewEmployeeForm = useAddNewEmployeeFormContext()
  const { getInputProps, setFieldValue, errors, values } = addNewEmployeeForm

  return (
    <Stack>
      <Card withBorder radius="md" p="md">
        <Stack spacing="md">
          <InsuranceOfficeField
            value={values.socialInsurance.office}
            error={errors.department}
            onChange={(insuranceOffice) => setFieldValue('socialInsurance.office', insuranceOffice)}
          />
          <SimpleGrid cols={4}>
            <NumberInput min={0} w="100%" label="EMP" placeholder="EMP" {...getInputProps('socialInsurance.emp')} />
            <NumberInput min={0} w="100%" label="COM" placeholder="COM" {...getInputProps('socialInsurance.com')} />
            <NumberInput
              min={0}
              w="100%"
              label="Total"
              placeholder="Total"
              {...getInputProps('socialInsurance.total')}
            />
            <NumberInput
              min={0}
              w="100%"
              label="EMR Funds"
              placeholder="EMR Funds"
              {...getInputProps('socialInsurance.emrFunds')}
            />
            <NumberInput
              min={0}
              w="100%"
              label="Grand Total"
              placeholder="Grand Total"
              {...getInputProps('socialInsurance.grandTotal')}
            />
            <NumberInput
              min={0}
              w="100%"
              label="Salary"
              placeholder="Insurance Salary"
              {...getInputProps('socialInsurance.insuranceSalary')}
            />
            <NumberInput
              min={0}
              w="100%"
              label="Total Salary"
              placeholder="Total Insurance Salary"
              {...getInputProps('socialInsurance.totalInsuranceSalary')}
            />
            <NumberInput min={0} w="100%" label="BINs" placeholder="BINs" {...getInputProps('socialInsurance.bIns')} />
          </SimpleGrid>

          <Flex gap="md">
            <DateInput
              w="100%"
              valueFormat="DD-MM-YYYY"
              popoverProps={{ withinPortal: true }}
              hideOutsideDates
              clearable
              label="Form submission date"
              placeholder="Form submission date"
              {...getInputProps('socialInsurance.submitFormDate')}
            />
            <DateInput
              w="100%"
              valueFormat="DD-MM-YYYY"
              popoverProps={{ withinPortal: true }}
              hideOutsideDates
              clearable
              label="Insurance start date"
              placeholder="Insurance start date"
              {...getInputProps('socialInsurance.startDate')}
            />
            <DateInput
              w="100%"
              valueFormat="DD-MM-YYYY"
              popoverProps={{ withinPortal: true }}
              hideOutsideDates
              clearable
              label="Insurance end date"
              placeholder="Insurance end date"
              {...getInputProps('socialInsurance.endDate')}
            />
          </Flex>
        </Stack>
      </Card>
    </Stack>
  )
})
