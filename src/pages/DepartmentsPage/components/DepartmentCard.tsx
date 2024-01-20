import { useTheme } from '@emotion/react'
import { Card, Group, Stack, Text, UnstyledButton } from '@mantine/core'

import { EditDepartmentPayload } from '../../../api'

export const DepartmentCard = ({
  id,
  name,
  onClick,
}: EditDepartmentPayload & { onClick: (department: EditDepartmentPayload) => void }) => {
  const theme = useTheme()
  const { en, ar } = name

  return (
    <UnstyledButton
      onClick={() => onClick({ name, id })}
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
        <Stack>
          <Group position="apart">
            <Text fz="xs" c="dimmed">
              Name English
            </Text>
            <Text>{en}</Text>
          </Group>

          <Group position="apart">
            <Text fz="xs" c="dimmed">
              Name Arabic
            </Text>
            <Text align="right">{ar}</Text>
          </Group>
        </Stack>
      </Card>
    </UnstyledButton>
  )
}
