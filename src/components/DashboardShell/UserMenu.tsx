import {
  Avatar,
  Box,
  createStyles,
  Flex,
  Group,
  Menu,
  Switch,
  Text,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core'
import { useLocalStorage, useMediaQuery } from '@mantine/hooks'
import { IconChevronRight, IconLogout, IconMoonStars, IconSun } from '@tabler/icons-react'
import { useState } from 'react'

import { USER_STORAGE_KEY } from '../../constants'
import { useAppDispatch } from '../../store/hooks'
import { initialUserState, setUser } from '../../store/user.slice'

const useStyles = createStyles((theme) => ({
  userButton: {
    display: 'block',
    width: '100%',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
  },
}))

const UserMenu = () => {
  const [opened, setOpened] = useState(false)

  const appDispatch = useAppDispatch()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'
  const { classes, theme } = useStyles()
  const [, , removeStoredUser] = useLocalStorage({
    key: USER_STORAGE_KEY,
  })

  const onLogout = () => {
    removeStoredUser()
    appDispatch(setUser({ ...initialUserState, isInitialized: true }))
  }

  const isSmallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`, true, {
    getInitialValueInEffect: false,
  })

  return (
    <Group>
      <Menu withArrow shadow="md" width={200} offset={11} onChange={setOpened} withinPortal>
        <Menu.Target>
          <UnstyledButton className={classes.userButton}>
            <Group>
              <Avatar radius="xl" size="md" variant="light" color="primary">
                MM
              </Avatar>
              <Box hidden={isSmallScreen}>
                <Flex align="center" gap="sm">
                  <Flex direction="column">
                    <Text size="sm" weight={500} truncate maw={150}>
                      User Name
                    </Text>
                    <Text color="dimmed" size="xs" truncate maw={150}>
                      User Role
                    </Text>
                  </Flex>
                  <IconChevronRight
                    size={16}
                    style={{
                      transform: opened ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)` : 'none',
                      transition: 'transform 200ms ease',
                    }}
                  />
                </Flex>
              </Box>
            </Group>
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>{`Toggle ${dark ? 'light' : 'dark'} theme`}</Menu.Label>
          <Menu.Label>
            <Switch
              onChange={() => toggleColorScheme()}
              color="dark"
              onLabel={<IconSun size={16} stroke={2.5} color={theme.colors.yellow[4]} />}
              offLabel={<IconMoonStars size={16} stroke={2.5} color={theme.colors.blue[6]} />}
            />
          </Menu.Label>
          <Menu.Divider />

          <Menu.Item color="red" icon={<IconLogout size={14} />} onClick={() => onLogout()}>
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  )
}

export default UserMenu
