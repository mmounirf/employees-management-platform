import { Accordion, Box, Button, SimpleGrid, Text, TextInput } from '@mantine/core'
import { useListState } from '@mantine/hooks'
import { IconPlus } from '@tabler/icons-react'
import { memo, useEffect } from 'react'

import { EmergencyContactType } from '../../../api/types'

type RepeatableEmergencyContactsProps = {
  onChange: (contacts: EmergencyContactType[]) => void
  value?: EmergencyContactType[]
}

export const RepeatableEmergencyContactField = memo(({ onChange, value = [] }: RepeatableEmergencyContactsProps) => {
  const [contacts, contactsHandlers] = useListState<EmergencyContactType>(value)

  useEffect(() => {
    onChange(contacts)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contacts])

  return (
    <Box p="xs">
      <Accordion defaultValue="1" variant="contained" chevronPosition="left">
        {contacts.map((contact, index) => (
          <Accordion.Item key={index} value={`${index}`}>
            <Accordion.Control>
              <Text>
                Emergency Contact {index + 1} {contact.name}
              </Text>
            </Accordion.Control>
            <Accordion.Panel>
              <SimpleGrid cols={3} key={index}>
                <TextInput
                  label="Name"
                  placeholder="Emergency contact name"
                  defaultValue={contact.name}
                  onChange={(e) => contactsHandlers.setItemProp(index, 'name', e.target.value)}
                />
                <TextInput
                  type="tel"
                  label="Phone Number"
                  placeholder="Emergency contact phone number"
                  defaultValue={contact.phoneNumber}
                  onChange={(e) => contactsHandlers.setItemProp(index, 'phoneNumber', e.target.value)}
                />

                <TextInput
                  label="Relation"
                  placeholder="Emergency contact relation"
                  defaultValue={contact.relation}
                  onChange={(e) => contactsHandlers.setItemProp(index, 'relation', e.target.value)}
                />
              </SimpleGrid>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>

      <Button
        fullWidth
        variant="light"
        leftIcon={<IconPlus />}
        mt="md"
        onClick={() => contactsHandlers.append({ name: '', relation: '', phoneNumber: '' })}
      >
        Add new emergency contact
      </Button>
    </Box>
  )
})
