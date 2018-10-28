import * as React from 'react'

import Drawer from '@material-ui/core/Drawer'

import { NavigationBar } from '@components/NavigationBar'
import { SideDrawer } from '@components/SideDrawer'

import { LocationConsumer } from '@contexts/Location'

interface State {
  drawer: boolean
}

export class NavigationBarContainer extends React.Component<{}, State> {
  state = {
    drawer: false,
  }

  toggleDrawer = (): void => {
    this.setState(prevState => ({
      drawer: !prevState.drawer,
    }))
  }

  render() {
    return (
      <LocationConsumer>
        {context => (
          <React.Fragment>
            <NavigationBar
              onMenuClick={this.toggleDrawer}
              location={context!.location}
            />
            <Drawer
              open={this.state.drawer}
              onClose={() => this.toggleDrawer()}
            >
              <div
                tabIndex={0}
                role="button"
                onClick={() => this.toggleDrawer}
                onKeyDown={() => this.toggleDrawer}
              >
                <SideDrawer closeDrawer={this.toggleDrawer} />
              </div>
            </Drawer>
          </React.Fragment>
        )}
      </LocationConsumer>
    )
  }
}
