import { Accordion, Box, Button, SimpleGrid, Text, TextInput } from '@mantine/core'
import { useListState } from '@mantine/hooks'
import { IconPlus } from '@tabler/icons-react'
import { memo, useEffect } from 'react'

import { BankAccountType } from '../../../api/types'

type RepeatableBankAccountProps = {
  onChange: (contacts: BankAccountType[]) => void
  value?: BankAccountType[]
}

export const RepeatableBankAccountField = memo(({ onChange, value = [] }: RepeatableBankAccountProps) => {
  const [bankAccounts, bankAccountsHandlers] = useListState<BankAccountType>(value)

  useEffect(() => {
    onChange(bankAccounts)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bankAccounts])

  return (
    <Box p="xs">
      <Accordion variant="contained" chevronPosition="left">
        {bankAccounts.map((bankAccount, index) => (
          <Accordion.Item key={index} value={`${index}`}>
            <Accordion.Control>
              <Text>
                Bank Account {index + 1} {bankAccount.name}
              </Text>
            </Accordion.Control>
            <Accordion.Panel>
              <SimpleGrid cols={3} key={index}>
                <TextInput
                  label="Name"
                  placeholder="Bank Name"
                  defaultValue={bankAccount.name}
                  onChange={(e) => bankAccountsHandlers.setItemProp(index, 'name', e.target.value)}
                />
                <TextInput
                  label="Account Number"
                  placeholder="Account Number"
                  defaultValue={bankAccount.accountNumber}
                  onChange={(e) => bankAccountsHandlers.setItemProp(index, 'accountNumber', e.target.value)}
                />

                <TextInput
                  label="ATM Number"
                  placeholder="ATM Number"
                  defaultValue={bankAccount.atmNumber}
                  onChange={(e) => bankAccountsHandlers.setItemProp(index, 'atmNumber', e.target.value)}
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
        onClick={() => bankAccountsHandlers.append({ name: '', accountNumber: '', atmNumber: '' })}
      >
        Add new bank account
      </Button>
    </Box>
  )
})
