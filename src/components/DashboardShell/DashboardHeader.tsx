import { Burger, Flex, Header, Image, useMantineColorScheme, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import logoWhite from '../../assets/logo-white.svg'
import logo from '../../assets/logo.svg'

import UserMenu from './UserMenu'

type DashboardHeaderProps = {
  navbarOpen: boolean
  onBurgerMenuClick: () => void
}

export const DashboardHeader = ({ onBurgerMenuClick, navbarOpen }: DashboardHeaderProps) => {
  const theme = useMantineTheme()
  const isSmallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`, true, {
    getInitialValueInEffect: false,
  })
  const { colorScheme } = useMantineColorScheme()

  const dark = colorScheme === 'dark'

  return (
    <Header height={{ base: 70 }}>
      <Flex
        justify="space-between"
        align="center"
        wrap="nowrap"
        sx={{ height: '100%', padding: `0 ${theme.spacing.md}` }}
      >
        <Flex justify="space-between" align="center" p={5}>
          <Burger
            hidden={!isSmallScreen}
            opened={navbarOpen}
            onClick={() => onBurgerMenuClick()}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
          <Image src={dark ? logoWhite : logo} width={100} />
        </Flex>
        <UserMenu />
      </Flex>
    </Header>
  )
}
