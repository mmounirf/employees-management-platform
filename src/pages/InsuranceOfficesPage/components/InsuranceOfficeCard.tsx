import { useTheme } from '@emotion/react'
import { Card, Group, Stack, Text, UnstyledButton } from '@mantine/core'

import type { EditInsuranceOfficePayload } from '../../../api'

export const InsuranceOfficeCard = ({
  id,
  name,
  address,
  onClick,
}: EditInsuranceOfficePayload & { onClick: (insurnaceOffice: EditInsuranceOfficePayload) => void }) => {
  const theme = useTheme()
  const { en, ar } = name

  return (
    <UnstyledButton
      onClick={() => onClick({ name, id, address })}
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
        <Stack spacing={0}>
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
          <Group position="apart">
            <Text fz="xs" c="dimmed">
              State
            </Text>
            <Text align="right">{address.state}</Text>
          </Group>
          <Group position="apart">
            <Text fz="xs" c="dimmed">
              City
            </Text>
            <Text align="right">{address.city}</Text>
          </Group>
          <Group position="apart">
            <Text fz="xs" c="dimmed">
              Address 1
            </Text>
            <Text align="right">{address.address1}</Text>
          </Group>
          <Group position="apart">
            <Text fz="xs" c="dimmed">
              Address 2
            </Text>
            <Text align="right">{address.address2}</Text>
          </Group>
        </Stack>
      </Card>
    </UnstyledButton>
  )
}
