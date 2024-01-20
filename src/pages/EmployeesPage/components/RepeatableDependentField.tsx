import { Accordion, Box, Button, Flex, NumberInput, Select, SimpleGrid, Text, TextInput } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { useListState } from '@mantine/hooks'
import { IconPlus } from '@tabler/icons-react'
import { memo, useEffect } from 'react'

import { DependentType } from '../../../api/types'

import { FileField } from './FileField'

type RepeatableDependentFieldProps = {
  onChange: (dependents: DependentType[]) => void
  value?: DependentType[]
}

const relationShips = [
  { value: 'spouse', label: 'Spouse' },
  { value: 'child', label: 'Child' },
  { value: 'parent', label: 'Parent' },
]

const dependentDefaultValue = {
  fullName: '',
  medicalCost: 0,
  cardIdNumber: '',
  certificationNumber: '',
  dob: '',
  startDate: '',
  issueDate: '',
  endDate: '',
  activationDate: '',
  deleteDate: '',
  reIssueDate: '',
  relationShip: '',
  relationDocument: '',
  birthCert: '',
}

export const RepeatableDependentField = memo(({ onChange, value = [] }: RepeatableDependentFieldProps) => {
  const [dependents, dependentsHandlers] = useListState<DependentType>(value)

  useEffect(() => {
    onChange(dependents)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependents])

  return (
    <Box mt="md">
      <Accordion defaultValue="1" variant="contained" chevronPosition="left">
        {dependents.map((dependent, index) => (
          <Accordion.Item key={index} value={`${index}`}>
            <Accordion.Control>
              <Text>
                Dependent {index + 1} {dependent.fullName}
              </Text>
            </Accordion.Control>
            <Accordion.Panel>
              <Box key={index}>
                <Flex gap="md" mb="sm">
                  <TextInput
                    w="100%"
                    label="Full Name"
                    placeholder="Full Name"
                    onChange={(e) => dependentsHandlers.setItemProp(index, 'fullName', e.target.value)}
                  />
                  <NumberInput
                    min={0}
                    w="100%"
                    label="Cost"
                    placeholder="Cost"
                    onChange={(number) => number && dependentsHandlers.setItemProp(index, 'medicalCost', number)}
                  />
                  <TextInput
                    w="100%"
                    label="Card Number"
                    placeholder="Card Number"
                    onChange={(e) => dependentsHandlers.setItemProp(index, 'cardIdNumber', e.target.value)}
                  />
                  <TextInput
                    w="100%"
                    label="Certificate Number"
                    placeholder="Certificate Number"
                    onChange={(e) => dependentsHandlers.setItemProp(index, 'certificationNumber', e.target.value)}
                  />
                  <Select
                    w="100%"
                    data={['male', 'female']}
                    clearable
                    label="Gender"
                    placeholder="Gender"
                    onChange={(value) => dependentsHandlers.setItemProp(index, 'gender', value)}
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
                    onChange={(date) => date && dependentsHandlers.setItemProp(index, 'dob', date.toISOString())}
                  />
                  <DateInput
                    w="100%"
                    valueFormat="DD-MM-YYYY"
                    popoverProps={{ withinPortal: true }}
                    hideOutsideDates
                    clearable
                    label="Start Date"
                    placeholder="Start Date"
                    onChange={(date) => date && dependentsHandlers.setItemProp(index, 'startDate', date.toISOString())}
                  />
                  <DateInput
                    w="100%"
                    valueFormat="DD-MM-YYYY"
                    popoverProps={{ withinPortal: true }}
                    hideOutsideDates
                    clearable
                    label="Issue Date"
                    placeholder="Issue Date"
                    onChange={(date) => date && dependentsHandlers.setItemProp(index, 'issueDate', date.toISOString())}
                  />
                  <DateInput
                    w="100%"
                    valueFormat="DD-MM-YYYY"
                    popoverProps={{ withinPortal: true }}
                    hideOutsideDates
                    clearable
                    label="End Date"
                    placeholder="End Date"
                    onChange={(date) => date && dependentsHandlers.setItemProp(index, 'endDate', date.toISOString())}
                  />
                  <DateInput
                    w="100%"
                    valueFormat="DD-MM-YYYY"
                    popoverProps={{ withinPortal: true }}
                    hideOutsideDates
                    clearable
                    label="Activiation Date"
                    placeholder="Activiation Date"
                    onChange={(date) =>
                      date && dependentsHandlers.setItemProp(index, 'activationDate', date.toISOString())
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
                    onChange={(date) => date && dependentsHandlers.setItemProp(index, 'deleteDate', date.toISOString())}
                  />
                  <DateInput
                    w="100%"
                    valueFormat="DD-MM-YYYY"
                    popoverProps={{ withinPortal: true }}
                    hideOutsideDates
                    clearable
                    label="Re-Issue Date"
                    placeholder="Re-Issue Date"
                    onChange={(date) =>
                      date && dependentsHandlers.setItemProp(index, 'reIssueDate', date.toISOString())
                    }
                  />

                  <Select
                    onChange={(selection) =>
                      selection && dependentsHandlers.setItemProp(index, 'relationShip', selection)
                    }
                    label="Relationship"
                    placeholder="Relationship"
                    data={relationShips}
                  />
                </SimpleGrid>

                <SimpleGrid cols={3} mt="sm">
                  <FileField
                    label="Relation Document"
                    onChange={(fileName) => dependentsHandlers.setItemProp(index, 'relationDocument', fileName)}
                  />
                  <FileField
                    label="Birth Certification"
                    onChange={(fileName) => dependentsHandlers.setItemProp(index, 'birthCert', fileName)}
                  />
                  <FileField
                    label="Picture"
                    onChange={(fileName) => dependentsHandlers.setItemProp(index, 'picture', fileName)}
                  />
                </SimpleGrid>
              </Box>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>

      <Button
        fullWidth
        variant="light"
        leftIcon={<IconPlus />}
        mt="md"
        onClick={() => dependentsHandlers.append(dependentDefaultValue)}
      >
        Add new dependent
      </Button>
    </Box>
  )
})
