import { Badge, Button, Paper, SimpleGrid, TextInput } from '@mantine/core'
import { useListState } from '@mantine/hooks'
import { IconPlus } from '@tabler/icons-react'
import { useEffect } from 'react'

type PhoneNumbersField = {
  onChange: (phoneNumbers: string[]) => void
  value?: string[]
}

export const PhoneNumberField = ({ onChange, value = [] }: PhoneNumbersField) => {
  const [values, handlers] = useListState<string>(value)

  useEffect(() => {
    onChange(values.filter(Boolean))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  return (
    <Paper withBorder p="sm" sx={{ position: 'relative' }} mt="sm">
      <Badge sx={{ position: 'absolute', top: '-12px' }}>Phone Numbers</Badge>
      <SimpleGrid cols={2}>
        {values.map((value, index) => (
          <TextInput
            key={index + 1}
            type="tel"
            defaultValue={value}
            label={`Phone number ${index + 1}`}
            placeholder={`Phone number ${index + 1}`}
            onChange={(e) => handlers.setItem(index, e.target.value)}
          />
        ))}
      </SimpleGrid>
      <Button mt="md" fullWidth variant="light" leftIcon={<IconPlus />} onClick={() => handlers.append('')}>
        Add new phone number
      </Button>
    </Paper>
  )
}
