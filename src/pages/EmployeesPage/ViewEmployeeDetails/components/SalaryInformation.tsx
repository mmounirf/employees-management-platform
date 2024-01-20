import { Divider, Flex, Paper, SimpleGrid, Skeleton, Stack, Text } from '@mantine/core'

import { type EmployeeType } from '../../../../api/types'

export const SalaryInformation = ({ data }: { data: EmployeeType | undefined }) => {
  return (
    <Paper withBorder shadow="md" radius="md" p="md">
      <Stack spacing="md">
        <SimpleGrid cols={2}>
          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Gross Salary
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.salary.grossSalary}</Text>
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Net Salary
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.salary.netSalary}</Text>
            </Skeleton>
          </Flex>
        </SimpleGrid>
        <Flex direction="column">
          <Divider
            label={
              <Text color="dimmed" size="sm">
                Bank Accounts
              </Text>
            }
          />
          <SimpleGrid cols={4}>
            {data === undefined && (
              <Paper withBorder p="md">
                <Text color="dimmed" size="sm">
                  Name
                </Text>
                <Skeleton visible={true} mih={24} w={200} radius="md" animate />
                <Text color="dimmed" size="sm">
                  Account Number
                </Text>
                <Skeleton visible={true} mih={24} w={200} radius="md" animate />
                <Text color="dimmed" size="sm">
                  ATM Number
                </Text>
                <Skeleton visible={true} mih={24} w={200} radius="md" animate />
              </Paper>
            )}
            {data?.bankAccounts.map(({ name, accountNumber, atmNumber }) => (
              <Paper withBorder key={accountNumber} p="md">
                <Text color="dimmed" size="sm">
                  Name
                </Text>
                <Text>{name}</Text>
                <Text color="dimmed" size="sm">
                  Account Number
                </Text>
                <Text>{accountNumber}</Text>
                <Text color="dimmed" size="sm">
                  ATM Number
                </Text>
                <Text>{atmNumber}</Text>
              </Paper>
            ))}
          </SimpleGrid>
        </Flex>
      </Stack>
    </Paper>
  )
}
