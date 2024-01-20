import { Button, Center, Container, Group, Paper, PasswordInput, Text, TextInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useLocalStorage } from '@mantine/hooks'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { USER_STORAGE_KEY } from '../../constants'
import { useAppSelector } from '../../store/hooks'

export const LoginPage = () => {
  const { token } = useAppSelector((state) => state.user)
  const [, setUser] = useLocalStorage<{ token: string }>({ key: USER_STORAGE_KEY })
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token, navigate])

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
  })

  const login = () => {
    const formValidation = form.validate()
    if (formValidation.hasErrors) {
      return
    }

    setUser({ token: btoa(`${form.values.username}|${form.values.password}`) })
  }

  return (
    <Container size={600} my={40} h="100vh">
      <Center h="100%">
        <Group position="center">
          <Title align="center" order={3}>
            <Text color="dimmed" size="md">
              Welcome back to
            </Text>
            London Trade Employee portal
          </Title>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md" w="100%">
            <TextInput
              required
              label="Username"
              placeholder="Your username"
              value={form.values.username}
              onChange={(event) => form.setFieldValue('username', event.currentTarget.value)}
              error={form.errors.username}
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password}
            />
            <Group position="apart" mt="lg"></Group>
            <Button fullWidth mt="xl" onClick={() => void login()}>
              Sign in
            </Button>
          </Paper>
        </Group>
      </Center>
    </Container>
  )
}
