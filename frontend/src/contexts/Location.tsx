import * as React from 'react'

import { RouteComponentProps, withRouter } from 'react-router-dom'

interface State {
  currentLocation: string
}

interface LocationContext {
  location: string
  setLocation?: (location: string) => void
}

const Location = React.createContext<LocationContext | null>(null)

export const LocationConsumer = Location.Consumer

export class LocationProviderDefault extends React.Component<
  RouteComponentProps,
  State
> {
  state = {
    currentLocation: 'Home',
  }

  setLocation = (location: string) => {
    this.setState({ currentLocation: location })
    this.props.history.push(location)
  }

  render() {
    return (
      <Location.Provider
        value={{
          setLocation: this.setLocation,
          location: this.state.currentLocation,
        }}
      >
        {this.props.children}
      </Location.Provider>
    )
  }
}

export const LocationProvider = withRouter(LocationProviderDefault)
