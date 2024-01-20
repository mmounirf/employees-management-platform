import { Stack, Text, ThemeIcon } from '@mantine/core'
import { IconMoodEmpty } from '@tabler/icons-react'

import type { ReactNode } from 'react'

type EmptyViewProps = {
  label: ReactNode
}

export const EmptyView = ({ label }: EmptyViewProps) => {
  return (
    <Stack align="center" justify="center" p="lg" spacing="xs">
      <ThemeIcon size="xl" radius="xl" variant="light">
        <IconMoodEmpty />
      </ThemeIcon>
      <Text color="dimmed" size="sm">
        {label}
      </Text>
    </Stack>
  )
}
