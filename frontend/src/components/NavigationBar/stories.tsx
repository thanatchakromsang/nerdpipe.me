import * as React from 'react'

import { boolean } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'

import { NavigationBar } from '.'

storiesOf('Navigation bar', module)
  .addDecorator(story => <div style={{ width: 800 }}>{story()}</div>)
  .add('default', () => <NavigationBar onMenuClick={() => alert('default')} />)
  .add('with location', () => (
    <NavigationBar
      location={'Home'}
      onMenuClick={() => alert('with location')}
    />
  ))
  .add('authenticated', () => (
    <NavigationBar
      auth={true}
      open={boolean('open menu', false)}
      onMenuClick={() => alert('authenticated')}
    />
  ))
