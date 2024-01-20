import { Alert, Button, Code, Divider, Flex, Stack } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons-react'

type ErrorBoundaryProps = {
  error: Error
  componentStack: string
  resetError: () => void
}

export const ErrorBoundary = ({ error, componentStack, resetError }: ErrorBoundaryProps) => {
  return (
    <Flex direction="column" align="center" w="50%" gap="md" justify="center" m="0 auto">
      <Alert icon={<IconAlertCircle size={16} />} title="You have encountered an error!" color="red">
        There&apos;s an application error occured. Error has been reported instantly. We apologize for the
        inconvenience. By clicking on Reset button, we will clear the error message and reset the application to
        previous state before the error has been occured.
      </Alert>
      <Button fullWidth variant="light" onClick={() => resetError()}>
        Reset
      </Button>

      {import.meta.env.DEV && (
        <Stack>
          <Code color="red">{error.toString()}</Code>
          <Divider />
          <Code color="yellow">{componentStack}</Code>
        </Stack>
      )}
    </Flex>
  )
}
