import * as React from 'react'
import styled from 'styled-components'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'

import { LocationConsumer } from '@contexts/Location'

const Wrapper = styled.div`
  width: 250px;
`

interface Props {
  closeDrawer: () => void
}

export const SideDrawer = ({ closeDrawer }: Props): JSX.Element => {
  return (
    <LocationConsumer>
      {context => (
        <Wrapper>
          <List>
            <ListItem
              button
              key={'Home'}
              onClick={() => {
                closeDrawer!()
                context!.setLocation!('Hello')
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>
            <ListItem
              button
              key={'About'}
              onClick={() => {
                closeDrawer!()
                context!.setLocation!('About')
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={'About'} />
            </ListItem>
          </List>
        </Wrapper>
      )}
    </LocationConsumer>
  )
}
