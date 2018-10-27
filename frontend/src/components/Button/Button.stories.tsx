import * as React from 'react'

import { boolean, text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'

import { Button } from './Button'

storiesOf('Button', module).add('basic Button', () => (
  <Button
    label={text('label', 'Enroll')}
    disabled={boolean('disabled', false)}
    onClick={() => alert('hello world')}
  />
))
