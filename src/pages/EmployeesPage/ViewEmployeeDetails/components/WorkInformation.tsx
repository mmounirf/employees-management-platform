import { Divider, Flex, Paper, SimpleGrid, Skeleton, Stack, Text } from '@mantine/core'

import { type EmployeeType } from '../../../../api/types'

export const WorkInformation = ({ data }: { data: EmployeeType | undefined }) => {
  return (
    <Paper withBorder shadow="md" radius="md" p="md">
      <Stack spacing="md">
        <Flex direction="column">
          <Divider
            label={
              <Text color="dimmed" size="sm">
                Department
              </Text>
            }
          />

          <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
            <Text>
              {data?.department.name.en} - {data?.department.name.ar}
            </Text>
          </Skeleton>
        </Flex>

        <Flex direction="column">
          <Divider
            label={
              <Text color="dimmed" size="sm">
                Job Title
              </Text>
            }
          />

          <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
            <Text>
              {data?.jobTitle.en} - {data?.jobTitle.ar}
            </Text>
          </Skeleton>
        </Flex>

        <Flex direction="column">
          <Divider
            label={
              <Text color="dimmed" size="sm">
                Work Location
              </Text>
            }
          />

          <SimpleGrid cols={4}>
            <Flex direction="column">
              <Text color="dimmed" size="sm">
                Name
              </Text>
              <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
                <Text>
                  {data?.workLocation.name.en} - {data?.workLocation.name.ar}
                </Text>
              </Skeleton>
            </Flex>
            <Flex direction="column">
              <Text color="dimmed" size="sm">
                Address
              </Text>
              <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
                {data?.workLocation.address.address1}
                <br />
                {data?.workLocation.address.address2}
              </Skeleton>
            </Flex>
            <Flex direction="column">
              <Text color="dimmed" size="sm">
                City
              </Text>
              <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
                {data?.workLocation.address.city}
              </Skeleton>
            </Flex>
            <Flex direction="column">
              <Text color="dimmed" size="sm">
                State
              </Text>
              <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
                {data?.workLocation.address.state}
              </Skeleton>
            </Flex>
          </SimpleGrid>
        </Flex>
      </Stack>
    </Paper>
  )
}
