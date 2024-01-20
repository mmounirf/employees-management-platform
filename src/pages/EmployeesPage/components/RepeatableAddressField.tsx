import { Accordion, Box, Button, Text } from '@mantine/core'
import { useListState } from '@mantine/hooks'
import { IconPlus } from '@tabler/icons-react'
import { memo, useEffect } from 'react'

import { AddressType } from '../../../api/types'

import { AddressField } from './AddressField'

type RepeatableAddressFieldProps = {
  onChange: (data: AddressType[]) => void
  value?: AddressType[]
}

export const RepeatableAddressField = memo(({ onChange, value = [] }: RepeatableAddressFieldProps) => {
  const [addresses, handlers] = useListState<AddressType>(value)

  useEffect(() => {
    onChange(addresses)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addresses])

  const addressTitle = (address: AddressType) => {
    if (address.label !== '') {
      return `- ${address.label}`
    }
    if (address.state !== '') {
      return `- ${address.state}`
    }
  }

  return (
    <Box p="xs">
      <Accordion variant="contained" chevronPosition="left">
        {addresses.map((address, index) => (
          <Accordion.Item key={index} value={`${index}`}>
            <Accordion.Control>
              <Text>
                Address {index + 1} {addressTitle(address)}
              </Text>
            </Accordion.Control>
            <Accordion.Panel>
              <AddressField value={address} onChange={(address) => handlers.setItem(index, address)} />
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>

      <Button
        fullWidth
        variant="light"
        leftIcon={<IconPlus />}
        mt="md"
        onClick={() => handlers.append({ label: '', address1: '', address2: '', city: '', state: '' })}
      >
        Add new address
      </Button>
    </Box>
  )
})
