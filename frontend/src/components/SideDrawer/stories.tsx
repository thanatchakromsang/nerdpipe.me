import * as React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { storiesOf } from '@storybook/react'

import { LocationProvider } from '@contexts/Location'

import { SideDrawer } from '.'

storiesOf('SideDrawer', module)
  .addDecorator(story => (
    <LocationProvider>
      <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    </LocationProvider>
  ))
  .add('default', () => (
    <SideDrawer closeDrawer={() => alert('Clicked')} />
  ))
