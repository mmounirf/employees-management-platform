import { Divider, Flex, Paper, Skeleton, Stack, Text } from '@mantine/core'

import { type EmployeeType } from '../../../../api/types'

import { FilePreview } from './../../components/FilePreview'

export const Documents = ({ data }: { data: EmployeeType | undefined }) => {
  return (
    <Paper withBorder shadow="md" radius="md" p="md">
      <Stack spacing="md">
        <Flex gap="xl" wrap="wrap">
          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Military Certificate
                </Text>
              }
            />

            <Skeleton
              visible={data === undefined || data?.attachments.militaryCert.url === undefined}
              h={214}
              w={200}
              radius="md"
              animate
            >
              {data && data.attachments.militaryCert.url && <FilePreview file={data.attachments.militaryCert.url} />}
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Birth Certificate
                </Text>
              }
            />

            <Skeleton
              visible={data === undefined || data?.attachments.birthCert.url === undefined}
              h={214}
              w={200}
              radius="md"
              animate
            >
              {data && data.attachments.birthCert.url && <FilePreview file={data.attachments.birthCert.url} />}
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Academic Degree Certificate
                </Text>
              }
            />

            <Skeleton
              visible={data === undefined || data?.attachments.academicDegreeCert.url === undefined}
              h={214}
              w={200}
              radius="md"
              animate
            >
              {data && data.attachments.academicDegreeCert.url && (
                <FilePreview file={data.attachments.academicDegreeCert.url} />
              )}
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Criminal Record
                </Text>
              }
            />

            <Skeleton
              visible={data === undefined || data?.attachments.criminalRecord.url === undefined}
              h={214}
              w={200}
              radius="md"
              animate
            >
              {data && data.attachments.criminalRecord.url && (
                <FilePreview file={data.attachments.criminalRecord.url} />
              )}
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Work Certificate
                </Text>
              }
            />

            <Skeleton
              visible={data === undefined || data?.attachments.workCert.url === undefined}
              h={214}
              w={200}
              radius="md"
              animate
            >
              {data && data.attachments.workCert.url && <FilePreview file={data.attachments.workCert.url} />}
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Personal Photo
                </Text>
              }
            />

            <Skeleton
              visible={data === undefined || data?.attachments.personalPhoto.url === undefined}
              h={214}
              w={200}
              radius="md"
              animate
            >
              {data && data.attachments.personalPhoto.url && <FilePreview file={data.attachments.personalPhoto.url} />}
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Work Contract
                </Text>
              }
            />

            <Skeleton
              visible={data === undefined || data?.attachments.workContract.url === undefined}
              h={214}
              w={200}
              radius="md"
              animate
            >
              {data && data.attachments.workContract.url && <FilePreview file={data.attachments.workContract.url} />}
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Form 1
                </Text>
              }
            />

            <Skeleton
              visible={data === undefined || data?.attachments.form1.url === undefined}
              h={214}
              w={200}
              radius="md"
              animate
            >
              {data && data.attachments.form1.url && <FilePreview file={data.attachments.form1.url} />}
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Insurance Statement
                </Text>
              }
            />

            <Skeleton
              visible={data === undefined || data?.attachments.insuranceStatement.url === undefined}
              h={214}
              w={200}
              radius="md"
              animate
            >
              {data && data.attachments.insuranceStatement.url && (
                <FilePreview file={data.attachments.insuranceStatement.url} />
              )}
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Form 111
                </Text>
              }
            />

            <Skeleton
              visible={data === undefined || data?.attachments.form111.url === undefined}
              h={214}
              w={200}
              radius="md"
              animate
            >
              {data && data.attachments.form111.url && <FilePreview file={data.attachments.form111.url} />}
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Custody
                </Text>
              }
            />

            <Skeleton
              visible={data === undefined || data?.attachments.custody.url === undefined}
              h={214}
              w={200}
              radius="md"
              animate
            >
              {data && data.attachments.custody.url && <FilePreview file={data.attachments.custody.url} />}
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  NDA
                </Text>
              }
            />

            <Skeleton
              visible={data === undefined || data?.attachments.nda.url === undefined}
              h={214}
              w={200}
              radius="md"
              animate
            >
              {data && data.attachments.nda.url && <FilePreview file={data.attachments.nda.url} />}
            </Skeleton>
          </Flex>
        </Flex>
      </Stack>
    </Paper>
  )
}
