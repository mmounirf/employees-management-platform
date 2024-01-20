import { Divider, Flex, Paper, SimpleGrid, Skeleton, Stack, Text } from '@mantine/core'

import { type EmployeeType } from '../../../../api/types'

export const HrInformation = ({ data }: { data: EmployeeType | undefined }) => {
  return (
    <Paper withBorder shadow="md" radius="md" p="md">
      <Stack spacing="md">
        <SimpleGrid cols={3}>
          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Status
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.status}</Text>
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  HR Code
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.hrCode}</Text>
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Staff ID
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.staffId}</Text>
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Work Email
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.workEmail}</Text>
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Start Date
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.startDate}</Text>
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  End Date
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.endDate}</Text>
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  "Documents Delivery Date
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.documentDeliveryDate}</Text>
            </Skeleton>
          </Flex>
        </SimpleGrid>
      </Stack>
    </Paper>
  )
}
