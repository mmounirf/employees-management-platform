import { Box, NavLink, ThemeIcon } from '@mantine/core'
import { IconBuilding, IconBuildingStore, IconHome, IconShieldCheck, IconUsers, type Icon } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom'

type LinkType = {
  icon: Icon
  label: string
  link: string
}

const navbarLinks: Array<LinkType> = [
  { label: 'Dashboard', icon: IconHome, link: '/dashboard' },
  { label: 'Employees', icon: IconUsers, link: '/employees' },
  { label: 'Departments', icon: IconBuilding, link: '/departments' },
  { label: 'Branches', icon: IconBuildingStore, link: '/branches' },
  { label: 'Insurance Offices', icon: IconShieldCheck, link: '/insurance-offices' },
]

export const NavigationMenu = () => {
  const location = useLocation()
  const [activePath, setActivePath] = useState('')

  useEffect(() => {
    setActivePath(location.pathname)
  }, [location])

  return (
    <Box>
      {navbarLinks.map(({ link, label, icon: Icon }) => {
        return (
          <NavLink
            key={link}
            color="primary"
            variant="light"
            icon={
              <ThemeIcon variant="light">
                <Icon stroke="1.5" size="1rem" />
              </ThemeIcon>
            }
            component={RouterNavLink}
            label={label}
            to={link}
            active={link === activePath}
          />
        )
      })}
    </Box>
  )
}
