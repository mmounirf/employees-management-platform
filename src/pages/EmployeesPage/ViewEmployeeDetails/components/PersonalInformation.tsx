import { Badge, Divider, Flex, Paper, SimpleGrid, Skeleton, Text } from '@mantine/core'

import { type EmployeeType } from '../../../../api/types'
import { FilePreview } from '../../components/FilePreview'

export const PersonalInformation = ({ data }: { data: EmployeeType | undefined }) => {
  return (
    <Paper withBorder shadow="md" radius="md" p="md">
      <Flex wrap="wrap" direction="row" gap="xs">
        <Flex direction="column">
          <Divider
            label={
              <Text color="dimmed" size="sm">
                Display Name
              </Text>
            }
          />

          <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
            <Text>{data?.displayName}</Text>
          </Skeleton>
        </Flex>

        <Flex direction="column">
          <Divider
            label={
              <Text color="dimmed" size="sm">
                Username
              </Text>
            }
          />
          <Text color="dimmed" size="sm"></Text>

          <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
            <Text>{data?.username}</Text>
          </Skeleton>
        </Flex>

        <Flex direction="column">
          <Divider
            label={
              <Text color="dimmed" size="sm">
                English Name
              </Text>
            }
          />

          <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
            <Text>{data?.fullName.en}</Text>
          </Skeleton>
        </Flex>

        <Flex direction="column">
          <Divider
            label={
              <Text color="dimmed" size="sm">
                Arabic Name
              </Text>
            }
          />

          <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
            <Text>{data?.fullName.ar}</Text>
          </Skeleton>
        </Flex>

        <Flex direction="column">
          <Divider
            label={
              <Text color="dimmed" size="sm">
                Personal Email
              </Text>
            }
          />

          <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
            <Text>{data?.personalEmail}</Text>
          </Skeleton>
        </Flex>

        <Flex direction="column">
          <Divider
            label={
              <Text color="dimmed" size="sm">
                Phone Numbers
              </Text>
            }
          />

          <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
            {data?.phoneNumbers.map((number) => (
              <Text key={number}>{number}</Text>
            ))}
          </Skeleton>
        </Flex>

        <Flex direction="column">
          <Divider
            label={
              <Text color="dimmed" size="sm">
                Persoanl Email
              </Text>
            }
          />

          <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
            <Text>{data?.personalEmail}</Text>
          </Skeleton>
        </Flex>
        <Flex direction="column">
          <Divider
            label={
              <Text color="dimmed" size="sm">
                Addresses
              </Text>
            }
          />
          <SimpleGrid cols={4}>
            {data === undefined && (
              <Paper withBorder p="md" mt="md">
                <Text color="dimmed" size="sm">
                  Address
                </Text>
                <Skeleton visible={true} mih={24} w={200} radius="md" animate />
                <Text color="dimmed" size="sm">
                  City
                </Text>
                <Skeleton visible={true} mih={24} w={200} radius="md" animate />
                <Text color="dimmed" size="sm">
                  State
                </Text>
                <Skeleton visible={true} mih={24} w={200} radius="md" animate />
              </Paper>
            )}
            {data?.addresses.map(({ label, address1, address2, city, state }) => (
              <Paper withBorder key={label} p="md" mt="md" sx={{ position: 'relative' }}>
                <Badge sx={{ position: 'absolute', top: -10 }}>{label}</Badge>
                <Text color="dimmed" size="sm">
                  Address
                </Text>
                <Text>
                  {address1}
                  <br />
                  {address2}
                </Text>
                <Text color="dimmed" size="sm">
                  City
                </Text>
                <Text>{city}</Text>
                <Text color="dimmed" size="sm">
                  State
                </Text>
                <Text>{state}</Text>
              </Paper>
            ))}
          </SimpleGrid>
        </Flex>

        <SimpleGrid cols={2}>
          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Passport
                </Text>
              }
            />
            <Flex gap="md">
              <FilePreview file={data?.passport.frontDocument} />

              <Flex direction="column">
                <Text color="dimmed" size="sm">
                  Expiry Date
                </Text>
                <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
                  <Text>{data?.passport.expiryDate}</Text>
                </Skeleton>
                <Text color="dimmed" size="sm">
                  Passport ID
                </Text>
                <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
                  <Text>{data?.passport.id}</Text>
                </Skeleton>
              </Flex>
            </Flex>
          </Flex>
          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  National ID
                </Text>
              }
            />
            <Flex gap="md">
              <FilePreview file={data?.nationalId.frontDocument} />
              <FilePreview file={data?.nationalId.backDocument} />
              <Flex direction="column">
                <Text color="dimmed" size="sm">
                  Expiry Date
                </Text>
                <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
                  <Text>{data?.nationalId.expiryDate}</Text>
                </Skeleton>
                <Text color="dimmed" size="sm">
                  National ID
                </Text>
                <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
                  <Text>{data?.nationalId.id}</Text>
                </Skeleton>
              </Flex>
            </Flex>
          </Flex>
        </SimpleGrid>

        <Flex direction="column" w="100%">
          <Divider
            label={
              <Text color="dimmed" size="sm">
                Emergency Contacts
              </Text>
            }
          />
          <SimpleGrid cols={6}>
            {data === undefined && (
              <Paper withBorder p="md" mt="md">
                <Text color="dimmed" size="sm">
                  Address
                </Text>
                <Skeleton visible={true} mih={24} w={150} radius="md" animate />
                <Text color="dimmed" size="sm">
                  City
                </Text>
                <Skeleton visible={true} mih={24} w={150} radius="md" animate />
                <Text color="dimmed" size="sm">
                  State
                </Text>
                <Skeleton visible={true} mih={24} w={150} radius="md" animate />
              </Paper>
            )}
            {data?.emergencyContacts.map(({ name, relation, phoneNumber }) => (
              <Paper withBorder key={phoneNumber} p="md" mt="md" sx={{ position: 'relative' }}>
                <Badge sx={{ position: 'absolute', top: -10 }}>{relation}</Badge>
                <Text color="dimmed" size="sm">
                  Name
                </Text>
                <Text>{name}</Text>
                <Text color="dimmed" size="sm">
                  Phone Number
                </Text>
                <Text>{phoneNumber}</Text>
              </Paper>
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </Paper>
  )
}
