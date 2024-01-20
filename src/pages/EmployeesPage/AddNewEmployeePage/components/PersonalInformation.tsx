import { Badge, Card, Flex, Paper, SimpleGrid, Stack, TextInput } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { memo } from 'react'

import { FileField } from '../../components/FileField'
import { PhoneNumberField } from '../../components/PhoneNumberField'
import { RepeatableAddressField } from '../../components/RepeatableAddressField'
import { RepeatableEmergencyContactField } from '../../components/RepeatableEmergencyContactField'
import { useAddNewEmployeeFormContext } from '../AddNewEmployeeFormContext'

export const PersonalInformation = memo(() => {
  const addNewEmployeeForm = useAddNewEmployeeFormContext()
  const { getInputProps, setFieldValue } = addNewEmployeeForm

  return (
    <Stack>
      <Card withBorder radius="md" p="md">
        <Stack spacing="md">
          <Flex gap="md">
            <TextInput w="100%" label="Display Name" placeholder="Display Name" {...getInputProps('displayName')} />
            <TextInput w="100%" label="Username" placeholder="Username" {...getInputProps('username')} />
          </Flex>

          <Flex gap="md">
            <TextInput w="100%" label="English Name" placeholder="English Name" {...getInputProps('fullName.en')} />
            <TextInput w="100%" label="Arabic Name" placeholder="Arabic Name" {...getInputProps('fullName.ar')} />
          </Flex>
          <TextInput
            type="email"
            w="100%"
            label="Personal Email"
            placeholder="Personal Email"
            {...getInputProps('personalEmail')}
          />
          <PhoneNumberField onChange={(phoneNumbers) => setFieldValue('phoneNumbers', phoneNumbers)} />
          <Paper withBorder p="sm" sx={{ position: 'relative' }} mt="sm">
            <Badge sx={{ position: 'absolute', top: '-12px' }}>Addresses</Badge>
            <RepeatableAddressField onChange={(addresses) => setFieldValue('addresses', addresses)} />
          </Paper>

          <Paper withBorder p="sm" sx={{ position: 'relative' }} mt="sm">
            <Badge sx={{ position: 'absolute', top: '-12px' }}>Passport</Badge>
            <Stack>
              <Flex gap="md">
                <DateInput
                  w="100%"
                  valueFormat="DD-MMM-YYYY"
                  popoverProps={{ withinPortal: true }}
                  hideOutsideDates
                  clearable
                  label="Expiry Date"
                  placeholder="Expiry Date"
                  minDate={new Date()}
                  {...getInputProps('passport.expiryDate')}
                />
                <TextInput w="100%" label="Passport ID" placeholder="Passport ID" {...getInputProps('passport.id')} />
              </Flex>
              <FileField label="Passport" onChange={(fileName) => setFieldValue('passport.frontDocument', fileName)} />
            </Stack>
          </Paper>
          <Paper withBorder p="sm" sx={{ position: 'relative' }} mt="sm">
            <Badge sx={{ position: 'absolute', top: '-12px' }}>National ID</Badge>
            <Stack>
              <Flex gap="md">
                <DateInput
                  w="100%"
                  valueFormat="DD-MMM-YYYY"
                  popoverProps={{ withinPortal: true }}
                  hideOutsideDates
                  clearable
                  label="Expiry Date"
                  placeholder="Expiry Date"
                  minDate={new Date()}
                  {...getInputProps('nationalId.expiryDate')}
                />
                <TextInput w="100%" label="National ID" placeholder="National ID" {...getInputProps('nationalId.id')} />
              </Flex>
              <SimpleGrid cols={2}>
                <FileField
                  label="National ID Front"
                  onChange={(fileName) => setFieldValue('nationalId.frontDocument', fileName)}
                />
                <FileField
                  label="National ID Back"
                  onChange={(fileName) => setFieldValue('nationalId.backDocument', fileName)}
                />
              </SimpleGrid>
            </Stack>
          </Paper>
          <Paper withBorder p="sm" sx={{ position: 'relative' }} mt="sm">
            <Badge sx={{ position: 'absolute', top: '-12px' }}>Emergency Contacts</Badge>
            <RepeatableEmergencyContactField onChange={(contacts) => setFieldValue('emergencyContacts', contacts)} />
          </Paper>
        </Stack>
      </Card>
    </Stack>
  )
})
