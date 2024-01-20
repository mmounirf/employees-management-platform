import { IconBuilding, IconHome, IconUsers } from '@tabler/icons-react'

import { NavbarLink, type GroupLinks, type SingleLink } from './NavbarLink'

const navbarLinks: Array<GroupLinks | SingleLink> = [
  { label: 'Dashboard', icon: IconHome, link: '/dashboard' },
  { label: 'Employees', icon: IconUsers, link: '/employees' },
  { label: 'Departments', icon: IconBuilding, link: '/departments' },
  // {
  //   label: 'Employees',
  //   icon: IconUsers,
  //   links: [
  //     { label: 'List all', link: '/employees' },
  //     { label: 'Create new', link: '/employees/new' },
  //     { label: 'Schema', link: '/employees/schema' },
  //   ],
  // },
]

export const NavbarLinks = () => {
  const links = navbarLinks.map((navbarLink) => <NavbarLink key={navbarLink.label} {...navbarLink} />)

  return <>{links}</>
}
