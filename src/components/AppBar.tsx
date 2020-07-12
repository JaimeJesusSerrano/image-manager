import React from 'react'
import {
  AppBar as MaterialAppBar,
  Toolbar,
  Typography,
} from '@material-ui/core'
import BurstModeIcon from '@material-ui/icons/BurstMode'
import styled from 'styled-components'

const AppBar = () => {
  return (
    <MaterialAppBar position="static">
      <Toolbar>
        <SBurstModeIcon />
        <Typography variant="h6">Image Manager</Typography>
      </Toolbar>
    </MaterialAppBar>
  )
}

const SBurstModeIcon = styled(BurstModeIcon)`
  margin-right: ${(props) => props.theme.spacing(2)}px;
`

export default AppBar
