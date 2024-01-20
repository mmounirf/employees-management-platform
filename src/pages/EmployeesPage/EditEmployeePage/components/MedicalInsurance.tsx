import { Card, Flex, NumberInput, Select, SimpleGrid, Stack, TextInput } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { memo } from 'react'

import { FileField } from '../../components/FileField'
import { RepeatableDependentField } from '../../components/RepeatableDependentField'
import { useEditEmployeeFormContext } from '../EditEmployeeFormContext'

export const MedicalInsurance = memo(() => {
  const editEmployeeForm = useEditEmployeeFormContext()
  const { setFieldValue, getInputProps, values } = editEmployeeForm

  const { medicalInsurance } = values

  console.log(medicalInsurance)

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
            value={values.medicalInsurance.dob ? new Date(values.medicalInsurance.dob) : null}
            onChange={(date) =>
              date && setFieldValue('medicalInsurance', { ...values.medicalInsurance, dob: date.toISOString() })
            }
          />
          <DateInput
            w="100%"
            valueFormat="DD-MM-YYYY"
            popoverProps={{ withinPortal: true }}
            hideOutsideDates
            clearable
            label="Start Date"
            placeholder="Start Date"
            value={values.medicalInsurance.startDate ? new Date(values.medicalInsurance.startDate) : null}
            onChange={(date) =>
              date && setFieldValue('medicalInsurance', { ...values.medicalInsurance, startDate: date.toISOString() })
            }
          />
          <DateInput
            w="100%"
            valueFormat="DD-MM-YYYY"
            popoverProps={{ withinPortal: true }}
            hideOutsideDates
            clearable
            label="Issue Date"
            placeholder="Issue Date"
            value={values.medicalInsurance.issueDate ? new Date(values.medicalInsurance.issueDate) : null}
            onChange={(date) =>
              date && setFieldValue('medicalInsurance', { ...values.medicalInsurance, issueDate: date.toISOString() })
            }
          />
          <DateInput
            w="100%"
            valueFormat="DD-MM-YYYY"
            popoverProps={{ withinPortal: true }}
            hideOutsideDates
            clearable
            label="End Date"
            placeholder="End Date"
            value={values.medicalInsurance.endDate ? new Date(values.medicalInsurance.endDate) : null}
            onChange={(date) =>
              date && setFieldValue('medicalInsurance', { ...values.medicalInsurance, endDate: date.toISOString() })
            }
          />
          <DateInput
            w="100%"
            valueFormat="DD-MM-YYYY"
            popoverProps={{ withinPortal: true }}
            hideOutsideDates
            clearable
            label="Activiation Date"
            placeholder="Activiation Date"
            value={values.medicalInsurance.activationDate ? new Date(values.medicalInsurance.activationDate) : null}
            onChange={(date) =>
              date &&
              setFieldValue('medicalInsurance', { ...values.medicalInsurance, activationDate: date.toISOString() })
            }
          />
          <DateInput
            w="100%"
            valueFormat="DD-MM-YYYY"
            popoverProps={{ withinPortal: true }}
            hideOutsideDates
            clearable
            label="Delete Date"
            placeholder="Delete Date"
            value={values.medicalInsurance.deleteDate ? new Date(values.medicalInsurance.deleteDate) : null}
            onChange={(date) =>
              date && setFieldValue('medicalInsurance', { ...values.medicalInsurance, deleteDate: date.toISOString() })
            }
          />
          <DateInput
            w="100%"
            valueFormat="DD-MM-YYYY"
            popoverProps={{ withinPortal: true }}
            hideOutsideDates
            clearable
            label="Re-Issue Date"
            placeholder="Re-Issue Date"
            value={values.medicalInsurance.reIssueDate ? new Date(values.medicalInsurance.reIssueDate) : null}
            onChange={(date) =>
              date && setFieldValue('medicalInsurance', { ...values.medicalInsurance, reIssueDate: date.toISOString() })
            }
          />
          <Select
            data={['male', 'female']}
            clearable
            label="Gender"
            placeholder="Gender"
            value={values.medicalInsurance.gender as string}
          />
          <FileField
            label="Picture"
            onChange={(fileName) => setFieldValue('medicalInsurance.picture', fileName)}
            file={values.medicalInsurance.picture}
          />
        </SimpleGrid>
        <RepeatableDependentField
          value={medicalInsurance.dependents}
          onChange={(dependents) => setFieldValue('medicalInsurance.dependents', dependents)}
        />
      </Card>
    </Stack>
  )
})
