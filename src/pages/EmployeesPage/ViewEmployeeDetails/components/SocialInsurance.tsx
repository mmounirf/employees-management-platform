import { Divider, Flex, Paper, SimpleGrid, Skeleton, Stack, Text } from '@mantine/core'

import { type EmployeeType } from '../../../../api/types'

export const SocialInsurance = ({ data }: { data: EmployeeType | undefined }) => {
  return (
    <Paper withBorder shadow="md" radius="md" p="md">
      <Stack spacing="md">
        <Flex direction="column">
          <Divider
            label={
              <Text color="dimmed" size="sm">
                Insurance Office
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
                  {data?.socialInsurance.office.name.en}
                  <br />
                  {data?.socialInsurance.office.name.ar}
                </Text>
              </Skeleton>
            </Flex>
            <Flex direction="column">
              <Text color="dimmed" size="sm">
                Address
              </Text>
              <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
                {data?.socialInsurance.office.address.address1}
                <br />
                {data?.socialInsurance.office.address.address2}
              </Skeleton>
            </Flex>
            <Flex direction="column">
              <Text color="dimmed" size="sm">
                City
              </Text>
              <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
                {data?.socialInsurance.office.address.city}
              </Skeleton>
            </Flex>
            <Flex direction="column">
              <Text color="dimmed" size="sm">
                State
              </Text>
              <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
                {data?.socialInsurance.office.address.state}
              </Skeleton>
            </Flex>
          </SimpleGrid>
        </Flex>

        <SimpleGrid cols={4}>
          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  EMP
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.socialInsurance.emp}</Text>
            </Skeleton>
          </Flex>
          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  COM
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.socialInsurance.com}</Text>
            </Skeleton>
          </Flex>
          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Total
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.socialInsurance.total}</Text>
            </Skeleton>
          </Flex>
          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  EMR Funds
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.socialInsurance.emrFunds}</Text>
            </Skeleton>
          </Flex>
          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Grand Total
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.socialInsurance.grandTotal}</Text>
            </Skeleton>
          </Flex>
          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Insured Salary
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.socialInsurance.insuranceSalary}</Text>
            </Skeleton>
          </Flex>
          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Total Insured Salary
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.socialInsurance.totalInsuranceSalary}</Text>
            </Skeleton>
          </Flex>
          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  BINs
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.socialInsurance.bIns}</Text>
            </Skeleton>
          </Flex>
          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Form submission date
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.socialInsurance.submitFormDate}</Text>
            </Skeleton>
          </Flex>
          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Insurance start date
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.socialInsurance.startDate}</Text>
            </Skeleton>
          </Flex>
          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Insurance end date
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.socialInsurance.endDate}</Text>
            </Skeleton>
          </Flex>
        </SimpleGrid>
      </Stack>
    </Paper>
  )
}
