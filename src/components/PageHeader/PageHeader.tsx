import { ActionIcon, Flex, Group, Paper, Text, Title, Tooltip } from '@mantine/core'
import { IconChevronLeft } from '@tabler/icons-react'
import { memo, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

type PageHeaderProps = {
  title: string | ReactNode
  subtitle: string
  showBackButton?: boolean
  actionButton?: ReactNode
}
export const PageHeader = memo(({ title, subtitle, showBackButton, actionButton }: PageHeaderProps) => {
  const navigate = useNavigate()

  const GoBackButton = () => (
    <Tooltip label="Go back">
      <ActionIcon size="sm" variant="light" color="primary" mr="md" onClick={() => navigate(-1)}>
        <IconChevronLeft />
      </ActionIcon>
    </Tooltip>
  )

  return (
    <Paper sx={{ position: 'sticky', top: 70, zIndex: 100 }} p="xs" shadow="md" radius="xs">
      <Group position="apart">
        <div>
          <Flex align="center">
            {showBackButton && <GoBackButton />}
            <div>
              <Title order={2} lh={1}>
                {title}
              </Title>
              <Text color="dimmed" size="xs">
                {subtitle}
              </Text>
            </div>
          </Flex>
        </div>
        {actionButton}
      </Group>
    </Paper>
  )
})
