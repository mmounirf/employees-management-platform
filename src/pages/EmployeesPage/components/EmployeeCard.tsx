import { useTheme } from '@emotion/react'
import { Avatar, Card, Flex, Group, List, Text, UnstyledButton } from '@mantine/core'
import { IconBuilding, IconId, IconPhone } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'

import { type EmployeeType } from '../../../api/types'

import { getNameInitials } from './../../../utils/getNameInitials'

export const EmployeeCard = (props: EmployeeType) => {
  const theme = useTheme()
  const navigate = useNavigate()
  const { fullName, phoneNumbers, department, staffId, id } = props
  const { ar, en } = fullName

  return (
    <UnstyledButton
      onClick={() => navigate(`/employees/${id}`)}
      w="100%"
      sx={{
        transition: 'box-shadow 150ms ease, transform 100ms ease',
        '&:hover': {
          boxShadow: theme.shadows.md,
        },
      }}
    >
      <Card
        withBorder
        sx={{
          transition: 'border 150ms ease, transform 100ms ease',

          '&:hover': {
            borderColor: theme.colors.blue[4],
          },
        }}
      >
        <Group noWrap align="center">
          <Avatar color="blue" size={50} radius="md">
            {getNameInitials(en)}
          </Avatar>
          <div>
            <Text fz="md" tt="uppercase" fw={500} c="dimmed" lh={1}>
              {en}
            </Text>

            <Text fz="md" fw={500} lh={1}>
              {ar}
            </Text>
          </div>
        </Group>

        <Flex direction="column" mt="md" gap={5}>
          <Group>
            <IconBuilding stroke={1.5} size="1rem" />
            <Text fz="xs" c="dimmed">
              {department}
            </Text>
          </Group>
          <Group>
            <List icon={<IconPhone color="black" stroke={1.5} size="1rem" />}>
              {phoneNumbers.map((number) => (
                <Text fz="xs" c="dimmed" key={number}>
                  <List.Item>{number}</List.Item>
                </Text>
              ))}
            </List>
          </Group>
          <Group>
            <IconId stroke={1.5} size="1rem" />
            <Text fz="xs" c="dimmed">
              {staffId}
            </Text>
          </Group>
        </Flex>
      </Card>
    </UnstyledButton>
  )
}
