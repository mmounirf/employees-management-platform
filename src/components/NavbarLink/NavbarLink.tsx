import { Box, Collapse, Group, ThemeIcon, UnstyledButton } from '@mantine/core'
import { IconChevronRight, type Icon } from '@tabler/icons-react'
import { useState } from 'react'
import { matchPath, useLocation, useNavigate } from 'react-router-dom'

import { useStyles } from './styles'

export type SingleLink = {
  icon: Icon
  label: string
  link: string
}

export type GroupLinks = {
  icon: Icon
  label: string
  links: Array<{ label: string; link: string }>
}

export const NavbarLink = ({ label, icon: Icon, ...props }: SingleLink | GroupLinks) => {
  const { classes, cx } = useStyles()
  const hasLinks = 'links' in props
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isPathMatched = (link: string) => matchPath(link, pathname)
  const isChildLinkActive = (links: Array<{ label: string; link: string }>) =>
    links.find(({ link }) => isPathMatched(link))
  const [openGroup, setOpenGroup] = useState(hasLinks ? isChildLinkActive(props.links) : false)

  const childLinks = (hasLinks ? props.links : []).map(({ link, label }) => (
    <UnstyledButton
      key={label}
      onClick={() => navigate(link)}
      className={cx(classes.link, { [classes.activeLink]: isPathMatched(link) })}
    >
      {label}
    </UnstyledButton>
  ))

  const onLinkClick = () => (hasLinks ? setOpenGroup((isOpen) => !isOpen) : navigate(props.link))

  return (
    <>
      <UnstyledButton
        onClick={onLinkClick}
        className={cx(classes.control, { [classes.activeLink]: hasLinks ? false : isPathMatched(props.link) })}
      >
        <Group position="apart" spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30} color="blue">
              <Icon size={18} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              size={14}
              stroke={1.5}
              style={{
                transform: openGroup ? 'rotate(90deg)' : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={openGroup}>{childLinks}</Collapse> : null}
    </>
  )
}
