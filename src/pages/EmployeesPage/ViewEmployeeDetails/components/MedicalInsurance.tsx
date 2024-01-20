import { Divider, Flex, Paper, SimpleGrid, Skeleton, Stack, Text } from '@mantine/core'

import { type EmployeeType } from '../../../../api/types'
import { FilePreview } from '../../components/FilePreview'

export const MedicalInsurance = ({ data }: { data: EmployeeType | undefined }) => {
  console.log(data)
  return (
    <Paper withBorder shadow="md" radius="md" p="md">
      <Stack spacing="md">
        <SimpleGrid cols={4}>
          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Full Name
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.medicalInsurance.fullName}</Text>
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Gender
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.medicalInsurance.gender}</Text>
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Picture
                </Text>
              }
            />

            <Skeleton visible={data?.medicalInsurance.picture === undefined} h={214} w={200} radius="md" animate>
              {data?.medicalInsurance.picture && data?.medicalInsurance.picture && (
                <FilePreview file={data?.medicalInsurance.picture} />
              )}
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Cost
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.medicalInsurance.medicalCost}</Text>
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Card Number
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.medicalInsurance.cardIdNumber}</Text>
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Certificate Number
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.medicalInsurance.certificationNumber}</Text>
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Date of birth
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.medicalInsurance.dob}</Text>
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
              <Text>{data?.medicalInsurance.startDate}</Text>
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Issue Date
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.medicalInsurance.issueDate}</Text>
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
              <Text>{data?.medicalInsurance.endDate}</Text>
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Activiation Date
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.medicalInsurance.activationDate}</Text>
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Delete Date
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.medicalInsurance.deleteDate}</Text>
            </Skeleton>
          </Flex>

          <Flex direction="column">
            <Divider
              label={
                <Text color="dimmed" size="sm">
                  Re-Issue Date
                </Text>
              }
            />

            <Skeleton visible={data === undefined} mih={24} w={200} radius="md" animate>
              <Text>{data?.medicalInsurance.reIssueDate}</Text>
            </Skeleton>
          </Flex>
        </SimpleGrid>
        <Flex direction="column">
          <Divider
            label={
              <Text color="dimmed" size="sm">
                Dependents
              </Text>
            }
          />
          <SimpleGrid cols={2}>
            {data?.medicalInsurance.dependents.map(
              ({
                fullName,
                medicalCost,
                cardIdNumber,
                certificationNumber,
                dob,
                startDate,
                issueDate,
                endDate,
                activationDate,
                deleteDate,
                reIssueDate,
                relationShip,
                relationDocument,
                birthCert,
                gender,
                picture,
              }) => (
                <Paper withBorder key={fullName} p="md">
                  <SimpleGrid cols={2}>
                    <Flex direction="column">
                      <Text color="dimmed" size="sm">
                        Full Name
                      </Text>
                      <Text>{fullName}</Text>
                    </Flex>
                    <Flex direction="column">
                      <Text color="dimmed" size="sm">
                        Gender
                      </Text>
                      <Text>{gender}</Text>
                    </Flex>
                    <Flex direction="column">
                      <Divider
                        label={
                          <Text color="dimmed" size="sm">
                            Picture
                          </Text>
                        }
                      />

                      <Skeleton visible={picture === undefined} h={214} w={200} radius="md" animate>
                        {picture && picture && <FilePreview file={picture} />}
                      </Skeleton>
                    </Flex>
                    <Flex direction="column">
                      <Text color="dimmed" size="sm">
                        Medical Cost
                      </Text>
                      <Text>{medicalCost}</Text>
                    </Flex>
                    <Flex direction="column">
                      <Text color="dimmed" size="sm">
                        Card Number
                      </Text>
                      <Text>{cardIdNumber}</Text>
                    </Flex>
                    <Flex direction="column">
                      <Text color="dimmed" size="sm">
                        Certification Number
                      </Text>
                      <Text>{certificationNumber}</Text>
                    </Flex>
                    <Flex direction="column">
                      <Text color="dimmed" size="sm">
                        Date of Birth
                      </Text>
                      <Text>{dob}</Text>
                    </Flex>

                    <Flex direction="column">
                      <Text color="dimmed" size="sm">
                        Start Date
                      </Text>
                      <Text>{startDate}</Text>
                    </Flex>

                    <Flex direction="column">
                      <Text color="dimmed" size="sm">
                        Issue Date
                      </Text>
                      <Text>{issueDate}</Text>
                    </Flex>

                    <Flex direction="column">
                      <Text color="dimmed" size="sm">
                        End Date
                      </Text>
                      <Text>{endDate}</Text>
                    </Flex>

                    <Flex direction="column">
                      <Text color="dimmed" size="sm">
                        Activiation Date
                      </Text>
                      <Text>{activationDate}</Text>
                    </Flex>

                    <Flex direction="column">
                      <Text color="dimmed" size="sm">
                        Delete Date
                      </Text>
                      <Text>{deleteDate}</Text>
                    </Flex>

                    <Flex direction="column">
                      <Text color="dimmed" size="sm">
                        Re-Issue Date
                      </Text>
                      <Text>{reIssueDate}</Text>
                    </Flex>

                    <Flex direction="column">
                      <Text color="dimmed" size="sm">
                        Relationship
                      </Text>
                      <Text>{relationShip}</Text>
                    </Flex>

                    <Flex direction="column">
                      <Text color="dimmed" size="sm">
                        Relation Document
                      </Text>
                      <FilePreview file={relationDocument} />
                    </Flex>

                    <Flex direction="column">
                      <Text color="dimmed" size="sm">
                        Birth Certificate
                      </Text>
                      <FilePreview file={birthCert} />
                    </Flex>
                  </SimpleGrid>
                </Paper>
              ),
            )}
          </SimpleGrid>
        </Flex>
      </Stack>
    </Paper>
  )
}
