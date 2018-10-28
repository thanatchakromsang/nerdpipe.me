import * as React from 'react'
import styled from 'styled-components'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import UnstyledIconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Toolbar from '@material-ui/core/Toolbar'
import UnstyledTypography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuIcon from '@material-ui/icons/Menu'

interface NavigationBarProps extends LoggedInProps {
  auth?: boolean
  location?: string
  onMenuClick?: () => void
}

interface LoggedInProps {
  open?: boolean
  anchorEl?: HTMLElement
  handleOpen?: () => {}
  handleClose?: () => {}
}

const Wrapper = styled.div`
  flex-grow: 1;
`

const IconButton = styled(UnstyledIconButton)`
  margin-left: -12;
  margin-right: 20;
`

const Typography = styled(UnstyledTypography)`
  flex-grow: 1;
`

export const NavigationBar = ({
  auth,
  location,
  onMenuClick,
  ...props
}: NavigationBarProps): JSX.Element => {
  return (
    <Wrapper>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={() => onMenuClick!()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            {location}
          </Typography>
          {auth ? (
            <LoggedIn {...props} />
          ) : (
            <Button color="inherit">Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </Wrapper>
  )
}

interface LoggedInProps {
  open?: boolean
  anchorEl?: HTMLElement
  handleOpen?: () => {}
  handleClose?: () => {}
}

const LoggedIn = ({
  open = false,
  anchorEl,
  handleClose,
  handleOpen,
}: LoggedInProps): JSX.Element => {
  return (
    <div>
      <IconButton
        aria-owns={open ? 'menu-appbar' : undefined}
        aria-haspopup="true"
        onClick={handleOpen}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
      </Menu>
    </div>
  )
}
