import * as React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { storiesOf } from '@storybook/react'

import { LocationProvider } from '@contexts/Location'

import { NavigationBarContainer } from '.'

storiesOf('Navigation Bar Container', module)
  .addDecorator(story => <div style={{ width: 800 }}>{story()}</div>)
  .addDecorator(story => (
    <LocationProvider>
      <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    </LocationProvider>
  ))
  .add('default', () => <NavigationBarContainer />)
